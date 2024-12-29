import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AssistantPlatform } from './pages/AssistantPlatform';
import { Pricing } from './pages/Pricing';
import { DetailedPricing } from './pages/DetailedPricing';
import { FAQ } from './pages/FAQ';
import { UseCases } from './pages/UseCases';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPost';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { NotFound } from './pages/NotFound';
import { ChatBot } from './components/ChatBot';
import { CostProvider } from './contexts/CostContext';
import { TokenPriceProvider } from './contexts/TokenPriceContext';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CostProvider>
        <TokenPriceProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plattform" element={<AssistantPlatform />} />
            <Route path="/anvandningsomraden" element={<UseCases />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/detailed" element={<DetailedPricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ChatBot />
        </div>
        </TokenPriceProvider>
      </CostProvider>
    </Router>
  );
}

export { App };