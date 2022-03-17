import { Calendar,Category } from "react-iconly";
import { BsTable } from "react-icons/bs";
const main = [
  {
    header: "MAIN",
  },
  {
    id: "apps-calendar",
    title: "Calendar",
    icon: <Calendar set="curved" />,
    navLink: "/student/main/calendar",
  },
  {
    id: "project",
    title: "Project",
    icon: <Category set="light" />,
    navLink: "/student/main/project",
  },
];
export default main;