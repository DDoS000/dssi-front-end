import { Link } from "react-router-dom";

import store from "../../../redux/store";
import { removeEvent, fetchEvents } from "../../../redux/calendar/calendarActions";
import { message as messages } from "antd";
import { Avatar, Popconfirm, Tag } from "antd";
import { User, Delete } from "react-iconly";
import { RiErrorWarningLine } from "react-icons/ri";

// Popconfirm
function deletes(dataId) {
  store
    .dispatch(removeEvent(dataId))
    .then(() => {
      store.dispatch(fetchEvents(store.selectedCalendars))
      messages.success({ content: "Success!", key: "delet_sc", duration: 2 });
    })
    .catch(() => {
      messages.error({ content: "Error!", key: "delet_sc", duration: 1 });
    });
}
export const columns = [
  {
    title: <div className="hp-text-center">ID</div>,
    dataIndex: "id",
    width: "25%",
  },
  {
    title: "Title",
    dataIndex: "title",
    width: "25%",
  },
  {
    title: "Start Date",
    dataIndex: "start",
    width: "25%",
  },
  {
    title: "End Date",
    dataIndex: "end",
    width: "20%",
  },
  {
    title: "PJ_UUID",
    dataIndex: "PJ_UUID",
    width: "20%",
  },
  {
    dataIndex: "id",
    width: "10%",
    render: (dataIndex) => (
      <Popconfirm
        placement="topLeft"
        title="Are you sure to delete this Schedule?"
        onConfirm={() => deletes(dataIndex)}
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
