import { useState, useEffect } from "react";

// Redux
import { getAllData, getData } from "../../../redux/contact/contactActions";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Button, Input, Table, Card } from "antd";
import { PaperPlus } from "react-iconly";
import NewProject from "./Model";
import BreadCrumbs from "../../../layout/components/content/breadcrumbs";

export default function Student() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div className="hp-mb-32">
        <Row gutter={[32, 32]} justify="space-between">
          <BreadCrumbs
            breadCrumbParent="Student"
            breadCrumbParent2="Main"
            breadCrumbActive="Project"
          />

          <Col md={15} span={24}>
            <Row justify="end" align="middle" gutter={[16]}>
              <Col>
                <Button
                  block
                  className="hp-mt-sm-16"
                  type="primary"
                  onClick={toggleSidebar}
                  icon={<PaperPlus size={16} className="remix-icon" />}
                >
                  New Project
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Card className="hp-contact-card hp-mb-32">
        <Col className="hp-contact-card hp-mt-32">
          <h1>Project</h1>
        </Col>
        <NewProject open={sidebarOpen} toggleSidebar={toggleSidebar} />
      </Card>
    </>
  );
}
