import apps from "./apps";
import pages from "./pages";
import main from "./main";
import components from "./components";
import mains from "./mains";
import manager from "./manager";
import feedback from "./feedback";

const navigation = [
    ...mains,
    ...manager,
    ...feedback,
    ...main, 
    ...apps, 
    ...pages, 
    ...components,
];

export default navigation