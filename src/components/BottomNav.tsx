import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, UtensilsCrossed, CalendarCheck, Store } from 'lucide-react';
import { motion } from 'framer-motion';

const TAB_ITEMS = [
  { label: 'Início', to: '/', icon: Home },
  { label: 'Cardápio', to: '/cardapio', icon: UtensilsCrossed },
  { label: 'Reservas', to: '/reservas', icon: CalendarCheck },
  { label: 'A Casa', to: '/sobre', icon: Store },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Navegação mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1E1410]/95 backdrop-blur-md border-t border-[#D48C2A]/30 pb-safe shadow-[0_-10px_28px_rgba(15,9,7,0.45)]"
    >
      <div className="grid grid-cols-4 h-16 max-w-lg mx-auto px-1">
        {TAB_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className="relative flex flex-col items-center justify-center min-h-[44px] min-w-[44px] select-none focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#D48C2A]"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="mobile-tab-indicator"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full bg-[#D48C2A]"
                    />
                  )}
                  <Icon
                    className={`w-5 h-5 transition-transform duration-150 ${
                      isActive ? 'text-[#D48C2A] scale-110' : 'text-[#F7F1E5]/70'
                    }`}
                    strokeWidth={isActive ? 2.4 : 1.9}
                    aria-hidden="true"
                  />
                  <span
                    className={`mt-1 text-[11px] leading-none tracking-tight whitespace-nowrap ${
                      isActive
                        ? 'font-bold text-[#F7F1E5]'
                        : 'font-medium text-[#F7F1E5]/70'
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
