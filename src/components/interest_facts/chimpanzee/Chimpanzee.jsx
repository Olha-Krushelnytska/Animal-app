import React from "react";
import style from "../chimpanzee/chimpanzee.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import chimpanzee1 from "../../../img/chimpanzee/chimpanzee1.jpg";
import chimpanzee2 from "../../../img/chimpanzee/chimpanzee2.jpg";
import chimpanzee3 from "../../../img/chimpanzee/chimpanzee3.webp";

const Chimpanzee = () => {
  return (
    <div>
      <div className={style.container_chimpanzee} id="chimpanzee">
      <div className={style.content_title}>
              <h3>Найрозумніша тварина</h3>
            </div>
        <div className={style.chimpanzee}>
          <Carousel>
            <Carousel.Item>
              <img className={style.img} src={chimpanzee1} alt="chimpanzee" />
              <Carousel.Caption>
                <h3>Шимпанзе</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={chimpanzee2} alt="chimpanzee" />

              <Carousel.Caption>
                <h3>Шимпанзе</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={style.img} src={chimpanzee3} alt="chimpanzee" />

              <Carousel.Caption>
                <h3>Шимпанзе</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.content_main}>
          <div className={style.content_info}>

            <p>
              1. Шимпанзе мають вражаючі когнітивні здібності, включаючи
              здатність до проблемного вирішення, використання інструментів,
              навчання, спостереження та пам'яті. Вони можуть вирішувати складні
              завдання і швидко вчитися новим навичкам.
            </p>
            <p>
              2. Шимпанзе вміють виготовляти та використовувати різні
              інструменти для досягнення своїх цілей. Вони можуть
              використовувати палиці, камені, гілки та інші предмети для
              отримання їжі, захисту або взаємодії з навколишнім середовищем.
            </p>
            <p>3. Шимпанзе передають знання і навички між поколіннями.</p>
            <p>
              4. Шимпанзе відчувають широкий спектр емоцій, включаючи
              радість, смуток, страх, гнів та любов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chimpanzee;
