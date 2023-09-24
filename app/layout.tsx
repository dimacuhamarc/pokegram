'use client';

import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div>NavBar</div>
      <body>{children}</body>
    </html>
  )
}
