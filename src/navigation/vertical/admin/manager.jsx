import { People, Category } from "react-iconly";
const manager = [
  {
    header: "MANAGER",
  },
  {
    id: "user",
    title: "User",
    icon: <People set="curved" />,
    navLink: "/admin/manager/user",
  },
  {
    id: "admin-project",
    title: "Project",
    icon: <Category set="light" />,
    navLink: "/admin/manager/project",
  },
];

export default manager;
