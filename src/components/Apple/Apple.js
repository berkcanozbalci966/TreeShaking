import React, { useEffect } from "react";
import useStateRef from "react-usestateref";
import { ReactComponent as AppleImg } from "../../global/assets/images/apple.svg";
import "./Apple.scss";

function Apple(props) {
  const { coordinate } = props;
  const [appleLocation, setAppleLocation, locationRef] =
    useStateRef(coordinate);

  useEffect(() => {
    // Drop Apples with timeout
    setTimeout(() => {
      const yInterval = setInterval(() => {
        setAppleLocation({
          y: locationRef.current.y + 1,
          done: false,
        });

        if (locationRef.current.y >= 90) {
          clearInterval(yInterval);
          // Set drop status done
          setAppleLocation({ y: locationRef.current.y, done: true });
        }
      }, 50);
    }, 3000);
  }, [locationRef, setAppleLocation]);

  console.log(appleLocation);
  return (
    <div
      style={{
        position: "absolute",
        top: appleLocation.y + "%",
        left: appleLocation.x + "%",
      }}
    >
      <AppleImg
        style={{ display: appleLocation.done ? "none" : "block" }}
        className="apple"
      />
    </div>
  );
}

export default Apple;
