import { Space } from 'antd';
import './App.css';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import AppPageContent from './Components/PageContent';
import AppSideMenu from './Components/SideMenu';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className='side-menu-page-content'>
        <AppSideMenu></AppSideMenu>
        <AppPageContent></AppPageContent>
      </Space>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
