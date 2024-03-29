import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeContextProvider } from '@/providers/theme-provider'
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
/* bg-[#151515] */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('bg-background font-sans antialiased', fontSans.variable)} suppressHydrationWarning={true}>
      <ThemeContextProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
          >
      <Navbar />
      <div className="flex min-h-screen px-10">
        <Sidebar />
        {children}
      </div>
      </ThemeContextProvider>
        </body>
    </html>
  )
}

/* 
altura de la pagina: 5162.030px
 */