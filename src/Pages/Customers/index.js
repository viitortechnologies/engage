import { Button, Col, Layout, Modal, Row, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { apiGet } from "../../API";
import { UserAddOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import CustomerForm from "../../Components/Forms/CustomerForm";



const Customers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const staticValues = {
    "state":"telangana",
    "country":"INIDA",
    "pincode":"503224",
    "salary":"99999",
    "requirement":"NA-NA-NA",
    "age":29,
    "obligations":"Requirment from Customer",
    "createdById":186,
    "createdByName":"subham",
    "updatedById":93,
    "updatedByName":"Jaya Krishna"
}

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (values) => {
    console.log('Form Submitted:', values); // Handle form submission (e.g., API call)
    setIsModalOpen(false); // Close modal after submission
  };

  return (
      <div>
        <Layout>
          <Header style={{background: '#fff', padding: '0 20px'}}>
            <Row justify="space-between" align="middle">
              <Col>
                <Typography.Title level={3}>Customer Tab</Typography.Title>
              </Col>
              <Col>
                <Button icon={<UserAddOutlined/>} type="primary" onClick={showModal} > Add/Update Customer</Button>
              </Col>
            </Row>
          </Header>
        </Layout>
        {/* <Select placeholder="Role Name" options={roleList}></Select> */}
        {/* <FloatButton shape="circle" type="primary" icon={<CustomerServiceOutlined />} /> */}
        {/* <Button type="primary" onClick={show} */}
        
        {/* Content with space for right-side content */}
        <Content style={{ margin: '20px' }}>
          <UsersListByRoleName />
        </Content>

        <Modal 
        title="Add or Update Customer Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        >
          <CustomerForm staticValues={staticValues} />
        </Modal>
    </div>
  )
}

function UsersListByRoleName(roleName) { 

  const [userDataSource, setuserDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiGet('/getAllCustomerDetails').then((data) => {
      setuserDataSource(data.result);
      setLoading(false)
    });
    
  }, [])

    return (
      <>
      
      <Table
      columns={ [
        { 
          title: 'Name',
          dataIndex : 'name',
        },
        { 
          title: 'Email',
          dataIndex : 'emailId',
        },
        { 
          title: 'Mobile',
          dataIndex : 'mobileNo',
        }
      ]}

      dataSource={userDataSource}
      ></Table>

      <Modal
      title="Add New Customer"
      
      footer={null}
      >

      </Modal>
      </>
)
};

export default Customers;