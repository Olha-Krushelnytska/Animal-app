import React from "react";
import style from "../snake/snake.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import snake1 from "../../../img/snake/snake1.jpg";
import snake2 from "../../../img/snake/snake2.jpg";
import snake3 from "../../../img/snake/snake3.jpg";

const Snake = () => {
  return (
    <div>
      <div className={style.container_snake} id="snake">
        <div className={style.content_title}>
          <h3>Найдовша змія</h3>
        </div>
        <div className={style.snake}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={snake1} alt="snake" />
              <Carousel.Caption>
                <h3>Анаконда</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={snake2} alt="snake" />

              <Carousel.Caption>
                <h3>Анаконда</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={snake3} alt="snake" />

              <Carousel.Caption>
                <h3>Анаконда</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>
            <p>
              1. Анаконда може досягати вражаючої довжини понад 9 метрів і ваги
              понад 250 кілограмів.
            </p>
            <p>
              2. Має дуже товсте тіло з великим обхватом. Обхват тіла дорослої
              анаконди може досягати понад 1 метра.
            </p>
            <p>
              3. Змія-анаконда є потужним хижаком і полює на різні види живих
              істот, включаючи рибу, птахів, земноводних і ссавців.
            </p>
            <p>
              4. Народжує живих малюків, а не відкладає яйця. Самиця може
              народжувати від 20 до 40 малюків за раз.
            </p>
            <p>
              5. Змія-анаконда живе переважно в тропічних дощових лісах та
              болотистих джунглях.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snake;
