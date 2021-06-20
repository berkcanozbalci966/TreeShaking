import React, { useEffect, useState } from "react";
import useStateRef from "react-usestateref";
import { ReactComponent as AppleImg } from "../../global/assets/images/apple.svg";
import "./Apple.scss";

function Apple() {
  const randomStart = (coordinates) => {
    if (coordinates === "y") {
      let randomY = Math.random() * 53;
      return randomY < 47 && randomY > 15 ? randomY : randomStart("y");
    } else {
      let randomY = Math.random() * 61;
      return randomY < 61 && randomY > 20 ? randomY : randomStart("y");
    }
  };
  const [top, setTop, yRef] = useStateRef(randomStart("y"));
  const [left, setLeft, xRef] = useStateRef(randomStart());

  useEffect(() => {
    setTimeout(() => {
      const yInterval = setInterval(() => {
        setTop(yRef.current + 1);
        console.log(yRef.current);
        yRef.current >= 90 && clearInterval(yInterval);
      }, 50);
    }, 4000);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: top + "%",
        left: left + "%",
      }}
    >
      <AppleImg className="apple" />
    </div>
  );
}

export default Apple;
