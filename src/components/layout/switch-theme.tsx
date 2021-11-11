import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function SwitchTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const enabled = resolvedTheme === 'dark';
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  return (
    <div className='flex items-center space-x-4'>
      <svg viewBox='0 0 24 24' width='24' height='24' fill='none'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM5.64 6.64a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42A.999.999 0 0 1 5.64 6.64zm14.139 14.139a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42a.999.999 0 0 1-.707 1.707zM3 13H1a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm20 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zM4.22 20.779a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.993.993 0 0 1-.707.293zM18.359 6.64a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.997.997 0 0 1-.707.293z'
          fill='url(#paint0_linear)'></path>
        <defs>
          {' '}
          <linearGradient id='paint0_linear' x1='2' y1='2' x2='30' y2='30' gradientUnits='userSpaceOnUse'>
            <stop className='transition-all duration-200' stopColor={enabled ? '#d4d4d8' : '#FACC15'} />
            <stop className='transition-all duration-200' offset='1' stopColor={enabled ? '#d4d4d8' : '#FA9D16'} />
          </linearGradient>
        </defs>
      </svg>
      <Switch
        checked={resolvedTheme === 'dark'}
        onChange={() => setTheme(enabled ? 'light' : 'dark')}
        className={clsx(
          'inline-flex items-center px-0.5 rounded-full w-16 h-9 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-500 focus:outline-none',
          {
            'justify-end': enabled
          }
        )}
        style={{ backgroundColor: enabled ? '#111827' : '#60D360' }}>
        <span className='sr-only'>Enable dark mode</span>
        <motion.span
          layout
          className='bg-white rounded-full w-8 h-8'
          style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05), 0 1px 1px rgba(0, 0, 0, 0.1)' }}
        />
      </Switch>
      <svg
        width='24'
        height='24'
        fill='currentColor'
        className={clsx('transition-colors duration-200', {
          'text-gray-900': enabled,
          'text-gray-300': !enabled
        })}>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z'
        />
      </svg>
    </div>
  );
}
