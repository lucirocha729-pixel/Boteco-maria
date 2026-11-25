import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  CalendarCheck,
  Clock,
  MapPin,
  Star,
  UtensilsCrossed,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { HERO_IMAGE } from '../data/menu';
import { useOpeningStatus } from '../hooks/useOpeningStatus';
import { AzulejoTileIcon } from './AzulejoPattern';

export function Hero() {
  const status = useOpeningStatus();
  const [imgError, setImgError] = useState(false);

  return (
    <section className="surface-wood text-[#F7F1E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Brand Identity, Status & 3 Primary Shortcuts */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            <div>
              {/* Unboxed editorial metadata line */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#D48C2A] font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <AzulejoTileIcon className="w-4 h-4 text-[#D48C2A]" />
                  <span>{BUSINESS_INFO.category}</span>
                </span>
                <span aria-hidden="true" className="text-[#F7F1E5]/35">
                  ·
                </span>
                <span className="font-mono tabular-nums text-[#F7F1E5]/80">
                  Desde {BUSINESS_INFO.foundedYear}
                </span>
              </div>

              {/* Typographic Logo & Main Headline */}
              <p className="mt-4 font-serif text-lg sm:text-xl italic text-[#D48C2A] tracking-wide">
                {BUSINESS_INFO.name}
              </p>
              <h1 className="mt-1 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-[#F7F1E5]">
                {BUSINESS_INFO.tagline}
              </h1>

              {/* Live Opening Status + Recognition Strip (No pills, crisp tactile plaques) */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
                <div className="surface-wood-3d rounded-2xl px-4 py-3.5 flex items-start gap-3">
                  {status.isOpen ? (
                    <CheckCircle2
                      className="w-5 h-5 text-[#D48C2A] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <XCircle
                      className="w-5 h-5 text-[#E07A5F] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#F7F1E5]">
                      {status.statusLabel}
                    </p>
                    <p className="mt-0.5 text-xs font-mono tabular-nums text-[#F7F1E5]/75">
                      {status.detailLabel}
                    </p>
                  </div>
                </div>

                <div className="surface-azulejo-3d rounded-2xl px-4 py-3.5 flex items-start gap-3">
                  <Award
                    className="w-5 h-5 text-[#F7F1E5] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#F7F1E5]">
                      {BUSINESS_INFO.recognition.veja}
                    </p>
                    <p className="mt-0.5 text-xs text-[#F7F1E5]/85 flex items-center gap-1.5">
                      <Star
                        className="w-3.5 h-3.5 text-[#D48C2A] fill-[#D48C2A] shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-mono tabular-nums font-semibold">
                        {BUSINESS_INFO.recognition.googleRating}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">
                        {BUSINESS_INFO.recognition.googleReviewsCount}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Mandatory Primary Shortcuts */}
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Link
                  to="/reservas"
                  className="btn-3d-cobre px-5 py-3.5 min-h-[48px] inline-flex items-center justify-center gap-2.5 text-sm font-bold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F1E5]"
                >
                  <CalendarCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Reservar Mesa</span>
                </Link>

                <Link
                  to="/cardapio"
                  className="btn-3d-terracota px-5 py-3.5 min-h-[48px] inline-flex items-center justify-center gap-2.5 text-sm font-bold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F1E5]"
                >
                  <UtensilsCrossed className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Ver Cardápio</span>
                </Link>

                <a
                  href={BUSINESS_INFO.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-azulejo px-5 py-3.5 min-h-[48px] inline-flex items-center justify-center gap-2.5 text-sm font-bold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F1E5]"
                >
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Como Chegar</span>
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#F7F1E5]/70">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D48C2A]" aria-hidden="true" />
                  <span>{BUSINESS_INFO.address.full}</span>
                </span>
                <span aria-hidden="true" className="hidden sm:inline">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono tabular-nums">
                  <Clock className="w-3.5 h-3.5 text-[#D48C2A]" aria-hidden="true" />
                  <span>Horário de São Paulo: {status.currentTimeFormatted}</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Tactile Framed Atmosphere Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="surface-wood-3d rounded-3xl p-2.5 w-full flex flex-col">
              <div className="relative rounded-[18px] overflow-hidden flex-1 min-h-[240px] sm:min-h-[300px] lg:min-h-full bg-[#2A1C16]">
                {!imgError ? (
                  <img
                    src={HERO_IMAGE}
                    alt="Salão tradicional do Boteco Maria com balcão de madeira, azulejos azuis e luminárias de cobre"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#2B1D17] via-[#1E1410] to-[#1B4B72]/40">
                    <AzulejoTileIcon className="w-12 h-12 text-[#D48C2A] mb-3" />
                    <p className="font-serif text-xl font-bold text-[#F7F1E5]">
                      {BUSINESS_INFO.name}
                    </p>
                    <p className="text-xs text-[#F7F1E5]/70 mt-1">
                      Jardim · Santo André - SP
                    </p>
                  </div>
                )}

                {/* Measured scrim for crisp legible bottom overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#1E1410]/90 via-[#1E1410]/25 to-transparent"
                />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#D48C2A]">
                    Tradição no Jardim · Santo André
                  </p>
                  <p className="mt-1 font-serif text-lg sm:text-xl font-bold text-[#F7F1E5]">
                    Empadinhas premiadas, petiscos e chopp cremoso
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
