'use client';

import './globals.scss';
import Navbar from '../components/navbar/navbar';

import Image from 'next/image';
import pbLogo from '../assets/pokeball.svg'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Image src={pbLogo} alt='PokèGram Logo'/>
        <div className='content'>
          {children}
        </div>
      </body>
    </html>
  )
}
