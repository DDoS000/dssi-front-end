import { Modal, Col, Row, Divider, Input, Form, Button, Select } from "antd";
import React, { useState, useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
// import { addUser } from "../../../redux/contact/contactActions";
import { PaperFail } from "react-iconly";

export default function SettingPtoject(props) {
  const { Option } = Select;

  const { items, open, toggleSidebar } = props;

  let [datas, setDatas] = useState({
    id: "",
    name: "",
    description: "",
    service: [{ port: "", service: "" }],
  });

  const [form] = Form.useForm();

  // Redux
  const dispatch = useDispatch();

  // Form Finish
  const onFinish = (values) => {
    // toggleSidebar();
    let service = [];
    service.push(values.service1);
    const service2 = values.service2;
    if (service2 !== undefined) {
      if (service2.length > 0) {
        service2.forEach((PS) => {
          service.push(PS);
        });
      }
    }
    setDatas([
      {
        id: values.id,
        name: values.name,
        description: values.description,
        service: service,
      },
    ]);
    console.log("datas", datas);
  };

  const loadProfile = (items) => {
    form.setFieldsValue(items[0]);
  };

  useEffect(() => {
    loadProfile(items);
  }, []);

  return (
    <Modal
      forceRender
      title="Edite Project"
      visible={open}
      onCancel={toggleSidebar}
      footer={null}
      bodyStyle={{ padding: 24 }}
    >
      <Form
        form={form}
        layout="vertical"
        // name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <>
          <Row gutter={[8, 0]}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "This is required!" }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="description" label="Description">
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Name Service">
                <Input.Group compact>
                  <Form.Item name={["service1", "port"]} noStyle>
                    <Input style={{ width: "25%" }} disabled />
                  </Form.Item>
                  <Form.Item name={["service1"]} noStyle>
                    <Input style={{ width: "50%" }} disabled />
                  </Form.Item>
                  <Form.Item name={["service1", "service"]} noStyle>
                    <Input style={{ width: "25%" }} disabled />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Col>

            <Divider />

            <Col span={24}>
              <Button type="primary" htmlType="submit" block>
                Update
              </Button>
            </Col>
          </Row>
        </>
      </Form>
    </Modal>
  );
}
