import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CloseButton, TableData, TableRow } from "../HomeElements";

const MenuRow = (props) => {
  const handleDelete = (e) => {
    props.setMenuItems(props.menuItems.filter((el) => el.id != props.obj.id));
    // console.log(props.obj);
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
