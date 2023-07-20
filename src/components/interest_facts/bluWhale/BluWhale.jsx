import React from "react";
import style from "../bluWhale/bluWhale.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import whale1 from "../../../img/bluWhale/whale1.jpg";
import whale2 from "../../../img/bluWhale/whale2.jpg";
import whale3 from "../../../img/bluWhale/whale3.png";

const BluWhale = () => {
  return (
    <div>
      <div className={style.container_whale} id="whale">
        <div className={style.content_title}>
          <h3>Найбільша тварина</h3>
        </div>
        <div className={style.whale}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={whale1} alt="bluWhale" />
              <Carousel.Caption>
                <h3>Синій кит</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={whale2} alt="bluWhale" />

              <Carousel.Caption>
                <h3>Синій кит</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={whale3} alt="bluWhale" />

              <Carousel.Caption>
                <h3>Синій кит</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>
            <p>1. Вага 150 тон і довжина 33 метри.</p>
            <p>
              2. Гігантські сині кити живляться майже виключно дрібним
              планктоном.
            </p>
            <p>3. Сині кити живуть близько 80-90 років.</p>
            <p>
              4. Коли синій кит видихає, утворюється фонтан з висотою 9-10
              метрів.
            </p>
            <p>
              5. Синій кит має найбільше серце в світі. Воно важить близько
              тони. Кількість крові в організмі - більше 3тис тон.
            </p>

            <p>
              6. При переслідуванні йде по прямій з швидкістю до 24 кілометрів
              на годину, даючи невеликі фонтани кожні 30 — 40 с.
            </p>
            <p>7. Кити можуть не спати 100 днів і не їсти до 10 місяців.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluWhale;
