import React from "react";
import style from "../turtle/turtle.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import turtle1 from "../../../img/turtle/turtle1.webp";
import turtle2 from "../../../img/turtle/turtle2.jpg";
import turtle3 from "../../../img/turtle/turtle3.jpg";

const Turtle = () => {
  return (
    <div>
      <div className={style.container_turtle} id="turtle">
        <div className={style.content_title}>
          <h3>Довгожителька</h3>
        </div>
        <div className={style.turtle}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={turtle1} alt="turtle" />
              <Carousel.Caption>
                <h3>Черепаха</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={turtle2} alt="turtle" />

              <Carousel.Caption>
                <h3>Черепаха</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={turtle3} alt="turtle" />

              <Carousel.Caption>
                <h3>Черепаха</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>
            <p>
              1. Деякі види черепах можуть жити більше 100 років, а деякі навіть
              переживають більше 150 років.
            </p>
            <p>
              2.Найстаріша документована черепаха була африканська земноводна
              черепаха на ім'я Джонатан. Він народився близько 1832 року і жив
              до 2021 року, досягнувши віку близько 189 років.
            </p>
            <p>
              3. Довголіття черепах пов'язане з їх повільним темпом росту і
              обміном речовин.
            </p>
            <p>
              4. Деякі види черепах виявилися дуже стійкими до хвороб і раку.
            </p>
            <p>
              5. Деякі черепахи можуть відновлювати свої органи, включаючи
              шкіру, хвіст і навіть частини панциря.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turtle;
