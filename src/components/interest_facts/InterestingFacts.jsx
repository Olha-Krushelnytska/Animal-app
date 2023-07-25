import React from "react";
import style from "../interest_facts/interesting_facts.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Link  from "react-bootstrap/NavLink";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BluWhale from "./bluWhale/BluWhale";
import JellyFish from "./jellyFish/JellyFish";
import Cheetah from "./cheetah/Cheetah";
import Giraffe from "./giraffe/Giraffe";
import Frog from "./frog/Frog";
import Elephant from "./elephant/Elephant";
import Chimpanzee from "./chimpanzee/Chimpanzee";
import Turtle from "./turtle/Turtle";
import Snake from "./snake/Snake";
import Peacock from "./peacock/Peacock";

function InterestingFacts() {
  return (
    <div className={style.wrapper}>
      <aside className={style.container_nav}>
        <div className={style.container_title}>
          <div className={style.home_link}>
            <Link className={style.link} href="http://localhost:3000/">
              На головну
            </Link>
          </div>
          <div className={style.title}>
            <h2>
              <b>
                {" "}
                Цікаві факти <br /> про тварин
              </b>
            </h2>
          </div>
        </div>

        <ul className={style.list_style}>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#whale">
              Найбільша тварина
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#jellyfish">
              Найменша тварина
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#cheetah">
              Найшвидша тварина
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#giraffe">
              Найвища тварина
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#frog">
              Найотруйніша тварина
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#elephant">
              Найсильніша тварина
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#chimpanzee">
              Найрозумніша тварина
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#snake">
              Найдовша змія
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#turtle">
              Довгожителька
            </AnchorLink>
          </li>
          <li className={style.li_style}>
            <AnchorLink className={style.item} href="#peacock">
              Найкрасивіша тварина
            </AnchorLink>
          </li>
        </ul>
      </aside>

      <div className={style.container_animals}>
        <BluWhale />
        <JellyFish />
        <Cheetah />
        <Giraffe />
        <Frog />
        <Elephant />
        <Chimpanzee />
        <Snake />
        <Turtle />
        <Peacock />
      </div>
    </div>
  );
}

export default InterestingFacts;
