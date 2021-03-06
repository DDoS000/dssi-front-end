import React from "react";
import { Link } from "react-router-dom";

import { Divider, Avatar, Row, Col } from "antd";
import { RiSettings3Line } from "react-icons/ri";

import avatar from "../../../../assets/images/memoji/memoji-1.png";

import { useSelector } from "react-redux";

export default function MenuFooter(props) {
  const { user } = useSelector((state) => state.auth);

  return props.collapsed === false ? (
    <Row
      className="hp-sidebar-footer hp-pb-24 hp-px-24 hp-bg-color-dark-100"
      align="middle"
      justify="space-between"
    >
      <Divider className="hp-border-color-black-20 hp-border-color-dark-70 hp-mt-0" />

      <Col>
        <Row align="middle">
          <Avatar size={36} src={avatar} className="hp-mr-8" />

          <div>
            <span className="hp-d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body">
              {user.username}
            </span>

            <Link
              to="/pages/profile/personel-information"
              className="hp-badge-text hp-text-color-dark-30"
              onClick={props.onClose}
            >
              View Profile
            </Link>
          </div>
        </Row>
      </Col>

      <Col>
        <Link to="/pages/profile/personel-information" onClick={props.onClose}>
          <RiSettings3Line
            className="remix-icon hp-text-color-black-100 hp-text-color-dark-0"
            size={24}
          />
        </Link>
      </Col>
    </Row>
  ) : (
    <Row
      className="hp-sidebar-footer hp-pt-16 hp-mb-16 hp-bg-color-dark-100"
      align="middle"
      justify="center"
    >
      <Col>
        <Link to="/pages/profile/personel-information" onClick={props.onClose}>
          <Avatar size={36} src={avatar} />
        </Link>
      </Col>
    </Row>
  );
}
