import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1')); /* Cambiar el nombre del archuvo de los chunks */
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')); /* Cambiar el nombre del archuvo de los chunks */
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')); /* Cambiar el nombre del archuvo de los chunks */

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Laze 1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Laze 2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Laze 3',
    }
]