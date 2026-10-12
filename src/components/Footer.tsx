import { Logo } from './Logo';
import { type Page } from '@/shared/constants';

export function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="flex flex-col items-center gap-6 bg-[#1a1a1a] px-5 py-12 text-white sm:px-6 lg:px-20 lg:py-20">
      <div className="flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 lg:px-8 lg:py-2.5">
        <div className="flex w-full flex-col items-start gap-[59px] p-2.5 lg:w-[320px] lg:shrink-0">
          <Logo light className="h-[51px] w-[289px] object-contain" />
        </div>

        <div className="flex w-full flex-col items-start gap-4 p-2.5 lg:flex-1">
          <h3 className="text-sm font-semibold uppercase leading-6 text-white lg:text-2xl lg:leading-8">Company</h3>
          <button onClick={() => onNavigate('about')} className="block w-full text-left text-sm font-normal leading-6 text-[#ededed] transition hover:text-[#f7a35c] lg:text-2xl lg:leading-8">About Us</button>
          <button onClick={() => onNavigate('industries')} className="block w-full text-left text-sm font-normal leading-6 text-[#ededed] transition hover:text-[#f7a35c] lg:text-2xl lg:leading-8">Industries We Serve</button>
          <button onClick={() => onNavigate('home')} className="block w-full text-left text-sm font-normal leading-6 text-[#ededed] transition hover:text-[#f7a35c] lg:text-2xl lg:leading-8">How We Work</button>
          <button onClick={() => onNavigate('contact')} className="block w-full text-left text-sm font-normal leading-6 text-[#ededed] transition hover:text-[#f7a35c] lg:text-2xl lg:leading-8">Contact Us</button>
        </div>

        <div className="flex w-full flex-col items-start gap-4 p-2.5 lg:flex-1">
          <h3 className="text-sm font-semibold uppercase leading-6 text-white lg:text-2xl lg:leading-8">Services</h3>
          <ul className="flex w-full flex-col gap-4 text-sm font-normal leading-6 text-[#ededed] lg:text-2xl lg:leading-8">
            <li className="transition hover:text-[#f7a35c]">Transportation &amp; Freight</li>
            <li className="transition hover:text-[#f7a35c]">Fleet Management</li>
            <li className="transition hover:text-[#f7a35c]">Warehousing &amp; Storage</li>
            <li className="transition hover:text-[#f7a35c]">Supply Chain Solutions</li>
            <li className="transition hover:text-[#f7a35c]">E-commerce Logistics</li>
            <li className="transition hover:text-[#f7a35c]">Last-Mile Delivery</li>
            <li className="transition hover:text-[#f7a35c]">Corporate Logistics Support</li>
          </ul>
        </div>

        <div className="flex w-full flex-col items-start gap-4 p-2.5 lg:w-[222px] lg:shrink-0">
          <h3 className="text-sm font-semibold uppercase leading-6 text-white lg:text-2xl lg:leading-8">Contact</h3>
          <ul className="flex w-full flex-col gap-4 text-sm font-normal leading-6 text-[#ededed] lg:text-2xl lg:leading-8">
            <li>Abuja, Nigeria</li>
            <li>
              <a href="tel:+2348036492744" className="transition hover:text-[#f7a35c]">
                08036492744
              </a>
            </li>
            <li>
              <a href="mailto:info@raytoprolog.com" className="transition hover:text-[#f7a35c]">
                info@raytoprolog.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full max-w-[1280px] flex-col justify-between gap-6 border-t border-[#d8d8d8]/38 px-2.5 py-8 sm:flex-row sm:items-start">
        <span className="text-xs font-normal leading-5 text-[#ededed] lg:text-2xl lg:leading-8">© 2026 Rayto Prolog. All rights reserved.</span>
        <div className="flex gap-6 text-xs font-normal leading-5 text-[#ededed] lg:text-2xl lg:leading-8">
          <span className="transition hover:text-[#f7a35c]">Privacy Policy</span>
          <span className="transition hover:text-[#f7a35c]">Terms</span>
        </div>
      </div>
    </footer>
  );
}
