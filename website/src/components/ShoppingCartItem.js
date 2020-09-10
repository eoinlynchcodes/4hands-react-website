import React from "react";

const Item = props => {
  console.log(props);
  return (
    <div>
      <div>
        <p>{props.name}</p>
        <button>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
