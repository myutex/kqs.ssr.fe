import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
// import im from 'include-media-export/dist/include-media-1.0.2.min';
import styles from './FollowingOffer.module.scss';

function FollowingOffer() {
  const [bottom, setBottom] = useState(0);
  const [position, setPosition] = useState({
    pc: 200,
    mobile: 25,
  });
  useEffect(() => {
    let im;
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      im = require('include-media-export/dist/include-media-1.0.2.min');
    }

    const handleScroll = () => {
      if (im.getActive() === 'desktop') {
        setBottom(-window.document.documentElement.scrollTop + position.pc);
      }

      if (im.getActive() !== 'desktop') {
        setBottom(-window.document.documentElement.scrollTop + position.mobile);
      }
    };
    const handleWheel = () => {
      handleScroll();
    };
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.keyCode === 38 || e.keyCode === 40) {
        handleScroll();
        console.log('KeyPress');
      }
    };
    const handleResize = () => {
      if (im.getActive() === 'desktop') {
        setBottom(position.pc);
      }

      if (im.getActive() !== 'desktop') {
        console.log('lte tablet');
        setBottom(position.mobile);
      }
    };

    if (im.getActive() === 'desktop') {
      setBottom(position.pc);
    }

    if (im.getActive() !== 'desktop') {
      setBottom(position.mobile);
    }

    window.addEventListener('mousewheel', handleWheel);
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', () => {
      if (im.getActive() !== 'desktop') {
        setBottom(-window.document.documentElement.scrollTop + position.mobile);
      }
    });
  }, []);

  return (
    <div className={styles.wrap} style={{ bottom: `${bottom}px` }}>
      <div className={styles.arrow}>
        <ChevronDoubleUpIcon className={styles.up} />
      </div>

      <div className={styles.call}>
        <a href="tel:1661-7773">
          <img
            loading="lazy"
            src="call_w1024.png"
            alt="실시간전화연결"
            srcSet="
            call_w1024.png 1024w,
            call_w150.png   150w,
            call_w300.png   300w,
            call_w768.png   768w,
            call.png       1923w
          "
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </a>
      </div>
      <div className={styles.web}>
        <a href="https://16617773.qag.kr/main/" target="_blank" rel="noreferrer">
          실시간 배차주문 (24시간)
        </a>
      </div>
      <div className={styles.kakao}>
        <a href="https://pf.kakao.com/_nPyBK" target="_blank" rel="noreferrer">
          카카오톡 주문하기
        </a>
      </div>
      <div className={styles['app-link']}>
        <a href="https://play.google.com/store/apps/details?id=com.krquick.hmaligo">앱으로 주문하기</a>
      </div>
      <div className={styles.arrow}>
        <ChevronDoubleDownIcon className={styles.down} />
      </div>
    </div>
  );
}

export default FollowingOffer;
