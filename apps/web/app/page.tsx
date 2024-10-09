"use client";
import { Button, Card, Col, Form, Input, Row, Space, Divider, Typography } from 'antd';
import Image from 'next/image'
import "./styles/custom.css"
import SwitchModeDark from '@/components/switchs/switchModeDark';
import { signIn } from "next-auth/react"

const { Text } = Typography;

export default function Page() {

  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;

  const onFinish = async (values: Record<string, any>) => {
    await signIn('credentials', {
      redirect: false,
      username: values.username,
      password: values.password
    })
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: '90vh' }}
    >
      <Col
        span={24}
        xs={20}
        sm={12}
        md={8}
        lg={6}
      >
        <Space direction="vertical" style={{ width: '100%' }} >
          <Space align="center" style={{ width: '100%',justifyContent: 'center' }}>
            <Image src="/logos/logo.webp"
              width={100}
              height={100}
              alt="Logo" />

          </Space>

          <Card title="Sign In" bordered extra={<SwitchModeDark />}>
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
                  Sign in
                </Button>
              </Form.Item>
            </Form>
            <Divider>or</Divider>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button block onClick={() => signIn('google')}>Sign In With Google</Button>
            </Space>
            <Space direction="vertical" style={{ width: '100%',display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end',marginTop: '16px' }}>
            <Text type="secondary">v{appVersion}</Text>
            </Space>
          </Card>
        </Space>
      </Col>
    </Row>
  );
};