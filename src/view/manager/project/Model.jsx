import {
  Modal,
  Col,
  Row,
  Divider,
  Input,
  Form,
  Button,
  Select,
  Space,
} from "antd";

// Redux
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/contact/contactActions";
import { PaperFail } from "react-iconly";

export default function Mewproject({ open, toggleSidebar }) {
  const { Option } = Select;

  // Redux
  const dispatch = useDispatch();

  // Form Finish
  const onFinish = (values) => {
    toggleSidebar();

    dispatch(
      addUser({
        avatar: values.name,
        fullName: values.name,
        username: values.username,
        role: values.role,
        email: values.email,
        contact: values.phone,
        status: values.status,
        informationText: values.informationText,
        aboutText: values.aboutText,
      })
    );
  };

  return (
    <Modal
      title="Add Contact"
      visible={open}
      onCancel={toggleSidebar}
      footer={null}
      bodyStyle={{ padding: 24 }}
    >
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
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
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "This is required!" }]}
            >
              <Input />
            </Form.Item>
            <Form.List name="service">
              {(fields, { add, remove }) => (
                <>
                  <Row>
                    {fields.map(({ key, name, ...restField }) => (
                      <Col span={24}>
                        <Space
                          key={key}
                          style={{ display: "flex", marginBottom: 8 }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "name"]}
                            label="Name"
                            rules={[
                              { required: true, message: "Missing first name" },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <PaperFail
                            set="curved"
                            className="remix-icon"
                            onClick={() => remove(name)}
                            primaryColor="blueviolet"
                          />
                        </Space>
                      </Col>
                    ))}
                  </Row>
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block>
                      Add Service Name
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Col>

          <Divider />

          <Col span={24}>
            <Button type="primary" htmlType="submit" block>
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
