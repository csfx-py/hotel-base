import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CloseButton, TableData, TableRow } from "../HomeElements";

const OrderRow = (props) => {
  const [selectedItem, setSelectedItem] = useState({
    index: props.index,
    obj: props.obj,
  });

  const handleDishDelete = (e) => {
    props.TableList[props.selectedTable.index].orders.splice(props.objIndex, 1);
    props.setTableList([...props.TableList]);
  };

  return (
    <>
      <TableRow>
        <TableData>{props.obj.dish}</TableData>
        <TableData>Rs.{props.obj.price}</TableData>
        <TableData>x{props.obj.qty}</TableData>
        <TableData>Rs.{props.obj.price * props.obj.qty}</TableData>
        <TableData>
          <CloseButton onClick={handleDishDelete}>
            <AiOutlineClose />
          </CloseButton>
        </TableData>
      </TableRow>
    </>
  );
};

export default OrderRow;
