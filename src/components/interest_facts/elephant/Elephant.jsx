import React from "react";
import style from "../elephant/elephant.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import elephant1 from "../../../img/elephant/elephant1.jpg";
import elephant2 from "../../../img/elephant/elephant2.webp";
import elephant3 from "../../../img/elephant/elephant3.jpg";

const Elephant = () => {
  return (
    <div>
      <div className={style.container_elephant} id="elephant">
      <div className={style.content_title}>
              <h3>Найсильніша тварина</h3>
            </div>
        <div className={style.elephant}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={elephant1} alt="elephant" />
              <Carousel.Caption>
                <h3>Індійський слон</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={elephant2} alt="elephant" />

              <Carousel.Caption>
                <h3>Індійський слон</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={elephant3} alt="elephant" />

              <Carousel.Caption>
                <h3>Індійський слон</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>
            <p>
              1. Індійські слони мають величезну фізичну силу. Вони можуть
              піднімати та переносити важкі предмети до 9 тон.
            </p>
            <p>
              2. Слони можуть досягати висоти до 3-3,5 метра в плечах і важити
              від 4 до 5,5 тон.
            </p>
            <p>
              3.Слони мають довгий гнучкий хобот, який є їхньою основною
              знахідкою. Вони використовують його для харчування, пиття, дотику,
              взаємодії з оточуючим середовищем і вираження емоцій.
            </p>
            <p>
              3. Слони є травоїдними і харчуються різноманітними рослинами,
              включаючи траву, листя, гілки, кору та плоди. Вони можуть
              споживати до 150 кг їжі на день.
            </p>
            <p>4. У дикій природі вони можуть жити від 60 до 70 років.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elephant;
