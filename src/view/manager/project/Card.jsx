import React, { useState } from "react";

import { Row, Col, Avatar} from "antd";
import { Bookmark,Work } from "react-iconly";

export default function CardProject(props) {
  const { item } = props;

  return (
    <div className="hp-border-radius hp-bg-black-0 hp-bg-dark-100 hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-p-16">
      <Row
        align="bottom"
        justify="space-between"
        className="hp-mb-6"
        style={{ marginBottom: 50 }}
      >
        <Col span={4}>
          {item.bg ? (
            <div className="hp-position-absolute-bottom-left">
              <Avatar size={45} src={item.bg} style={{ borderWidth: 2 }} />
            </div>
          ) : (
            <div className="hp-position-absolute-bottom-left">
              <Avatar size={45} src={<Work set="curved" />} style={{ borderWidth: 2 }} />
            </div>
          )}
        </Col>
        <Col span={19}>
          <span className="hp-text-overflow-ellipsis hp-d-block h5 hp-text-color-black-100 hp-text-color-dark-0 hp-mb-4">
            {item.name}
          </span>

          <span className="hp-d-block hp-p1-body hp-text-color-black-80 hp-text-color-dark-20">
            Your Project
          </span>
        </Col>
      </Row>
      <Row jalign="bottom" justify="space-between" className="hp-mb-6">
        <Col>
          {item.description ? (
            <span className="hp-d-block hp-p1-body hp-text-color-black-80 hp-text-color-dark-20">
              {item.description}
            </span>
          ) : (
            <span className="hp-d-block hp-p1-body hp-text-color-black-80 hp-text-color-dark-20">
              no description
            </span>
          )}
        </Col>
      </Row>

      <Row align="top" justify="space-between">
        <Col>
          <Bookmark set="curved" />
          <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-20 hp-ml-6">
            {item.status}
          </span>
        </Col>
      </Row>
    </div>
  );
}
