import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import CarritoContextProvider from "./context/carritoContext";

import PrivateRoute from "./components/PrivateRoute";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import CheckOutView from "./views/CheckOutView";
import Navegacion from "./components/Navegacion";
import ProductoDetalleView from "./views/ProductoDetalleView";

export default function App() {
  return (
    <AuthContextProvider>
      <CarritoContextProvider>
        {/*aqui dentro del provider puedo poner tanto componentes como rutas*/}
        <Router>
          <Navegacion />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
            <Route
              path="/detalleproducto/:id"
              element={<ProductoDetalleView />}
            />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <CheckOutView />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </CarritoContextProvider>
    </AuthContextProvider>
  );
}
