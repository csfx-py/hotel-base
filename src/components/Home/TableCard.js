import React from "react";
import { TableCardDiv, TableClose, TableName } from "./HomeElements";

const TableCard = (props) => {
  return (
    <div>
      <TableCardDiv>
        <TableName>{props.tableData.name}</TableName>
        <TableClose>x</TableClose>
      </TableCardDiv>
    </div>
  );
};

export default TableCard;
