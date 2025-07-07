import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";
import { useEffect } from "react";
import { StoresContainer } from "./StoresContainer";
import { UserData } from "./UserData";
import { NavBar } from "./NavBar";

export const Profile = () => {
  const { user } = useUserContext();
  const nav = useNavigate();

  useEffect(() => {
    if (user === null) nav("/");
  });

  if (user === null) {
    return null;
  }

  return (
    <>
      <title>Mi Perfil</title>
      <NavBar />
      <main className="max-w-[1024px] m-auto py-16 min-h-[100vh-46vh]">
        <UserData user={user} />
        <StoresContainer />
      </main>
    </>
  );
};
