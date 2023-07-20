import React from "react";
import style from "../cheetah/cheetah.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import cheetah1 from "../../../img/cheetah/cheetah1.jpg";
import cheetah2 from "../../../img/cheetah/cheetah2.jpg";
import cheetah3 from "../../../img/cheetah/cheetah3.jpg";

const Cheetah = () => {
  return (
    <div>
      <div className={style.container_cheetah} id="cheetah">
      <div className={style.content_title}>
              <h3>Найшвидша тварина</h3>
            </div>
        <div className={style.cheetah}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={cheetah1} alt="cheetah" />
              <Carousel.Caption>
                <h3>Гепард</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={cheetah2} alt="cheetah" />

              <Carousel.Caption>
                <h3>Гепард</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={cheetah3} alt="cheetah" />

              <Carousel.Caption>
                <h3>Гепард</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>
        
            <p>
              1. Гепард - найшвидший земний ссавець і може розвивати швидкість
              до 110-120 кілометрів на годину протягом короткого проміжку часу.
            </p>
            <p>
              2.Гепард - майстер прискорення. Він може розганятися з 0 до 100
              кілометрів на годину всього за 3-4 секунди.
            </p>
            <p>
              3. Гепарди є хорошими мисливцями, використовують свою швидкість
              та маневреність для спіймання своєї здобичі.
            </p>
            <p>
              4. Гепарди є видом, що перебуває під загрозою, і їх чисельність значно зменшилася.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheetah;
