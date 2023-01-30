import { lazy, LazyExoticComponent } from "react";
import { NoLasy } from "../01-lazyload/pages/NoLasy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')); /* Cambiar el nombre del archuvo de los chunks */

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'Laze Layout',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLasy,
        name: 'No Lazy',
    }
]