// El children esta recibiendo los componentes(rutas) que van a estar dentro de este componente

import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation(); // Recordar ruta anterior

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    // console.log(lastPath);

  return (logged) // Si esta logueado retorna el children con los componentes de ruta, sino lo redirige al login
    ? children
    : <Navigate to="/login" />
}
