import { Logo } from './Logo';
import { type Page } from '@/shared/constants';

export function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#191919] px-6 py-14 text-white lg:px-12">
      <div className="mx-auto grid max-w-[1160px] gap-12 md:grid-cols-[1.3fr_1fr_1.2fr_1fr]">
        <Logo light />

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase">Company</h3>
          <div className="space-y-3 text-sm text-white/70">
            <button onClick={() => onNavigate('about')} className="block hover:text-white">About Us</button>
            <button onClick={() => onNavigate('industries')} className="block hover:text-white">Industries We Serve</button>
            <button className="block">How We Work</button>
            <button onClick={() => onNavigate('contact')} className="block hover:text-white">Contact Us</button>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase">Services</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Transportation & Freight</li>
            <li>Fleet Management</li>
            <li>Warehousing & Storage</li>
            <li>Supply Chain Solutions</li>
            <li>E-commerce Logistics</li>
            <li>Last-Mile Delivery</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-bold uppercase">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Address</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1160px] justify-between border-t border-white/15 pt-5 text-xs text-white/50">
        <span>© 2026 Rayto Prolog. All rights reserved.</span>
        <span>Privacy Policy&nbsp;&nbsp; Terms</span>
      </div>
    </footer>
  );
}
