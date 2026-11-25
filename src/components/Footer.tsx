import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, Facebook, Globe } from 'lucide-react';
import { BUSINESS_INFO, GROUPED_HOURS } from '../data/business';
import { AzulejoDivider } from './AzulejoPattern';

export function Footer() {
  return (
    <footer className="surface-wood text-[#F7F1E5]">
      <AzulejoDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-serif text-2xl font-bold text-[#F7F1E5]">
              {BUSINESS_INFO.name}
            </p>
            <p className="mt-1 text-sm text-[#D48C2A] font-medium">
              {BUSINESS_INFO.category}
            </p>
            <p className="mt-3 text-sm text-[#F7F1E5]/75 leading-relaxed max-w-xs">
              {BUSINESS_INFO.tagline}. Tradição em Santo André desde{' '}
              <span className="font-mono tabular-nums">{BUSINESS_INFO.foundedYear}</span>.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-[#F7F1E5] mb-3">
              Horários de Funcionamento
            </h3>
            <dl className="space-y-1.5 text-sm">
              {GROUPED_HOURS.map((row) => (
                <div key={row.days} className="flex items-baseline justify-between gap-4 max-w-xs">
                  <dt className="text-[#F7F1E5]/80">{row.days}</dt>
                  <dd className="font-mono tabular-nums text-[#D48C2A]">{row.hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-[#F7F1E5]/60">
              {BUSINESS_INFO.hoursNotice}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-[#F7F1E5] mb-3">
              Endereço e Contato
            </h3>
            <div className="space-y-2.5 text-sm text-[#F7F1E5]/85">
              <a
                href={BUSINESS_INFO.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#D48C2A] transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#D48C2A]" aria-hidden="true" />
                <span>{BUSINESS_INFO.address.full}</span>
              </a>
              <a
                href={BUSINESS_INFO.phone.href}
                className="flex items-center gap-2.5 hover:text-[#D48C2A] transition-colors font-mono tabular-nums"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#D48C2A]" aria-hidden="true" />
                <span>{BUSINESS_INFO.phone.display}</span>
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[16px] bg-white/8 hover:bg-white/14 text-xs font-medium text-[#F7F1E5] transition-colors min-h-[40px]"
              >
                <Instagram className="w-4 h-4 text-[#D48C2A]" aria-hidden="true" />
                <span>{BUSINESS_INFO.links.instagramHandle}</span>
              </a>
              <a
                href={BUSINESS_INFO.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[16px] bg-white/8 hover:bg-white/14 text-xs font-medium text-[#F7F1E5] transition-colors min-h-[40px]"
              >
                <Facebook className="w-4 h-4 text-[#D48C2A]" aria-hidden="true" />
                <span>{BUSINESS_INFO.links.facebookHandle}</span>
              </a>
              <a
                href={BUSINESS_INFO.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[16px] bg-white/8 hover:bg-white/14 text-xs font-medium text-[#F7F1E5] transition-colors min-h-[40px]"
              >
                <Globe className="w-4 h-4 text-[#D48C2A]" aria-hidden="true" />
                <span>Site Oficial</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F7F1E5]/60">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name} · Jardim, Santo André - SP
          </p>
          <div className="flex items-center gap-5">
            <Link to="/" className="hover:text-[#F7F1E5] transition-colors">
              Início
            </Link>
            <Link to="/cardapio" className="hover:text-[#F7F1E5] transition-colors">
              Cardápio
            </Link>
            <Link to="/reservas" className="hover:text-[#F7F1E5] transition-colors">
              Reservas
            </Link>
            <Link to="/sobre" className="hover:text-[#F7F1E5] transition-colors">
              A Casa
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
