import { translations } from './logic/translations';
export default function Footer({ language }) {
  const translation = translations[language].footer;
  return (
    <footer className='p-4' role='contentinfo'>
      <small className='text-center text-xs md:text-sm flex flex-col gap-2 text-footer border-t-1 border-footer'>
        <p className='pt-3'>
          &copy; {new Date().getFullYear()} Veronika Belozerova
        </p>
        <p className='xsm:text-center'>
          {translation.intro1} <span className='font-semibold'>Vite</span>,
          <span className='font-semibold'> React JS</span> {translation.intro2}
          <span className='font-semibold'> Tailwind CSS </span>
          {translation.intro3}
          {translation.intro4}
          <span className='font-semibold'>Vercel</span>.{translation.intro5}
          <span className='font-semibold'>Helvetica Neue</span>
          {translation.intro6}
        </p>
      </small>
    </footer>
  );
}
