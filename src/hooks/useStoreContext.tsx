import { storeContext } from "../contexts/storeConext";
import { useContext } from "react";

export const useStoreContext = () => useContext(storeContext);