import { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import '../bootstrap/_common.scss';
import '../components/Header.scss';
import '../components/Footer.scss';
import './home.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
