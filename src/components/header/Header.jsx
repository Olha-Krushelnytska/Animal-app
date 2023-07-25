import React from "react";
import style from "../header/header.module.css";
import paw from "../../img/paw.png";
import Link from "react-bootstrap/NavLink"

const Header = () => {
  return (
    <div className={style.main_container}>
      <div className={style.facts_info}>
        <Link
          className={style.link_facts}
          href="http://localhost:3000/interest-facts/"
        >
          <div>Цікаві факти</div>
          <div>про тварин</div>
        </Link>
      </div>
      <div className={style.logo_container}>
        <img className={style.paw_img} src={paw} alt="tiger_paw" />
        <div className={style.logo_info}>
          <span>animals </span> <br />
          <span>for you</span>
        </div>
      </div>

      <div>
        <Link
          className={style.link_parents}
          href="http://localhost:3000/for-parents/"
        >
          Для батьків
        </Link>
      </div>
    </div>
  );
};

export default Header;
