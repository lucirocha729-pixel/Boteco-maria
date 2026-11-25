import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Info,
  Minus,
  Phone,
  PhoneCall,
  Plus,
  Users,
  Armchair,
} from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { BUSINESS_INFO, getReservationTimeSlots, getScheduleForDay } from '../data/business';

type TablePreference = 'Mesa Interna' | 'Mesa Externa';

function getTodayIsoSaoPaulo(): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(new Date());
}

function formatDatePtBr(dateIso: string): string {
  if (!dateIso) return 'Data não selecionada';
  const [y, m, d] = dateIso.split('-').map(Number);
  if (!y || !m || !d) return dateIso;
  const dateObj = new Date(y, m - 1, d);
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dateObj);
}

export function Reservations() {
  const todayIso = useMemo(() => getTodayIsoSaoPaulo(), []);
  const [date, setDate] = useState<string>(todayIso);
  const availableSlots = useMemo(() => getReservationTimeSlots(date), [date]);
  const [time, setTime] = useState<string>(() => availableSlots[0] ?? '19:00');
  const [guests, setGuests] = useState<number>(4);
  const [tablePreference, setTablePreference] = useState<TablePreference>('Mesa Interna');
  const [callTriggered, setCallTriggered] = useState(false);

  // Keep selected time aligned with the chosen day's schedule
  useEffect(() => {
    if (availableSlots.length > 0 && !availableSlots.includes(time)) {
      const preferred = availableSlots.includes('19:00') ? '19:00' : availableSlots[0];
      setTime(preferred);
    }
  }, [availableSlots, time]);

  const selectedDaySchedule = useMemo(() => {
    const [y, m, d] = date.split('-').map(Number);
    if (!y || !m || !d) return getScheduleForDay(1);
    return getScheduleForDay(new Date(y, m - 1, d).getDay());
  }, [date]);

  const formattedDate = useMemo(() => formatDatePtBr(date), [date]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      <SectionTitle
        kicker="Atendimento Direto"
        title="Reservar Mesa"
        description="Organize sua preferência de data, horário, número de pessoas e ambiente. Para concluir, fale diretamente com nossa equipe pelo telefone."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Form */}
        <div className="lg:col-span-7 surface-creme-3d rounded-[24px] p-5 sm:p-8 space-y-7">
          {/* 1. Date */}
          <div>
            <label
              htmlFor="reservation-date"
              className="flex items-center gap-2 text-sm font-bold text-[#1E1410] mb-2.5"
            >
              <Calendar className="w-4 h-4 text-[#A83B24]" aria-hidden="true" />
              <span>1. Selecione a data</span>
            </label>
            <input
              id="reservation-date"
              type="date"
              min={todayIso}
              value={date}
              onChange={(e) => setDate(e.target.value || todayIso)}
              className="w-full min-h-[48px] px-4 py-3 rounded-[16px] bg-white border border-[#1E1410]/18 font-mono tabular-nums text-sm sm:text-base text-[#1E1410] focus:outline-none focus:ring-2 focus:ring-[#1B4B72]"
            />
            <p className="mt-2 text-xs text-[#1E1410]/70">
              Funcionamento previsto para {selectedDaySchedule.label}:{' '}
              <span className="font-mono tabular-nums font-semibold text-[#1B4B72]">
                {selectedDaySchedule.openTime} às {selectedDaySchedule.closeTime}
              </span>
            </p>
          </div>

          {/* 2. Time */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <label
                htmlFor="reservation-time"
                className="flex items-center gap-2 text-sm font-bold text-[#1E1410]"
              >
                <Clock className="w-4 h-4 text-[#A83B24]" aria-hidden="true" />
                <span>2. Selecione o horário</span>
              </label>
              <span className="font-mono tabular-nums text-xs text-[#1E1410]/65">
                {time}
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {availableSlots.map((slot) => {
                const active = time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`min-h-[44px] px-2 py-2 rounded-[14px] font-mono tabular-nums text-xs sm:text-sm font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4B72] ${
                      active
                        ? 'bg-[#1E1410] text-[#D48C2A] shadow-md'
                        : 'bg-white border border-[#1E1410]/14 text-[#1E1410] hover:border-[#D48C2A]'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Guests */}
          <div>
            <span className="flex items-center gap-2 text-sm font-bold text-[#1E1410] mb-2.5">
              <Users className="w-4 h-4 text-[#A83B24]" aria-hidden="true" />
              <span>3. Quantidade de pessoas</span>
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center rounded-[16px] bg-white border border-[#1E1410]/15 p-1">
                <button
                  type="button"
                  aria-label="Diminuir quantidade de pessoas"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[#1E1410] hover:bg-[#1E1410]/8 cursor-pointer"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="w-16 text-center font-mono tabular-nums text-lg font-bold text-[#1E1410]">
                  {guests}
                </span>
                <button
                  type="button"
                  aria-label="Aumentar quantidade de pessoas"
                  onClick={() => setGuests((g) => Math.min(30, g + 1))}
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[#1E1410] hover:bg-[#1E1410]/8 cursor-pointer"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                {[2, 4, 6, 8].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setGuests(preset)}
                    className={`min-h-[44px] px-3.5 rounded-[14px] font-mono tabular-nums text-xs sm:text-sm font-semibold cursor-pointer transition-colors ${
                      guests === preset
                        ? 'bg-[#1B4B72] text-[#F7F1E5]'
                        : 'bg-white border border-[#1E1410]/14 text-[#1E1410] hover:border-[#1B4B72]'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Table Preference */}
          <div>
            <span className="flex items-center gap-2 text-sm font-bold text-[#1E1410] mb-2.5">
              <Armchair className="w-4 h-4 text-[#A83B24]" aria-hidden="true" />
              <span>4. Preferência de mesa</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(['Mesa Interna', 'Mesa Externa'] as TablePreference[]).map((pref) => {
                const active = tablePreference === pref;
                return (
                  <button
                    key={pref}
                    type="button"
                    onClick={() => setTablePreference(pref)}
                    className={`min-h-[52px] px-4 py-3 rounded-[16px] text-left font-semibold text-sm transition-all cursor-pointer border ${
                      active
                        ? 'bg-[#1E1410] text-[#F7F1E5] border-[#1E1410] shadow-md'
                        : 'bg-white text-[#1E1410] border-[#1E1410]/15 hover:border-[#D48C2A]'
                    }`}
                  >
                    <span className="block">{pref}</span>
                    <span
                      className={`block text-xs mt-0.5 font-normal ${
                        active ? 'text-[#D48C2A]' : 'text-[#1E1410]/60'
                      }`}
                    >
                      {pref === 'Mesa Interna'
                        ? 'Salão tradicional e balcão'
                        : 'Área aberta e calçada'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Summary & Direct Call RESERVAR Button */}
        <div className="lg:col-span-5 surface-wood-3d text-[#F7F1E5] rounded-[24px] p-6 sm:p-8 space-y-6 lg:sticky lg:top-24">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#D48C2A]">
              Resumo da solicitação
            </p>
            <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-[#F7F1E5]">
              Sua mesa no Boteco Maria
            </h2>
          </div>

          <dl className="divide-y divide-white/12 text-sm">
            <div className="py-3 flex items-baseline justify-between gap-4">
              <dt className="text-[#F7F1E5]/70">Data</dt>
              <dd className="font-medium text-right capitalize text-[#F7F1E5]">
                {formattedDate}
              </dd>
            </div>
            <div className="py-3 flex items-baseline justify-between gap-4">
              <dt className="text-[#F7F1E5]/70">Horário</dt>
              <dd className="font-mono tabular-nums font-bold text-[#D48C2A]">
                {time}
              </dd>
            </div>
            <div className="py-3 flex items-baseline justify-between gap-4">
              <dt className="text-[#F7F1E5]/70">Pessoas</dt>
              <dd className="font-mono tabular-nums font-bold text-[#F7F1E5]">
                {guests} {guests === 1 ? 'pessoa' : 'pessoas'}
              </dd>
            </div>
            <div className="py-3 flex items-baseline justify-between gap-4">
              <dt className="text-[#F7F1E5]/70">Preferência</dt>
              <dd className="font-semibold text-[#F7F1E5]">{tablePreference}</dd>
            </div>
          </dl>

          <div className="rounded-2xl bg-white/[0.06] border border-white/12 p-4 flex items-start gap-3 text-xs text-[#F7F1E5]/85 leading-relaxed">
            <Info className="w-4 h-4 text-[#D48C2A] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              Este aplicativo não realiza confirmação automática. Ao tocar em{' '}
              <strong className="text-[#F7F1E5]">RESERVAR</strong>, será iniciada uma
              ligação direta para o Boteco Maria para confirmação com a equipe da casa.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.phone.href}
            onClick={() => setCallTriggered(true)}
            className="btn-3d-cobre w-full px-6 py-4 min-h-[54px] inline-flex items-center justify-center gap-3 text-base font-bold tracking-wide"
          >
            <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>RESERVAR</span>
          </a>

          <p className="text-center text-xs font-mono tabular-nums text-[#F7F1E5]/70">
            Atendimento telefônico: {BUSINESS_INFO.phone.display}
          </p>

          {callTriggered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-[#1B4B72] border border-white/20 p-4 flex items-start gap-3 text-xs text-[#F7F1E5]"
            >
              <PhoneCall className="w-4 h-4 text-[#D48C2A] shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                Ligação para <span className="font-mono tabular-nums font-bold">{BUSINESS_INFO.phone.display}</span>{' '}
                acionada. Informe os dados do resumo acima ao atendente para confirmar sua mesa diretamente com o estabelecimento.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
