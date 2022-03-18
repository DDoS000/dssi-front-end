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
  Tag,
} from "antd";
import { Setting } from "react-iconly";
import {
  RiUploadCloud2Line,
  RiArrowRightSLine,
  RiArrowRightSFill,
} from "react-icons/ri";
import { IoCloudDone } from "react-icons/io5";

// import { build } from "./build";

import illustration from "../../../assets/images/apps/contact/upload-project.svg";

export default function UploadProject() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapse, setCollapse] = useState([]);

  const { Panel } = Collapse;

  function callback() {}

  const genExtra = () => (
    <RiArrowRightSLine
      size={24}
      className="hp-collapse-arrow hp-text-color-black-60"
    />
  );

  const build = `
  Cloning github.com/Masteribot/slotatk-fontend (Branch: main, Commit: aa63f7c)\n
  Cloning completed: 9.774s\n
  Analyzing source code...\n
  Installing build runtime...\n
  Build runtime installed: 3.010s\n
  Looking up build cache...\n
  Build cache downloaded [57.60 MB]: 3407.176ms\n
  Running "install" command: "npm install"...\n
  npm WARN @babel/plugin-syntax-jsx@7.14.5 requires a peer of @babel/core@^7.0.0-0 but none is installed. You must install peer dependencies yourself.\n
  npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-android-arm64@12.0.8 (node_modules/@next/swc-android-arm64):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-android-arm64@12.0.8: wanted {"os":"android","arch":"arm64"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-arm64@12.0.8 (node_modules/@next/swc-darwin-arm64):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-arm64@12.0.8: wanted {"os":"darwin","arch":"arm64"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm-gnueabihf@12.0.8 (node_modules/@next/swc-linux-arm-gnueabihf):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm-gnueabihf@12.0.8: wanted {"os":"linux","arch":"arm"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-gnu@12.0.8 (node_modules/@next/swc-linux-arm64-gnu):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-gnu@12.0.8: wanted {"os":"linux","arch":"arm64"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-arm64-msvc@12.0.8 (node_modules/@next/swc-win32-arm64-msvc):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-arm64-msvc@12.0.8: wanted {"os":"win32","arch":"arm64"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-x64@12.0.8 (node_modules/@next/swc-darwin-x64):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-x64@12.0.8: wanted {"os":"darwin","arch":"x64"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-ia32-msvc@12.0.8 (node_modules/@next/swc-win32-ia32-msvc):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-ia32-msvc@12.0.8: wanted {"os":"win32","arch":"ia32"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-x64-msvc@12.0.8 (node_modules/@next/swc-win32-x64-msvc):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-x64-msvc@12.0.8: wanted {"os":"win32","arch":"x64"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-musl@12.0.8 (node_modules/@next/swc-linux-arm64-musl):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-musl@12.0.8: wanted {"os":"linux","arch":"arm64"} (current: {"os":"linux","arch":"x64"})\n
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):\n
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})\n
  removed 3 packages and audited 296 packages in 8.112s\n
  68 packages are looking for funding\n
    run "npm fund" for details\n
  found 3 vulnerabilities (2 moderate, 1 high)\n
    run "npm audit fix" to fix them, or "npm audit" for details\n
  Detected Next.js version: 12.0.8\n
  Running "npm run build"\n
  > slotatk@ build /vercel/path0\n
  > next build\n
  info  - Loaded env from /vercel/path0/.env\n
  info  - Checking validity of types...\n
  ./src/components/_layout/Layout/Layout.js\n
  55:9  Warning: Use the "next/script" component for loading third party scripts. See: https://nextjs.org/docs/messages/next-script-for-ga.  @next/next/next-script-for-ga\n
  ./src/components/_layout/Navbar/Header.js\n
  42:6  Warning: React Hook useEffect has a missing dependency: 'countJackpot'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps\n
  info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules\n
  info  - Creating an optimized production build...\n
  info  - Compiled successfully\n
  info  - Collecting page data...\n
  info  - Generating static pages (0/9)\n
  info  - Generating static pages (2/9)\n
  info  - Generating static pages (4/9)\n
  info  - Generating static pages (6/9)\n
  info  - Generating static pages (9/9)\n
  info  - Finalizing page optimization...\n
  Page                                       Size     First Load JS\n
  ┌ ○ /                                      7.57 kB         105 kB\n
  ├   └ css/2dbd3af22dfc7188.css             1.12 kB\n
  ├   /_app                                  0 B            97.3 kB\n
  ├ ○ /404                                   194 B          97.5 kB\n
  ├ ○ /admin                                 251 B          97.5 kB\n
  ├ λ /api/hello                             0 B            97.3 kB\n
  ├ ● /article/[slug]                        1.24 kB        98.5 kB\n
  ├   └ css/f023b191eea735fe.css             317 B\n
  ├ ○ /bonus                                 391 B          97.7 kB\n
  ├ ○ /contact                               1.13 kB        98.4 kB\n
  ├   └ css/c6112f35b466853a.css             214 B\n
  ├ ○ /login                                 745 B            98 kB\n
  └ ○ /promotions                            1.62 kB        98.9 kB\n
      └ css/317819402c256dc9.css             86 B\n
  + First Load JS shared by all              97.3 kB\n
    ├ chunks/framework-91d7f78b5b4003c8.js   42 kB\n
    ├ chunks/main-8234a521d5a9e203.js        26.7 kB\n
    ├ chunks/pages/_app-346ae45fa35bc0b2.js  27.7 kB\n
    ├ chunks/webpack-49b6f2937c9ce9f4.js     838 B\n
    └ css/5819f887e5cafe4b.css               25.1 kB\n
  λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)\n
  ○  (Static)  automatically rendered as static HTML (uses no initial props)\n
  ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)\n
  Traced Next.js server files in: 289.201ms\n
  Created all serverless functions in: 699.561ms\n
  Uploading build outputs...\n
  Deploying build outputs...\n
  Build completed. Populating build cache...\n
  Uploading build cache [57.25 MB]...\n
  Build cache uploaded: 2.299s\n
  Done with "package.json"`;

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
              <h3 className="hp-text-overflow-ellipsis">Bunny Book</h3>
              <p className="hp-p1-body hp-mb-0">DESCRIPTIONS</p>
              <p
                className="hp-p1-body hp-mb-0"
                style={{ color: "#ffff"}}
              >
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
                      {build.split("\n").map((item, key) => {
                        return (
                          <p className="hp-p1-body" key={key}>
                            {item}
                          </p>
                        );
                      })}
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
      <SetttingProject open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Card>
  );
}
