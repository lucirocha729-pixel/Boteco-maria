import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Clock,
  ExternalLink,
  Facebook,
  Globe,
  Instagram,
  MapPin,
  Phone,
  Star,
} from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { AzulejoTileIcon } from '../components/AzulejoPattern';
import { BUSINESS_INFO, GROUPED_HOURS } from '../data/business';
import { useOpeningStatus } from '../hooks/useOpeningStatus';

export function About() {
  const status = useOpeningStatus();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12"
    >
      {/* Institutional Story */}
      <section>
        <SectionTitle
          kicker={`Desde ${BUSINESS_INFO.foundedYear} · Santo André`}
          title="A Casa: Boteco Maria"
          description="Bar, Petiscaria e Botequim Tradicional construído para oferecer o sabor de se sentir em casa."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 surface-creme-3d rounded-[24px] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4 text-base text-[#1E1410]/85 leading-relaxed">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1B4B72] font-semibold">
                <AzulejoTileIcon className="w-4 h-4" />
                <span>História desde 2008</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1410]">
                Tradição de botequim no coração do bairro Jardim
              </h3>
              <p>
                Inaugurado em <strong className="font-mono tabular-nums text-[#1E1410]">2008</strong>, o{' '}
                <strong className="text-[#1E1410]">Boteco Maria</strong> consolidou-se em Santo André como ponto de encontro para quem valoriza o clima acolhedor de botequim tradicional aliado ao cuidado com a cozinha e o serviço de bar.
              </p>
              <p>
                Entre os destaques que atravessam gerações de clientes estão as{' '}
                <strong className="text-[#1E1410]">empadinhas premiadas</strong>, os petiscos clássicos servidos no balcão e nas mesas, a feijoada na cumbuca aos fins de semana e o chopp sempre tirado com cremosidade.
              </p>
            </div>

            <div className="pt-5 border-t border-[#1E1410]/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#1B4B72]/[0.07] border border-[#1B4B72]/15 p-4">
                <Award className="w-5 h-5 text-[#1B4B72] mb-2" aria-hidden="true" />
                <p className="font-serif font-bold text-base text-[#1E1410]">
                  Revista Veja ABC
                </p>
                <p className="mt-1 text-xs text-[#1E1410]/75 leading-relaxed">
                  Reconhecimento premiado pela Veja ABC, com destaque especial para as tradicionais empadinhas da casa.
                </p>
              </div>

              <div className="rounded-2xl bg-[#A83B24]/[0.07] border border-[#A83B24]/15 p-4">
                <Award className="w-5 h-5 text-[#A83B24] mb-2" aria-hidden="true" />
                <p className="font-serif font-bold text-base text-[#1E1410]">
                  Revista Gula / Diageo
                </p>
                <p className="mt-1 text-xs text-[#1E1410]/75 leading-relaxed">
                  Referência na Revista Gula / Diageo pela tradição de bar e atendimento de botequim.
                </p>
              </div>
            </div>
          </div>

          {/* Google Rating + Contact & Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="surface-azulejo-3d text-[#F7F1E5] rounded-[24px] p-6 sm:p-7">
              <p className="text-xs font-mono uppercase tracking-wider text-[#D48C2A]">
                Avaliação dos Clientes
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-mono tabular-nums text-4xl font-bold">
                  {BUSINESS_INFO.recognition.googleRating}
                </span>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? 'text-[#D48C2A] fill-[#D48C2A]'
                          : 'text-[#D48C2A]/60 fill-[#D48C2A]/40'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-1.5 text-sm text-[#F7F1E5]/90">
                Nota Google · {BUSINESS_INFO.recognition.googleReviewsCount}
              </p>
            </div>

            <div className="surface-creme-3d rounded-[24px] p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#A83B24] font-semibold">
                  Endereço Oficial
                </p>
                <p className="mt-2 font-serif text-xl font-bold text-[#1E1410] leading-snug">
                  {BUSINESS_INFO.address.street}
                </p>
                <p className="mt-1 text-sm text-[#1E1410]/75">
                  {BUSINESS_INFO.address.neighborhood}, {BUSINESS_INFO.address.city} -{' '}
                  {BUSINESS_INFO.address.state},{' '}
                  <span className="font-mono tabular-nums">{BUSINESS_INFO.address.zip}</span>
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={BUSINESS_INFO.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-azulejo w-full px-5 py-3.5 min-h-[48px] inline-flex items-center justify-center gap-2 text-sm font-bold"
                >
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" aria-hidden="true" />
                </a>

                <a
                  href={BUSINESS_INFO.phone.href}
                  className="btn-3d-cobre w-full px-5 py-3.5 min-h-[48px] inline-flex items-center justify-center gap-2 text-sm font-bold"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="font-mono tabular-nums">
                    Ligar {BUSINESS_INFO.phone.display}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Official Social Channels */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 surface-wood-3d text-[#F7F1E5] rounded-[24px] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#D48C2A]" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-bold">
                Horários de Funcionamento
              </h3>
            </div>
            <span className="font-mono tabular-nums text-xs px-3 py-1.5 rounded-xl bg-white/10 text-[#D48C2A]">
              {status.statusLabel} · {status.detailLabel}
            </span>
          </div>

          <dl className="divide-y divide-white/12">
            {GROUPED_HOURS.map((row) => {
              const isToday = row.dayIndexes.includes(status.currentDayIndex);
              return (
                <div
                  key={row.days}
                  className={`py-3.5 px-3 rounded-xl flex items-center justify-between gap-4 ${
                    isToday ? 'bg-[#D48C2A]/15' : ''
                  }`}
                >
                  <dt className="text-sm sm:text-base font-medium text-[#F7F1E5]">
                    {row.days}
                    {isToday && (
                      <span className="ml-2 text-xs font-mono text-[#D48C2A]">
                        (Hoje)
                      </span>
                    )}
                  </dt>
                  <dd className="font-mono tabular-nums text-sm sm:text-base font-semibold text-[#D48C2A]">
                    {row.hours}
                  </dd>
                </div>
              );
            })}
          </dl>

          <p className="mt-5 pt-4 border-t border-white/12 text-xs sm:text-sm text-[#F7F1E5]/75">
            {BUSINESS_INFO.hoursNotice}
          </p>
        </div>

        {/* Official Links */}
        <div className="lg:col-span-5 surface-creme-3d rounded-[24px] p-6 sm:p-8 flex flex-col justify-between gap-5">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#A83B24] font-semibold">
              Canais Oficiais
            </p>
            <h3 className="mt-1.5 font-serif text-2xl font-bold text-[#1E1410]">
              Acompanhe o Boteco Maria
            </h3>
            <p className="mt-2 text-sm text-[#1E1410]/75 leading-relaxed">
              Acesse nossas redes sociais e site oficial para acompanhar novidades da casa.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={BUSINESS_INFO.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-creme w-full px-4 py-3.5 min-h-[48px] flex items-center justify-between gap-3 text-sm font-semibold"
            >
              <span className="inline-flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#A83B24]" aria-hidden="true" />
                <span>Instagram · {BUSINESS_INFO.links.instagramHandle}</span>
              </span>
              <ExternalLink className="w-4 h-4 text-[#1E1410]/50" aria-hidden="true" />
            </a>

            <a
              href={BUSINESS_INFO.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-creme w-full px-4 py-3.5 min-h-[48px] flex items-center justify-between gap-3 text-sm font-semibold"
            >
              <span className="inline-flex items-center gap-3">
                <Facebook className="w-5 h-5 text-[#1B4B72]" aria-hidden="true" />
                <span>Facebook · {BUSINESS_INFO.links.facebookHandle}</span>
              </span>
              <ExternalLink className="w-4 h-4 text-[#1E1410]/50" aria-hidden="true" />
            </a>

            <a
              href={BUSINESS_INFO.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-creme w-full px-4 py-3.5 min-h-[48px] flex items-center justify-between gap-3 text-sm font-semibold"
            >
              <span className="inline-flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#D48C2A]" aria-hidden="true" />
                <span>{BUSINESS_INFO.links.websiteLabel}</span>
              </span>
              <ExternalLink className="w-4 h-4 text-[#1E1410]/50" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
