import { Logo } from './Logo';
import { type Page } from '@/shared/constants';

export function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#1a1a1a] px-6 py-16 text-white lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.3fr_1fr_1.2fr_1fr]">
        <div>
          <Logo light />
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-white/90">Company</h3>
          <div className="space-y-3 text-sm text-white/70">
            <button onClick={() => onNavigate('about')} className="block transition hover:text-[#e74608]">About Us</button>
            <button onClick={() => onNavigate('industries')} className="block transition hover:text-[#e74608]">Industries We Serve</button>
            <button className="block transition hover:text-[#e74608]">How We Work</button>
            <button onClick={() => onNavigate('contact')} className="block transition hover:text-[#e74608]">Contact Us</button>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-white/90">Services</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="transition hover:text-[#e74608]">Transportation & Freight</li>
            <li className="transition hover:text-[#e74608]">Fleet Management</li>
            <li className="transition hover:text-[#e74608]">Warehousing & Storage</li>
            <li className="transition hover:text-[#e74608]">Supply Chain Solutions</li>
            <li className="transition hover:text-[#e74608]">E-commerce Logistics</li>
            <li className="transition hover:text-[#e74608]">Last-Mile Delivery</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-white/90">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Address</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-8">
        <div className="flex flex-col justify-between gap-4 text-xs text-white/50 md:flex-row">
          <span>© 2026 Rayto Prolog. All rights reserved.</span>
          <div className="space-x-6">
            <span className="transition hover:text-white/70">Privacy Policy</span>
            <span className="transition hover:text-white/70">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
