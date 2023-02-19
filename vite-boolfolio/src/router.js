import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./pages/Home.vue";
import ProjectsPage from "./pages/Projects.vue";
import AboutPage from "./pages/About.vue";
import ContactsPage from "./pages/Contacts.vue";

const router =createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
                {
            path: "/about",
            name: "about",
            component: AboutPage
        },
                {
            path: "/projects/:id",
            name: "projects",
            component: ProjectsPage
        },
                {
            path: "/contacts",
            name: "contacts",
            component: ContactsPage
        },
    ]
});

export {router};