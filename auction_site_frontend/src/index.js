import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './component/ErrorPage';
import About from './component/About';
import Login from './component/Login';
import Auctions from './component/ActionApp';
import Home from './component/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children :[
      {index: true, element:<Home/>
      },      
      {
        path :"/about",
        element : <About/>,
      },
      {
        path :"/auctions",
        element : <Auctions/>,
      },

      {
        path :"/login",
        element : <Login/>,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
