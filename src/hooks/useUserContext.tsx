import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export const useUserContext = () => useContext(userContext); 