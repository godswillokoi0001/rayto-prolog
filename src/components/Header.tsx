import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems, type Page } from '@/shared/constants';

export function Header({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button onClick={() => onNavigate('home')} aria-label="Rayto Prolog home">
          <Logo />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors ${
                page === item.page ? 'text-[#e74608]' : 'text-slate-900 hover:text-[#e74608]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate('contact')}
          className="hidden rounded-lg bg-[#e74608] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#d63f04] md:block"
        >
          Request Quote
        </button>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                setOpen(false);
              }}
              className="block w-full border-b border-slate-100 py-3 text-left text-sm font-semibold last:border-0"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
