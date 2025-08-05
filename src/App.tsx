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

export const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verificar/:verificationCode" element={<VerifyUser />} />

          <Route element={<LayoutForms />}>
            <Route path="/ingresar" element={<Ingresar />} />
            <Route path="/recuperar_contraseña" element={<RecoverPass />} />
            <Route path="/registro" element={<Registro />} />
          </Route>

          <Route path="/perfil" element={<Profile />} />

          <Route
            path="/:storeName"
            element={
              <StoreContextProvider>
                <CartsContextProvider>
                  <StoreHomePage />
                </CartsContextProvider>
              </StoreContextProvider>
            }
          />

          <Route path="/:storeName/:productId" element={<ProductPage />} />

          <Route
            element={
              <StoreContextProvider>
                <CartsContextProvider>
                  <AdminPanel />
                </CartsContextProvider>
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
      </UserContextProvider>
    </BrowserRouter>
  );
};
