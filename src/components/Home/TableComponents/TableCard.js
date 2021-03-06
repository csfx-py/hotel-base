import React from "react";
import { CloseButton, TableCardDiv, TableName } from "../HomeElements";
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
      <TableName>{props.obj.name}</TableName>
      <CloseButton
        onClick={handleTableDelete}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          color: "#fff",
        }}
      >
        <AiOutlineClose size="1.3em" />
      </CloseButton>
    </TableCardDiv>
  );
};

export default TableCard;
