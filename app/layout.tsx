import { Nunito } from '@next/font/google';
import '@/styles/globals.css';
import Header from '@/ui/Header';

const nunito = Nunito({
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.className}  bg-stone-900`}>
      <head />
      {/* <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]"> */}
      <body>
        <Header />
        <div className="lg:pl-72">{children}</div>
      </body>
    </html>
  );
}
