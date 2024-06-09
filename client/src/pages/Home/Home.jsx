import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import homeLeft from "../../assets/images/home-left.png";
import homeRight from "../../assets/images/home-right.png";
import logo from "../../assets/images/logo.png";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const leftImage = document.querySelector(".home__left-image");
    const rightImage = document.querySelector(".home__right-image");

    setTimeout(() => {
      leftImage.classList.add("slide-in-left");
      rightImage.classList.add("slide-in-right");
    }, 100);
  }, []);

  return (
    <div className="home">
      <img src={homeLeft} alt="Decorative Left" className="home__left-image" />
      <div className="home__content">
        <img src={logo} alt="Daily Spark Logo" className="home__logo" />
        <div className="home__buttons">
          <button
            onClick={() => navigate("/add-entry")}
            className="home__button"
          >
            ADD ENTRY
          </button>
          <p className="home__text">Gratitude unlocks the fullness of life</p>
          <button
            onClick={() => navigate("/view-entries")}
            className="home__button"
          >
            VIEW ENTRIES
          </button>
        </div>
      </div>
      <img
        src={homeRight}
        alt="Decorative Right"
        className="home__right-image"
      />
    </div>
  );
};

export default Home;
