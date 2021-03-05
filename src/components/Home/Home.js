import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  HomeContainer,
  HomeMain,
  Input,
  MenuContainer,
  OrderDataHead,
  OrdersTable,
  OrderTableContainer,
  SideBar,
  SideButton,
  TableContainer,
} from "./HomeElements";
import TableForm from "./TableForm";
import TableCard from "./TableCard";
import OrderRow from "./OrderRow";
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
    localStorage.getItem("lastTable") || 1
  );
  const [tablesList, setTablesList] = useLocalStorage("tablesList", {});
  const [tableName, setTableName] = useState("");
  const [companyName, setCompanyName] = useState("Csfx.py");
  const [selectedTable, setSelectedTable] = useState(null);
  const [dishObj, setDishObj] = useState({
    dishName: "",
    dishQty: "",
    key: 0,
  });
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {}, [tablesList, selectedTable]);

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
    dishObj.key = selectedTable[0].orders.length;
    selectedTable[0].orders = [...selectedTable[0].orders, dishObj];
    setTablesList([...tablesList]);
    setDishObj({ dishName: "", dishQty: "" });
  };

  return (
    <HomeContainer>
      <SideBar>
        <div></div>
        <SideButton onClick={props.logout}>
          <BiLogOut />
          Logout
        </SideButton>
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
          {selectedTable ? (
            <>
              <Form style={{ border: "none" }} onSubmit={handleOrderSubmit}>
                <Input
                  required={true}
                  type="text"
                  placeholder="dish name"
                  name="dishName"
                  value={dishObj.dishName}
                  onChange={handleDishChange}
                />
                <Input
                  required={true}
                  type="number"
                  placeholder="qty"
                  name="dishQty"
                  value={dishObj.dishQty}
                  onChange={handleDishChange}
                />
                <Button type="submit">Add</Button>
              </Form>
              {selectedTable && (
                <>
                  <OrderTableContainer>
                    <OrdersTable>
                      <thead>
                        <tr>
                          <OrderDataHead>Items</OrderDataHead>
                          <OrderDataHead>Rate</OrderDataHead>
                          <OrderDataHead>Quantity</OrderDataHead>
                          <OrderDataHead>Amount</OrderDataHead>
                          <OrderDataHead></OrderDataHead>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTable[0].orders.map((order, index) => (
                          <OrderRow
                            order={order}
                            key={index}
                            selectedTable={selectedTable}
                            setTablesList={setTablesList}
                            tablesList={tablesList}
                          />
                        ))}
                      </tbody>
                    </OrdersTable>
                  </OrderTableContainer>
                  <Button style={{ placeSelf: "flex-end" }} type="submit">
                    Print
                  </Button>
                </>
              )}
            </>
          ) : null}
        </MenuContainer>
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;
