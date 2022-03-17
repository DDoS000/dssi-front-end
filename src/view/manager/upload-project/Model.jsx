import { Modal, Col, Row, Divider, Input, Form, Button, Select } from "antd";

// Redux
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/contact/contactActions";
import { PaperFail } from "react-iconly";

export default function SettingPtoject({ open, toggleSidebar }) {
  const { Option } = Select;

  const data = [
    {
      name: "Test Project",
      description: "for test model setting",
      service: [
        { port: "pubplic", service: "test1" },
        { port: "private", service: "test2" },
      ],
    },
  ];

  const [form] = Form.useForm();

  // Redux
  const dispatch = useDispatch();

  // Form Finish
  const onFinish = (values) => {
    // toggleSidebar();
    const service = [];
    service.push(values.service1);
    values.service2.forEach((PS) => {
      service.push(PS);
    });
    data = [
      {
        name: values.name,
        description: values.description,
        service: service,
      },
    ];
    console.log("data", data);
    form.resetFields();
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
        form={form}
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {data.map((data) => (
          <Row gutter={[8, 0]}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "This is required!" }]}
              >
                <Input defaultValue={data.name} />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="description" label="Description">
                <Input.TextArea defaultValue={data.description} />
              </Form.Item>
            </Col>

            {data.service.map((sv) => (
              <>
                <Col span={24}>
                  <Form.Item label="Name Service">
                    <Input.Group compact>
                      <Form.Item
                        name={["service1", "port"]}
                        noStyle
                        rules={[
                          { required: true, message: "Port is required" },
                        ]}
                      >
                        <Select
                          defaultValue={sv.port}
                          className="select-after"
                          style={{ width: "25%" }}
                        >
                          <Option value="public">Public</Option>
                          <Option value="private">Private</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name={["service1", "service"]}
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Name Service is required",
                          },
                        ]}
                      >
                        <Input
                          defaultValue={sv.service}
                          style={{ width: "75%" }}
                        />
                      </Form.Item>
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
                                        defaultValue={sv.port}
                                        className="select-after"
                                        style={{ width: "25%" }}
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
                                        defaultValue={sv.service}
                                        style={{ width: "75%" }}
                                      />
                                    </Form.Item>
                                  </Input.Group>
                                </Form.Item>
                              </Col>
                              <Col span={1} offset={1}>
                                <PaperFail
                                  set="curved"
                                  className="remix-icon"
                                  primaryColor="red"
                                />
                              </Col>
                            </Row>
                          </Form.Item>
                        ))}
                        {fields.length < 2 ? (
                          <Form.Item>
                            <Button type="dashed" onClick={() => add()} block>
                              Add Name Service
                            </Button>
                            <Form.ErrorList errors={errors} />
                          </Form.Item>
                        ) : null}
                      </>
                    )}
                  </Form.List>
                </Col>
              </>
            ))}
            <Divider />

            <Col span={24}>
              <Button type="primary" htmlType="submit" block>
                Add
              </Button>
            </Col>
          </Row>
        ))}
      </Form>
    </Modal>
  );
}
