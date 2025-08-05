import {createContext} from "react";

interface StoreContext {
  store: Store | null;
  setStore: React.Dispatch<React.SetStateAction<Store | null>>;
}

export const storeContext = createContext<StoreContext>({
  store: null,
  setStore: () => {},
});