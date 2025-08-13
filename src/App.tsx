import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { VerifyUser } from "./components/pages/VerifyUser/VerifyUser";
import { Ingresar } from "./components/pages/Ingresar/Ingresar";
import { UserContextProvider } from "./contexts/UserContextProvider";
import { RecoverPass } from "./components/pages/RecoverPass/RecoverPass";
import { Registro } from "./components/pages/Registro/Registro";
import { LayoutForms } from "./components/LayoutForms";
import { Profile } from "./components/pages/Profile/Profile";
import { StoreHomePage } from "./components/pages/Store/Home/StoreHomePage";
import { AdminPanel } from "./components/pages/Store/AdminPanel/AdminPanel";
import { Menu } from "./components/pages/Store/AdminPanel/Menu";
import { AdminProducts } from "./components/pages/Store/AdminPanel/AdminProducts";
import { StoreContextProvider } from "./contexts/StoreContextProvider";
import { ProductPage } from "./components/pages/Store/Home/ProductPage";
import { CartsContextProvider } from "./contexts/CartContextProvider";
import { StoreLayout } from "./components/pages/Store/Home/StoreLayout";
import { Carrito } from "./components/pages/Store/Carrito/Carrito";

export const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CartsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/verificar/:verificationCode"
              element={<VerifyUser />}
            />

            <Route element={<LayoutForms />}>
              <Route path="/ingresar" element={<Ingresar />} />
              <Route path="/recuperar_contraseña" element={<RecoverPass />} />
              <Route path="/registro" element={<Registro />} />
            </Route>

            <Route path="/perfil" element={<Profile />} />

            <Route element={<StoreLayout />}>
              <Route path="/:storeName" element={<StoreHomePage />} />
              <Route path="/:storeName/carrito" element={<Carrito />} />
              <Route path="/:storeName/producto/:productId" element={<ProductPage />} />
            </Route>

            <Route
              element={
                <StoreContextProvider>
                  <AdminPanel />
                </StoreContextProvider>
              }
            >
              <Route
                path="/:storeName/admin/productos"
                element={<AdminProducts />}
              />
              <Route path="/:storeName/admin" element={<Menu />} />
            </Route>
          </Routes>
        </CartsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
};
