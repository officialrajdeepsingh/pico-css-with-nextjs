import '@picocss/pico'

/*

Enable custom theme

import '../style/custom.css';
import '../../poco.css';

*/

import '../style/style.css';

import type { AppProps } from 'next/app'
import Header from 'components/Header';
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
