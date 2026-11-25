import React from 'react';
import { MenuItem } from '../data/menu';

export function AzulejoTileIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M16 5L19.5 12.5L27 16L19.5 19.5L16 27L12.5 19.5L5 16L12.5 12.5L16 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function AzulejoDivider({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3 w-full azulejo-strip border-y border-[#10304C]/30 ${className}`}
    />
  );
}

export function DishIllustration({
  type,
  className = 'w-12 h-12',
}: {
  type: MenuItem['illustrationType'];
  className?: string;
}) {
  switch (type) {
    case 'empadinha':
      return (
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
          <path
            d="M14 34L19 50H45L50 34H14Z"
            fill="#D48C2A"
            fillOpacity="0.22"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M11 34C11 26.5 20.5 22 32 22C43.5 22 53 26.5 53 34H11Z"
            fill="#D48C2A"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M25 27C27.5 25 36.5 25 39 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'chopp':
    case 'cerveja':
      return (
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
          <path
            d="M19 20H41L38.5 52H21.5L19 20Z"
            fill="#D48C2A"
            fillOpacity="0.28"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M41 25H46.5C48.5 25 50 26.5 50 28.5V39.5C50 41.5 48.5 43 46.5 43H39.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M18 20C18 15.5 21.5 13 25 14C27 11.5 33 11.5 35 14C38.5 13 42 15.5 42 20H18Z"
            fill="currentColor"
            fillOpacity="0.16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'drink':
      return (
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
          <path
            d="M15 16H49L32 36L15 16Z"
            fill="#A83B24"
            fillOpacity="0.22"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M32 36V51M23 51H41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="43" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'feijoada':
    case 'rechaud':
      return (
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
          <path
            d="M13 30H51C51 42 43 49 32 49C21 49 13 42 13 30Z"
            fill="#A83B24"
            fillOpacity="0.24"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M10 30H54" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path
            d="M24 23C24 19 26 17 26 14M32 23C32 19 34 17 34 14M40 23C40 19 42 17 42 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
          <ellipse
            cx="32"
            cy="37"
            rx="21"
            ry="11"
            fill="#D48C2A"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <ellipse cx="32" cy="37" rx="13" ry="6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M24 22C26 18 38 18 40 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}
