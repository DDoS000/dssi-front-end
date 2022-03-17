import { Link } from "react-router-dom";

import store from "../../../redux/store";
import { getUser, deleteUser } from "../../../redux/contact/contactActions";

import { Avatar, Popconfirm, Tag } from "antd";
import { User, Delete } from "react-iconly";
import { RiErrorWarningLine } from "react-icons/ri";

// Popconfirm
function confirm(dataId) {
  store.dispatch(deleteUser(dataId));
}

export const columns = [
  {
    title: "",
    dataIndex: "avatar",
    width: "5%",
    render: (dataIndex) => {
      let imageSplit;

      if (dataIndex[1] != null) {
        imageSplit = dataIndex[1].split(".");
      }

      return (
        <Link
          onClick={() => store.dispatch(getUser(dataIndex[0]))}
          to={`/admin/manager/user/user-detail/${dataIndex[0]}`}
        >
          <Avatar
            size={48}
            icon={<User set="curved" className="hp-text-align-center" />}
          />
        </Link>
      );
    },
  },
  {
    title: "Username",
    dataIndex: "username",
    width: "25%",
  },
  {
    title: "Name",
    dataIndex: "name",
    width: "25%",
  },
  {
    title: "Role",
    dataIndex: "role",
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
    title: "Email",
    dataIndex: "email",
    width: "20%",
  },
  {
    dataIndex: "avatar",
    width: "10%",
    render: (dataIndex) => (
      <Popconfirm
        placement="topLeft"
        title="Are you sure to delete this contact?"
        onConfirm={() => confirm(dataIndex[0])}
        okText="Yes"
        cancelText="No"
        icon={
          <RiErrorWarningLine className="remix-icon hp-text-color-primary-1" />
        }
      >
        <div className="hp-text-right">
          <Delete
            size={24}
            className="hp-cursor-pointer hp-transition hp-hover-text-color-danger-1 hp-text-color-black-80"
          />
        </div>
      </Popconfirm>
    ),
  },
];
