import '@picocss/pico'
import type { AppProps } from 'next/app'
import Header from 'components/Header';
import '../style/style.css';
import Footer from 'components/Footer';
import Script from 'next/script';
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer/>
    <Script src='/theme.js'/>
  </>


}
