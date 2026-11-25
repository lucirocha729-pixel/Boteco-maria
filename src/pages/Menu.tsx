import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { MENU_CATEGORIES, MENU_ITEMS, MenuCategory, MenuItem } from '../data/menu';

type FilterOption = 'Todos' | MenuCategory;

const FILTER_OPTIONS: FilterOption[] = ['Todos', ...MENU_CATEGORIES];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<FilterOption>('Todos');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Todos') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      <SectionTitle
        kicker="Cardápio Tradicional"
        title="Sabores do Boteco Maria"
        description="Explore nossas empadinhas premiadas, petiscos de balcão, pratos servidos no salão, feijoada de fim de semana e chopp cremoso."
      />

      {/* Interactive Category Filters */}
      <div
        role="tablist"
        aria-label="Categorias do cardápio"
        className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FILTER_OPTIONS.map((category) => {
          const isActive = activeCategory === category;
          const count =
            category === 'Todos'
              ? MENU_ITEMS.length
              : MENU_ITEMS.filter((i) => i.category === category).length;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2.5 min-h-[44px] rounded-[16px] text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4B72] ${
                isActive
                  ? 'text-[#F7F1E5]'
                  : 'bg-[#1E1410]/[0.06] text-[#1E1410]/80 hover:bg-[#1E1410]/[0.11] hover:text-[#1E1410]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="menu-category-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  className="absolute inset-0 rounded-[16px] bg-[#1E1410] shadow-[0_6px_16px_-4px_rgba(30,20,16,0.35)]"
                />
              )}
              <span className="relative z-10 inline-flex items-center gap-2">
                <span>{category}</span>
                <span
                  className={`font-mono tabular-nums text-xs ${
                    isActive ? 'text-[#D48C2A]' : 'text-[#1E1410]/50'
                  }`}
                >
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filteredItems.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onSelect={setSelectedItem}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="surface-creme-3d rounded-[24px] p-10 text-center">
          <UtensilsCrossed className="w-10 h-10 text-[#A83B24] mx-auto mb-3" />
          <p className="font-serif text-xl font-bold text-[#1E1410]">
            Nenhum item nesta categoria
          </p>
        </div>
      )}

      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </motion.div>
  );
}
