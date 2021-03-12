import React from "react";
import { SideButton } from "../HomeElements";
import { BiLogOut } from "react-icons/bi";

const SideBarComponent = (props) => {
  return (
    <>
      <div>
        <SideButton
          onClick={() =>
            props.setActiveTab({ menu: false, table: true, settings: false })
          }
        >
          Table
        </SideButton>
        <SideButton
          onClick={() =>
            props.setActiveTab({ menu: true, table: false, settings: false })
          }
        >
          Menu
        </SideButton>
        <SideButton
          onClick={() =>
            props.setActiveTab({ menu: false, table: false, settings: true })
          }
        >
          Settings
        </SideButton>
      </div>
      <SideButton onClick={props.logout}>
        <BiLogOut />
        Logout
      </SideButton>
    </>
  );
};

export default SideBarComponent;
