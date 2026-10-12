import { Logo } from './Logo';
import { type Page } from '@/shared/constants';

export function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#1a1a1a] px-5 py-12 text-white sm:px-6 lg:px-20 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.1fr_0.8fr] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1 [&>img]:h-[51px]">
          <Logo light />
        </div>

        <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0">
          <h3 className="mb-4 text-sm font-semibold uppercase text-white lg:text-2xl lg:leading-8">Company</h3>
          <div className="space-y-1 text-sm text-white/85 lg:text-2xl lg:leading-8">
            <button onClick={() => onNavigate('about')} className="block min-h-0 w-full text-left transition before:mr-2 before:content-['•'] hover:text-[#f7a35c]">About Us</button>
            <button onClick={() => onNavigate('industries')} className="block min-h-0 w-full text-left transition before:mr-2 before:content-['•'] hover:text-[#f7a35c]">Industries We Serve</button>
            <button onClick={() => onNavigate('home')} className="block min-h-0 w-full text-left transition before:mr-2 before:content-['•'] hover:text-[#f7a35c]">How We Work</button>
            <button onClick={() => onNavigate('contact')} className="block min-h-0 w-full text-left transition before:mr-2 before:content-['•'] hover:text-[#f7a35c]">Contact Us</button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0">
          <h3 className="mb-4 text-sm font-semibold uppercase text-white lg:text-2xl lg:leading-8">Services</h3>
          <ul className="list-disc space-y-1 pl-4 text-sm leading-6 text-white/85 lg:pl-6 lg:text-2xl lg:leading-8">
            <li className="transition hover:text-[#f7a35c]">Transportation &amp; Freight</li>
            <li className="transition hover:text-[#f7a35c]">Fleet Management</li>
            <li className="transition hover:text-[#f7a35c]">Warehousing &amp; Storage</li>
            <li className="transition hover:text-[#f7a35c]">Supply Chain Solutions</li>
            <li className="transition hover:text-[#f7a35c]">E-commerce Logistics</li>
            <li className="transition hover:text-[#f7a35c]">Last-Mile Delivery</li>
          </ul>
        </div>

        <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0">
          <h3 className="mb-4 text-sm font-semibold uppercase text-white lg:text-2xl lg:leading-8">Contact</h3>
          <ul className="list-disc space-y-1 pl-4 text-sm leading-6 text-white/85 lg:pl-6 lg:text-2xl lg:leading-8">
            <li>Address</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1280px] border-t border-white/10 pt-7 sm:mt-12">
        <div className="flex flex-col gap-4 text-xs leading-5 text-white/70 sm:flex-row sm:items-center sm:justify-between lg:text-base lg:leading-8">
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
