import { Logo } from './Logo';
import { type Page } from '@/shared/constants';

export function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#171b22] px-4 py-10 text-white sm:px-6 lg:px-6 lg:py-12">
      <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr_1.1fr_0.8fr] lg:gap-10">
        <div>
          <Logo light />
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-white/80">Company</h3>
          <div className="space-y-3 text-sm text-white/70">
            <button onClick={() => onNavigate('about')} className="block transition hover:text-[#f7a35c]">About Us</button>
            <button onClick={() => onNavigate('industries')} className="block transition hover:text-[#f7a35c]">Industries We Serve</button>
            <button onClick={() => onNavigate('home')} className="block transition hover:text-[#f7a35c]">How We Work</button>
            <button onClick={() => onNavigate('contact')} className="block transition hover:text-[#f7a35c]">Contact Us</button>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-white/80">Services</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="transition hover:text-[#f7a35c]">Transportation &amp; Freight</li>
            <li className="transition hover:text-[#f7a35c]">Fleet Management</li>
            <li className="transition hover:text-[#f7a35c]">Warehousing &amp; Storage</li>
            <li className="transition hover:text-[#f7a35c]">Supply Chain Solutions</li>
            <li className="transition hover:text-[#f7a35c]">E-commerce Logistics</li>
            <li className="transition hover:text-[#f7a35c]">Last-Mile Delivery</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-white/80">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Address</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1200px] border-t border-white/10 pt-7">
        <div className="flex flex-col justify-between gap-3 text-xs text-white/50 md:flex-row md:items-center">
          <span>© 2026 Rayto Prolog. All rights reserved.</span>
          <div className="flex gap-5">
            <span className="transition hover:text-white/80">Privacy Policy</span>
            <span className="transition hover:text-white/80">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
