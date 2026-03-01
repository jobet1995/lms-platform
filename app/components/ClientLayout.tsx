'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <div className={`flex flex-col min-h-screen ${!isAuthPage ? 'pt-20' : ''}`}>
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
}
