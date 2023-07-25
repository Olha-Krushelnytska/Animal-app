import React, { useState } from "react";
import style from "../main/body.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "../../img/search.png";
import env from "react-dotenv";
import Spinner from "../spinner/Spinner";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const changePhoto = async () => {
    setInputValue("");
    setLoading(true);
    try {
      const response = await fetch(
        `${env.API_URL}${inputValue}&client_id=${env.CLIENT_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setResult(data.results));
      setBtnDisabled(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      changePhoto();
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      setBtnDisabled(false);
    } else setBtnDisabled(true);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container_search}>
        <form className={style.form} onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">
              <img className={style.img_search} src={search} alt="search" />
            </InputGroup.Text>
            <Form.Control
              value={inputValue}
              onChange={handleChange}
              placeholder="ANIMAL"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button
            disabled={btnDisabled}
            className={style.btn}
            type="submit"
            variant="primary"
          >
            Search
          </Button>
        </form>
        <div className={style.spinner}>{loading ? <Spinner /> : ""}</div>
      </div>

      <div className={style.container}>
        <div>
          {result[0] ? (
            <div key={result[0].id}>
              <a href="#">
                <img
                  className={style.img_animal}
                  src={result[0].urls?.regular}
                  alt="animal"
                />
              </a>
            </div>
          ) : (
            <p className={style.message}>
              Please, enter the correct name of the animal in English
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
