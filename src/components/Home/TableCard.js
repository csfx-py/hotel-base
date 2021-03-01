import React from "react";
import { TableCardDiv, TableClose, TableName } from "./HomeElements";
import { AiOutlineClose } from "react-icons/ai";

const TableCard = (props) => {
  const handleTableDelete = () => {
    props.setTablesList(
      props.tablesList.filter((el) => el.key !== props.tableData.key)
    );
  };
  return (
    <div>
      <TableCardDiv>
        <TableName>{props.tableData.name}</TableName>
        <TableClose onClick={handleTableDelete}>
          <AiOutlineClose size="1.3em" />
        </TableClose>
      </TableCardDiv>
    </div>
  );
};

export default TableCard;
