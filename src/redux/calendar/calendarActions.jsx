import instance from "./data";
import CalendarService from "../../services/CalendarService";

export const fetchEvents = (calendars) => {
  return (dispatch) => {
    CalendarService.fetchEvents(calendars).then((response) => {
      dispatch({
        type: "FETCH_EVENTS",
        events: response.data.data,
      });
    });
  };
};

// Add Event
export const addEvent = (event) => {
  return (dispatch, getState) => {
    CalendarService.AddSchedule(event).then(() => {
      dispatch({
        type: "ADD_EVENT",
      });
      dispatch(fetchEvents(getState().calendar.selectedCalendars));
    });
  };
};

// Update Event
export const updateEvent = (event) => {
  return (dispatch) => {
    instance.post("/apps/calendar/update-event", { event }).then(() => {
      dispatch({
        type: "UPDATE_EVENT",
      });
    });
  };
};

// Filter Events
export const updateFilter = (filter) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_FILTERS",
      filter,
    });
    dispatch(fetchEvents(getState().calendar.selectedCalendars));
  };
};

// Add/Remove All Filters
export const updateAllFilters = (value) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_ALL_FILTERS",
      value,
    });
    dispatch(fetchEvents(getState().calendar.selectedCalendars));
  };
};

// Remove Event
export const removeEvent = (id) => (dispatch) => {
  return CalendarService.DeleteSchedule(id).then((response) => {
    dispatch({
      type: "REMOVE_EVENT",
    });

    return response.data;
  });
};
// export const removeEvent = (id) => {
//   return (dispatch) => {
//     instance.delete("/apps/calendar/remove-event", { id }).then(() => {
//       dispatch({
//         type: "REMOVE_EVENT",
//       });
//     });
//   };
// };

// Select Event (get event data on click)
export const selectEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: "SELECT_EVENT",
      event,
    });
  };
};
