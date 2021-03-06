import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let instance = axios.create({
  baseURL: "https://localhost:3000/",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});

let mock = new MockAdapter(instance);

const date = new Date();
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

const nextMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() + 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() + 1, 1);
const prevMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() - 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() - 1, 1);

const data = {
  events: [
    {
      id: 1,
      url: "",
      title: "Bunny Book",
      start: date,
      end: nextDay,
      allDay: false,
      extendedProps: {
        calendar: "Presenting",
      },
    },
    {
      id: 2,
      url: "",
      title: "Here Me",
      start: new Date(date.getFullYear(), date.getMonth() + 1, -15),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -14),
      allDay: true,
      extendedProps: {
        calendar: "Complete",
      },
    },
    {
      id: 3,
      url: "",
      title: "BotGoOn",
      allDay: true,
      start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
      extendedProps: {
        calendar: "Coming",
      },
    },
  ],
};

// Return calendar events
mock.onGet("/apps/calendar/events").reply((config) => {
  const calendars = config.calendars;

  return [
    200,
    data.events.filter((event) =>
      calendars.includes(event.extendedProps.calendar)
    ),
  ];
});

// Add new event
mock.onPost("/apps/calendar/add-event").reply((config) => {
  const { event } = JSON.parse(config.data);

  const { length } = data.events;
  let lastIndex = 0;
  if (length) {
    lastIndex = data.events[length - 1].id;
  }
  event.id = lastIndex + 1;

  data.events.push(event);

  return [
    201,
    {
      event,
    },
  ];
});

// Update Event
mock.onPost("/apps/calendar/update-event").reply((config) => {
  const { event: eventData } = JSON.parse(config.data);

  eventData.id = Number(eventData.id);

  const event = data.events.find((ev) => ev.id === Number(eventData.id));
  Object.assign(event, eventData);

  return [
    200,
    {
      event,
    },
  ];
});

// Remove Event
mock.onDelete("/apps/calendar/remove-event").reply((config) => {
  let { id } = config;

  const eventId = Number(id);

  const eventIndex = data.events.findIndex((ev) => ev.id === eventId);
  data.events.splice(eventIndex, 1);
  return [200];
});

export default instance;
