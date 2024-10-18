import { Button, Form, Input, message } from "antd";
import { useState } from "react";
import { postRequest } from "../../../API";

function CustomerForm({staticValues}) {

    const [loading, setLoading] = useState();
    const [form] = Form.useForm();
    
    const onFinish = async (values) => {
      console.log(staticValues);
        setLoading(true);
        let payload = {
          ...values,
          ...staticValues
        }
        try {
            const response = await postRequest('/customer', payload);
            
            message.success("Customer added successfully", 2);
            form.resetFields();
        } catch (error) {
            console.error('Failed to add customer:', error);
            message.error('Failed to add customer, please try again.',2);
        } finally {
            setLoading(false);
        }
    };

    return <div>
      <Form
      form={form}
      name="customer_form"
      onFinish={onFinish}
      layout="vertical"
      initialValues={staticValues}
      >
        <Form.Item
        label="Name"
        name="name"
        rules={[ { required: true, message: 'Please enter a name'}]}
        >
          <Input placeholder="Please enter a name" />

        </Form.Item>

        <Form.Item
        label="Email"
        name="emailId"
        rules={[ 
          { required :true, message: 'Please enter a name'},
          {type: 'email', message: 'Please enter a valid email address'}
        ]}
        >
          <Input placeholder="Please enter email ID" />

        </Form.Item>

        <Form.Item
        label="Mobile Number"
        name="mobileNo"
        rules={[ 
          { required :true, message: 'Please enter your mobile number'},
          { pattern: /^[0-9]{10}$/, message: 'mobile number must be 10 digits'}
        ]}
        >
          <Input placeholder="Please enter email ID" />
        </Form.Item>

        <Form.Item
        label="Company Name"
        name="companyName"
        >
          <Input placeholder="Please enter a name" />

        </Form.Item>

        <Form.Item
        label="City"
        name="city"
        >
          <Input placeholder="Please enter a name" />

        </Form.Item>
        <Form.Item
        label="Address"
        name="address"
        >
          <Input placeholder="Please enter a name" />

        </Form.Item>
        <Form.Item
        label="Age"
        name="age"
        >
          <Input placeholder="Please enter a age" />

        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} >
          Submit
          </Button>
        </Form.Item>


      </Form>
    </div>
}

export default CustomerForm;