import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems, type Page } from '@/shared/constants';

export function Header({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#edf0f2] backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-6">
        <button onClick={() => onNavigate('home')} aria-label="Rayto Prolog home" className="flex items-center">
          <Logo />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-[15px] font-medium transition-colors ${
                page === item.page ? 'text-[#e74608]' : 'text-slate-900 hover:text-[#e74608]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate('contact')}
          className="hidden h-[46px] rounded-[12px] bg-[#e74608] px-5 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#d63f04] md:inline-flex md:items-center md:justify-center"
        >
          Request
          <span className="ml-1.5">Quote</span>
        </button>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                setOpen(false);
              }}
              className="block w-full border-b border-slate-100 py-3 text-left text-sm font-semibold text-slate-900 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
