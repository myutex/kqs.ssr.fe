function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="introduce-services">
          <span>서비스소개</span>
          <dl>
            <dt>소형화물</dt>
            <dd>오토바이</dd>
            <dd>다마스</dd>
            <dd>라보</dd>
          </dl>
          <dl>
            <dt>중형화물</dt>
            <dd>1톤 트럭</dd>
            <dd>2.5톤 트럭</dd>
            <dd>5톤 트럭</dd>
          </dl>
          <dl>
            <dt>대형화물</dt>
            <dd>10톤 트럭</dd>
            <dd>25톤 트럭</dd>
            <dd>50톤 트럭</dd>
          </dl>
        </div>
        <div className="company">
          <address>
            <p>한국퀵서비스</p>
            주소 : 경기도 김포시 장기동 2008-1, 김포 금광테크노밸리
            <br />
            대표이사 : OOO | 사업자등록번호: OOO-OO-OOOOO
            <br />
            통신판매번호 : 2021-OOOO-OOOOO
            <br />
            전화번호 : 1661-7773
            <br />
            전자우편주소 : id@domain.com
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
