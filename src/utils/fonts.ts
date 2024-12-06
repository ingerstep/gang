import { Montserrat } from 'next/font/google';

export const interMontserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap',
    variable: '--font-montserrat',
  });