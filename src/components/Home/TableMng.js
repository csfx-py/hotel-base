import React, { useEffect } from "react";
import { Button, Form, Input, Order, Orders } from "./HomeElements";

const TableMng = (props) => {
  useEffect(() => {}, [props.table]);
  return (
    <div>
      <Form style={{ border: "none" }} onSubmit={props.handleOrderSubmit}>
        <Input
          required={true}
          type="text"
          placeholder="dish name"
          name="dishName"
          value={props.dishObj.dishName}
          onChange={props.handleDishChange}
        />
        <Input
          required={true}
          type="number"
          placeholder="qty"
          name="dishQty"
          value={props.dishObj.dishQty}
          onChange={props.handleDishChange}
        />
        <Button type="submit">Add</Button>
      </Form>
      <Orders>
        {props.table[0].orders.map((order, index) => (
          <Order key={index}>
            {order.dishName} x{order.dishQty}
          </Order>
        ))}
      </Orders>
    </div>
  );
};

export default TableMng;
