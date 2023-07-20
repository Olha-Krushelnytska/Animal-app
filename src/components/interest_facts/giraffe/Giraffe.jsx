import React from "react";
import style from "../giraffe/giraffe.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import giraffe1 from "../../../img/giraffe/giraffe1.jpg";
import giraffe2 from "../../../img/giraffe/giraffe2.jpg";
import giraffe3 from "../../../img/giraffe/giraffe3.jpg";

const Giraffe = () => {
  return (
    <div>
      <div className={style.container_giraffe} id="giraffe">
      <div className={style.content_title}>
              <h3>Найвища тварина</h3>
            </div>
        <div className={style.giraffe}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={giraffe1} alt="giraffe" />
              <Carousel.Caption>
                <h3>Жирафа</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={giraffe2} alt="giraffe" />

              <Carousel.Caption>
                <h3>Жирафа</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={giraffe3} alt="giraffe" />

              <Carousel.Caption>
                <h3>Жирафа</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>

            <p>
              1. Жирафа може досягати висоти до 5,5-6 метрів, з ногами завдовжки
              близько 1,8 метра.
            </p>
            <p>2. Довга шия, але тільки 7 хребців. Кожен може бути до 25см.</p>
            <p>
              3. Ноги жирафи дуже довгі і сильні. В жирафи швидкість бігу може
              сягати 56 кілометрів на годину.
            </p>
            <p>
              4. Жирафа має неймовірно потужне серце. Воно може важити близько
              11 кілограмів і має розміри приблизно 60 сантиметрів у довжину.
            </p>
            <p>
              5. Жирафи сплять стоячи.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giraffe;
