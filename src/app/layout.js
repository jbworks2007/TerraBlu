import localFont from 'next/font/local'
import '@/assets/scss/comman.scss'
import '@/assets/scss/custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledEngineProvider } from '@mui/material/styles';

const mavenpro = localFont({
  src: [
    {
      path: '../assets/fonts/mavenpro/MavenPro-Regular_1.ttf',
      weight: '400',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../assets/fonts/mavenpro/MavenPro-Medium_1.ttf',
      weight: '500',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../assets/fonts/mavenpro/MavenPro-Bold_1.ttf',
      weight: '700',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../assets/fonts/mavenpro/MavenPro-Black_1.ttf',
      weight: '900',
      style: 'italic',
      display: 'swap'
    },
  ],
})

export const metadata = {
  title: 'TerraBlu.life',
  description: 'TerraBlu empowers a unified effort to safeguardour planet.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>

      </head>
      <StyledEngineProvider injectFirst>
        <body className={`bg-theme ${mavenpro.className}`}>{children}</body>
      </StyledEngineProvider>
    </html>
  )
}
