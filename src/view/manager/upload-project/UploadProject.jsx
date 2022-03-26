import { useState } from "react";

import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
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
  Tag,
} from "antd";
import { Setting } from "react-iconly";
import {
  RiUploadCloud2Line,
  RiArrowRightSLine,
  RiArrowRightSFill,
} from "react-icons/ri";
import { IoCloudDone } from "react-icons/io5";

import { build } from "./build";
import '../../../assets/less/manager/upload-project/terminal.less'

import illustration from "../../../assets/images/apps/contact/upload-project.svg";

export default function UploadProject() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapse, setCollapse] = useState(null);

  const { Panel } = Collapse;

  function callback() {}

  const term = new Terminal({
    windowsMode:
      ["Windows", "Win16", "Win32", "WinCE"].indexOf(navigator.platform) >= 0,
    convertEol: true,
    fontFamily: `'Fira Mono', monospace`,
    fontSize: 14,
    fontWeight: 400,
    // rendererType: "canvas", // canvas 或者 dom
  });

  const cleanTerminal = (terminalContainer) => {
    // 清除容器的子节点;
    while (terminalContainer.children.length) {
      terminalContainer.removeChild(terminalContainer.children[0]);
    }
    term.clear();
  };

  const openInitTerminal = () => {
    console.log("loading terminal...");
    const terminalContainer = document.getElementById("terminal");
    cleanTerminal(terminalContainer);
    // style
    term.setOption("theme", {
      background: "black",
      foreground: "white",
    });

    // plugins
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    term.open(terminalContainer);

    term.element.style.padding = "10px";
    // fit windows
    fitAddon.fit();
    // focus
    term.focus();
  };

  const genExtra = () => (
    <RiArrowRightSLine
      size={24}
      className="hp-collapse-arrow hp-text-color-black-60"
    />
  );

  const datas = [
    {
      id: "1",
      name: "Bunny Book",
      description:
        "A tiny social network (for bunnies), built with FastAPI and React+RxJs",
      service: [{ port: "pubplic", service: "test1" }],
    },
  ];

  // Uplod
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: false,
    maxCount: 1,
    beforeUpload: (file) => {
      const isZIP = file.type === "application/x-zip-compressed";
      if (!isZIP) {
        message.error(`${file.name} is not a zip file`);
      }
      return isZIP || Upload.LIST_IGNORE;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop() {},
  };

  // Collapse
  const toggleCollapse = () => {
    console.log(collapse);

    const terminalContainer = document.getElementById("terminal");
    if (terminalContainer) {
      cleanTerminal(terminalContainer);
    }

    if (collapse == null) {
      setCollapse(["1", "2"]);
      openInitTerminal();

      build.split("\n").map((item, key) => {
        term.writeln(item);
      });

    } else {
      setCollapse(null);
    }
  };

  // Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const { Content } = Layout;
  return (
    <Card className="hp-h-100 hp-mb-32">
      <Layout style={{ marginBottom: "30px" }}>
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
              <h3 className="hp-text-overflow-ellipsis">Bunny Book</h3>
              <p className="hp-p1-body hp-mb-0">DESCRIPTIONS</p>
              <p className="hp-p1-body hp-mb-0" style={{ color: "#ffff" }}>
                A tiny social network (for bunnies), built with FastAPI and
                React+RxJs
              </p>
              <p className="hp-p1-body hp-mb-0">DOMAINS</p>
              <a
                href="http://dssipresent1.sci.ubu.ac.th/"
                target="_blank"
                className="hp-p1-body hp-mb-0"
                style={{ color: "#ffff" }}
              >
                http://dssipresent1.sci.ubu.ac.th/
              </a>
              <p className="hp-p1-body hp-mb-0">STATUS</p>
              <Tag className="hp-mr-0" color="green">
                ready
              </Tag>
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
                  <Collapse activeKey={["1", "2"]} onChange={callback}>
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
                      {/* {build.split("\n").map((item, key) => {
                        return (
                          <p className="hp-p1-body" key={key}>
                            {item}
                          </p>
                        );
                      })} */}

                      <div
                        id="terminal"
                        style={{
                          height: "100%",
                          width: "100%",
                          marginTop: "20px",
                        }}
                      />
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
                      <IoCloudDone
                        size={24}
                        color="green"
                        className="remix-icon hp-mr-8"
                      />
                      <a
                        href="http://dssipresent1.sci.ubu.ac.th/"
                        target="_blank"
                        className="hp-p1-body hp-mb-0"
                        style={{ color: "#ffff" }}
                      >
                        http://dssipresent1.sci.ubu.ac.th/
                      </a>
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
      <SetttingProject
        items={datas}
        open={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </Card>
  );
}
