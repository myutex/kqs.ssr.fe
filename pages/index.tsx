import Header from '../components/Header';
import Home from './home';
import Footer from '../components/Footer';
import FollowingOffer from '../components/FollowingOffer';

export default function Index() {
  return (
    <>
      <Header />
      <FollowingOffer />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
