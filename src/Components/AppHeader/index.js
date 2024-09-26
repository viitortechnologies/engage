import { BellOutlined, MailOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Typography } from "antd";

function AppHeader(){
    return <div className="app-header">
         <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title>Engage 360</Typography.Title>
      <Space>
        <Badge count={10}>
          <MailOutlined style={{fontSize:24}}></MailOutlined>
        </Badge>
        <Badge count={23}>
          <BellOutlined style={{fontSize:24}}></BellOutlined>
        </Badge>
      </Space>
    </div>
}

export default AppHeader;