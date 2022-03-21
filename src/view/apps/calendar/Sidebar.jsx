import React from "react";

import { Col, Row, Button, Checkbox } from "antd";

import { RiCalendarEventLine } from "react-icons/ri";
import illustration from "../../../assets/images/apps/calendar/sidebar.svg";

// Filters
const filters = [
  {
    label: "Complete",
    color: "complete",
  },
  {
    label: "Presenting",
    color: "presenting",
  },
  {
    label: "Comming",
    color: "comming",
  },
];

const pathname = window.location.pathname;

const Sidebar = (props) => {
  const { updateFilter, updateAllFilters, showModal, store, dispatch } = props;

  return (
    <Row className="hp-h-100 hp-pr-24">
      <Col span={24}>
        <h3>Calendar</h3>

        {pathname == "/apps/calendar" ? (
          <Button
            className="hp-mt-16"
            type="primary"
            onClick={showModal}
            block
            icon={<RiCalendarEventLine className="remix-icon" size={17} />}
          >
            New Event
          </Button>
        ) : null}

        <h5 className="hp-mt-48">Calendars</h5>

        <Checkbox
          className="hp-mb-8"
          id="view-all"
          checked={store.selectedCalendars.length === filters.length}
          onChange={(e) => dispatch(updateAllFilters(e.target.checked))}
        >
          Select All
        </Checkbox>

        <div className="hp-calendar-checkbox-list">
          {filters.length &&
            filters.map((filter, index) => {
              return (
                <Checkbox
                  key={index}
                  id={filter.label}
                  onChange={() => dispatch(updateFilter(filter.label))}
                  checked={store.selectedCalendars.includes(filter.label)}
                  defaultChecked={true}
                  className="hp-mb-8"
                  data-color={filter.color}
                >
                  {filter.label}
                </Checkbox>
              );
            })}
        </div>
      </Col>

      <Row
        className="hp-calendar-menu-footer hp-w-100"
        align="bottom"
        justify="center"
      >
        <img src={illustration} alt="illustration" />
      </Row>
    </Row>
  );
};

export default Sidebar;
