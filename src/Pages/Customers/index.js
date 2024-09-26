import { Select, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { apiGet, getUsersByRoleName } from "../../API";
import { token } from "../../config";


function Customers() {
  const roleList = ['admin', 'agent', 'superuser']
    return (
        <div>
          <Typography.Title level={3}>Customer Tab</Typography.Title>
          {/* <Select placeholder="Role Name" options={roleList}></Select> */}
          <UsersListByRoleName />
        </div>
        
    )
}

function UsersListByRoleName(roleName) { 

  const [userDataSource, setuserDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiGet('/getUsersByRoles?roleName=agent').then((data) => {
      setuserDataSource(data.result.content);
      setLoading(false)
    });
    
  }, [])

    return (
      <Table
      columns={ [
        { 
          title: 'Name',
          dataIndex : 'firstName',
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
)
};
export default Customers;