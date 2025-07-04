import { ArrowUpRight } from 'lucide-react';
import { translations } from './logic/translations';

export default function Experience({ language }) {
  const translation = translations[language].experience;
  return (
    <section id='experience' aria-label='Experience' className='flex-col'>
      <h2 className='uppercase pt-4 pb-3 font-semibold text-base text-background sm:text-lg tracking-wide'>
        <span className='relative'>
          <span
            data-aos='brush-reveal'
            className='absolute -inset-0.5 block -skew-y-3 bg-accent'
            aria-hidden='true'></span>
          <span className='relative'>{translation.title}</span>
        </span>
      </h2>
      <ol className='grid gap-4'>
        <li className='mb-6 sm:grid sm:grid-cols-8 sm:gap-4'>
          <p className='uppercase text-xs sm:text-sm sm:col-span-3 sm:mt-1 sm:py-2 lg:mt-0 md:py-0'>
            {translation.jobOne.dates}
          </p>
          <div className='sm:col-span-5'>
            <h3 className='text-highlight font-semibold text-base sm:text-lg leading-snug tracking-wide'>
              {translation.jobOne.title}
            </h3>
            <p className='text-base sm:text-lg mt-1 leading-relaxed sm:leading-normal'>
              {translation.jobOne.intro1}{' '}
              <a href='#projects' className='font-semibold'>
                {translation.jobOne.link1}
              </a>
              {translation.jobOne.intro2}
              <a
                href='https://www.coursera.org/account/accomplishments/specialization/ORFIJ99TKB59'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold'>
                {' '}
                {translation.jobOne.link2}
              </a>
            </p>
            <div
              className='flex flex-wrap gap-2 mt-2 mb-5 text-sm'
              aria-label='Skills'>
              {translation.jobOne.skills.map((skill) => (
                <div className='skill' key={skill}>
                  {skill}
                </div>
              ))}
            </div>
            <div>
              <a
                href='./meta.pdf'
                className='flex items-center font-semibold text-base sm:text-lg gap-1 hover:text-accent transition-colors hover:duration-200'
                aria-label='View Meta Certificate (opens in a new tab)'
                target='_blank'
                rel='noopener noreferrer'>
                {translation.jobOne.certificate}
                <span>
                  <ArrowUpRight size={20} color='#0ae448' />
                </span>
              </a>
            </div>
          </div>
        </li>

        <li className='mb-6 sm:grid sm:grid-cols-8 sm:gap-4'>
          <p className='uppercase text-xs sm:text-sm sm:col-span-3 sm:mt-1 sm:py-2 lg:mt-0 md:py-0'>
            {translation.jobTwo.dates}
          </p>
          <div className='sm:col-span-5'>
            <h3 className='text-highlight font-semibold text-base sm:text-lg leading-snug tracking-wide'>
              {translation.jobTwo.title}
              <a
                href='https://www.linkedin.com/company/pineapple-practice/about/'
                target='_blank'
                rel='noopener noreferrer'>
                Pineapple Practice
              </a>
            </h3>
            <p className='text-base sm:text-lg mt-1'>
              {translation.jobTwo.intro1}
              <a
                href='https://lapki.zagirnur.dev/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-accent font-semibold'>
                https://lapki.zagirnur.dev/
              </a>
              {translation.jobTwo.intro2}
            </p>
            <div
              className='flex flex-wrap gap-2 mt-2 mb-5 text-sm'
              aria-label='Skills'>
              {translation.jobTwo.skills.map((skill) => (
                <div className='skill' key={skill}>
                  {skill}
                </div>
              ))}
            </div>
            <div>
              <a
                href='./internship.pdf'
                className='flex items-center font-semibold text-base sm:text-lg gap-1 hover:text-accent transition-colors hover:duration-200'
                aria-label='View Internship Certificate (opens in a new tab)'
                target='_blank'
                rel='noopener noreferrer'>
                {translation.jobOne.certificate}
                <span>
                  <ArrowUpRight size={20} color='#0ae448' />
                </span>
              </a>
            </div>
          </div>
        </li>

        <li className='mb-6 sm:grid sm:grid-cols-8 sm:gap-4'>
          <p className='uppercase text-xs sm:text-sm sm:col-span-3 sm:mt-1 sm:py-2 lg:mt-0 md:py-0'>
            {translation.jobThree.dates}
          </p>
          <div className='sm:col-span-5'>
            <h3 className='text-highlight font-semibold text-base sm:text-lg leading-snug tracking-wide'>
              {translation.jobThree.title}
            </h3>
            <p className='text-base sm:text-lg mt-1'>
              {translation.jobThree.intro1}
            </p>
            <div
              className='flex flex-wrap gap-2 my-2 text-sm'
              aria-label='Skills'>
              {translation.jobThree.skills.map((skill) => (
                <div className='skill' key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </li>
      </ol>
      <div>
        <a
          href={
            language === 'en'
              ? './Veronika Belozerova Frontend ENG.pdf'
              : './Veronika Belozerova Frontend ESP.pdf'
          }
          className='flex items-center font-semibold tracking-wide uppercase text-base sm:text-lg gap-1 hover:text-accent transition-colors hover:duration-200'
          aria-label='View Full Résumé(opens in a new tab)'
          target='_blank'
          rel='noopener noreferrer'>
          <span>{translation.resume.intro1}</span>
          <span className='text-accent'>{translation.resume.highlighted}</span>
          <span>{translation.resume.intro2}</span>
          <span>
            <ArrowUpRight size={24} color='#0ae448' className='-mt-[2px]' />
          </span>
        </a>
      </div>
    </section>
  );
}
