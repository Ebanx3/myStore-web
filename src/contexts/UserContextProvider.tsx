import { useState, useEffect, type ReactNode } from "react";
import { userContext } from "./userContext";

export const UserContextProvider = ({children}:{children: ReactNode}) => {
    const savedUser = JSON.parse(localStorage.getItem("myStoreUser") || "null");
    const [user, setUser] = useState(savedUser);

    useEffect(() => {
      localStorage.setItem("myStoreUser", JSON.stringify(user));
    }, [user]);

  return (<userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>);
};