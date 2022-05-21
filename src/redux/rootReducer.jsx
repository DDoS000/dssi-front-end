import { combineReducers } from "redux";

import calendarReducer from "./calendar/calendarReducer";
import userReducer from "./users/usersReducer";
import customiseReducer from "./customise/customiseReducer";
import authReducer from "./auth/authReducer";
import messageReducer from "./message/messageReducer";
import registryReducer from "./registry/registryReducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  users: userReducer,
  registry: registryReducer,
  customise: customiseReducer,
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;