import { useState, useEffect } from "react";

// Redux
import { fetchEvents } from "../../../redux/calendar/calendarActions";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Table, Card } from "antd";

import { columns } from "./columns";
import BreadCrumbs from "../../../layout/components/content/breadcrumbs";

export default function ProjectList() {
  // Redux
  const dispatch = useDispatch();
  const store = useSelector((state) => state.calendar);

  // Get Data
  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars));
  }, []);

  const data = [];

  for (let i = 0; i < store.events.length; i++) {
    data.push({
      key: i,
      id: store.events[i].id,
      title: store.events[i].title,
      start: store.events[i].start,
      end: store.events[i].end,
      PJ_UUID: store.events[i].PJ_UUID,
    });
  }

  return (
    <>
      <div className="hp-mb-32">
        <Row gutter={[32, 32]} justify="space-between">
          <BreadCrumbs
            breadCrumbParent="Admin"
            breadCrumbParent2="Manager"
            breadCrumbActive="Project"
          />
        </Row>
      </div>

      <Card className="hp-contact-card hp-mb-32">
        <Col className="hp-contact-card hp-mt-32">
          <Table
            pagination={{ defaultPageSize: 6 }}
            columns={columns}
            dataSource={data}
            scroll={{ x: "calc(500px + 50%)" }}
          />
        </Col>
      </Card>
    </>
  );
}
