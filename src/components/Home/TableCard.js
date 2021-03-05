import React, { useState } from "react";
import { TableCardDiv, TableClose, TableName } from "./HomeElements";
import { AiOutlineClose } from "react-icons/ai";

const TableCard = (props) => {
  const handleTableDelete = (e) => {
    e.stopPropagation();
    props.setSelectedTable(null);
    props.setTablesList(
      props.tablesList.filter((el) => el.key !== props.tableData.key)
    );
  };

  const selectTable = () => {
    props.setSelectedTable(
      props.tablesList.filter((el) => el.key == props.tableData.key)
    );
  };

  return (
    <TableCardDiv onClick={selectTable}>
      <TableName>{props.tableData.name}</TableName>
      <TableClose onClick={handleTableDelete}>
        <AiOutlineClose size="1.3em" />
      </TableClose>
    </TableCardDiv>
  );
};

export default TableCard;
