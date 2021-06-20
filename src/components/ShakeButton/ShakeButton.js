import React from "react";

function ShakeButton(props) {
  const { shakeTree, setShakeTree } = props.treeProp;

  const shakeThatTree = () => {
    if (!shakeTree) {
      setShakeTree(true);
      setTimeout(() => {
        setShakeTree(false);
      }, 3000);
    }
  };

  return (
    <div>
      <button onClick={() => shakeThatTree()}>Shake that tree</button>
    </div>
  );
}

export default ShakeButton;
