import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import {Navbar} from "./components/navbar/Navbar"
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

const font = Nunito({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={font.className}>
          <ClientOnly>
            <ToasterProvider />
          <RegisterModal />
          <Navbar />
          
          </ClientOnly>
         <Navbar />
         
            
        
        {children}
      </body>
    </html>
  )
}
