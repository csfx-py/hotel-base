import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #36393f;
  flex: 1 0 auto;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  background: #202225;
  flex: 0 0 auto;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

// common-------------------------------------------------------
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #202225;
  flex: 0 0 auto;
  height: 80px;
`;

export const FormSpan = styled.span`
  font-size: 2.5rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
`;

export const FormGroup = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  color: #99aab5;
  background: #23272a;
  margin: 1rem;
  font-size: 1.125rem;
  padding: 7px 16px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  place-items: center;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #43b581;
  margin: 1rem;
  font-size: 1.125rem;
  padding: 7px 7px;

  &:hover {
    background: rgba(67, 181, 129, 0.9);
  }

  &:focus {
    outline: none;
  }
`;

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: calc(100vw - 100px);
  flex: 1 0 auto;
  color: #fff;
  table-layout: fixed;
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 7px;
  background: #202225;

  &:first-child {
    text-align: center;
    width: 40%;
  }
  &:last-child {
    text-align: center;
    width: 5%;
  }
`;

export const TableRow = styled.tr`
  font-size: 1.1rem;

  &:nth-child(even) {
    background: #202225;
  }
`;

export const TableData = styled.td`
  text-align: left;
  padding: 7px;

  &:first-child {
    width: 40%;
    text-align: left;
  }

  &:last-child {
    text-align: center;
    width: 5%;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  place-items: center;
  background: transparent;
  border: none;
  color: #99aab5;
  font-size: 1rem;
  border-radius: 50%;
  padding: 2px;

  &:hover {
    background: #7289da;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export const SuggestDiv = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  max-height: 150px;
  width: 100%;
  padding: 4px;
  background: #202225;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 99;

  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #202225;
    border-radius: 25px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #7289da;
    border-radius: 25px;
  }
`;

export const SuggestList = styled.ul``;

export const SuggestListItem = styled.li`
  padding: 4px;
  border-radius: 2px;
  color: #fff;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: #2f3136;
  }
`;
// sidebar-------------------------------------------------------
export const SideButton = styled.button`
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #43b581;
  font-size: 1rem;
  padding: 7px;
  width: 80px;
  margin-bottom: 1rem;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(67, 181, 129, 0.9);
  }

  &:focus {
    outline: none;
  }
`;

// menu-------------------------------------------------------
export const MenuTableContainer = styled.div`
  display: flex;
  flex-direction: 1 0 auto;
`;

// table-------------------------------------------------------
export const TableContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  background: #2f3136;
  border: 1px solid #202225;
  width: calc(100vw - 100px);
  height: 9rem;
  flex: 0 0 auto;

  &::-webkit-scrollbar {
    height: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #202225;
    border-radius: 25px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #7289da;
    border-radius: 25px;
  }
`;

export const TableCardDiv = styled.div`
  background: #43b581;
  border-radius: 5px;
  border: none;
  height: 7rem;
  width: 7rem;
  margin: 1rem 0.5rem;
  padding: 7px;
  flex: 0 0 auto;
  position: relative;
`;

export const TableName = styled.h1`
  font-size: 1.125rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
`;

export const OrdersContainer = styled.div`
  height: calc(100vh - 375px);
  width: calc(100vw - 100px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #202225;
    border-radius: 25px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #7289da;
    border-radius: 25px;
  }
`;

// settings-------------------------------------------------------
export const company = styled.span``;

// extras
// RD5029286001868
// lightest #36393f
// light #2f3136
// dark #202225
// dark blue #7289da
// button green #43b581
