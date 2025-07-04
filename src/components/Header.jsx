import { Code, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { translations } from './logic/translations';

export default function Header({ language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChosen, setIsChosen] = useState('');

  function handleChoose(href) {
    setIsChosen(href);
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleToggleLanguage() {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  }
  const translation = translations[language].nav;

  return (
    <header className='relative flex items-center justify-between lg:flex lg:flex-col lg:items-start lg:h-screen lg:justify-start lg:gap-10 '>
      <div className='flex items-center gap-1 xl:gap-3 lg:w-full lg:pr-6 xl:pr-0 xl:-ml-2'>
        <Code color='#0ae448' aria-label='logo' className='-mt-[4px]' />
        <p className='uppercase font-semibold font-display text-xs xxs:text-base xsm:text-lg xl:text-2xl'>
          <span className='text-accent'>Vero</span>nika{' '}
          <span className='text-accent'>Belo</span>zerova
        </p>
      </div>
      <div className='flex gap-2'>
        <button
          className='p-1 lg:mb-[-2rem] cursor-pointer uppercase tracking-wide text-xs sm:text-sm font-medium rounded-md border border-accent text-accent hover:bg-accent/10 transition-colors duration-200'
          onClick={handleToggleLanguage}>
          {language === 'en' ? 'Esp' : 'Eng'}
        </button>
        <button
          type='button'
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          className={`lg:hidden sm:p-2 bg-detail cursor-pointer ${
            isMenuOpen ? 'p-1' : 'p-1 rounded-lg'
          }`}
          onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {!isMenuOpen && (
        <nav className='hidden lg:block'>
          <ul className='flex gap-3 font-medium md:text-sm lg:flex lg:flex-col'>
            {[
              { href: '#experience', label: translation.experience },
              { href: '#projects', label: translation.projects },
              { href: '#about', label: translation.about },
              { href: '#contact', label: translation.contact },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleChoose(link.href);
                  }}
                  className={`group flex items-center py-3 ${
                    isChosen === link.href
                      ? 'text-highlight text-shadow-xs text-shadow-highlight'
                      : ''
                  } ${link.href === '#contact' ? 'hidden' : ''}`}>
                  <span
                    className={`mr-4 h-px w-8 bg-text/50 transition-all group-hover:w-16 group-hover:bg-text group-active:w-16 group-active:bg-text motion-reduce:transition-none ${
                      isChosen === link.href ? 'w-16' : ''
                    }`}
                  />
                  <span className='font-semibold uppercase tracking-widest  group-hover:text-highlight group-hover:text-shadow-xs group-hover:text-shadow-hightlight group-focus-visible:text-highlight'>
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {isMenuOpen && (
        <nav
          className='z-10 absolute top-full left-0 w-full lg:hidden border-t transition-all duration-200 shadow-md rounded-b-xl'
          id='mobile-menu'>
          <ul className='flex flex-col items-end gap-4 p-4 font-semibold sm:text-lg bg-background/80 backdrop-blur-sm'>
            <li>
              <a href='#experience'>{translation.experience}</a>
            </li>
            <li>
              <a href='#projects'>{translation.projects}</a>
            </li>
            <li>
              <a href='#about'>{translation.about}</a>
            </li>
            <li>
              <a href='#contact'>{translation.contact}</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
