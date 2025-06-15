import {createContext} from "react";

interface UserContext {
  user: Usuario | null;
  setUser: React.Dispatch<React.SetStateAction<Usuario | null>>;
}

export const userContext = createContext<UserContext>({
  user: null,
  setUser: () => {},
});