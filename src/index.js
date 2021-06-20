import React, { useState } from "react";
import ReactDOM from "react-dom";
import "animate.css";
import "./global/style/style.scss";

// Import Redux
import { Provider } from "react-redux";
import store from "./store/store";

// Components

import Tree from "./components/Tree/Tree";
import Apple from "./components/Apple/Apple";
import Basket from "./components/Basket/Basket";
import ShakeButton from "./components/ShakeButton/ShakeButton";

const App = () => {
  const [shakeTree, setShakeTree] = useState(false);
  return (
    <div className="container">
      <Tree
        className={
          shakeTree ? "animate__animated animate__wobble animate__slower" : null
        }
      >
        <Apple />
      </Tree>
      <Basket />
      <ShakeButton
        treeProp={{
          shakeTree,
          setShakeTree,
        }}
      />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
