import { cartsContext } from "../contexts/cartContext";
import { useContext } from "react";

export const useCartsContext = () => useContext(cartsContext);