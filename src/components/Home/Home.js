import React, { useState } from "react";
import { HomeContainer, HomeMain, SideBar } from "./HomeElements";
import useLocalStorage from "../../useLocalStorage";
import { MenuPage, SideBarComponent, TablePage, Settings } from "./index";

const Home = (props) => {
  const [activeTab, setActiveTab] = useState({
    menu: false,
    table: true,
    settings: false,
  });

  const [Menu, setMenu] = useLocalStorage(
    "Menu",
    localStorage.getItem("Menu") || []
  );

  const [TableList, setTableList] = useLocalStorage(
    "Tables",
    localStorage.getItem("TableList") || []
  );

  const [settings, setSettings] = useLocalStorage("settings", {
    companyName: localStorage.getItem("settings")
      ? localStorage.getItem("settings").companyName
      : "",
  });

  return (
    <HomeContainer>
      <SideBar>
        <SideBarComponent setActiveTab={setActiveTab} logout={props.logout} />
      </SideBar>
      <HomeMain>
        {activeTab.menu && (
          <MenuPage Menu={Menu} setMenu={setMenu} settings={settings} />
        )}
        {activeTab.table && (
          <TablePage
            settings={settings}
            TableList={TableList}
            setTableList={setTableList}
            Menu={Menu}
          />
        )}
        {activeTab.settings && (
          <Settings settings={settings} setSettings={setSettings} />
        )}
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;
