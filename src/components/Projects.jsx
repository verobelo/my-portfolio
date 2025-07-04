import { ArrowUpRight } from 'lucide-react';
import GitHub from '../svg/GitHub';
import { translations } from './logic/translations';

export default function Projects({ language }) {
  const translation = translations[language].projects;

  return (
    <section id='projects' aria-label='Projects' className='flex-col'>
      <h2 className='uppercase py-5 font-semibold text-lg text-background'>
        <span className='relative'>
          <span
            data-aos='brush-reveal'
            className='absolute -inset-0.5 block -skew-y-3 bg-accent'
            aria-hidden='true'></span>
          <span className='relative'>{translation.title}</span>
        </span>
      </h2>
      <ol className='grid gap-6 2xl:max-w-5xl 2xl:mx-auto'>
        <li
          className='
          group 
          rounded-xl 
          shadow-xs 
        shadow-highlight 
          lg:shadow-none
          lg:hover:shadow-sm
        lg:hover:shadow-accent
          lg:hover:cursor-pointer
          lg:hover:bg-gradient-to-br 
        lg:hover:from-highlight/5 
          lg:hover:to-transparent 
          transition-shadow 
          duration-200 
          ease-in
          py-4 
          px-2 
          sm:p-4 
          sm:grid 
          sm:grid-cols-8 
          sm:gap-4
          
          '>
          <div className='sm:col-start-3 sm:col-span-6'>
            <h3 className='font-semibold uppercase text-sm sm:col-start-4 '>
              <a
                href='https://one-repo-away.vercel.app/'
                className='inline-flex items-center gap-2 group-hover:text-accent group-hover:transition-colors group-hover:duration-200 group-hover:delay-200'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='View GitHub Explorer Project (opens in a new tab)'>
                {translation.projectOne.title}
                <ArrowUpRight
                  size={20}
                  color={'#0ae448'}
                  className='-mt-[3px]'
                />
              </a>
            </h3>
            <p className='text-base mt-2 sm:text-lg leading-normal'>
              {translation.projectOne.description}
            </p>
            <div
              className='flex flex-wrap gap-3 text-sm mt-3'
              aria-label='Technologies used'>
              {translation.projectOne.skills.map((skill) => (
                <span className='skill' key={skill}>
                  {skill}
                </span>
              ))}
              <a
                aria-label='GitHub Repository for GitHub Explorer'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/verobelo/github-repo-explorer'
                className='ml-2'>
                <GitHub fill='#bbbaa6' />
              </a>
            </div>
          </div>
          <img
            src='./one-repo-preview.png'
            alt='GitHub Explorer Project Preview'
            className='
            w-full
            ring-0 
            rounded-md 
            aspect-video 
            sm:col-start-1 
            sm:col-span-2 
            sm:row-start-1
            transition-colors
            group-hover:duration-300
            group-hover: delay-100
            group-hover:ring-2 
            group-hover:ring-accent
            mt-5 
            sm:mt-0'
            loading='lazy'
          />
        </li>

        <li
          className='
          group 
          lg:hover:cursor-pointer
          lg:hover:bg-gradient-to-br 
        lg:hover:from-highlight/5 
          lg:hover:to-transparent 
          rounded-xl 
          shadow-xs 
        shadow-highlight 
          lg:shadow-none
          lg:hover:shadow-sm
        lg:hover:shadow-accent
          transition-shadow 
          duration-200 
          ease-in
          py-4 
          px-2 
          sm:p-4 
          sm:grid 
          sm:grid-cols-8 
          sm:gap-4
          
          
          '>
          <div className='sm:col-start-3 sm:col-span-6'>
            <h3 className='font-semibold uppercase text-sm sm:col-start-4 sm:col-span-4'>
              <a
                href='https://gitthatjob.vercel.app/'
                className='inline-flex items-center gap-2 group-hover:text-accent group-hover:transition-colors group-hover:duration-200 group-hover:delay-200'
                aria-label='View GitHub Explorer Project(opens in a new tab)'
                target='_blank'
                rel='noopener noreferrer'>
                {translation.projectTwo.title}

                <ArrowUpRight
                  size={20}
                  color={'#0ae448'}
                  className='-mt-[3px]'
                />
              </a>
            </h3>
            <p className='text-base mt-2 sm:text-lg leading-normal'>
              {translation.projectTwo.description}
            </p>
            <div
              className='flex flex-wrap gap-2 text-sm mt-3'
              aria-label='Technologies used'>
              {translation.projectTwo.skills.map((skill) => (
                <span className='skill' key={skill}>
                  {skill}
                </span>
              ))}
              <a
                aria-label='GitHub Repository for CV Creator'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/verobelo/cv-creator'
                className='ml-2'>
                <GitHub fill='#bbbaa6' />
              </a>
            </div>
          </div>
          <img
            src='./cv-creator-preview-esp.png'
            alt='Cv Creator Project Preview'
            className='
            w-full
            ring-0 
            rounded-md 
            aspect-video 
            sm:col-start-1 
            sm:col-span-2 
            sm:row-start-1
            transition-colors
            group-hover:duration-300
            group-hover: delay-100
            group-hover:ring-2 
            group-hover:ring-accent
            mt-5 
            sm:mt-0'
            loading='lazy'
          />
        </li>
      </ol>
    </section>
  );
}
