import { Nunito } from '@next/font/google';
import '@/styles/globals.css';
import Header from '@/ui/components/Header';
import Footer from '@/ui/components/Footer';

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
      className={`${nunito.className}  bg-stone-900 text-slate-50 `}
    >
      <head />
      <body>
        <Header />
        <div className="grid h-screen grid-cols-3">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
