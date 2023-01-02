import Common from "@/views/common/router";

let components = [];

components = components.concat(Common);

components = components.concat({
    path: "/",
    redirect: "/Home",
});

export default components;