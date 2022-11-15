import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="space-y-9">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4"></div>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
