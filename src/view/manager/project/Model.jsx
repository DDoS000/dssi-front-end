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
// import { addUser } from "../../../redux/contact/contactActions";
import { PaperFail } from "react-iconly";
import { useState } from "react";

export default function Newproject({ open, toggleSidebar }) {
  const { Option } = Select;
  const [disabledAdd, setDisabledAdd] = useState(false);
  const [addOrclose, setAddOrclose] = useState("Add");
  const [widthInput, setWidthInput] = useState("75%");

  const [form] = Form.useForm();

  // Redux
  const dispatch = useDispatch();

  // Form Finish
  const onFinish = (values) => {
    const service = [];
    service.push(values.service1);
    const service2 = values.service2;
    if (service2 !== undefined) {
      if (service2.length > 0) {
        service2.forEach((PS) => {
          service.push(PS);
        });
      }
    }
    const data = [
      {
        name: values.name,
        description: values.description,
        service: service,
      },
    ];
    console.log("data", data);
    setDisabledAdd(true);
    setWidthInput("25%");
    if (disabledAdd == false) {
      setAddOrclose("Cancel");
    }
  };

  const onCancel = () => {
    form.resetFields();
    toggleSidebar();
    setAddOrclose("Add");
    setDisabledAdd(false);
    setWidthInput("75%");
  };

  return (
    <Modal
      title="Add Project"
      visible={open}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ padding: 24 }}
    >
      <Form
        form={form}
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
              <Input disabled={disabledAdd} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="description" label="Description">
              <Input.TextArea disabled={disabledAdd} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Name Service">
              <Input.Group compact>
                <Form.Item
                  name={["service1", "port"]}
                  noStyle
                  rules={[{ required: true, message: "Port is required" }]}
                >
                  <Select
                    placeholder="Select a port"
                    className="select-after"
                    style={{ width: "25%" }}
                    disabled={disabledAdd}
                  >
                    <Option value="public">Public</Option>
                    <Option value="private">Private</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name={["service1", "service"]}
                  noStyle
                  rules={[
                    { required: true, message: "Name Service is required" },
                  ]}
                >
                  <Input
                    disabled={disabledAdd}
                    style={{ width: widthInput }}
                    placeholder="Frontend"
                  />
                </Form.Item>
                {disabledAdd == true ? (
                  <Input
                    addonBefore="Port"
                    defaultValue="Port Number"
                    disabled={disabledAdd}
                    style={{
                      width: "45%",
                      marginLeft: "5%",
                    }}
                  />
                ) : null}
              </Input.Group>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.List name={["service2"]}>
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, name) => (
                    <Form.Item required={false} key={field.key}>
                      <Row align="middle">
                        <Col span={22}>
                          <Form.Item
                            {...field}
                            style={{ display: "flex", marginBottom: 8 }}
                          >
                            <Input.Group compact>
                              <Form.Item
                                name={[name, "port"]}
                                noStyle
                                rules={[
                                  {
                                    required: true,
                                    message: "Port is required",
                                  },
                                ]}
                              >
                                <Select
                                  placeholder="Select a port"
                                  className="select-after"
                                  style={{ width: "25%" }}
                                  disabled={disabledAdd}
                                >
                                  <Option value="public">Public</Option>
                                  <Option value="private">Private</Option>
                                </Select>
                              </Form.Item>
                              <Form.Item
                                name={[name, "service"]}
                                noStyle
                                rules={[
                                  {
                                    required: true,
                                    message: "Name Service is required",
                                  },
                                ]}
                              >
                                <Input
                                  disabled={disabledAdd}
                                  style={{ width: widthInput }}
                                />
                              </Form.Item>
                              {disabledAdd == true ? (
                                <Input
                                  addonBefore="Port"
                                  defaultValue="Port Number"
                                  disabled={disabledAdd}
                                  style={{
                                    width: "45%",
                                    marginLeft: "5%",
                                  }}
                                />
                              ) : null}
                            </Input.Group>
                          </Form.Item>
                        </Col>
                        {disabledAdd == false ? (
                          <Col span={1} offset={1}>
                            <PaperFail
                              set="curved"
                              className="remix-icon"
                              primaryColor="red"
                              onClick={() => remove(name)}
                            />
                          </Col>
                        ) : null}
                      </Row>
                    </Form.Item>
                  ))}
                  {fields.length < 2 ? (
                    <Form.Item>
                      <Button
                        disabled={disabledAdd}
                        type="dashed"
                        onClick={() => add()}
                        block
                      >
                        Add Name Service
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  ) : null}
                </>
              )}
            </Form.List>
          </Col>

          <Divider />

          <Col span={24}>
            {addOrclose == "Cancel" ? (
              <Button
                onClick={() => onCancel()}
                type="primary"
                // htmlType="submit"
                block
              >
                {addOrclose}
              </Button>
            ) : (
              <Button type="primary" htmlType="submit" block>
                {addOrclose}
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
