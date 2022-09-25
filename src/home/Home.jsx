import React from "react";
import "./home.css";
import rickmorty from "../assets/rickmorty.png";
import eye1 from "../assets/eye1.png";

const Home = () => {

  //home animation
  document.addEventListener("mousemove", (e) => {
   
    const eyes = document.querySelectorAll(".eye");
    const anchor = document.getElementById("anchor");
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
   
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg);

    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    });
  });

  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx); //range(-PI,PI)
    const deg = (rad * 180) / Math.PI; //rads to degs,range(-180,180)
    return deg;
  }

  const mortyeyeleft = {
    top: "133px",
    left: "-189px",
  };

  const mortyeyeright = {
    top: "108px",
    left: "-69px",
  };

  const rickeyeleft = {
    top: "-125px",
    left: "86px",
  };

  const rickeyeright = {
    top: "-132px",
    left: "194px",
  };

  return (
    <div className="home__contaner">
      <main className="home__main">
        <img id="anchor" src={rickmorty}></img>
        <div id="eyes">
          <img id="eyes" className="eye" src={eye1} style={mortyeyeleft}></img>
          <img id="eyes" className="eye" src={eye1} style={mortyeyeright}></img>
          <img id="eyes" className="eye" src={eye1} style={rickeyeleft}></img>
          <img id="eyes" className="eye" src={eye1} style={rickeyeright}></img>
        </div>
      </main>
    </div>
  );
};

export default Home;
