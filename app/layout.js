import '@radix-ui/themes/styles.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'
import 'react-datepicker/dist/react-datepicker.css'

import './globals.scss'

import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import { Theme } from '@radix-ui/themes'
import Footer from '@/components/global/Footer'
import ApolloWrapper from '@/components/global/ApolloWrapper'
import AosInit from '@/components/global/AosInit'

const heavitas = localFont({
  src: [
    {
      path: '../font/Heavitas.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
})

const tomatoes = localFont({
  src: [
    {
      path: '../font/Tomatoes.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
})

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['latin'],
//   display: 'swap',
// })

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1', // <-- now here
}
export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning={true}
    >
      <head>
        <meta
          name='DC.title'
          content='Vietnam Cheers Hostel Official Site'
        />
        <meta
          name='geo.region'
          content='VN-HN'
        />
        <meta
          name='geo.placename'
          content='H&agrave; Nội'
        />
        <meta
          name='geo.position'
          content='21.028530680620868;105.84580487600834'
        />
        <meta
          name='ICBM'
          content='21.028530680620868, 105.84580487600834'
        />
      </head>
      <body
        // suppressHydrationWarning={true}
        className={`bg-white text-black ${poppins.className} ${heavitas.className} ${tomatoes.className} w-full`}
      >
        <ApolloWrapper>
          <AosInit />
          <Theme>
            {children}
            <Footer />
          </Theme>
        </ApolloWrapper>
      </body>
    </html>
  )
}
