import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import createHook from "@/components/4-main-categories/createHook";
import mountHook from "@/components/4-main-categories/mountHook";
import updateHook from "@/components/4-main-categories/updateHook";
import destroyHook from "@/components/4-main-categories/destroyHook";
import allHooks from "@/components/4-main-categories/allHooks";
import keepAlive from "@/components/keep-alive/keep-alive";
import error from "@/components/debugging/error";

const routes = [
    {
        path: "/",
        name: "home",
        component: allHooks,
    },
    {
        path: "/create",
        name: "create",
        component: createHook,
    },
    {
        path: "/mount",
        name: "mount",
        component: mountHook,
    },
    {
        path: "/update",
        name: "update",
        component: updateHook,
    },
    {
        path: "/destroy",
        name: "destroy",
        component: destroyHook,
    },
    {
        path: "/keep-alive",
        name: "keepAlive",
        component: keepAlive,
    },
    {
        path: "/error",
        name: "error",
        component: error,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;