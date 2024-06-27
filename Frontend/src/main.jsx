import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/Search.jsx';
import SingleProduct from './pages/products/SingleProduct.jsx';
import Recipes from './pages/products/Recipes.jsx';
import Resources from './pages/resources/Resources.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/categories/:category",
        element:<CategoryPage/>
      },
      {
        path:"/search",
        element:<Search/>
      },
      {
        path:"/item/:id",
        element:<SingleProduct/>,
        loader:({params})=> fetch(`http://localhost:5000/api/items/${params.id}`)
      },
      {
        path:"/recipes",
        element:<Recipes/>
      },
      {
        path:"/resources",
        element:<Resources/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
