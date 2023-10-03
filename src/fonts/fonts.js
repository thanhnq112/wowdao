import { Quicksand, Montserrat } from "@next/font/google";

// Add quicksand font
export const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--quicksand-font',
});

// Add Montserrat font
export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['700','900'],
    variable: '--montserrat-font',
})