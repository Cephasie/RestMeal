import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MealDash',
  description: 'Order your favourite meals from your favourite restaurants',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
