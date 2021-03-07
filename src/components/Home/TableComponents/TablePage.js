import React, { useEffect, useState } from "react";
import useLocalStorage from "../../../useLocalStorage";
import {
  Button,
  Company,
  Form,
  FormGroup,
  Input,
  TableContainer,
} from "../HomeElements";
import TableCard from "./TableCard";

const TablePage = (props) => {
  const [tableName, setTableName] = useState("");
  const [tableID, setTableID] = useLocalStorage(
    "tableID",
    localStorage.getItem("tableID") || 0
  );
  const [selectedTable, setSelectedTable] = useState(null);

  const horizontalScroll = (e) => {
    const delta = Math.max(
      -1,
      Math.min(1, e.nativeEvent.wheelDelta || -e.nativeEvent.detail)
    );
    e.currentTarget.scrollLeft -= delta * 20;
  };

  const handleChange = (e) => {
    setTableName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTableList(
      [...props.TableList, { key: tableID, name: tableName, orders: [] }],
      setTableID(tableID + 1)
    );
    setTableName("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Company>{props.settings.companyName}</Company>
        <FormGroup style={{ display: "flex" }}>
          <Input
            minLength={1}
            maxLength={7}
            required={true}
            type="text"
            placeholder="Table name"
            value={tableName}
            onChange={handleChange}
          />
          <Button type="submit">Add Table</Button>
        </FormGroup>
      </Form>
      <TableContainer onWheel={horizontalScroll}>
        {props.TableList.map((obj, index) => (
          <TableCard
            key={index}
            obj={obj}
            TableList={props.TableList}
            setTableList={props.setTableList}
            setSelectedTable={setSelectedTable}
          />
        ))}
      </TableContainer>
      <>
        {selectedTable
          ? props.TableList[selectedTable.index].orders.map((obj, index) =>
              console.log(obj)
            )
          : null}
      </>
    </>
  );
};

export default TablePage;
