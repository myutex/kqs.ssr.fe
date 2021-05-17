import Head from 'next/head';
import Header from '../components/Header';
import Home from './home';
import Footer from '../components/Footer';
import FollowingOffer from '../components/FollowingOffer';

export default function Index() {
  return (
    <>
      <Head>
        <title>한국퀵서비스 | 1661-7773</title>
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
