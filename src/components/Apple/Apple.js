import React, { useEffect } from "react";
import useStateRef from "react-usestateref";
import { ReactComponent as AppleImg } from "../../global/assets/images/apple.svg";
import "./Apple.scss";

function Apple() {
  const randomStart = (coordinates) => {
    let coordinate = {};
    do {
      coordinate.y = Math.random() * 47;
      coordinate.x = Math.random() * 61;
    } while (coordinate.y < 15 || coordinate.x < 20);

    return { left: coordinate.x, top: coordinate.y };
  };

  const [appleLocation, setAppleLocation, locationRef] = useStateRef(
    randomStart()
  );

  useEffect(() => {
    // Drop Apple with timeout
    setTimeout(() => {
      const yInterval = setInterval(() => {
        setAppleLocation({
          top: locationRef.current.top + 1,
        });
        console.log(locationRef.current);
        locationRef.current.top >= 90 && clearInterval(yInterval);
      }, 50);
    }, 3000);
  }, [locationRef, setAppleLocation]);

  return (
    <div
      style={{
        position: "absolute",
        top: appleLocation.top + "%",
        left: appleLocation.left + "%",
      }}
    >
      <AppleImg className="apple" />
    </div>
  );
}

export default Apple;
