import React from "react";
import { SuggestListItem } from "../HomeElements";

const SuggestItem = (props) => {
  const handleMouse = (e) => {
    e.stopPropagation();
    props.setOrderItem({
      ...props.orderItem,
      dish: props.obj.name,
      price: props.obj.price,
    });
  };

  return (
    <SuggestListItem onMouseDown={handleMouse}>
      <div>{props.obj.name}</div>
      <div>Rs.{props.obj.price}</div>
    </SuggestListItem>
  );
};

export default SuggestItem;
