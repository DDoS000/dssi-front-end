import { useState, useEffect } from "react";

// Redux
import { fetchRegistry } from "../../../redux/registry/registryActions";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Table, Card } from "antd";

import { columns } from "./columns";

export default function ProjectList() {
  // Redux
  const dispatch = useDispatch();
  const store = useSelector((state) => state.registry);
  const user = useSelector((state) => state.auth.user);

  // Get Data
  useEffect(() => {
    dispatch(fetchRegistry());
  }, []);

  const data = [];

  for (let i = 0; i < store.data.length; i++) {
    if (user.roles[0] === "ROLE_STUDENT") {
      if (store.user_id[i].created_by === user.id) {
        data.push({
          key: i,
          id: store.data[i].id,
          PJ_NAME: store.data[i].PJ_NAME,
          PJ_UUID: store.data[i].PJ_UUID,
          PJ_DESC: store.data[i].PJ_DESC,
          user_id: store.data[i].user_id,
          PJ_PORTS_MAP: store.data[i].PJ_PORTS_MAP,
          status: store.data[i].status,
        });
      }
    } else {
      data.push({
        key: i,
        id: store.data[i].id,
        PJ_NAME: store.data[i].PJ_NAME,
        PJ_UUID: store.data[i].PJ_UUID,
        PJ_DESC: store.data[i].PJ_DESC,
        user_id: store.data[i].user_id,
        PJ_PORTS_MAP: store.data[i].PJ_PORTS_MAP,
        status: store.data[i].status,
      });
    }
  }

  return (
    <>
      <Col className="hp-contact-card hp-mt-32">
        <Table
          pagination={{ defaultPageSize: 6 }}
          columns={columns}
          dataSource={data}
          scroll={{ x: "calc(500px + 50%)" }}
        />
      </Col>
    </>
  );
}
