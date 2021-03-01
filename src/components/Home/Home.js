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
import TableMng from "./TableMng";

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
    localStorage.getItem("lastTable") || 1
  );
  const [tablesList, setTablesList] = useLocalStorage("tablesList", {});
  const [tableName, setTableName] = useState("");
  const [companyName, setCompanyName] = useState("Csfx.py");
  const [selectedTable, setSelectedTable] = useState(null);
  const [dishObj, setDishObj] = useState({ dishName: "", dishQty: "" });

  const handleTableNameChange = (e) => {
    setTableName(e.target.value);
  };

  const handleTableSubmit = (e) => {
    e.preventDefault();
    setLastTableID(parseInt(lastTableID) + 1);
    setTablesList([
      ...tablesList,
      { key: lastTableID, name: tableName, orders: [] },
    ]);
    setTableName("");
  };

  const handleDishChange = (e) => {
    const { name, value } = e.target;
    setDishObj({
      ...dishObj,
      [name]: value,
    });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const table = tablesList.filter((el) => el.key == selectedTable);
    table[0].orders = [...table[0].orders, dishObj];
    setTablesList([...tablesList]);
  };

  return (
    <HomeContainer>
      <SideBar>
        <div></div>
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
              setSelectedTable={setSelectedTable}
              tablesList={tablesList}
              tableData={table}
              key={index}
              setTablesList={setTablesList}
            />
          ))}
        </TableContainer>
        <MenuContainer>
          {!selectedTable ? null : (
            <div>
              <TableMng
                selectedTable={selectedTable}
                tablesList={tablesList}
                table={tablesList.filter((el) => el.key == selectedTable)}
                handleDishChange={handleDishChange}
                handleOrderSubmit={handleOrderSubmit}
                dishObj={dishObj}
              />
            </div>
          )}
        </MenuContainer>
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;
