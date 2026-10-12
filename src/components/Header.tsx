import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems, type Page } from '@/shared/constants';

export function Header({ page, onNavigate }: { page: Page; onNavigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]' : ''
      } bg-white`}
    >
      <div
        className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-24 lg:px-20"
      >
        <button
          onClick={() => onNavigate('home')}
          aria-label="Rayto Prolog home"
          className="flex shrink-0 items-center [&>img]:h-[35px]"
        >
          <Logo />
        </button>

        <nav className="hidden items-center gap-6 xl:flex xl:gap-[50px]">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-[15px] font-medium transition-colors ${
                page === item.page ? 'text-[#e74608]' : 'text-[#292828] hover:text-[#e74608]'
              }`}
              style={{ fontSize: '18px', lineHeight: '30px' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate('contact')}
          className="hidden min-h-[60px] shrink-0 rounded-[12px] bg-[#d44300] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#bd3b00] xl:inline-flex xl:items-center xl:justify-center xl:px-7"
        >
          Request Quote
        </button>

        <button
          className="xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 xl:hidden">
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
