import { Calendar } from "react-iconly";
import { BsTable } from "react-icons/bs";
const mains = [
  {
    header: "MAIN",
  },
  {
    id: "apps-calendar",
    title: "Calendar",
    icon: <Calendar set="curved" />,
    navLink: "/mains/calendar",
  },
  {
    id: "schedule",
    title: "Schedule",
    icon: <BsTable set="curved" />,
    navLink: "/mains/schedule",
  },
];
export default mains;