import React from "react";

import { useSelector } from "react-redux";

import { Row, Col } from "antd";

import bg from "../../../assets/images/pages/authentication/authentication-login-bg.svg";
import bgDark from "../../../assets/images/pages/authentication/authentication-login-bg.svg";
import logo from "../../../assets/images/logo/logo-vector-blue.svg";
import logoDark from "../../../assets/images/logo/logo-vector.svg";

import Yodalogo from "../../../assets/images/logo/logo-32x32.png";

export default function LeftContent() {
  // Redux
  const theme = useSelector((state) => state.customise.theme);

  return (
    <Col
      lg={12}
      span={24}
      className="hp-bg-color-primary-4 hp-bg-color-dark-90 hp-position-relative"
    >
      <Row className="hp-image-row hp-h-100 hp-px-sm-8 hp-px-md-16 hp-pb-sm-32 hp-pt-md-96 hp-pt-md-32">
        <Col className="hp-logo-item hp-m-sm-16 hp-m-md-32 hp-m-64">
          {/* <img src={theme == "light" ? logo : logoDark} alt="Logo" /> */}
          <img src={Yodalogo} alt="Logo" />
        </Col>

        <Col span={24}>
          <Row align="middle" justify="center" className="hp-h-100">
            <Col
              md={20}
              span={24}
              className="hp-bg-item hp-text-center hp-mb-md-32"
            >
              <img
                src={theme == "light" ? bg : bgDark}
                style={{ width: "90%" }}
                alt="Background Image"
              />
            </Col>

            <Col xl={18} span={24} className="hp-text-item hp-text-center">
              <h2 className="hp-text-color-primary-1 hp-text-color-dark-0 hp-mx-lg-16 hp-mb-16">
                DSSI Cloud Server Docker 🤞
              </h2>

              <p className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                บริการเว็บที่ให้บริการหลากหลายภาษา โดยใช้ Docker.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
