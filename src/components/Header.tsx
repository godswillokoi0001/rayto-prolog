import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems, type Page } from '@/shared/constants';

export function Header({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 lg:px-10">
        <button onClick={() => onNavigate('home')} aria-label="Rayto Prolog home">
          <Logo />
        </button>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-[13px] font-medium transition-colors hover:text-[#e74608] ${
                page === item.page ? 'text-[#e74608]' : 'text-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate('contact')}
          className="hidden rounded-md bg-[#e74608] px-5 py-3 text-[12px] font-bold text-white shadow-sm transition hover:bg-[#c93804] md:block"
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
