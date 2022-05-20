import React from "react";

import { Row, Col, Divider, Form, Input, Button } from "antd";
import { message as messages } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { ChangePassword } from "../../../redux/users/usersActions";

export default function PasswordProfile() {
  const dividerClass = "hp-border-color-black-40 hp-border-color-dark-80";
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log("Success:", values.id, values.old_password, values.new_password);
    messages.loading({ content: "Loading...", key: "change" });
    dispatch(
      ChangePassword(values.id, values.old_password, values.new_password)
    )
      .then((respon) => {
        if (respon.message === "Invalid Password!") {
          messages.error({
            content: "Invalid Password!",
            key: "change",
            duration: 1,
          });
        } else {
          form.resetFields();
          messages.success({ content: "Success!", key: "change", duration: 2 });
        }
      })
      .catch(() => {
        messages.error({ content: "Error!", key: "change", duration: 1 });
      });
  };

  return (
    <Row>
      <Col span={24}>
        <h2>Change Password</h2>
        <p className="hp-p1-body hp-mb-0">
          Set a unique password to protect your account.
        </p>

        <Divider className={dividerClass} />
      </Col>

      <Col xxl={5} xl={10} md={15} span={24}>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          name="basic"
          initialValues={{
            id: user.id,
          }}
        >
          <Form.Item hidden="true" name="id">
            <Input />
          </Form.Item>

          <Form.Item
            name="old_password"
            label={
              <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
                Old Password :
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                max: 20,
                message: "Please input min 6 max 20!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="new_password"
            label={
              <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
                New Password :
              </span>
            }
            rules={[
              {
                required: true,
                message: "Please input your new password!",
              },
              {
                min: 6,
                max: 20,
                message: "Please input min 6 max 20!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm-new-password"
            dependencies={["new_password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your confirm new password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two new passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
            label={
              <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
                Confirm New Password :
              </span>
            }
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
