import React, { useState } from "react";
import {
  Button,
  Company,
  HomeContainer,
  HomeMain,
  Input,
  MenuContainer,
  SideBar,
  TableCard,
  TableContainer,
  TableForm,
} from "./HomeElements";

const Home = (props) => {
  const [tableName, setTableName] = useState("");
  const [tables, setTables] = useState([]);

  const handleChange = (e) => {
    setTableName(e.target.value);
    console.log(tableName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      text: tableName,
    });
  };

  const horizontalScroll = (e) => {
    const delta = Math.max(
      -1,
      Math.min(1, e.nativeEvent.wheelDelta || -e.nativeEvent.detail)
    );
    e.currentTarget.scrollLeft -= delta * 10;
  };

  const addTable = (table) => {};

  return (
    <HomeContainer>
      <SideBar />
      <HomeMain>
        <TableForm onSubmit={props.handleSubmit}>
          <Company>Csfx.py</Company>
          <div>
            <Input
              type="text"
              placeholder="Table name"
              value={tableName}
              onChange={handleChange}
            />
            <Button type="submit">Add Table</Button>
          </div>
        </TableForm>
        <TableContainer onWheel={horizontalScroll}>
          <TableCard>test</TableCard>
        </TableContainer>
        <MenuContainer>
          <TableCard>test</TableCard>
        </MenuContainer>
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;
