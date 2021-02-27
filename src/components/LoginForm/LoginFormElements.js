import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
`;

export const LoginContainer = styled.div`
  background: white;
  display: flex;
  width: 60%;
  min-height: 80%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const LoginImage = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

export const LoginFormPart = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #6c63ff;
  background: transparent;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  width: 70%;
  padding: 4px 14px;
  color: #6c63ff;
`;

export const Button = styled.button`
  border: 2px solid #ff6584;
  color: #ff6584;
  background: transparent;
  padding: 4px 14px;
  border-radius: 4px;
  margin-right: 10%;
  align-self: flex-end;
  font-size: 1.1rem;
`;
