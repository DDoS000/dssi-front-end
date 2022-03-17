import { Calendar, Category, Upload } from "react-iconly";
import { BsTable } from "react-icons/bs";
const main = [
  {
    header: "MAIN",
  },
  {
    id: "student-calendar",
    title: "Calendar",
    icon: <Calendar set="curved" />,
    navLink: "/student/main/calendar",
  },
  {
    id: "student-project",
    title: "Project",
    icon: <Category set="light" />,
    navLink: "/student/main/project",
  },
  {
    id: "upload-project",
    title: "Upload Project",
    icon: <Upload set="light" />,
    navLink: "/student/main/upload-project",
  },
];
export default main;
