import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
`;

export const LoginContainer = styled.div`
  background: white;
  display: flex;
  flex: 0 0 auto;
  width: 65%;
  min-height: 80%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 7px;
`;

export const LoginImage = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 75%;
  max-height: 75%;
`;

export const Form = styled.form`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: flex-end;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #6c63ff;
  background: transparent;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding: 7px 7px;
  color: #6c63ff;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: 2px solid #ff6584;
  color: #ff6584;
  background: transparent;
  padding: 7px 7px;
  border-radius: 5px;
  font-size: 1.1rem;

  &:hover {
    background: #ff6584;
    color: #fff;
  }
`;
