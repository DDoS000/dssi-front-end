import { combineReducers } from "redux";

import calendarReducer from "./calendar/calendarReducer";
// import contactReducer from "./contact/contactReducer";
import userReducer from "./users/usersReducer";
import customiseReducer from "./customise/customiseReducer";
// import ecommerceReducer from "./ecommerce/ecommerceReducer";
import authReducer from "./auth/authReducer";
import messageReducer from "./message/messageReducer";

const rootReducer = combineReducers({
  calendar: calendarReducer,
  // contact: contactReducer,
  users: userReducer,
  // ecommerce: ecommerceReducer,
  customise: customiseReducer,
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;