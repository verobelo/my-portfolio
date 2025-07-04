import { CheckCheck } from 'lucide-react';
import { translations } from './logic/translations';

export default function About({ language }) {
  const translation = translations[language].about;
  return (
    <section id='about' aria-label='About Me' className='flex-col 2xl:pb-5'>
      <h2 className='uppercase pt-4 pb-3 font-semibold text-base sm:text-lg tracking-wide text-background'>
        <span className='relative'>
          <span
            data-aos='brush-reveal'
            className='absolute -inset-0.5 block -skew-y-3 bg-accent'
            aria-hidden='true'></span>
          <span className='relative'>{translation.title}</span>
        </span>
      </h2>
      <ul className='text-base flex flex-col gap-4 sm:text-lg leading-relaxed 2xl:items-center 2xl:border-l-4 2xl:border-gradient 2xl:pl-10'>
        <li className='flex gap-3'>
          <span data-aos='fade-right' aria-hidden='true'>
            <CheckCheck color='#0ae448' size={24} />
          </span>
          <p className='2xl:max-w-[75ch]'>
            {translation.factOne.intro1}
            <span className='text-highlight font-semibold'>
              {translation.factOne.highlighted1}
            </span>
            {translation.factOne.intro2}
          </p>
        </li>

        <li className='flex gap-3'>
          <span data-aos='fade-right' aria-hidden='true'>
            <CheckCheck color='#0ae448' size={20} />
          </span>
          <p className='2xl:max-w-[75ch]'>{translation.factTwo.description}</p>
        </li>

        <li className='flex gap-3'>
          <span data-aos='fade-right' aria-hidden='true'>
            <CheckCheck color='#0ae448' size={20} />
          </span>
          <p className='2xl:max-w-[75ch]'>
            {translation.factThree.intro1}
            <a
              href='https://www.theodinproject.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-highlight font-semibold'>
              The Odin Project
            </a>
            {translation.factThree.intro2}
            <span className='text-highlight font-semibold'>
              {translation.factThree.highlighted1}
            </span>
            {translation.factThree.intro3}
            <span className='text-highlight font-semibold'>
              {translation.factThree.highlighted2}
            </span>
            {translation.factThree.intro4}
          </p>
        </li>

        <li className='flex gap-3'>
          <span data-aos='fade-right' aria-hidden='true'>
            <CheckCheck color='#0ae448' size={20} />
          </span>
          <p className='2xl:max-w-[75ch]'>
            <span className='text-highlight font-semibold'>
              {translation.factFour.highlighted1}
            </span>
            {translation.factFour.intro1}
          </p>
        </li>
      </ul>
    </section>
  );
}
