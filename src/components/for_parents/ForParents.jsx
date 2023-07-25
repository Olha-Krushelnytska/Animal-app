import React from "react";
import style from "../for_parents/for_parents.module.css";
import Accordion from "react-bootstrap/Accordion";

const ForParents = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container_title}>
        <div className={style.container_link}>
          <a className={style.link} href="http://localhost:3000/">
            На головну
          </a>
          <div>
            <div className={style.title_main}>
              <h3>Шановні батьки,</h3>
              <h4>
                з радістю представляю вам новий додаток, який не тільки
                розважатиме вашу дитину, але й допоможе їй вивчати англійську
                мову та відкривати чарівний світ тварин
              </h4>
            </div>
            <div className={style.subtitle}>
              <h5>Важливість цього додатку полягає в таких аспектах:</h5>
            </div>
          </div>
        </div>
      </div>

      <div className={style.container_main}>
        <Accordion className={style.accordion}>
          <Accordion.Item eventKey="0">
            <Accordion.Header className={style.accordion_content}>
              Ознайомлення зі світом тварин
            </Accordion.Header>
            <Accordion.Body className={style.accordion_content}>
              Додаток пропонує дитині цікаві інформаційні картки про різні види
              тварин. Вона зможе дізнатися про їх характеристики, особливості
              життя, місце існування та багато іншого. Це розширить її знання
              про тваринний світ і сприятиме розвитку допитливості.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Вивчення англійської мови</Accordion.Header>
            <Accordion.Body className={style.accordion_content}>
              Додаток надає дітям можливість вчитися англійської мови у
              захоплюючому форматі. Вони зможуть побачити, як написані назви
              тварин англійською, почути їх вимову та навчитися новим словам та
              фразам.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Розвиток мовлення та комунікативних навичок
            </Accordion.Header>
            <Accordion.Body className={style.accordion_content}>
              Використання додатка сприятиме розвитку мовлення дитини, адже вона
              матиме можливість описувати тварин, розповідати про їх
              характеристики та обговорювати їх з вами. Це також сприятиме
              розвитку комунікативних навичок і покращенню вміння висловлювати
              свої думки.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Сімейна взаємодія</Accordion.Header>
            <Accordion.Body className={style.accordion_content}>
              Використання додатка може стати спільною активністю для всієї
              родини. Ви можете разом з дитиною досліджувати світ тварин,
              обговорювати факти та спілкуватися про те, що вона вивчає. Це
              зміцнить ваші зв'язки та створить спільні приємні моменти.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className={style.container_resume}>
        <div className={style.content}>
          <p>
            Цей додаток буде корисним та захоплюючим інструментом для вивчення
            англійської мови та пізнання світу тварин.
          </p>
        </div>
        <div className={style.content}>
          <p>
            Ваша дитина буде в захваті від цього досвіду. Ви зможете
            спостерігати як вона засвоює нові знання та розвивається.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForParents;
