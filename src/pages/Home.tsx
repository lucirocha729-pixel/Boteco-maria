import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Phone,
  Star,
  UtensilsCrossed,
  Clock,
  MapPin,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { AzulejoDivider } from '../components/AzulejoPattern';
import { BUSINESS_INFO, GROUPED_HOURS } from '../data/business';
import { MENU_ITEMS, MenuItem } from '../data/menu';
import { useOpeningStatus } from '../hooks/useOpeningStatus';

export function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const status = useOpeningStatus();

  const featuredItems = MENU_ITEMS.filter((item) => item.featured);
  const empadinha = MENU_ITEMS.find((item) => item.id === 'empadinhas-premiadas') ?? MENU_ITEMS[0];

  const scrollCarousel = (direction: 'prev' | 'next') => {
    const el = carouselRef.current;
    if (!el) return;
    const step = Math.min(360, el.clientWidth * 0.85);
    el.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      <Hero />
      <AzulejoDivider />

      {/* Spotlight: Empadinhas Premiadas & Social Proof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 surface-creme-3d rounded-[24px] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#A83B24] font-semibold">
                Clássico desde 2008
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#1E1410] leading-tight">
                Empadinhas premiadas que são marca registrada da casa
              </h2>
              <p className="mt-3 text-base text-[#1E1410]/80 leading-relaxed max-w-2xl">
                Entre um chopp cremoso e a boa conversa de balcão, as empadinhas do Boteco Maria conquistaram o paladar do ABC e o reconhecimento da <strong className="font-semibold text-[#1E1410]">Revista Veja ABC</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-[#1E1410]/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#1B4B72] text-[#F7F1E5] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1E1410]">
                    {BUSINESS_INFO.recognition.veja}
                  </p>
                  <p className="text-xs text-[#1E1410]/70">
                    {BUSINESS_INFO.recognition.gulaDiageo}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(empadinha)}
                className="btn-3d-terracota px-5 py-3 min-h-[44px] inline-flex items-center justify-center gap-2 text-sm font-bold whitespace-nowrap cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Ver Empadinhas</span>
              </button>
            </div>
          </div>

          {/* Google Rating & Direct Call Card */}
          <div className="lg:col-span-5 surface-wood-3d text-[#F7F1E5] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#D48C2A]">
                Reconhecimento do público
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-mono tabular-nums text-4xl sm:text-5xl font-bold text-[#F7F1E5]">
                  {BUSINESS_INFO.recognition.googleRating}
                </span>
                <div className="flex items-center gap-1" aria-label="Avaliação 4,3 de 5 no Google">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < 4
                          ? 'text-[#D48C2A] fill-[#D48C2A]'
                          : 'text-[#D48C2A]/60 fill-[#D48C2A]/40'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-1.5 text-sm font-medium text-[#F7F1E5]/85">
                Nota no Google · {BUSINESS_INFO.recognition.googleReviewsCount}
              </p>
            </div>

            <div className="pt-5 border-t border-white/12 space-y-4">
              <p className="text-sm text-[#F7F1E5]/80 leading-relaxed">
                Quer garantir mesa ou tirar uma dúvida rápida? Fale diretamente com nossa equipe pelo telefone.
              </p>
              <a
                href={BUSINESS_INFO.phone.href}
                className="btn-3d-cobre w-full px-5 py-3.5 min-h-[48px] inline-flex items-center justify-center gap-2.5 text-sm font-bold whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="font-mono tabular-nums">
                  Ligar {BUSINESS_INFO.phone.display}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <SectionTitle
            kicker="Destaques do Balcão & Cozinha"
            title="Clássicos do Boteco Maria"
            description="Toque em qualquer item para ver os detalhes do cardápio tradicional."
          />

          <div className="flex items-center gap-2.5 self-start sm:self-end mb-2 sm:mb-8">
            <button
              type="button"
              onClick={() => scrollCarousel('prev')}
              aria-label="Produto anterior"
              className="btn-3d-creme w-11 h-11 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('next')}
              aria-label="Próximo produto"
              className="btn-3d-creme w-11 h-11 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <Link
              to="/cardapio"
              className="btn-3d-azulejo px-4 h-11 inline-flex items-center justify-center text-xs sm:text-sm font-bold whitespace-nowrap"
            >
              Ver Cardápio Completo
            </Link>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[82%] sm:w-[46%] lg:w-[31.5%]"
            >
              <ProductCard item={item} onSelect={setSelectedItem} />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Hours & Address Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="surface-creme-3d rounded-[24px] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1B4B72] font-semibold">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{status.statusLabel} · {status.detailLabel}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1E1410]">
              Esperamos você no Jardim, em Santo André
            </h3>
            <p className="text-sm text-[#1E1410]/75 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#A83B24] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{BUSINESS_INFO.address.full}</span>
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-2.5 text-xs">
            {GROUPED_HOURS.map((row) => (
              <div
                key={row.days}
                className="rounded-xl bg-[#1E1410]/[0.04] border border-[#1E1410]/10 px-3 py-2.5"
              >
                <p className="font-semibold text-[#1E1410]">{row.days}</p>
                <p className="mt-0.5 font-mono tabular-nums text-[#A83B24] font-medium">
                  {row.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </motion.div>
  );
}
