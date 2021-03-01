import React, { useState } from "react";
import {
  HomeContainer,
  HomeMain,
  LogOutButton,
  MenuContainer,
  SideBar,
  TableContainer,
} from "./HomeElements";
import TableForm from "./TableForm";
import TableCard from "./TableCard";
import useLocalStorage from "../../useLocalStorage";
import { BiLogOut } from "react-icons/bi";

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
  const [tablesList, setTablesList] = useLocalStorage("tablesList", []);
  const [tableName, setTableName] = useState("");
  const [companyName, setCompanyName] = useState("Csfx.py");

  const handleTableNameChange = (e) => {
    setTableName(e.target.value);
  };

  const handleTableSubmit = (e) => {
    e.preventDefault();
    setLastTableID(parseInt(lastTableID) + 1);
    setTablesList([...tablesList, { key: lastTableID, name: tableName }]);
    setTableName("");
  };

  return (
    <HomeContainer>
      <SideBar>
        <LogOutButton onClick={props.logout}>
          <BiLogOut />
          Logout
        </LogOutButton>
      </SideBar>
      <HomeMain>
        <TableForm
          handleTableSubmit={handleTableSubmit}
          handleTableNameChange={handleTableNameChange}
          tableName={tableName}
          companyName={companyName}
        />
        <TableContainer onWheel={horizontalScroll}>
          {tablesList.map((table, index) => (
            <TableCard
              tablesList={tablesList}
              tableData={table}
              key={index}
              setTablesList={setTablesList}
            />
          ))}
        </TableContainer>
        <MenuContainer></MenuContainer>
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;
