import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems, type Page } from '@/shared/constants';

export function Header({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 backdrop-blur-sm ${
        page === 'home' ? 'bg-white' : 'bg-[#edf0f2]'
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 ${
          page === 'home' ? 'h-20 lg:h-24 lg:px-20' : 'h-16 lg:px-6'
        }`}
      >
        <button
          onClick={() => onNavigate('home')}
          aria-label="Rayto Prolog home"
          className={`flex shrink-0 items-center ${page === 'home' ? '[&>img]:h-[35px]' : ''}`}
        >
          <Logo />
        </button>

        <nav className={`hidden items-center ${page === 'home' ? 'xl:flex xl:gap-[50px]' : 'md:flex md:gap-8'}`}>
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-[15px] font-medium transition-colors ${
                page === item.page && page !== 'home'
                  ? 'text-[#e74608]'
                  : 'text-[#292828] hover:text-[#e74608]'
              }`}
              style={page === 'home' ? { fontSize: '18px', lineHeight: '30px' } : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate('contact')}
          className={`hidden shrink-0 rounded-[12px] bg-[#d44300] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#bd3b00] ${
            page === 'home'
              ? 'min-h-[60px] text-base xl:inline-flex xl:items-center xl:justify-center xl:px-7'
              : 'min-h-12 text-sm md:inline-flex md:items-center md:justify-center'
          }`}
        >
          Request Quote
        </button>

        <button
          className={page === 'home' ? 'xl:hidden' : 'md:hidden'}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className={`border-t border-slate-200 bg-white px-5 py-3 ${page === 'home' ? 'xl:hidden' : 'md:hidden'}`}>
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
