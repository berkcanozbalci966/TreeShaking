import React from "react";
import { ReactComponent as BasketIcon } from "../../global/assets/images/basket.svg";

import "./Basket.scss";

function Basket() {
  return (
    <div>
      <BasketIcon className="basket" />
    </div>
  );
}

export default Basket;
