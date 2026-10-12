import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Industries } from '@/pages/Industries';
import { Contact } from '@/pages/Contact';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { type Page } from '@/shared/constants';
import { services } from '@/shared/services';

function getPageFromHash(): Page {
  return (window.location.hash.replace(/^#\/?/, '') || 'home') as Page;
}

function App() {
  const [page, setPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const syncPageWithHash = () => setPage(getPageFromHash());

    window.addEventListener('hashchange', syncPageWithHash);
    window.addEventListener('popstate', syncPageWithHash);

    return () => {
      window.removeEventListener('hashchange', syncPageWithHash);
      window.removeEventListener('popstate', syncPageWithHash);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const navigate = (next: Page) => {
    if (next === page) return;
    window.history.pushState(null, '', `#/${next}`);
    setPage(next);
  };

  const serviceSlug = page.startsWith('services/')
    ? page.slice('services/'.length)
    : null;
  const serviceExists = services.some(({ id }) => id === serviceSlug);
  const activePage = serviceSlug ? 'services' : page;

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header page={activePage} onNavigate={navigate} />
      <main>
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'about' && <About onNavigate={navigate} />}
        {page === 'services' && <Services onNavigate={navigate} />}
        {serviceExists && serviceSlug && (
          <ServiceDetail slug={serviceSlug} onNavigate={navigate} />
        )}
        {serviceSlug && !serviceExists && <Services onNavigate={navigate} />}
        {page === 'industries' && <Industries onNavigate={navigate} />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
