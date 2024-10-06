"use client";
import { Button, Card, Col, Form, Input, Row, Space } from 'antd';
import "./styles/custom.css"
import SwitchModeDark from '../components/switchs/switchModeDark';
export default function Page() {
  const onFinish = (values: Record<string, any>) => {
    console.log('Received values from form: ', values);
  };

  return (
    <Row
      justify="center" 
      align="middle"   
      style={{ minHeight: '90vh' }} 
    >
      <Col
        span={24}
        xs={24} 
        sm={12} 
        md={8}  
        lg={6}
      >
        <Space direction="vertical" style={{ width: '100%' }} >
          <Card title="Sign In" bordered extra={<SwitchModeDark/>}>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </Col>
    </Row>
  );
};