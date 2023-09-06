import React from "react";
import "./Top.scss";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import aoharide from "../../../images/aoharide13.jpg";
import blackclover from "../../../images/blackclover26.jpg";
import demonslayer from "../../../images/demonslayer01.jpg";
import haikyu from "../../../images/haikyu20.jpg";
import hunter from "../../../images/hunterhunter24.jpg";
import irumakun from "../../../images/irumakun01.jpg";
import maid from "../../../images/misskobayashisdragonmaid05.jpg";
import psycho from "../../../images/mobpsycho08.jpg";
import kings from "../../../images/rankingofkings09.jpg";
import vagabond from "../../../images/vagabond12.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <AiOutlineArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: 100,
        width: 40,
        height: 40,
        right: -50,
        background: "orange",
        borderRadius: 8,
        padding: 5,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <AiOutlineArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: 100,
        width: 40,
        height: 40,
        left: -50,
        background: "orange",
        borderRadius: 8,
        padding: 5,
      }}
      onClick={onClick}
    />
  );
}

export const Top = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="top">
      <div className="topTitle">
        <p>TOP 10</p>
      </div>

      <div className="topSlide">
        <Slider {...settings}>
          <div className="topSlideR">
            <img src={aoharide} alt="Ao Haru Ride 13" />
          </div>
          <div className="topSlideR">
            <img src={blackclover} alt="Black Clover 26" />
          </div>
          <div className="topSlideR">
            <img src={demonslayer} alt="Demon Slayer 01" />
          </div>
          <div className="topSlideR">
            <img src={haikyu} alt="Haikyu!! 20" />
          </div>
          <div className="topSlideR">
            <img src={hunter} alt="Hunter x Hunter 24" />
          </div>
          <div className="topSlideR">
            <img src={irumakun} alt="Iruma-Kun 01" />
          </div>
          <div className="topSlideR">
            <img src={maid} alt="Miss Kobayashi's Dragon Maid 05" />
          </div>
          <div className="topSlideR">
            <img src={psycho} alt="Mob Psycho 100 08" />
          </div>
          <div className="topSlideR">
            <img src={kings} alt="Ranking of Kings 09" />
          </div>
          <div className="topSlideR">
            <img src={vagabond} alt="Vagabond 12" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
