import { useState, useEffect, type ReactNode } from "react";
import { storeContext } from "./storeConext";

export const StoreContextProvider = ({children}:{children: ReactNode}) => {
    const savedData = JSON.parse(sessionStorage.getItem("storeData") || "null");
    const [store, setStore] = useState(savedData);

    useEffect(() => {
      sessionStorage.setItem("storeData", JSON.stringify(store));
    }, [store]);

  return (<storeContext.Provider value={{store, setStore}}>{children}</storeContext.Provider>);
};