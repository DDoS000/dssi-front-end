import React from "react";

import { Col, Row } from "antd";

import geekWire from "../../../assets/images/pages/landing/geekWire.png";
import slack from "../../../assets/images/pages/landing/slack.png";
import envato from "../../../assets/images/pages/landing/envato.png";
import usaToday from "../../../assets/images/pages/landing/usaToday.png";
import forbes from "../../../assets/images/pages/landing/forbes.png";
import nodeexpress from "../../../assets/images/pages/landing/logo-technology/nodeexpress.png";
import jwt from "../../../assets/images/pages/landing/logo-technology/jwt.png";
import react from "../../../assets/images/pages/landing/logo-technology/react.png";
import sqlite from "../../../assets/images/pages/landing/logo-technology/sqlite.png";
import docker from "../../../assets/images/pages/landing/logo-technology/docker.png";
import kong from "../../../assets/images/pages/landing/logo-technology/kong.png";
import portainer from "../../../assets/images/pages/landing/logo-technology/portainer.png";
import ant from "../../../assets/images/pages/landing/logo-technology/ant.png";
import fastapi from "../../../assets/images/pages/landing/logo-technology/fastapi.png";
import mysql from "../../../assets/images/pages/landing/logo-technology/mysql.png";
import prometheus from "../../../assets/images/pages/landing/logo-technology/prometheus.png";
import redux from "../../../assets/images/pages/landing/logo-technology/redux.png";
import grafana from "../../../assets/images/pages/landing/logo-technology/grafana.png";

export default function LandingCompanies() {
  return (
    <section className="hp-landing-companies hp-overflow-hidden hp-pt-64 hp-pb-sm-64 hp-pb-120">
      <div className="hp-landing-container">
        <Row gutter={[50, 24]} align="middle" justify="center">
          {/* <Col>
            <img src={geekWire} alt="GeekWire" />
          </Col>

          <Col>
            <img src={slack} alt="Slack" />
          </Col>

          <Col>
            <img src={envato} alt="Envato" />
          </Col>

          <Col>
            <img src={usaToday} alt="USA Today" />
          </Col>

          <Col>
            <img src={forbes} alt="Forbes" />
          </Col> */}

          <Col>
            <img src={nodeexpress} alt="Node Express" />
          </Col>

          <Col>
            <img src={jwt} alt="JWT" />
          </Col>

          <Col>
            <img src={react} alt="React" />
          </Col>

          <Col>
            <img src={sqlite} alt="Sqlite" />
          </Col>

          <Col>
            <img src={docker} alt="Docker" />
          </Col>

          <Col>
            <img src={kong} alt="Kong" />
          </Col>

          <Col>
            <img src={portainer} alt="Portainer" />
          </Col>

          <Col>
            <img src={ant} alt="Ant Design" />
          </Col>

          <Col>
            <img src={fastapi} alt="Fast API" />
          </Col>

          <Col>
            <img src={mysql} alt="Mysql" />
          </Col>

          <Col>
            <img src={prometheus} alt="Prometheus" />
          </Col>

          <Col>
            <img src={redux} alt="Redux" />
          </Col>

          <Col>
            <img src={grafana} alt="Grafana" />
          </Col>
        </Row>
      </div>
    </section>
  );
}
