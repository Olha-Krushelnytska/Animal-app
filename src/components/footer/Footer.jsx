import React from "react";
import style from "../footer/footer.module.css";

const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <p>Зануртесь у світ тварин та дізнайтеся щось нове!</p>
      <div className={style.main_container}>
        <div>Додаток створила Крушельницька Ольга</div>
        <div className={style.contacts}>
          <ul>
            <li className={style.li}>Можна зв'язатися зі мною:</li>
            <li className={style.li}>Телефоном: (067)71-91-043</li>
            <li className={style.li}>Поштою: <a className={style.mail} href="mailto:zima000@ukr.net"> zima000@ukr.net</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;