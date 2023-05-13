import { Button, Col, Form, Input, notification, Row } from "antd";
import React from "react";
import {
  UserOutlined,
  MailOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

class ContactForm extends React.PureComponent {
  render() {
    const openNotification = (status) => {
      if (status === "success") {
        console.log("masuk");
        notification.open({
          message: "Success",
          description: "Form submitted successfully",
          icon: <CheckCircleOutlined style={{ color: "#108ee9" }} />,
        });
      } else {
        notification.open({
          message: "Oops",
          description: "There was an error submitting the form",
          icon: <CloseCircleOutlined style={{ color: "#108ee9" }} />,
        });
      }
    };

    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key])
        )
        .join(`&`);
    };

    const formName = `contact`;

    const handleSubmit = (values) => {
      if (values[`bot-field`] === undefined) {
        delete values[`bot-field`];
      }

      fetch(`/`, {
        method: `POST`,
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
        body: encode({
          "form-name": formName,
          ...values,
        }),
      })
        .then(() => showSuccess())
        .catch((error) => showError(error));
    };

    const showSuccess = () => {
      openNotification("success");
    };

    const showError = (error) => {
      openNotification("error");
      console.log("error", error);
    };

    return (
      <div className="home-page-wrapper contact">
        <div className="title-wrapper">
          <h1 className="title-h1">Contact Me</h1>

          <div className="title-content">
            Don't hesitate to get in touch! <br /> Whether you have a question,
            feedback, or just want to say hello, <br /> just simply fill this
            form below, or you can contact me by email or my social media.
          </div>
        </div>

        <Row justify="space-around">
          <Col xs={22} sm={18} md={16} lg={8}>
            {/* This defines how your form is setup for the Netlify bots. Users will not see or interact with this form. */}
            <form
              name={formName}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
            >
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>

            <Form
              name="cf"
              method="post"
              onFinish={handleSubmit}
              layout="vertical"
            >
              {/* This is the hidden field that the netlify-honeypot uses. */}
              <Form.Item
                label="Don't fill this out"
                className={`hidden`}
                style={{ display: `none` }}
                name="bot-field"
              >
                <Input type={`hidden`} />
              </Form.Item>

              <Form.Item
                label="Name"
                rules={[{ required: true, message: `Please enter your name.` }]}
                name="name"
              >
                <Input
                  placeholder="Name"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                label="Email"
                rules={[
                  {
                    required: true,
                    type: `email`,
                    message: `Please enter your email.`,
                  },
                ]}
                name="email"
              >
                <Input
                  placeholder="Your Email"
                  prefix={<MailOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                label="Message"
                rules={[
                  { required: true, message: `Please enter your message.` },
                ]}
                name="message"
              >
                <TextArea placeholder="Your Message" rows={5} />
              </Form.Item>

              <Form.Item className="form-button">
                <Button htmlType="submit" disabled={false}>
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactForm;
