import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

const NAV_ITEMS = [
  { label: 'Início', to: '/' },
  { label: 'Cardápio', to: '/cardapio' },
  { label: 'Reservas', to: '/reservas' },
  { label: 'A Casa', to: '/sobre' },
];

export function Header() {
  return (
    <header className="bg-[#1E1410] text-[#F7F1E5] border-b border-[#D48C2A]/25 md:sticky md:top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          to="/"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F7F1E5] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D48C2A]"
        >
          {BUSINESS_INFO.name}
        </Link>

        {/* Zone 2: Single-line Primary Navigation Links (Desktop) */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D48C2A] ${
                  isActive
                    ? 'text-[#D48C2A]'
                    : 'text-[#F7F1E5]/85 hover:text-[#F7F1E5]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#D48C2A] rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single Primary Phone Call Action */}
        <div className="flex items-center shrink-0">
          <a
            href={BUSINESS_INFO.phone.href}
            aria-label={`Ligar para Boteco Maria: ${BUSINESS_INFO.phone.display}`}
            className="btn-3d-cobre inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[40px] text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F1E5]"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline font-mono tabular-nums">
              {BUSINESS_INFO.phone.display}
            </span>
            <span className="sm:hidden">Ligar</span>
          </a>
        </div>
      </div>
    </header>
  );
}
