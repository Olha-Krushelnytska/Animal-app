import React from "react";
import style from "../jellyFish/jellyFish.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import jellyfish1 from "../../../img/jellyfish/jellyfish1.jpeg";
import jellyfish2 from "../../../img/jellyfish/jellyfish2.jpg";
import jellyfish3 from "../../../img/jellyfish/jellyfish3.jpg";

const JellyFish = () => {
  return (
    <div>
       <div className={style.container_jellyfish} id="jellyfish">
       <div className={style.content_title}>
              <h3>Найменша тварина</h3>
            </div>
        <div className={style.jellyfish}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={jellyfish1} alt="jellyfish" />
              <Carousel.Caption>
                <h3>Медуза-дзвоник</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={jellyfish2} alt="jellyfish" />

              <Carousel.Caption>
                <h3>Медуза-дзвоник</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={jellyfish3} alt="jellyfish" />

              <Carousel.Caption>
                <h3>Медуза-дзвоник</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>
           

            <p>1. Ця медуза має діаметр всього 0,5 мм.</p>
            <p>
              2. Володіє унікальною здатністю до безсмертя.Вона
              може здійснювати процес, що дозволяє їй перетворювати одну клітину
              в іншу і, практично, безкінечно відновлювати свою життєву
              циклічність.
            </p>
            <p>
              3. Медуза-дзвоник харчується планктоном, дрібними рибами та іншими
              організмами.
            </p>
            <p>
              4. Зустрічається в різних частинах світу. Може бути
              знайдена в тропічних і помірних водах уздовж узбережжя та у
              відкритому океані.
            </p>
            <p>5. Медуза-дзвоник розмножується статево. Вона відкладає яйця.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JellyFish;
