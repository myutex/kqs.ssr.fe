function Home() {
  return (
    <div>
      <section id="small">
        <div className="container mx-auto">
          <h2>소형화물</h2>
          <div className="wrap">
            <div className="card">
              <h3>오토바이</h3>
              <div className="image">
                <img src="motorcycle.svg" alt="오토바이" width="163" />
              </div>
              <div className="text">
                <h4>오토바이에 적재가능한 모든 물품</h4>
                <p className="feature">
                  <b>특징:</b> 최대 <b>40kg</b>
                </p>
                <p>
                  <b>적재크기:</b> 가로 * 세로 * 높이의 합이 150cm 미만인 물품 권장
                </p>
              </div>
            </div>
            <div className="card">
              <h3>다마스</h3>
              <div className="image">
                <img src="damas.svg" alt="다마스" width="163" />
              </div>
              <div className="text">
                <h4>소형차량에 적재가능한 모든 물품</h4>
                <p className="feature">
                  <b>특징:</b> 최대 <b>350kg</b>
                </p>
                <p>
                  <b>적재크기:</b> 오토바이 적재 시 위험한 물건이나 소량의 소화물 운송에 적합
                </p>
              </div>
            </div>
            <div className="card">
              <h3>라보</h3>
              <div className="image">
                <img src="labo.svg" alt="라보" width="163" />
              </div>
              <div className="text">
                <h4>소형트럭에 적재가능한 모든 물품</h4>
                <p className="feature">
                  <b>특징:</b> 최대 <b>450kg</b>
                </p>
                <p>
                  <b>적재크기:</b> 중소량의 소화물 운송에 적합
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="medium_to_large">
        <div className="container mx-auto">
          <h2>중·대형화물</h2>
          <div className="wrap">
            <div className="card">
              <h3>1톤 ~ 5톤</h3>
              <div className="image">
                <img src="truck-md.svg" alt="용달트럭" width="163" />
              </div>
              <div className="text">
                <h4>차량에 적재가능한 모든 물품</h4>
                <p className="feature">
                  <b>특징:</b> <b>1000kg</b> 부터 최대 <b>5000kg</b> 까지
                </p>
                <p>
                  <b>적재크기:</b> 다량의 이삿짐 또는 화물 운송에 적합
                </p>
              </div>
            </div>
            <div className="card">
              <h3>10톤 ~</h3>
              <div className="image">
                <img src="truck-lg.svg" alt="대형트럭" width="163" />
              </div>
              <div className="text">
                <h4>차량에 적재가능한 모든 물품</h4>
                <p className="feature">
                  <b>특징:</b> <b>10000kg</b> 부터 ~
                </p>
                <p>
                  <b>적재크기:</b> 다량의 대형 화물에 적합
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
