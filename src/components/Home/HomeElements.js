import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #36393f;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  background: #202225;
  flex-shrink: 0;
`;

export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  flex-shrink: 0;
`;

export const TableForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  border: 1px solid #202225;
  flex-shrink: 0;
`;

export const Company = styled.span`
  font-size: 2rem;
  color: #fff;
  margin: 1rem;
  font-family: "Courier New", Courier, monospace;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  color: #99aab5;
  background: #23272a;
  margin: 1rem;
  font-size: 1.1rem;
  padding: 8px 14px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #43b581;
  margin: 1rem;
  font-size: 1.1rem;
  padding: 8px 14px;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  background: #2f3136;
  border: 1px solid #202225;
  width: 100%;
  flex-shrink: 0;

  &::-webkit-scrollbar {
    height: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #2f3136;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #202225;
    border-radius: 10px;
  }
`;

export const TableCard = styled.div`
  background: #43b581;
  border-radius: 5px;
  border: none;
  height: 7rem;
  width: 7rem;
  margin: 1rem 0.5rem;
  flex-shrink: 0;
`;

export const MenuContainer = styled.div`
  display: flex;
  background: #2f3136;
  border: 1px solid #202225;
  flex: 1 0 auto;
  height: auto;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #2f3136;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #202225;
    border-radius: 10px;
  }
`;

// RD5029286001868
// lightest #36393f
// light #2f3136
// dark ##202225
// dark blue #7289da
// button green #43b581
