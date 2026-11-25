export interface DaySchedule {
  dayIndex: number; // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  shortLabel: string;
  label: string;
  openTime: string;
  closeTime: string;
  openMinutes: number;
  closeMinutes: number;
  crossesMidnight: boolean;
}

export const BUSINESS_INFO = {
  name: 'Boteco Maria',
  tagline: 'O sabor de se sentir em casa',
  category: 'Bar, Petiscaria e Botequim Tradicional',
  foundedYear: 2008,
  address: {
    street: 'Av. Pe. Manuel da Nóbrega, 216',
    neighborhood: 'Jardim',
    city: 'Santo André',
    state: 'SP',
    zip: '09080-140',
    full: 'Av. Pe. Manuel da Nóbrega, 216 - Jardim, Santo André - SP, 09080-140',
  },
  phone: {
    display: '(11) 4437-1333',
    href: 'tel:+551144371333',
  },
  links: {
    website: 'http://www.botecomaria.com.br/',
    websiteLabel: 'www.botecomaria.com.br',
    instagram: 'https://www.instagram.com/botecomaria/',
    instagramHandle: '@botecomaria',
    facebook: 'https://www.facebook.com/BotecoMaria/',
    facebookHandle: '/BotecoMaria/',
    googleMaps:
      'https://www.google.com/maps/search/?api=1&query=Av.+Pe.+Manuel+da+N%C3%B3brega%2C+216+-+Jardim%2C+Santo+Andr%C3%A9+-+SP%2C+09080-140',
  },
  recognition: {
    veja: 'Premiado Veja ABC',
    gulaDiageo: 'Referência na Revista Gula / Diageo',
    googleRating: '4,3/5',
    googleReviewsCount: 'Mais de 2.600 avaliações',
  },
  hoursNotice: 'Horários sujeitos a confirmação diretamente com o estabelecimento.',
} as const;

export const OPENING_HOURS: DaySchedule[] = [
  {
    dayIndex: 1,
    shortLabel: 'Seg',
    label: 'Segunda-feira',
    openTime: '16h30',
    closeTime: '23h30',
    openMinutes: 16 * 60 + 30,
    closeMinutes: 23 * 60 + 30,
    crossesMidnight: false,
  },
  {
    dayIndex: 2,
    shortLabel: 'Ter',
    label: 'Terça-feira',
    openTime: '11h00',
    closeTime: '00h30',
    openMinutes: 11 * 60,
    closeMinutes: 30,
    crossesMidnight: true,
  },
  {
    dayIndex: 3,
    shortLabel: 'Qua',
    label: 'Quarta-feira',
    openTime: '11h00',
    closeTime: '00h30',
    openMinutes: 11 * 60,
    closeMinutes: 30,
    crossesMidnight: true,
  },
  {
    dayIndex: 4,
    shortLabel: 'Qui',
    label: 'Quinta-feira',
    openTime: '11h00',
    closeTime: '00h30',
    openMinutes: 11 * 60,
    closeMinutes: 30,
    crossesMidnight: true,
  },
  {
    dayIndex: 5,
    shortLabel: 'Sex',
    label: 'Sexta-feira',
    openTime: '11h00',
    closeTime: '01h00',
    openMinutes: 11 * 60,
    closeMinutes: 60,
    crossesMidnight: true,
  },
  {
    dayIndex: 6,
    shortLabel: 'Sáb',
    label: 'Sábado',
    openTime: '11h00',
    closeTime: '01h00',
    openMinutes: 11 * 60,
    closeMinutes: 60,
    crossesMidnight: true,
  },
  {
    dayIndex: 0,
    shortLabel: 'Dom',
    label: 'Domingo',
    openTime: '11h00',
    closeTime: '22h00',
    openMinutes: 11 * 60,
    closeMinutes: 22 * 60,
    crossesMidnight: false,
  },
];

export const GROUPED_HOURS = [
  { days: 'Segunda', hours: '16h30 às 23h30', dayIndexes: [1] },
  { days: 'Terça a Quinta', hours: '11h00 às 00h30', dayIndexes: [2, 3, 4] },
  { days: 'Sexta e Sábado', hours: '11h00 às 01h00', dayIndexes: [5, 6] },
  { days: 'Domingo', hours: '11h00 às 22h00', dayIndexes: [0] },
];

export function getScheduleForDay(dayIndex: number): DaySchedule {
  return OPENING_HOURS.find((d) => d.dayIndex === dayIndex) ?? OPENING_HOURS[0];
}

export function getReservationTimeSlots(dateIso: string): string[] {
  if (!dateIso) return [];
  const [year, month, day] = dateIso.split('-').map(Number);
  if (!year || !month || !day) return [];
  const dateObj = new Date(year, month - 1, day);
  const schedule = getScheduleForDay(dateObj.getDay());

  const startHour = Math.floor(schedule.openMinutes / 60);
  const startMin = schedule.openMinutes % 60;

  // Slots inside standard evening/day range (up to 22:30 or closing - 60m)
  const lastSlotTotalMinutes = schedule.crossesMidnight
    ? 23 * 60 + 30
    : Math.max(schedule.openMinutes, schedule.closeMinutes - 60);

  const slots: string[] = [];
  let cursor = startHour * 60 + startMin;

  while (cursor <= lastSlotTotalMinutes) {
    const h = Math.floor(cursor / 60);
    const m = cursor % 60;
    slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    cursor += 30;
  }

  return slots;
}
