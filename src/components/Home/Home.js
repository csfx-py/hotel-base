import React, { useState } from "react";
import {
  Button,
  HomeContainer,
  HomeMain,
  MenuContainer,
  SideBar,
  TableContainer,
} from "./HomeElements";
import TableForm from "./TableForm";
import TableCard from "./TableCard";
import useLocalStorage from "../../useLocalStorage";

const Home = (props) => {
  const horizontalScroll = (e) => {
    const delta = Math.max(
      -1,
      Math.min(1, e.nativeEvent.wheelDelta || -e.nativeEvent.detail)
    );
    e.currentTarget.scrollLeft -= delta * 10;
  };

  const [lastTableID, setLastTableID] = useLocalStorage(
    "lastTable",
    localStorage.getItem("lastTable") || 0
  );
  const [tablesList, setTablesList] = useState([]);
  const [tableName, setTableName] = useState("");
  const [companyName, setCompanyName] = useState("Csfx.py");

  const handleTableNameChange = (e) => {
    setTableName(e.target.value);
  };

  const handleTableSubmit = async (e) => {
    e.preventDefault();
    setLastTableID(parseInt(lastTableID) + 1);
    setTablesList([...tablesList, { key: lastTableID, name: tableName }]);
    setTableName("");
    console.log(tablesList);
  };

  return (
    <HomeContainer>
      <SideBar />
      <HomeMain>
        <TableForm
          handleTableSubmit={handleTableSubmit}
          handleTableNameChange={handleTableNameChange}
          tableName={tableName}
          companyName={companyName}
        />
        <TableContainer onWheel={horizontalScroll}>
          {tablesList.map((table, index) => (
            <TableCard tableData={table} key={index} />
          ))}
        </TableContainer>
        <MenuContainer></MenuContainer>
        <Button onClick={props.logout}>Logout</Button>
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;
