/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cx } from '@emotion/css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState({
    mode: '',
    kqs: 'kqs.logo-removebg-preview',
    sqs: 'sqs.logo-removebg-preview',
  });
  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setScrolled(true);
    } else if (window.scrollY === 0) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    switch (window.location.hostname) {
      case 'localhost':
        setLogo({ ...logo, mode: 'kqs' });
        break;

      case '1661-7773.com':
        setLogo({ ...logo, mode: 'kqs' });
        break;

      case '1661-1987.com':
        setLogo({ ...logo, mode: 'sqs' });
        break;

      default:
        logo.mode = 'kqs';
        break;
    }
  }, []);

  return (
    <>
      <header className={cx(scrolled && 'scrolled')}>
        <div className="container mx-auto">
          {logo.mode === 'kqs' && (
            <h1 className="kqs">
              <Link href="/">
                <img loading="lazy" src="kqs.logo-removebg-preview.png" alt="한국퀵서비스 로고" />
              </Link>
            </h1>
          )}

          {logo.mode === 'sqs' && (
            <h1 className="sqs">
              <Link href="/">
                <img loading="lazy" src="sqs.logo-removebg-preview.png" alt="스마트퀵서비스 로고" />
              </Link>
            </h1>
          )}
          <ul>
            <li>
              <a href="#small">소형화물</a>
            </li>
            <li>
              <a href="#medium_to_large">중·대형화물</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
