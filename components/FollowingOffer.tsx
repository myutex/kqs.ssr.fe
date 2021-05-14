import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/react/solid';
import styles from './FollowingOffer.module.scss';

function FollowingOffer() {
  return (
    <div className="wrap">
      <div className="arrow">
        <ChevronDoubleUpIcon className="up" />
      </div>

      <div className="call">
        <a href="tel:1661-7773">
          <img
            loading="lazy"
            src="../../public/call_w1024.png"
            alt="실시간전화연결"
            srcSet="
            ../../public/call_w1024.png 1024w,
            ../../public/call_w150.png   150w,
            ../../public/call_w300.png   300w,
            ../../public/call_w768.png   768w,
            ../../public/call.png       1923w
          "
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </a>
      </div>
      <div className="web">
        <a href="https://16617773.qag.kr/main/" target="_blank" rel="noreferrer">
          실시간 배차주문 (24시간)
        </a>
      </div>
      <div className="kakao">
        <a href="https://pf.kakao.com/_nPyBK" target="_blank" rel="noreferrer">
          카카오톡 주문하기
        </a>
      </div>
      <div className="app-link">
        <a href="https://play.google.com/store/apps/details?id=com.krquick.hmaligo">앱으로 주문하기</a>
      </div>
      <div className="arrow">
        <ChevronDoubleDownIcon className="down" />
      </div>
    </div>
  );
}

export default FollowingOffer;
