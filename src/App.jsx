import Header from './components/Header';
import Main from './components/Main';
import { ToastContainer, Bounce } from 'react-toastify';
import ScrollToTop from 'react-scroll-to-top';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState('en');

  const divRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!divRef.current) return;
      const { clientX, clientY } = e;
      const scrollTop = window.scrollY || window.pageYOffset;
      divRef.current.style.setProperty('--x', `${clientX}px`);
      divRef.current.style.setProperty('--y', `${clientY + scrollTop}px`);
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        backgroundImage:
          'radial-gradient(300px at var(--x) var(--y), rgba(10, 228, 72, 0.07) 0%, transparent 100%)',
      }}>
      <div
        className='  
  text-text
    min-h-[100svh]
    grid
    p-4
    md:px-7
    lg:px-6
    lg:py-0
    lg:grid-cols-[auto_1fr]
    lg:gap-4 
    lg:min-h-screen
    xl:mx-auto
        '>
        <aside
          className='
        hidden
        xl:w-[350px]
        2xl:w-[400px]
        lg:flex 
        lg:flex-col 
        lg:py-10 
        lg:border-r 
        lg:border-dashed 
        lg:border-highlight 
        lg:sticky 
        lg:top-0 
        lg:max-h-screen'>
          <Header language={language} setLanguage={setLanguage} />
          <Contact language={language} />
        </aside>

        <div className='lg:pt-6 lg:pb-0 lg:pl-6 lg:pr-3 xl:pt-10 xl:px-20 2xl:px-28'>
          <Main>
            <div className='lg:hidden'>
              <Header language={language} setLanguage={setLanguage} />
            </div>
            <HeroSection language={language} />
            <Experience language={language} />
            <Projects language={language} />
            <About language={language} />
            <div className='lg:hidden'>
              <Contact language={language} />
            </div>
          </Main>
          <Footer language={language} />

          <ToastContainer
            position='top-right'
            autoClose={2000}
            hideProgressBar
            transition={Bounce}
            icon={false}
            toastClassName={() =>
              'bg-accent font-general w-full lg:w-[260px] p-1 lg:p-3 text-center text-lg'
            }
            bodyClassName='text-sm'
          />

          <ScrollToTop
            aria-label='Scroll to Top'
            smooth
            color='#0ae448'
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              right: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
