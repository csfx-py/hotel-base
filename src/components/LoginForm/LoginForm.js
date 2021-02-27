import React from "react";
import {
  LoginContainer,
  LoginImage,
  Image,
  LoginFormPart,
  Form,
  MainContainer,
  Input,
  Button,
} from "./LoginFormElements";
import WelcomeImage from "../../images/welcome.svg";

const LoginForm = (props) => {
  return (
    <MainContainer>
      <LoginContainer>
        <LoginImage>
          <Image src={WelcomeImage} alt="React Logo" />
        </LoginImage>
        <LoginFormPart>
          <Form onSubmit={props.handleLoginSubmit}>
            <Input
              type="email"
              name="email"
              id=""
              placeholder="email"
              value={props.loginValues.email}
              onChange={props.handleLoginValues}
            />
            <Input
              type="password"
              name="password"
              id=""
              placeholder="password"
              value={props.loginValues.password}
              onChange={props.handleLoginValues}
            />
            <Button type="submit">Login</Button>
          </Form>
        </LoginFormPart>
      </LoginContainer>
    </MainContainer>
  );
};

export default LoginForm;
