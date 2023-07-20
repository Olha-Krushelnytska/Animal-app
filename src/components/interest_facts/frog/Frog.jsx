import React from "react";
import style from "../frog/frog.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import frog1 from "../../../img/frog/frog1.jpg";
import frog2 from "../../../img/frog/frog2.jpg";
import frog3 from "../../../img/frog/frog3.png";

const Frog = () => {
  return (
    <div>
      <div className={style.container_frog} id="frog">
      <div className={style.content_title}>
              <h3>Найотруйніша тварина</h3>
            </div>
        <div className={style.frog}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={frog1} alt="frog" />
              <Carousel.Caption>
                <h3>Листолаз жахливий</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={frog2} alt="frog" />

              <Carousel.Caption>
                <h3>Листолаз жахливий</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={frog3} alt="frog" />

              <Carousel.Caption>
                <h3>Листолаз жахливий</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>
            <p>
              1. Слиз, що виділяє шкіра дуже отруйний: у 1000 раз потужніший за
              ціаністий калій. Один грам слизу листолазу здатен вбити до 15000
              людей.
            </p>
            <p>
              2.Ця жаба має яскраві кольори, зазвичай жовту або помаранчеву
              шкіру з чорними плямами.
            </p>
            <p>
              3. Ці жаби зустрічаються у вологих тропічних лісах Південної
              Америки, зокрема у Колумбії.
            </p>
            <p>
              4. Незважаючи на їх отруйність, листолази жахливі є
              вегетаріанцями.
            </p>
            <p>5. Може досягати довжини до 5-6 см.</p>
            <p>
              6. Під загрозою вимирання через вирубування лісів та незаконний
              збір для торгівлі.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frog;
