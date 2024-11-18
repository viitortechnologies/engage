import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { useState } from "react";

function App() {

  const [selectedMenuTitle, setSelectedMenuTitle] = useState('Home');
  const menuSelect = (selectedMenuTitle) => {
    setSelectedMenuTitle(selectedMenuTitle);
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu onMenuSelect={menuSelect}></SideMenu>
        <PageContent selectedMenuTitle={selectedMenuTitle}></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default App;
