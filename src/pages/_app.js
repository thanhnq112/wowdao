import '@/styles/app.scss';
import { MultiProvider } from '@/providers/MultiProvider';
import { ThemeProvider } from 'next-themes';
import { quicksand, montserrat } from '@/fonts/fonts';
import MasterLayout from '@/layouts/MasterLayout';
import { ConfigProvider } from '@/providers/ConfigProvider';
// import { register } from 'swiper/element/bundle';

// register();

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import { WindowDimensionsProvider } from '@/providers/WindowDimensitionsProvider';

export default function App({ Component, pageProps }) {

  return (
    <MultiProvider providers={[
      <ThemeProvider key="theme" 
        attribute="class" 
        enableSystem={false}
        defaultTheme="dark"
      />,
      <ConfigProvider key="config" />,
      <WindowDimensionsProvider key="window" />
    ]}>
      <MasterLayout>
        <style jsx global>{`
        :root {
          --quicksand-font: ${quicksand.style.fontFamily};
          --montserrat-font: ${montserrat.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
      </MasterLayout>
    </MultiProvider>
  )
}
