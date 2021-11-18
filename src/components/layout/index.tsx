import type { ReactNode } from 'react';
import Header from './header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className='flex flex-col justify-center px-8'>{children}</main>
    </>
  );
}
