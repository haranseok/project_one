import Common from "@/views/common/router";
import AdminMain from "@/views/snapshot/router";

let components = [];

components = components.concat(Common);
components = components.concat(AdminMain);
components = components.concat(
    {
        path: "/",
        redirect: "/home",
    },
);

export default components;
