import { Nunito } from '@next/font/google';
import '@/styles/globals.css';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';

const nunito = Nunito({
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.className}  bg-stone-900 text-slate-50`}
    >
      <head />
      <body className="flex h-screen flex-col justify-between">
        <Header />
        <div className="mb-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
