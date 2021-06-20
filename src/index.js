import React, { useState } from "react";
import ReactDOM from "react-dom";
import "animate.css";
import "./global/style/style.scss";

// Import Redux
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

// Components

import Tree from "./components/Tree/Tree";
import Basket from "./components/Basket/Basket";
import ShakeButton from "./components/ShakeButton/ShakeButton";

const App = () => {
  const shakeTree = useSelector((state) => state.tree.shakeTreeState);
  return (
    <div className="container">
      <Tree
        className={
          shakeTree ? "animate__animated animate__wobble animate__slower" : null
        }
      />
      <Basket />
      <ShakeButton />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
