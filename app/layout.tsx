import '@/styles/globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-purple-1000">
      <head />
      {/* <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]"> */}
      <body>
        <div className="lg:pl-72">{children}</div>
      </body>
    </html>
  );
}
