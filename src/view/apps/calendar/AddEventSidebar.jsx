import { Fragment, useState, useEffect } from "react";

import Select, { components } from "react-select";
import "flatpickr/dist/themes/light.css";
import { useForm } from "react-hook-form";
import { RiCloseFill } from "react-icons/ri";
import { DatePicker, Button, Input, Form, Modal, Badge, Row, Col } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegistry } from "../../../redux/registry/registryActions";

export const isObjEmpty = (obj) => Object.keys(obj).length === 0;

const { TextArea } = Input;

const AddEventSidebar = (props) => {
  const {
    store,
    dispatch,
    addEvent,
    selectEvent,
    updateEvent,
    removeEvent,
    calendarApi,
    refetchEvents,
    handleCancel,
    isModalVisible,
    setIsModalVisible,
    showModal,
  } = props;

  const selectedEvent = store.selectedEvent;
  const { errors, handleSubmit } = useForm();

  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [endPicker, setEndPicker] = useState();
  const [startPicker, setStartPicker] = useState();
  const [value, setValue] = useState([{ value: "", label: "" }]);

  // const options = [
  //   { value: "Complete", label: "Complete", badge: "#00F7BF" },
  //   { value: "Presenting", label: "Presenting", badge: "#FFC700" },
  //   { value: "Coming", label: "Coming", badge: "#FF0022" },
  // ];

  useEffect(() => {
    dispatch(fetchRegistry());
  }, []);

  const registry = useSelector((state) => state.registry);
  const user = useSelector((state) => state.auth.user);

  const options = [];

  for (let i = 0; i < registry.data.length; i++) {
    if (user.roles[0] === "ROLE_STUDENT") {
      if (registry.data[i].created_by === user.id) {
        if (registry.data[i].status === "SUCCESS") {
          options.push({
            label: registry.data[i].PJ_NAME,
            value: registry.data[i].PJ_UUID,
          });
        }
      }
    } else {
      if (registry.data[i].status === "SUCCESS") {
        options.push({
          label: registry.data[i].PJ_NAME,
          value: registry.data[i].PJ_UUID,
        });
      }
    }
  }

  const OptionComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        {/* <Badge color={data.badge} /> */}
        {data.label}
      </components.Option>
    );
  };

  // Adds New Event
  const handleAddEvent = () => {
    const obj = {
      title,
      start: startPicker,
      end: endPicker,
      allDay,
      display: "block",
      extendedProps: {
        calendar: value[0].label,
        desc: desc.length ? desc : undefined,
      },
    };
    dispatch(addEvent(obj));
    refetchEvents();
    handleCancel();
    console.log(obj);
  };

  // Reset Input Values on Close
  const handleResetInputValues = () => {
    dispatch(selectEvent({}));
    setTitle("");
    setDesc("");
    setValue([{ value: "", label: "" }]);
    setStartPicker();
    setEndPicker();
    setIsModalVisible(false);
  };

  // (UI) updateEventInCalendar
  const updateEventInCalendar = (
    updatedEventData,
    propsToUpdate,
    extendedPropsToUpdate
  ) => {
    const existingEvent = calendarApi.getEventById(updatedEventData.id);

    // Set event properties except date related
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index];
      existingEvent.setProp(propName, updatedEventData[propName]);
    }

    // Set date related props
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, {
      allDay: updatedEventData.allDay,
    });

    // Set event's extendedProps
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index];
      existingEvent.setExtendedProp(
        propName,
        updatedEventData.extendedProps[propName]
      );
    }
  };

  // Updates Event in Store
  const handleUpdateEvent = () => {
    const eventToUpdate = {
      id: selectedEvent.id,
      title,
      allDay,
      start: startPicker,
      end: endPicker,
      extendedProps: {
        description: desc,
        calendar: value[0].label,
      },
    };

    const propsToUpdate = ["id", "title"];
    const extendedPropsToUpdate = ["calendar", "description"];

    dispatch(updateEvent(eventToUpdate));
    updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate);
    setIsModalVisible(false);
  };

  // (UI) removeEventInCalendar
  const removeEventInCalendar = (eventId) => {
    calendarApi.getEventById(eventId).remove();
  };

  const handleDeleteEvent = () => {
    dispatch(removeEvent(selectedEvent.id));
    removeEventInCalendar(selectedEvent.id);
    setIsModalVisible(false);
  };

  const FooterAddOrUpdate = () => {
    if (
      isObjEmpty(selectedEvent) ||
      (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)
    ) {
      return (
        <Fragment>
          <Button
            onClick={() => {
              handleAddEvent();
              handleResetInputValues();
            }}
            type="primary"
            htmlType="submit"
            block
          >
            Add
          </Button>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              setIsModalVisible(true);
              handleResetInputValues();
              handleUpdateEvent();
            }}
            block
          >
            Update
          </Button>
        </Fragment>
      );
    }
  };

  const FooterCancelOrDelete = () => {
    if (
      isObjEmpty(selectedEvent) ||
      (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)
    ) {
      return (
        <Fragment>
          <Button
            onClick={() => {
              handleResetInputValues();
            }}
            type="primary"
            block
            ghost
          >
            Cancel
          </Button>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Button
            type="danger"
            onClick={() => {
              setIsModalVisible(true);
              handleResetInputValues();
              handleDeleteEvent();
            }}
            block
            ghost
          >
            Delete
          </Button>
        </Fragment>
      );
    }
  };

  const modalTitle = (
    <h5 className="modal-title">
      {selectedEvent && selectedEvent.title && selectedEvent.title.length
        ? "Update"
        : "Add"}
      Event
    </h5>
  );

  const onFinish = (values) => {
    console.log("dats", values);
  };

  return (
    <Modal
      visible={isModalVisible}
      title={modalTitle}
      onCancel={() => {
        handleResetInputValues();
        handleCancel();
      }}
      className="hp-modal-p-24"
      footer={
        <Row justify="center">
          <Col span={12} className="hp-pr-4">
            <FooterCancelOrDelete />
          </Col>

          <Col span={12} className="hp-pl-4">
            <FooterAddOrUpdate />
          </Col>
        </Row>
      }
      centered
      closeIcon={
        <RiCloseFill className="remix-icon text-color-black-100" size={24} />
      }
      width={416}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        onSubmit={handleSubmit(() => {
          if (
            isObjEmpty(selectedEvent) ||
            (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)
          ) {
            handleAddEvent();
          } else {
            handleUpdateEvent();
          }
        })}
      >
        <Form.Item
          label="Event Title :"
          rules={[{ required: true, message: "This is required!" }]}
        >
          <Input
            id="title"
            name="title"
            style={{ width: "100%" }}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="From :"
          rules={[{ required: true, message: "This is required!" }]}
        >
          <DatePicker
            required
            id="startDate"
            name="startDate"
            style={{ width: "100%" }}
            className="hp-mb-16 hp-mr-16"
            onChange={(date, dateString) => setStartPicker(dateString)}
            format="YYYY-MM-DD HH:mm"
            showTime={{ format: "HH:mm" }}
            disabledDate={(current) => {
              return current && current < moment().add(-1, "day");
            }}
          />
        </Form.Item>

        <Form.Item
          label="To :"
          rules={[{ required: true, message: "This is required!" }]}
        >
          <DatePicker
            required
            id="endDate"
            name="endDate"
            style={{ width: "100%" }}
            className="hp-mb-16 hp-mr-16"
            onChange={(date, dateString) => setEndPicker(dateString)}
            format="YYYY-MM-DD HH:mm"
            showTime={{ format: "HH:mm" }}
            disabledDate={(current) => {
              return current && current < moment().add(-1, "day");
            }}
          />
        </Form.Item>

        <Form.Item label="Project :">
          <Select
            id="label"
            value={value}
            options={options}
            classNamePrefix="select"
            isClearable={false}
            onChange={(data) => setValue([data])}
            components={{
              Option: OptionComponent,
            }}
          />
        </Form.Item>

        <Form.Item
          label="Description :"
          rules={[{ required: true, message: "This is required!" }]}
        >
          <TextArea
            style={{ width: "100%" }}
            type="textarea"
            name="text"
            id="description"
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEventSidebar;
