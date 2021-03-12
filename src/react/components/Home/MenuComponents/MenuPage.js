import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import MenuRow from "./MenuRow";
import {
  Button,
  Form,
  FormGroup,
  FormSpan,
  Input,
  MenuTableContainer,
  Table,
  TableHead,
  TableRow,
} from "../HomeElements";
import useLocalStorage from "../../../useLocalStorage";

const MenuPage = (props) => {
  const [menuItem, setMenuItem] = useState({
    name: "",
    price: "",
    id: null,
  });

  const [menuID, setMenuID] = useLocalStorage(
    "menuID",
    localStorage.getItem("menuID") || 0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({
      ...menuItem,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    menuItem.id = menuID;
    props.setMenu([...props.Menu, menuItem]);
    setMenuID(menuID + 1);
    setMenuItem({
      name: "",
      price: "",
      id: null,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormSpan>{props.settings.companyName}</FormSpan>
        <FormGroup>
          <Input
            type="text"
            placeholder="Dish Name"
            required={true}
            name="name"
            value={menuItem.name}
            onChange={handleChange}
          />
          <Input
            type="number"
            placeholder="Dish Price"
            required={true}
            name="price"
            value={menuItem.price}
            onChange={handleChange}
          />
          <Button>
            <AiOutlinePlus />
          </Button>
        </FormGroup>
      </Form>
      <MenuTableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </thead>
          <tbody>
            {props.Menu.map((obj, index) => (
              <MenuRow
                key={index}
                obj={obj}
                Menu={props.Menu}
                setMenu={props.setMenu}
              />
            ))}
          </tbody>
        </Table>
      </MenuTableContainer>
    </>
  );
};

export default MenuPage;
