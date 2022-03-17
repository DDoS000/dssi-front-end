import { useState, useEffect } from "react";

// Redux
import { getAllData, getData } from "../../../redux/contact/contactActions";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Card } from "antd";

import BreadCrumbs from "../../../layout/components/content/breadcrumbs";

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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
          Project
        </Col>
      </Card>
    </>
  );
}
