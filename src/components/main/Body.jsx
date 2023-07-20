import React, { useState, useEffect } from "react";
import style from "../main/body.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "../../img/search.png";
import env from "react-dotenv";
import Spinner from "../spinner/Spinner";

const Body = () => {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const changePhoto = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${env.API_URL}${photo}&client_id=${env.CLIENT_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setResult(data.results));
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPhoto();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      setBtnDisabled(false);
    } else setBtnDisabled(true);
    setPhoto(value);
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
              value={photo}
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
            onClick={changePhoto}
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Body;
