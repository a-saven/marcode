"use client";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import "./cloud.css";

function cycleColors() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray", "black"];
  let index = 0;

  return new Promise((resolve) => {
    setInterval(() => {
      const currentColor = colors[index];
      document.body.style.backgroundColor = currentColor;
      index = (index + 1) % colors.length;
      resolve(currentColor);
    }, 5000);
  });
}
const Landing: NextPage = () => {
  //   //con;

  cycleColors();

  return (
    <div>
      <Cloud />
    </div>
  );
};

export default Landing;

function Cloud() {
  const [colors, setColors] = useState([
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
  ]);
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor((currentColor + 1) % colors.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [colors, currentColor]);

  return (
    <div className="cloud">
      <div className="cloud-layer" style={{ backgroundColor: colors[currentColor] }}></div>
      <div
        className="cloud-layer"
        style={{
          backgroundColor: colors[currentColor],
          animationDelay: "1s",
          transform: "translateX(20px) translateY(10px)",
        }}
      ></div>
      <div
        className="cloud-layer"
        style={{
          backgroundColor: colors[currentColor],
          animationDelay: "2s",
          transform: "translateX(-20px) translateY(10px)",
        }}
      ></div>
      <div
        className="cloud-layer"
        style={{ backgroundColor: colors[currentColor], animationDelay: "3s", transform: "translateY(20px)" }}
      ></div>
      <div
        className="cloud-layer"
        style={{
          backgroundColor: colors[currentColor],
          animationDelay: "4s",
          transform: "translateX(20px) translateY(-10px)",
        }}
      ></div>
      <div
        className="cloud-layer"
        style={{
          backgroundColor: colors[currentColor],
          animationDelay: "5s",
          transform: "translateX(-20px) translateY(-10px)",
        }}
      ></div>
    </div>
  );
}
