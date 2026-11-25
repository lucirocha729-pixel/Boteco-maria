import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionTitleProps {
  kicker?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionTo?: string;
  dark?: boolean;
}

export function SectionTitle({
  kicker,
  title,
  description,
  actionLabel,
  actionTo,
  dark = false,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div className="max-w-2xl">
        {kicker && (
          <p
            className={`text-xs font-mono tracking-wider uppercase mb-2 ${
              dark ? 'text-[#D48C2A]' : 'text-[#A83B24]'
            }`}
          >
            {kicker}
          </p>
        )}
        <h2
          className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] ${
            dark ? 'text-[#F7F1E5]' : 'text-[#1E1410]'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-2.5 text-base leading-relaxed ${
              dark ? 'text-[#F7F1E5]/80' : 'text-[#1E1410]/75'
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className={`inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors min-h-[44px] px-1 ${
            dark
              ? 'text-[#D48C2A] hover:text-[#F7F1E5]'
              : 'text-[#1B4B72] hover:text-[#A83B24]'
          }`}
        >
          <span>{actionLabel}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
