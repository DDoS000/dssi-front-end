import { Calendar } from "react-iconly";
import { BsTable } from "react-icons/bs";
const main = [
  {
    header: "MAIN",
  },
  {
    id: "apps-calendar",
    title: "Calendar",
    icon: <Calendar set="curved" />,
    navLink: "/admin/main/calendar",
  },
  {
    id: "schedule",
    title: "Schedule",
    icon: <BsTable set="curved" />,
    navLink: "/admin/main/schedule",
  },
];
export default main;
