import { Nunito } from '@next/font/google';
import '@/src/styles/globals.css';
import Header from '@/src/ui/components/Header';
import Footer from '@/src/ui/components/Footer';

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
      className={`${nunito.className}  bg-stone-900 text-lg text-slate-50`}
    >
      <head />
      <body>
        <Header />
        <div className="flex h-screen content-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
