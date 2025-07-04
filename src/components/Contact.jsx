import Linkedin from '../svg/Linkedin';
import Github from '../svg/GitHub';
import Gmail from '../svg/Gmail';
import { useState } from 'react';
import { CopyCheck } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { translations } from './logic/translations';

export default function Contact({ language }) {
  const [isCopied, setIsCopied] = useState(false);
  const translation = translations[language].contact;

  const notify = () => {
    toast.success(translation.toast);
  };

  function copyToClipboard() {
    const email = 'v.belozerova.dev@gmail.com';
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    notify();
  }

  const isLargeScreen = window.innerWidth >= 1024;

  return (
    <section id='contact' aria-label='Contact me' className='flex-col'>
      <h2 className='uppercase pt-4 pb-3 font-semibold text-base sm:text-lg tracking-wide text-background'>
        <span className='relative'>
          <span
            {...(!isLargeScreen && { 'data-aos': 'brush-reveal' })}
            className='absolute -inset-0.5 block -skew-y-3 bg-accent'
            aria-hidden='true'></span>
          <span className='relative'>{translation.title}</span>
        </span>
      </h2>
      <ul className='flex items-center justify-evenly gap-6 sm:gap-8 mt-2'>
        <li>
          <button
            type='button'
            aria-label='Copy email address'
            onClick={copyToClipboard}
            className='flex items-center'
            disabled={isCopied}>
            {isCopied ? (
              <CopyCheck color='#bbbaa6' size={28} />
            ) : (
              <div className='hover:scale-130 transition hover:cursor-pointer duration-200'>
                <Gmail />
              </div>
            )}
          </button>
        </li>
        <li>
          <a
            aria-label='Go to Linkedin profile (opens in a new tab)'
            href='https://www.linkedin.com/in/veronika-belozerova/'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='hover:scale-130 transition duration-200'>
              <Linkedin />
            </div>
          </a>
        </li>
        <li>
          <a
            aria-label='Go to GitHub profile (opens in a new tab)'
            href='https://github.com/verobelo'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='hover:scale-130 transition duration-200'>
              <Github fill='#0ae448' />
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
