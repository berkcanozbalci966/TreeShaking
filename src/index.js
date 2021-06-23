import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import "./global/style/style.scss";

// Import Redux
import { Provider, useSelector } from "react-redux";
import store from "./store/store";

// Components
import Score from "./components/Score/Score";
import Tree from "./components/Tree/Tree";
import Basket from "./components/Basket/Basket";
import ShakeButton from "./components/ShakeButton/ShakeButton";

const App = () => {
  const shakeTreeState = useSelector(
    (state) => state.shakeButton.shakeTreeState
  );

  const score = useSelector((state) => state.tree.score);

  return (
    <div style={{ flexDirection: "column" }} className="container">
      <Score score={score} />
      <Tree shakeTreeState={shakeTreeState} />
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
