import React from "react";
import style from "../footer/footer.module.css";

const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <div className={style.main_container}>
        <div className={style.contacts}>
          <ul>
            <li className={style.li}>Розробила Крушельницька Ольга</li>
            <li>
              {" "}
              <a
                className={style.mail}
                target="_blank"
                href="https://github.com/Olha-Krushelnytska/Animal-app.git"
              >
                https://github.com/Olha-Krushelnytska/Animal-app.git
              </a>
            </li>
          </ul>
        </div>
        <div className={style.contacts}>
          <ul>
            <li className={style.li}>Можна зв'язатися зі мною:</li>
            <li className={style.li}>Телефоном: (067)71-91-043</li>
            <li className={style.li}>
              Поштою:{" "}
              <a className={style.mail} href="mailto:zima000@ukr.net">
                {" "}
                zima000@ukr.net
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
