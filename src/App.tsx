import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { VerifyUser } from "./components/pages/VerifyUser/VerifyUser";

export const App  = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/verificar/:verificationCode" element={<VerifyUser/>}/>
      </Routes>
    </BrowserRouter>
  );
};