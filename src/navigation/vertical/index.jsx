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
import adminManager from "./admin/manager"
import adminFeedback from "./admin/feedback"

// student
import studentMain from "./student/main"
import studentFeedback from "./student/feedback"

const role_navigation = "student";
let navigation;

if (role_navigation === "admin") {
  navigation = [
    ...adminMain,
    ...adminManager,
    ...adminFeedback,
  ];
} else if (role_navigation === "student") {
  navigation = [
    ...studentMain,
    ...studentFeedback,
  ];
} else if (role_navigation === "dev") {
  navigation = [
    ...mains,
    ...manager,
    ...feedback,
    ...main,
    ...apps,
    ...pages,
    ...components,
  ];
}

export default navigation;
