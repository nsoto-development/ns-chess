import type { CSSProperties } from 'react';
import { nsotoMarkCyan } from './ui/brandAssets';

const BRAND_URL = 'https://nsoto.dev/';

type BrandLinkProps = {
  style?: CSSProperties;
};

export function BrandLink({ style }: BrandLinkProps) {
  return (
    <a
      href={BRAND_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="nsoto.dev — portfolio home"
      className="group inline-flex flex-col items-center gap-1 rounded-sm opacity-100 outline-none transition-[opacity,box-shadow] duration-200 hover:opacity-90 focus-visible:shadow-[var(--glow-brand-sm)] lg:gap-2"
      style={{ textDecoration: 'none', ...style }}
    >
      <img
        src={nsotoMarkCyan}
        alt=""
        aria-hidden
        className="block h-7 w-auto transition-[filter] duration-200 group-hover:drop-shadow-[0_0_12px_color-mix(in_srgb,var(--brand)_45%,transparent)] lg:h-11"
        style={{
          filter:
            'drop-shadow(0 0 10px color-mix(in srgb, var(--brand) 22%, transparent))',
        }}
      />
      <span
        className="text-[length:var(--text-2xs)] font-semibold leading-none tracking-[var(--tracking-tight)] text-[var(--text-secondary)] lg:text-[length:var(--text-sm)]"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        nsoto<span style={{ color: 'var(--brand)' }}>.dev</span>
      </span>
    </a>
  );
}
