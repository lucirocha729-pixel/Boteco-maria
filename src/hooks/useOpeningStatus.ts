import { useEffect, useState } from 'react';
import { DaySchedule, OPENING_HOURS, getScheduleForDay } from '../data/business';

export interface OpeningStatus {
  isOpen: boolean;
  statusLabel: 'Aberto agora' | 'Fechado no momento';
  detailLabel: string;
  currentDayIndex: number;
  currentTimeFormatted: string;
  todaySchedule: DaySchedule;
}

function getSaoPauloTimeParts(date: Date): {
  dayIndex: number;
  hours: number;
  minutes: number;
  formattedTime: string;
} {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const weekdayStr = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
  const hourPart = Number(parts.find((p) => p.type === 'hour')?.value ?? '0');
  const minutePart = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const hours = hourPart === 24 ? 0 : hourPart;
  const dayIndex = weekdayMap[weekdayStr] ?? 1;
  const formattedTime = `${String(hours).padStart(2, '0')}h${String(minutePart).padStart(2, '0')}`;

  return { dayIndex, hours, minutes: minutePart, formattedTime };
}

export function calculateOpeningStatus(now: Date = new Date()): OpeningStatus {
  const { dayIndex, hours, minutes, formattedTime } = getSaoPauloTimeParts(now);
  const currentTotalMinutes = hours * 60 + minutes;

  const todaySchedule = getScheduleForDay(dayIndex);
  const prevDayIndex = (dayIndex + 6) % 7;
  const yesterdaySchedule = getScheduleForDay(prevDayIndex);

  // 1. Check if yesterday's shift crossed midnight and is still active right now
  if (yesterdaySchedule.crossesMidnight && currentTotalMinutes < yesterdaySchedule.closeMinutes) {
    return {
      isOpen: true,
      statusLabel: 'Aberto agora',
      detailLabel: `Atendimento até ${yesterdaySchedule.closeTime}`,
      currentDayIndex: dayIndex,
      currentTimeFormatted: formattedTime,
      todaySchedule,
    };
  }

  // 2. Check if today's shift is currently open
  const isTodayOpen = todaySchedule.crossesMidnight
    ? currentTotalMinutes >= todaySchedule.openMinutes
    : currentTotalMinutes >= todaySchedule.openMinutes &&
      currentTotalMinutes < todaySchedule.closeMinutes;

  if (isTodayOpen) {
    return {
      isOpen: true,
      statusLabel: 'Aberto agora',
      detailLabel: `Fecha às ${todaySchedule.closeTime}`,
      currentDayIndex: dayIndex,
      currentTimeFormatted: formattedTime,
      todaySchedule,
    };
  }

  // 3. Closed right now: determine when it opens next
  if (currentTotalMinutes < todaySchedule.openMinutes) {
    return {
      isOpen: false,
      statusLabel: 'Fechado no momento',
      detailLabel: `Abre hoje às ${todaySchedule.openTime}`,
      currentDayIndex: dayIndex,
      currentTimeFormatted: formattedTime,
      todaySchedule,
    };
  }

  const tomorrowIndex = (dayIndex + 1) % 7;
  const tomorrowSchedule =
    OPENING_HOURS.find((s) => s.dayIndex === tomorrowIndex) ?? OPENING_HOURS[0];

  return {
    isOpen: false,
    statusLabel: 'Fechado no momento',
    detailLabel: `Abre ${tomorrowSchedule.shortLabel.toLowerCase()} às ${tomorrowSchedule.openTime}`,
    currentDayIndex: dayIndex,
    currentTimeFormatted: formattedTime,
    todaySchedule,
  };
}

export function useOpeningStatus(): OpeningStatus {
  const [status, setStatus] = useState<OpeningStatus>(() => calculateOpeningStatus());

  useEffect(() => {
    const update = () => setStatus(calculateOpeningStatus(new Date()));
    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return status;
}
