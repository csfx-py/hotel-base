import React from "react";
import { CloseButton, TableCardDiv, TableName } from "../HomeElements";
import { AiOutlineClose } from "react-icons/ai";

const TableCard = (props) => {
  const handleTableDelete = (e) => {
    e.stopPropagation();
    props.setSelectedTable(null);
    props.setTableList(
      props.TableList.filter((el) => el.key !== props.obj.key)
    );
  };

  const selectTable = () => {
    props.setSelectedTable({
      index: props.TableList.findIndex((el) => el.key == props.obj.key),
      object: props.TableList.filter((el) => el.key == props.obj.key),
    });
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
