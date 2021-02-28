import React from "react";
import { Button, Company, Input, Form } from "./HomeElements";

const TableForm = (props) => {
  return (
    <div>
      <Form onSubmit={props.handleTableSubmit}>
        <Company>{props.companyName}</Company>
        <div>
          <Input
            type="text"
            placeholder="Table name"
            value={props.tableName}
            onChange={props.handleTableNameChange}
          />
          <Button type="submit">Add Table</Button>
        </div>
      </Form>
    </div>
  );
};

export default TableForm;
