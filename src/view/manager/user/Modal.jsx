import React, { useState } from "react";
import {
  Modal,
  Col,
  Row,
  Divider,
  Input,
  Form,
  Button,
  message,
  Select,
  Popconfirm,
  Table,
  Tag,
  Upload,
} from "antd";

import { RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";

// Redux
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/contact/contactActions";
import { Delete, Edit } from "react-iconly";
import fileFormat from "../../../assets/files/format-create-user.xlsx";

// Export data
import ExcelExport from "export-xlsx";
import { SETTINGS_FOR_EXPORT } from "./setting.jsx";

export default function AddNewUser({ open, toggleSidebar }) {
  const { Option } = Select;

  // Edit Table
  const originData = [];

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const [addStatus, setAddStatus] = useState(false);

  const isEditing = (record) => record.key === editingKey;
  const [count, setCount] = useState(0);

  const edit = (record) => {
    form.setFieldsValue({
      username: "",
      name: "",
      role: "",
      email: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      // console.log('Validate Failed:', errInfo);
    }
  };

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    const select = (
      <Select placeholder="Role">
        <Option value="admin">admin</Option>
        <Option value="student">student</Option>
      </Select>
    );
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: "Please Input " + title + "!",
              },
            ]}
          >
            {dataIndex === "role" ? (
              <Select placeholder="Role">
                <Option value="admin">admin</Option>
                <Option value="student">student</Option>
              </Select>
            ) : (
              <Input />
            )}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      editable: true,
      width: "25%",
    },
    {
      title: "Name",
      dataIndex: "name",
      editable: true,
      width: "25%",
    },
    {
      title: "role",
      dataIndex: "role",
      editable: true,
      width: "15%",
      render: (dataIndex) => {
        if (dataIndex === "admin") {
          return <Tag color="red">{dataIndex}</Tag>;
        } else if (dataIndex === "student") {
          return <Tag color="green">{dataIndex}</Tag>;
        }
      },
    },
    {
      title: "email",
      dataIndex: "email",
      editable: true,
      width: "25%",
    },
    {
      title: "",
      width: "10%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Row justify="center">
            <Col span={11} offset={1}>
              <div className="hp-text-center">
                <Edit
                  disabled={editingKey !== ""}
                  onClick={() => edit(record)}
                  set="curved"
                  size={24}
                  className="hp-cursor-pointer hp-transition hp-hover-text-color-danger-1 hp-text-color-black-80"
                />
              </div>
            </Col>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <Col span={11} offset={1}>
                <div className="hp-text-center">
                  <Delete
                    size={24}
                    className="hp-cursor-pointer hp-transition hp-hover-text-color-danger-1 hp-text-color-black-80"
                  />
                </div>
              </Col>
            </Popconfirm>
          </Row>
        );
      },
    },
  ];

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleAdd = () => {
    const newData = {
      key: count,
      username: "",
      name: "",
      role: "",
      email: "",
    };
    setData([...data, newData]);
    setCount(count + 1);
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  // Respon Table
  const responColumns = [
    {
      title: "Username",
      dataIndex: "username",
      width: "25%",
    },
    {
      title: "Password",
      dataIndex: "password",
      width: "25%",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "15%",
    },
  ];

  const responData = [
    {
      key: "0",
      username: "John Brown 0",
      password: "32",
      status: "London, Park Lane no. 0",
    },
  ];

  const exportData = [
    {
      exportData: responData,
    },
  ];
  // Redux
  const dispatch = useDispatch();

  // Form Finish
  const onFinish = (values) => {
    // toggleSidebar();
    console.log(values);
    setAddStatus(!addStatus);
    setData(originData);

    // dispatch(
    //   addUser({
    //     avatar: values.name,
    //     fullName: values.name,
    //     username: values.username,
    //     role: values.role,
    //     email: values.email,
    //     contact: values.phone,
    //     status: values.status,
    //     informationText: values.informationText,
    //     aboutText: values.aboutText,
    //   })
    // );
  };

  // Export Table
  const exportTable = () => {
    const excelExport = new ExcelExport();
    console.log(exportData);
    excelExport.downloadExcel(SETTINGS_FOR_EXPORT, exportData);
    setAddStatus(!addStatus);
  };

  // Upload File
  const props = {
    maxCount: 1,
    name: "file",
    headers: {
      authorization: 'authorization-text',
    },
    beforeUpload: file => {
      const isXLSX = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      if (!isXLSX) {
        message.error(`${file.name} is not a excel file`);
      }
      return isXLSX || Upload.LIST_IGNORE;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success({
          content: info.file.name + " file uploaded successfully.",
          icon: <RiCheckboxCircleLine className="remix-icon" />,
        });
      } else if (info.file.status === "error") {
        message.error({
          content: info.file.name + " file upload failed.",
          icon: <RiCloseCircleLine className="remix-icon" />,
        });
      }
    },
  };

  return (
    <Modal
      title="Add User"
      visible={open}
      onCancel={toggleSidebar}
      footer={null}
      width={`80%`}
      bodyStyle={{ padding: 24 }}
    >
      {addStatus === false ? (
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={() => onFinish(data)}
        >
          <Row gutter={[8, 0]}>
            <Col span={24}>
              <Button
                onClick={handleAdd}
                type="primary"
                style={{
                  marginBottom: 16,
                  marginRight: 16,
                }}
              >
                Add a row
              </Button>
              <Upload {...props}>
                <Button
                  type="primary"
                  style={{
                    marginBottom: 16,
                  }}
                >
                  Upload file
                </Button>
              </Upload>

              <a href={fileFormat} download>
                <Button
                  type="primary"
                  className="hp-button hp-float-right"
                  style={{
                    marginBottom: 16,
                  }}
                >
                  Dowload Format
                </Button>
              </a>

              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={data}
                  columns={mergedColumns}
                  rowClassName="editable-row"
                  pagination={{
                    onChange: cancel,
                    defaultPageSize: 6,
                  }}
                  scroll={{ x: 500 }}
                />
              </Form>
            </Col>

            <Divider />

            <Col span={24}>
              <Button type="primary" htmlType="submit" block>
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      ) : (
        <Row gutter={[8, 0]}>
          <Col span={24}>
            <Table
              pagination={{ defaultPageSize: 6 }}
              columns={responColumns}
              dataSource={responData}
              scroll={{ x: "500px" }}
            />
          </Col>

          <Divider />

          <Col span={24}>
            <Button onClick={exportTable} type="primary" block>
              Download
            </Button>
          </Col>
        </Row>
      )}
    </Modal>
  );
}
