import { ContactsOutlined, CustomerServiceOutlined, ToolOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";

function Dashboard() {
    return (
      <div>
        <Typography.Title>Dashboard Tab</Typography.Title>
        <Space>
          <DashboardCard title={"Customer"} value={23} icon={<ContactsOutlined style={{color: "green", backgroundColor: "rgba(0,255,0,0.25)", borderRadius:20, fontSize:24, padding : 8}}/>}></DashboardCard>
          <DashboardCard title={"Today Calls"} value={321} icon={<CustomerServiceOutlined style={{color: "green", backgroundColor: "rgba(0,255,0,0.25)", borderRadius:20, fontSize:24, padding : 8}}/>}></DashboardCard>
        </Space>
      </div>
    )
}

function DashboardCard({title, value, icon}) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value}></Statistic>
      </Space>
    </Card>
  )
}
export default Dashboard;