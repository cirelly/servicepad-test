import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AddArticle from '../components/pages/AddArticle/AddArticle';
import Home from '../components/pages/Home/Home';
import Layout from '../layout/Layout';

const routes = () =>  [
    {
        path: '/',
        element:<Layout />,
        children: [
            {
                path: 'add-article',
                element: <><AddArticle /> <Outlet /></>
            },
            {
                path: '/',
                element: <><Home/> <Outlet /></>
            }
        ]
    },
    {
        path: '*',
        element: <><h1>HEY BRO ESA PAG NO EXISTE 404</h1></>
    }
]

export default routes;