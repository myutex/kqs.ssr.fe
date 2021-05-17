import Head from 'next/head';
import Header from '../components/Header';
import Home from './home';
import Footer from '../components/Footer';
import FollowingOffer from '../components/FollowingOffer';
import { useEffect, useState } from 'react';

export default function Index() {
  const [mode, setMode] = useState('');
  useEffect(() => {
    switch (window.location.hostname) {
      case 'localhost':
        setMode('kqs');
        break;

      case '1661-7773.com':
        setMode('kqs');
        break;

      case '1661-1987.co.kr':
        setMode('sqs');
        break;

      default:
        setMode('kqs');
        break;
    }
  }, []);

  return (
    <>
      <Head>
        {mode === 'kqs' && <title>한국퀵서비스 | 1661-7773</title>}
        {mode === 'sqs' && <title>스마트퀵서비스 | 1661-1987</title>}
      </Head>
      <Header />
      <FollowingOffer />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
