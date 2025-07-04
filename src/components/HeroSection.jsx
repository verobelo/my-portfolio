import { translations } from './logic/translations';
import Typewriter from './Typewriter';

export default function HeroSection({ language }) {
  const translation = translations[language].hero;
  return (
    <section
      aria-label='Hero'
      className='flex flex-col items-center md:items-start 2xl:items-center justify-center sm:flex-row gap-4 lg:justify-evenly pt-4 lg:pt-0 sm:mt-2 lg:mt-0'>
      <div className='rounded-full overflow-hidden w-40 h-40 2xl:w-50 2xl:h-50 shrink-0 md:self-start'>
        <img src='test-image (copy).png' alt='profile image' loading='lazy' />
      </div>
      <div className='flex flex-col items-center gap-2 flex-1 min-w-0'>
        <h1 className='text-3xl xsm:text-4xl xl:text-5xl text-center leading-snug'>
          <span>👋 </span>
          <span className='relative'>
            <span
              data-aos='brush-reveal'
              className='absolute -inset-0.5 block -skew-y-3 bg-accent'
              aria-hidden='true'></span>
            <span className='relative text-background'>
              {translation.title}
            </span>
          </span>
        </h1>
        <p className='text-2xl xl:text-3xl text-center max-w-[65ch] 2xl:max-w-[40ch]'>
          <Typewriter
            key={`intro1-${language}`}
            text={translation.intro1}
            delay={40}
            startDelay={0}
          />
          <Typewriter
            key={`highlighted-${language}`}
            text={translation.highlighted}
            delay={40}
            startDelay={translation.intro1.length * 40}
            className='underline decoration-accent font-semibold'
          />
          <Typewriter
            key={`intro2-${language}`}
            text={translation.intro2}
            delay={40}
            startDelay={
              (translation.intro1.length + translation.highlighted.length) * 40
            }
          />
        </p>
      </div>
    </section>
  );
}
