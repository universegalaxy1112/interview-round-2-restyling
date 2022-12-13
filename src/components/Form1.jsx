import React from "react";
import { Row, Col, theme, Typography, Form, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined, MailOutlined, LockFilled } from "@ant-design/icons";

import signUpImage from "../assets/images/signup-image.jpg";
const { Title } = Typography;

const Form1 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className='container' style={{ background: colorBgContainer }}>
      <Row>
        <Col sm={24} md={12} className={"form-container"}>
          <Title level={1} strong={true} className='form-title'>
            Sign up
          </Title>
          <Form
            name='basic'
            method='POST'
            initialValues={{ remember: true }}
            wrapperCol={{ span: 16 }}
            className='register-form'
            id='register-form'
          >
            <div className='form-group'>
              <label htmlFor='name'>
                <UserOutlined />
              </label>
              <input type='text' name='name' id='name' placeholder='Your Name' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>
                <MailOutlined />
              </label>
              <input type='email' name='email' id='email' placeholder='Your Email' />
            </div>
            <div className='form-group'>
              <label htmlFor='pass'>
                <LockFilled />
              </label>
              <input type='password' name='pass' id='pass' placeholder='Password' />
            </div>
            <div className='form-group'>
              <label htmlFor='re-pass'>
                <LockOutlined />
              </label>
              <input type='password' name='re_pass' id='re_pass' placeholder='Repeat your password' />
            </div>
            <div className='form-group'></div>
            <Form.Item name='disabled' valuePropName='checked'>
              <Checkbox>
                I agree all statements in{" "}
                <Typography.Link className='term-service' underline>
                  {" "}
                  Terms of service
                </Typography.Link>
              </Checkbox>
            </Form.Item>

            <div className='form-group form-button'>
              <Button type='primary' size={"medium"} className={"form-submit"}>
                Register
              </Button>
            </div>
          </Form>
        </Col>
        <Col sm={24} md={12} className={"image-container"}>
          <figure>
            <img src={signUpImage} alt='register image' />
          </figure>
          <Typography.Link className='signup-image-link' underline>
            I am already member
          </Typography.Link>
        </Col>
      </Row>
    </div>
  );
};

export default Form1;
