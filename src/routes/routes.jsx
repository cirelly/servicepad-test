import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../layout/Layout';

//TODO: add layout in routes
const routes = () =>  [
    {
        path: '/',
        element:<Layout />,
        children: [
            {
                path: 'add-article',
                element: <><h1>esto es add new article</h1> <Outlet /></>
            },
            {
                path: '/',
                element: <><h1>Home mano</h1> <Outlet /></>
            }
        ]
    },
    {
        path: '*',
        element: <><h1>HEY BRO ESA PAG NO EXISTE 404</h1></>
    }
]

export default routes;