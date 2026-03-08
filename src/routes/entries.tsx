import React from 'react';
import { RouteObject } from "react-router-dom";
import NotFoundErrorPage from "../pages/ErrorPage";
import { routes } from "./routes";

type LazyResult = Promise<{ Component: React.ComponentType }>;

const lazyImportedElement = async (
    importer: () => Promise<{ default: React.ComponentType }>
): LazyResult => {
    const { default: DefaultElement } = await importer();

    return {
        Component: DefaultElement,
    };
};

export const entries: RouteObject[] = [
    {
        path: '/',
        lazy: () => lazyImportedElement(() => import('../App')),
        children: [
            {
                path: routes.About.url,
                lazy: () => lazyImportedElement(() => import('../pages/About')),
            },
            {
                path: routes.Epigrams.url,
                lazy: () => lazyImportedElement(() => import('../pages/Epigrams')),
                index: true,
            },
            {
                path: routes.Links.url,
                lazy: () => lazyImportedElement(() => import('../pages/Links')),
            },
            {
                path: routes.Media.url,
                lazy: () => lazyImportedElement(() => import('../pages/Press')),
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundErrorPage/>,
    },
]