import React from "react";
import style from "../peacock/peacock.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import peacock1 from "../../../img/peacock/peacock1.jpg";
import peacock2 from "../../../img/peacock/peacock2.jpg";
import peacock3 from "../../../img/peacock/peacock3.jpg";

const Peacock = () => {
  return (
    <div>
      <div className={style.container_peacock} id="peacock">
      <div className={style.content_title}>
              <h3>Найкрасивіша тварина</h3>
            </div>
        <div className={style.peacock}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={peacock1} alt="peacock" />
              <Carousel.Caption>
                <h3>Павич</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={peacock2} alt="peacock" />

              <Carousel.Caption>
                <h3>Павич</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={peacock3} alt="peacock" />

              <Carousel.Caption>
                <h3>Павич</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>

            <p>
              1. У самців павичів є величезний хвіст.Це один з найяскравіших та
              найкрасивіших хвостів серед усіх птахів.
            </p>
            <p>
              2. Павичі можуть мати широку палітру кольорів у своєму оперенні,
              включаючи відтінки синього, зеленого, золотистого та багато інших.
            </p>
            <p>
              3. Самці павичів влаштовують захоплюючі танці, під час яких
              розкривають свої великі хвости, розгортають їх у великі віяла і
              виконують складні рухи. Це демонструє їхню красу та привертає
              увагу самок.
            </p>
            <p>4. Павичі - це символи елегантності та природної величі.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peacock;
