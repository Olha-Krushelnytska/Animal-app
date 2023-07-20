import React from "react";
import styles from "../notFound/notFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.main_container}>
      <h1>
        Сторінку не знайдено <br /> Будь ласка, спробуйте ще...
      </h1>
    </div>
  );
};

export default NotFound;
