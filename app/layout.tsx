import Providers from './providers'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Growth Grid - Mapa de Autoridade Temática',
  description: 'Crie seu mapa de autoridade temática com IA e aumente seu SEO',
  icons: {
    icon: [
      {
        url: '/img/favicongg.svg',
        type: 'image/svg+xml',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={outfit.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
