import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Componenets/Pages/Home';
import Character from './Componenets/Pages/Character';
import Header from './Componenets/layout/Header';
const router = createBrowserRouter([
  {
    path: "",
    element: <Home/>,
  },
  {
    path:"character",
    element:<Character/>
  }
]);
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header/>
          <main>
            <RouterProvider router={router}/>
          </main>
      </>
  )
}

export default App
