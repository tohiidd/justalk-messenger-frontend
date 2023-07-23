'use client';

import { ReactNode } from "react"
import { ColorModeContextProvider } from "context/ColorModeContext"

import './styles.css'
interface Props{
    children:ReactNode
}
export default function RootLayout({children}:Props){

    return (
        <html lang="en">
          <body>
          <ColorModeContextProvider>
          {children}
          </ColorModeContextProvider>
          </body>
        </html>
      )
}