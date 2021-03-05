import React from "react";
import { DeleteOrder, Order, OrderData } from "./HomeElements";
import { AiOutlineClose } from "react-icons/ai";

const TableMng = (props) => {
  const handleDishDelete = (e) => {
    // props.tablesList.filter((el) => console.log(el));
    // let neededIndex = undefined;
    // props.tablesList.map((el, index) => {
    //   if (el.key == props.selectedTable[0].key) neededIndex = index;
    // });
    // // props.setTablesList(
    // const test = props.tablesList[neededIndex].orders.filter(
    //   (el) => el.key != props.order.key
    // );
    // console.log(test);
    // );
  };

  return (
    <>
      <Order>
        <OrderData>{props.order.dishName}</OrderData>
        <OrderData>Rs.20000</OrderData>
        <OrderData>x{props.order.dishQty}</OrderData>
        <OrderData>Rs.20000</OrderData>
        <OrderData>
          <DeleteOrder onClick={handleDishDelete}>
            <AiOutlineClose />
          </DeleteOrder>
        </OrderData>
      </Order>
    </>
  );
};

export default TableMng;

// {
//   tablesList.filter((el) => el.key == selectedTable).length ? (
//     <>
//       <Form style={{ border: "none" }} onSubmit={handleOrderSubmit}>
//         <Input
//           required={true}
//           type="text"
//           placeholder="dish name"
//           name="dishName"
//           value={props.dishObj.dishName}
//           onChange={handleDishChange}
//         />
//         <Input
//           required={true}
//           type="number"
//           placeholder="qty"
//           name="dishQty"
//           value={props.dishObj.dishQty}
//           onChange={handleDishChange}
//         />
//         <Button type="submit">Add</Button>
//       </Form>
//       {table[0] && (
//         <OrderTableContainer>
//           <OrdersTable>
//             <thead>
//               <tr>
//                 <OrderDataHead>Items</OrderDataHead>
//                 <OrderDataHead>Rate</OrderDataHead>
//                 <OrderDataHead>Quantity</OrderDataHead>
//                 <OrderDataHead>Amount</OrderDataHead>
//                 <OrderDataHead></OrderDataHead>
//               </tr>
//             </thead>
//             <tbody>
//               {table[0].orders.map((order, index) => (
//                 <Order key={index} order={order} />
//               ))}
//             </tbody>
//           </OrdersTable>
//         </OrderTableContainer>
//       )}
//       <Button style={{ placeSelf: "flex-end" }} type="submit">
//         Print
//       </Button>
//     </>
//   ) : // selectedTable={selectedTable}
//   // tablesList={tablesList}
//   // table={tablesList.filter((el) => el.key == selectedTable)}
//   // handleDishChange={handleDishChange}
//   // handleOrderSubmit={handleOrderSubmit}
//   // dishObj={dishObj}
//   // />
//   null;
// }
