import Common from "@/views/common/router";
import SubPage from "@/views/subPage/router";

let components = [];

components = components.concat(Common);
components = components.concat(SubPage);

components = components.concat({
    path: "/",
    redirect: "/home",
});

export default components;