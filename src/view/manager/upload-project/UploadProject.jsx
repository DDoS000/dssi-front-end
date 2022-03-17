import { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

// Redux
import { deleteUser, getUser } from "../../../redux/contact/contactActions";
import { useDispatch, useSelector } from "react-redux";
import SetttingProject from "./Model";

import {
  Layout,
  Row,
  Col,
  Collapse,
  Button,
  Divider,
  Card,
  Upload,
  message,
} from "antd";
import { Setting } from "react-iconly";
import {
  RiUploadCloud2Line,
  RiArrowRightSLine,
  RiArrowRightSFill,
} from "react-icons/ri";

import illustration from "../../../assets/images/apps/contact/upload-project.svg";

export default function UploadProject() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapse, setCollapse] = useState([]);

  const { Panel } = Collapse;
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.";

  function callback() {}

  const genExtra = () => (
    <RiArrowRightSLine
      size={24}
      className="hp-collapse-arrow hp-text-color-black-60"
    />
  );

  // Uplod
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: false,
    maxCount: 1,
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    beforeUpload: (file) => {
      const isZIP = file.type === "application/x-zip-compressed";
      if (!isZIP) {
        message.error(`${file.name} is not a zip file`);
      }
      return isZIP || Upload.LIST_IGNORE;
    },
    onChange(info) {
      console.log(info.fileList);
    },
    onDrop() {},
  };

  // Collapse
  const toggleCollapse = () => {
    console.log(collapse);
    if (!collapse) {
      setCollapse(["1", "2"]);
    } else {
      setCollapse();
    }
  };

  // Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const { Content } = Layout;
  return (
    <Card className="hp-h-100 hp-mb-32">
      <Layout className="hp-flex-wrap">
        <Content className="hp-bg-color-black-0 hp-bg-color-dark-100 hp-p-24">
          <Row className="hp-h-100">
            <Col xs={24} md={6} lg={4}>
              <img
                className="img-fluid"
                src={illustration}
                alt="illustration"
              />
            </Col>
            <Col xs={24} md={12} lg={16}>
              <h3 className="hp-text-overflow-ellipsis">Project Name</h3>
              <p className="hp-p1-body hp-mb-0">DESCRIPTIONS</p>
              <p className="hp-p1-body hp-mb-0" style={{ color: "#ffff" }}>
                descriptions project
              </p>
              <p className="hp-p1-body hp-mb-0">DOMAINS</p>
              <p className="hp-p1-body hp-mb-0" style={{ color: "#ffff" }}>
                test
              </p>
            </Col>
            <Col xs={8} sm={4} md={2} lg={1}>
              <Row justify="start" align="middle" gutter={[16]}>
                <Col>
                  <Button
                    onClick={toggleSidebar}
                    className="hp-mt-sm-16"
                    type="primary"
                    icon={<Setting size={16} className="remix-icon" />}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={16} sm={20} md={4} lg={3}>
              <Row justify="start" align="middle" gutter={[16]}>
                <Col>
                  <Button className="hp-mt-sm-16" type="primary">
                    Make a reservation
                  </Button>
                </Col>
              </Row>
            </Col>
            <Divider />
            <Col span={24}>
              <Row>
                <Col span={18}>
                  <h4>Deployment Status</h4>
                </Col>
                <Col span={6}>
                  <Row justify="end" align="middle" gutter={[16]}>
                    <Col>
                      <Button
                        className="hp-mt-sm-16 hp-btn-outline hp-text-color-black-100 hp-border-color-black-100 hp-hover-bg-black-100"
                        type="primary"
                        onClick={toggleCollapse}
                      >
                        Expend All
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={24}>
                  <Collapse activeKey={collapse} onChange={callback}>
                    <Panel
                      header={
                        <p className="hp-d-flex-center hp-p1-body hp-mb-0">
                          <RiArrowRightSFill
                            size={24}
                            className="remix-icon hp-mr-18"
                          />
                          <span>Building</span>
                        </p>
                      }
                      key="1"
                      showArrow={false}
                      extra={genExtra()}
                    >
                      <p className="hp-p1-body">{text}</p>
                    </Panel>

                    <Panel
                      header={
                        <p className="hp-d-flex-center hp-p1-body hp-mb-0">
                          <RiArrowRightSFill
                            size={24}
                            className="remix-icon hp-mr-18"
                          />
                          <span>Assigning Domains</span>
                        </p>
                      }
                      key="2"
                      showArrow={false}
                      extra={genExtra()}
                    >
                      <p className="hp-p1-body">{text}</p>
                    </Panel>
                  </Collapse>
                </Col>
                <Col span={24}>
                  <br />
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <RiUploadCloud2Line className="remix-icon" />
                    </p>

                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>

                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </Dragger>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
      <SetttingProject open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Card>
  );
}
