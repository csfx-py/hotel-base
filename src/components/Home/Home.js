import React, { useState } from "react";
import { HomeContainer, HomeMain, SideBar } from "./HomeElements";
import useLocalStorage from "../../useLocalStorage";
import { MenuPage, SideBarComponent, TablePage, Settings } from "./index";

const Home = () => {
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
    companyName: "test",
  });

  return (
    <HomeContainer>
      <SideBar>
        <SideBarComponent setActiveTab={setActiveTab} />
      </SideBar>
      <HomeMain>
        {activeTab.menu && <MenuPage Menu={Menu} setMenu={setMenu} />}
        {activeTab.table && (
          <TablePage
            settings={settings}
            TableList={TableList}
            setTableList={setTableList}
          />
        )}
        {activeTab.settings && <Settings />}
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;
