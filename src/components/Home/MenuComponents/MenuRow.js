import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CloseButton, TableData, TableRow } from "../HomeElements";

const MenuRow = (props) => {
  const handleDelete = (e) => {
    props.setMenu(props.Menu.filter((el) => el.id != props.obj.id));
  };

  return (
    <TableRow>
      <TableData>{props.obj.name}</TableData>
      <TableData>Rs.{props.obj.price}</TableData>
      <TableData>
        <CloseButton onClick={handleDelete}>
          <AiOutlineClose />
        </CloseButton>
      </TableData>
    </TableRow>
  );
};

export default MenuRow;
