import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { createUser, clearUserCreate } from "../../../redux/users/usersActions";
import { Delete, Edit } from "react-iconly";
import fileFormat from "../../../assets/files/format-create-user.xlsx";

// Export data
import ExcelExport from "export-xlsx";
import { SETTINGS_FOR_EXPORT } from "./setting.jsx";
import * as XLSX from "xlsx/xlsx.mjs";

export default function AddNewUser({ open, toggleSidebar }) {
  const { Option } = Select;

  // Edit Table
  const originData = [];

  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const [responData, setResponData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);

  const isEditing = (record) => record.key === editingKey;
  const [count, setCount] = useState(0);

  const edit = (record) => {
    form.setFieldsValue({
      username: "",
      fullname: "",
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
      title: "Fullname",
      dataIndex: "fullname",
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
      fullname: "",
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
      title: "FullName",
      dataIndex: "fullname",
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

  const exportData = [
    {
      exportData: responData,
    },
  ];
  // Redux
  const dispatch = useDispatch();

  const createUserData = useSelector((state) => state.users?.userCreate);

  useEffect(() => {
    if (createUserData.length !== 0) {
      setResponData(createUserData);
    }
  }, [createUserData.length]);


  // Form Finish
  const onFinish = (values) => {
    // toggleSidebar();
    // console.log("values", values);
    setData(originData);
    // console.log(values);

    dispatch(createUser(values));

    setAddStatus(!addStatus);
  };

  // Export Table
  const exportTable = () => {
    const excelExport = new ExcelExport();
    // console.log(exportData);
    excelExport.downloadExcel(SETTINGS_FOR_EXPORT, exportData);
    setAddStatus(!addStatus);
    dispatch(clearUserCreate());
    setResponData([]);
  };

  // Upload File
  const props = {
    maxCount: 1,
    accept: ".xlsx",
    showUploadList: false,
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, { type: "binary" });
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
        let last_data = [];
        let rount = count;
        if (
          dataParse[0][0] === "username" &&
          dataParse[0][1] === "fullname" &&
          dataParse[0][2] === "role" &&
          dataParse[0][3] === "email"
        ) {
          for (const datas of dataParse.slice(1)) {
            last_data.push({
              key: rount++,
              username: datas[0],
              fullname: datas[1],
              role: datas[2],
              email: datas[3],
            });
          }
          setData(last_data);
          setCount(rount);
        } else {
          // message.error({
          //   content: info.file.name + " file upload failed.",
          //   icon: <RiCloseCircleLine className="remix-icon" />,
          // });
          message.error({ content: "Invalid format!", key: "file",  icon: <RiCloseCircleLine className="remix-icon" />, duration: 1 });
        }
      };
      reader.readAsBinaryString(file);

      // Prevent upload
      return false;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
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
                Save
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
