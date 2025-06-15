import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { VerifyUser } from "./components/pages/VerifyUser/VerifyUser";
import { Ingresar } from "./components/pages/Ingresar/Ingresar";
import { UserContextProvider } from "./contexts/userContextProvider";

export const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verificar/:verificationCode" element={<VerifyUser />} />
          <Route path="/ingresar" element={<Ingresar />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
};
