import { Link } from "react-router-dom";

import store from "../../../redux/store";
import {
  removeEvent,
  fetchEvents,
} from "../../../redux/calendar/calendarActions";
import { message as messages } from "antd";
import { Avatar, Popconfirm, Tag } from "antd";
import { User, Delete } from "react-iconly";
import { RiErrorWarningLine } from "react-icons/ri";
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import { getUser } from "../../../redux/users/usersActions";

// Popconfirm
function confirm(dataId) {
  store
    .dispatch(removeEvent(dataId))
    .then(() => {
      store.dispatch(fetchEvents(store.selectedCalendars));
      messages.success({ content: "Success!", key: "delet_sc", duration: 2 });
    })
    .catch(() => {
      messages.error({ content: "Error!", key: "delet_sc", duration: 1 });
    });
}
export const columns = [
  {
    title: "",
    dataIndex: "user_id",
    width: "5%",
    render: (dataIndex) => {
      let imageSplit;

      if (dataIndex[1] != null) {
        imageSplit = dataIndex[1].split(".");
      }

      return (
        <Link
          onClick={() => store.dispatch(getUser(dataIndex))}
          to={`/admin/manager/user/user-detail/${dataIndex}`}
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
    title: "Name",
    dataIndex: "PJ_NAME",
    width: "25%",
  },
  {
    title: "Description",
    dataIndex: "PJ_DESC",
    width: "25%",
  },
  {
    title: "Status",
    dataIndex: "status",
    width: "15%",
    render: (dataIndex) => {
      if (dataIndex === "SUCCESS") {
        return (
          <Tag icon={<CheckCircleOutlined />} color="success">
            {dataIndex}
          </Tag>
        );
      } else if (dataIndex === "ERROR") {
        return (
          <Tag icon={<CloseCircleOutlined />} color="error">
            {dataIndex}
          </Tag>
        );
      } else if (dataIndex === "WAIT") {
        return (
          <Tag icon={<ClockCircleOutlined />} color="warning">
            {dataIndex}
          </Tag>
        );
      } else if (dataIndex === "RUNNING") {
        return (
          <Tag icon={<SyncOutlined spin />} color="processing">
            {dataIndex}
          </Tag>
        );
      }
    },
  },
  {
    title: "UUID",
    dataIndex: "PJ_UUID",
    width: "20%",
  },
  {
    dataIndex: "id",
    width: "10%",
    render: (dataIndex) => (
      <Popconfirm
        placement="topLeft"
        title="Are you sure to delete this Project?"
        onConfirm={() => confirm(dataIndex)}
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
