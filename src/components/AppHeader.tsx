import { BrandLink } from './BrandLink';

const REPO_URL = 'https://github.com/nsoto-development/ns-chess';

export function AppHeader() {
  return (
    <header
      className="inline-flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-3 shadow-[var(--shadow-card)] lg:gap-5 lg:px-6 lg:py-4"
    >
      <BrandLink />

      <span
        aria-hidden
        className="h-5 w-px shrink-0 bg-[var(--border-default)] lg:h-7"
      />

      <div className="flex flex-col gap-1 lg:gap-2">
        <span
          className="text-[length:var(--text-2xs)] font-medium uppercase leading-none tracking-[var(--tracking-widest)] text-[var(--text-tertiary)] lg:text-[length:var(--text-xs)]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {'</ product >'}
        </span>
        <h1
          className="m-0 text-[length:var(--text-lg)] font-semibold leading-none tracking-[var(--tracking-tight)] lg:text-[length:var(--text-2xl)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] no-underline transition-[color,opacity] duration-200 hover:text-[var(--brand)] hover:opacity-90 focus-visible:rounded-sm focus-visible:shadow-[var(--glow-brand-sm)]"
          >
            ns-chess
          </a>
        </h1>
      </div>
    </header>
  );
}
