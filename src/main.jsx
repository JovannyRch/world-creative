import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Asesoria from './pages/Asesoria/Asesoria.jsx';
import LibrosRecomendados from './pages/LibrosRecomendados/LibrosRecomendados.jsx';
import Material from './pages/Material/Material.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "asesoria",
    element: <Asesoria />
  },
  {
    path: "libros-recomendados",
    element: <LibrosRecomendados />
  },
  {
    path: "material-didactico",
    element: <Material />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
