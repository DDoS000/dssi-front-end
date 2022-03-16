import { People, Category } from "react-iconly";
const manager = [
  {
    header: "MANAGER",
  },
  {
    id: "user",
    title: "User",
    icon: <People set="curved" />,
    navLink: "/manager/user",
  },
  {
    id: "project",
    title: "Project",
    icon: <Category set="light" />,
    navLink: "/manager/project",
  },
];

export default manager;
