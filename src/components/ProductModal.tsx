import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Phone, CalendarCheck, Award } from 'lucide-react';
import { MenuItem } from '../data/menu';
import { BUSINESS_INFO } from '../data/business';
import { DishIllustration } from './AzulejoPattern';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function ProductModal({ item, onClose }: ProductModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1E1410]/75 backdrop-blur-sm"
          />

          {/* Tactile Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            className="relative z-10 w-full sm:max-w-lg surface-creme-3d rounded-t-[28px] sm:rounded-[26px] overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Image Header */}
            <div className="relative aspect-[16/10] bg-[#1E1410] shrink-0">
              {!imgError ? (
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2B1D17] to-[#1E1410] text-[#D48C2A]">
                  <DishIllustration type={item.illustrationType} className="w-16 h-16" />
                </div>
              )}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1E1410]/75 via-transparent to-[#1E1410]/30"
              />

              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar detalhes"
                className="absolute top-3.5 right-3.5 min-h-[44px] min-w-[44px] rounded-[16px] bg-[#1E1410]/85 hover:bg-[#1E1410] text-[#F7F1E5] border border-white/20 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D48C2A]"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="absolute bottom-3.5 left-4 flex items-center gap-2.5 text-[#F7F1E5]">
                <div className="w-10 h-10 rounded-xl bg-[#1E1410]/85 border border-[#D48C2A]/40 flex items-center justify-center text-[#D48C2A]">
                  <DishIllustration type={item.illustrationType} className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#F7F1E5]/90">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto">
              {item.awardBadge && (
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A83B24] mb-1.5">
                  <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{item.awardBadge}</span>
                </p>
              )}

              <h2
                id="product-modal-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1410]"
              >
                {item.name}
              </h2>

              {item.subtitle && (
                <p className="mt-1.5 text-sm font-semibold text-[#1B4B72]">
                  {item.subtitle}
                </p>
              )}

              {item.note && (
                <p className="mt-3 text-base text-[#1E1410]/80 leading-relaxed">
                  {item.note}
                </p>
              )}

              <div className="mt-5 pt-4 border-t border-[#1E1410]/10 text-xs text-[#1E1410]/65 leading-relaxed">
                Consulte opções do dia e atendimento diretamente no salão ou por telefone com a equipe do Boteco Maria.
              </div>

              {/* Actions */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/reservas"
                  onClick={onClose}
                  className="btn-3d-cobre px-4 py-3 min-h-[46px] inline-flex items-center justify-center gap-2 text-sm font-bold whitespace-nowrap"
                >
                  <CalendarCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Reservar Mesa</span>
                </Link>

                <a
                  href={BUSINESS_INFO.phone.href}
                  className="btn-3d-azulejo px-4 py-3 min-h-[46px] inline-flex items-center justify-center gap-2 text-sm font-bold whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className="font-mono tabular-nums">{BUSINESS_INFO.phone.display}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
