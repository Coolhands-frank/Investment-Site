import { Plus_Jakarta_Sans, Roboto_Mono, Asap, Poppins } from 'next/font/google'

export const asap = Asap({ 
  subsets: ["latin"],
  display: 'swap', 
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});