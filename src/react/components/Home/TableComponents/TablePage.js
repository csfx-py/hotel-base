import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useLocalStorage from "../../../useLocalStorage";
import {
  Button,
  Form,
  FormGroup,
  FormSpan,
  Input,
  OrdersContainer,
  SuggestDiv,
  SuggestList,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableData,
} from "../HomeElements";
import TableCard from "./TableCard";
import OrderRow from "./OrderRow";
import SuggestItem from "./SuggestItem";

const TablePage = (props) => {
  const [tableName, setTableName] = useState("");
  const [tableID, setTableID] = useLocalStorage(
    "tableID",
    localStorage.getItem("tableID") || 0
  );
  const [selectedTable, setSelectedTable] = useState(null);
  const [orderItem, setOrderItem] = useState({
    dish: "",
    price: "",
    qty: "",
    total: "",
    key: null,
  });
  const [suggest, setSuggest] = useState({ state: false, source: [] });

  const horizontalScroll = (e) => {
    const delta = Math.max(
      -1,
      Math.min(1, e.nativeEvent.wheelDelta || -e.nativeEvent.detail)
    );
    e.currentTarget.scrollLeft -= delta * 20;
  };

  const handleAddOrderChange = (e) => {
    const { name, value } = e.target;
    setOrderItem({
      ...orderItem,
      [name]: value,
    });
    setSuggest({
      ...suggest,
      source: props.Menu.filter((el) =>
        el.name.toLowerCase().match(value.toLowerCase())
      ),
    });
  };

  const handleFocus = (e) => {
    setSuggest({ ...suggest, source: props.Menu, state: true });
  };

  const handleBlur = (e) => {
    setSuggest({ ...suggest, state: false });
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.setTableList(
            [...props.TableList, { key: tableID, name: tableName, orders: [] }],
            setTableID(tableID + 1)
          );
          setTableName("");
        }}
      >
        <FormSpan>{props.settings.companyName}</FormSpan>
        <FormGroup>
          <Input
            minLength={1}
            maxLength={7}
            required={true}
            type="text"
            placeholder="Table name"
            value={tableName}
            onChange={(e) => {
              setTableName(e.target.value);
            }}
          />
          <Button type="submit">Add Table</Button>
        </FormGroup>
      </Form>
      <TableContainer onWheel={horizontalScroll}>
        {props.TableList.map((obj, index) => (
          <TableCard
            key={index}
            obj={obj}
            objIndex={index}
            TableList={props.TableList}
            setTableList={props.setTableList}
            setSelectedTable={setSelectedTable}
          />
        ))}
      </TableContainer>
      {selectedTable ? (
        <>
          <Form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              orderItem.key = selectedTable.object.orders.length
                ? selectedTable.object.orders[
                    selectedTable.object.orders.length - 1
                  ].key + 1
                : 0;
              props.TableList[selectedTable.index].orders = [
                ...props.TableList[selectedTable.index].orders,
                orderItem,
              ];
              props.setTableList([...props.TableList]);
              setOrderItem({ dish: "", qty: "" });
            }}
          >
            <FormGroup>
              <div style={{ position: "relative" }}>
                <Input
                  onChange={handleAddOrderChange}
                  required={true}
                  value={orderItem.dish}
                  name="dish"
                  type="text"
                  placeholder="Dish name"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {suggest.state && (
                  <SuggestDiv>
                    <SuggestList>
                      {suggest.source.map((obj, index) => (
                        <SuggestItem
                          key={index}
                          obj={obj}
                          setOrderItem={setOrderItem}
                          orderItem={orderItem}
                        />
                      ))}
                    </SuggestList>
                  </SuggestDiv>
                )}
              </div>
              <Input
                onChange={handleAddOrderChange}
                required={true}
                value={orderItem.qty}
                name="qty"
                type="number"
                placeholder="Quantity"
              />
              <Button type="submit">
                <AiOutlinePlus />
              </Button>
            </FormGroup>
          </Form>
          <OrdersContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHead>Particular</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </thead>
              <tbody>
                {props.TableList[selectedTable.index].orders.map(
                  (obj, index) => (
                    <OrderRow
                      key={index}
                      obj={obj}
                      objIndex={index}
                      selectedTable={selectedTable}
                      TableList={props.TableList}
                      setTableList={props.setTableList}
                    />
                  )
                )}
                {props.TableList[selectedTable.index].orders.length > 0 ? (
                  <TableRow>
                    <TableData
                      style={{ textAlign: "right", fontWeight: "bold" }}
                    >
                      Total
                    </TableData>
                    <TableData></TableData>
                    <TableData></TableData>
                    <TableData style={{ fontWeight: "bold" }}>
                      Rs.
                      {props.TableList[selectedTable.index].orders
                        .map((obj) => obj.price * obj.qty)
                        .reduce((sum, item) => item + sum)}
                    </TableData>
                    <TableData></TableData>
                  </TableRow>
                ) : null}
              </tbody>
            </Table>
          </OrdersContainer>
          <Button
            style={{ placeSelf: "flex-end" }}
            onClick={(e) => {
              BridgeApi.printApi.sendPrint({
                orders: props.TableList[selectedTable.index].orders,
              });
            }}
          >
            Print
          </Button>
        </>
      ) : null}
    </>
  );
};

export default TablePage;
