import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import ScrollTop from "./components/scroll-top";
import Skills from "./components/skills";
import WhatsAppChat from "./components/whatsapp-chat";
import { useLanguage } from "./i18n/language-provider";

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-espresso focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t.Nav.skip}
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ScrollTop />
      <WhatsAppChat />
    </>
  );
}
