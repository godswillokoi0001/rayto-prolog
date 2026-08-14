import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Industries } from '@/pages/Industries';
import { Contact } from '@/pages/Contact';
import { type Page } from '@/shared/constants';

function App() {
  const [page, setPage] = useState<Page>(
    () => (window.location.hash.replace('#/', '') as Page) || 'home',
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', `#/${page}`);
  }, [page]);

  const navigate = (next: Page) => setPage(next);

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header page={page} onNavigate={navigate} />
      <main>
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'about' && <About onNavigate={navigate} />}
        {page === 'services' && <Services onNavigate={navigate} />}
        {page === 'industries' && <Industries onNavigate={navigate} />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
