import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = { title: 'Vista do Bosque | Portal', description: 'Gestão Condominial' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR"><body className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen`}><main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main></body></html>
  );
}
