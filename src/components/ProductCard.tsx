import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import { MenuItem } from '../data/menu';
import { DishIllustration } from './AzulejoPattern';

interface ProductCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export function ProductCard({ item, onSelect }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="surface-creme-3d rounded-[22px] p-3 w-full h-full text-left flex flex-col group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4B72]"
      >
        {/* 4:3 Image Slot */}
        <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden bg-[#1E1410] border border-[#1E1410]/10">
          {!imgError ? (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2B1D17] to-[#1E1410] text-[#D48C2A] p-4">
              <DishIllustration type={item.illustrationType} className="w-14 h-14" />
              <span className="mt-2 text-xs font-medium text-[#F7F1E5]/80 text-center">
                {item.name}
              </span>
            </div>
          )}

          {/* Subtle dish stamp in corner */}
          <div className="absolute top-2.5 right-2.5 w-9 h-9 rounded-xl bg-[#1E1410]/80 backdrop-blur-sm border border-white/15 flex items-center justify-center text-[#D48C2A]">
            <DishIllustration type={item.illustrationType} className="w-6 h-6" />
          </div>
        </div>

        {/* Clean Unboxed Card Content */}
        <div className="pt-3.5 px-1.5 pb-1.5 flex-1 flex flex-col justify-between gap-3">
          <div>
            <p className="text-xs font-mono text-[#1B4B72] font-medium">
              {item.category}
            </p>
            <h3 className="mt-1 font-serif text-xl font-bold text-[#1E1410] leading-snug group-hover:text-[#A83B24] transition-colors">
              {item.name}
            </h3>
            {item.subtitle && (
              <p className="mt-1 text-sm text-[#1E1410]/70 leading-relaxed">
                {item.subtitle}
              </p>
            )}
          </div>

          <div className="pt-2.5 border-t border-[#1E1410]/10 flex items-center justify-between gap-2 text-xs font-semibold">
            {item.awardBadge ? (
              <span className="inline-flex items-center gap-1.5 text-[#A83B24]">
                <Award className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{item.awardBadge}</span>
              </span>
            ) : (
              <span className="text-[#1E1410]/60">Especialidade da casa</span>
            )}
            <span className="inline-flex items-center gap-1 text-[#1B4B72] group-hover:translate-x-0.5 transition-transform whitespace-nowrap shrink-0">
              <span>Detalhes</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
