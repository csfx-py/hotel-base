import React, { useState } from "react";
import { Button, Form, FormGroup, FormSpan, Input } from "../HomeElements";

const Settings = (props) => {
  const [input, setInput] = useState({ name: "", value: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ name: [name], value: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSettings({ ...props.settings, [input.name]: input.value });
    setInput({ name: "", value: "" });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormSpan>Company Name</FormSpan>
        <FormGroup>
          <Input
            max="14"
            min="3"
            required={true}
            name="companyName"
            value={input.value}
            onChange={handleChange}
            placeholder={props.settings.companyName}
          />
          <Button type="submit">Change</Button>
        </FormGroup>
      </Form>
      <Form onSubmit={handleSubmit}>
        <FormSpan>GST invoice</FormSpan>
        <FormGroup>
          <Input
            max="14"
            min="3"
            required={true}
            name="GSTIN"
            value={input.value}
            onChange={handleChange}
            placeholder={props.settings.GSTIN}
          />
          <Button type="submit">Change</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default Settings;
