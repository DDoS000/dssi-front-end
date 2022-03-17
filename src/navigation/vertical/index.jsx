// dev
import apps from "./apps";
import pages from "./pages";
import main from "./main";
import components from "./components";
import mains from "./mains";
import manager from "./manager";
import feedback from "./feedback";

// admin
import adminMain from "./admin/main";
import adminManager from "./admin/manager";
import adminFeedback from "./admin/feedback";

// student
import studentMain from "./student/main";
import studentFeedback from "./student/feedback";

let navigation = {
  "ROLE_ADMIN": [...adminMain, ...adminManager, ...adminFeedback],
  "ROLE_STUDENT": [...studentMain, ...studentFeedback],
  "ROLE_DEV": [
    ...adminMain,
    ...adminManager,
    ...adminFeedback,
    ...studentMain,
    ...studentFeedback,
    ...mains,
    ...manager,
    ...feedback,
    ...main,
    ...apps,
    ...pages,
    ...components,
  ],
};

export default navigation;
