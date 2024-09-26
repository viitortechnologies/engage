import { AppstoreOutlined, ContactsOutlined, DashboardOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function AppSideMenu(){
  const navigate = useNavigate();

    return (
      <div className="side-menu">
        <Menu 
        onClick={(item) => navigate(item.key)}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined/>,
            key: "/dashboard",
          },
          {
            label: "customer",
            icon: <ContactsOutlined />,
            key: "/customers",
          }
        ]}></Menu>
      </div>
    )
}

export default AppSideMenu;