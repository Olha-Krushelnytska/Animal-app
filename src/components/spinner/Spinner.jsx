import React from "react";
import style from "../spinner/spinner.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const Spinner = () => {
  return (
    <div className={style.container}>
      <PacmanLoader
        color={"#1E90FF"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
