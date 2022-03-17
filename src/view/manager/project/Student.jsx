import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { getAllData, getData } from "../../../redux/contact/contactActions";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Button, Input, Table, Card } from "antd";
import { PaperPlus } from "react-iconly";
import NewProject from "./Model";
import BreadCrumbs from "../../../layout/components/content/breadcrumbs";

import CardProject from "./Card";
import UploadProject from "../upload-project";

import slideImage1 from "../../../assets/images/dasboard/nft-slide-image-1.png";
import slideImage2 from "../../../assets/images/dasboard/nft-slide-image-2.png";
import slideImage3 from "../../../assets/images/dasboard/nft-slide-image-3.png";
import slideImage4 from "../../../assets/images/dasboard/nft-slide-image-4.png";
import Switch from "../../components/data-entry/switch";

export default function Student() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const collectiblesData = [
    {
      id: "1",
      // bg: slideImage1,
      name: "Perfect Mess 1 Test Text Long in Line",
      description: "1.44 ETH",
      status: "$4,852.23",
    },
    {
      id: "2",
      bg: slideImage2,
      name: "Perfect Mess 1",
      description: "1.44 ETH",
      status: "$4,852.23",
    },
    {
      id: "3",
      bg: slideImage3,
      name: "Perfect Mess 1",
      status: "$4,852.23",
    },
    {
      id: "4",
      bg: slideImage4,
      name: "Perfect Mess 1",
      description: "1.44 ETH",
      status: "$4,852.23",
    },
    {
      id: "5",
      bg: slideImage1,
      name: "Perfect Mess 1",
      description: "1.44 ETH",
      status: "$4,852.23",
    },
  ];

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
        <Row
          style={{ marginLeft: 5, marginRight: 5 }}
          className="hp-contact-card hp-mt-32"
        >
          {collectiblesData.map((item, index) => (
            <Col
              xs={22}
              md={11}
              xl={5}
              style={{ marginLeft: 15, marginRight: 15, marginBottom: 40 }}
            >
              <Link
                to={`/student/main/upload-project`}
              >
                <Card hoverable key={index}>
                  <CardProject item={item} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <NewProject open={sidebarOpen} toggleSidebar={toggleSidebar} />
      </Card>
    </>
  );
}
