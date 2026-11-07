import { useState } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Componenets/Pages/Home';
import Character from './Componenets/Pages/Character';
import AppLayout from './Componenets/layout/AppLayout';
const router = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"character",
        element:<Character/>
      }
    ]
  },
  
]);
function App() {

  return (
      <>
        
            <RouterProvider router={router}/>
      </>
  )
}

export default App
