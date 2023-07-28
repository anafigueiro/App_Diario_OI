import { useContext } from "react";
import { authContext } from "../context/authContext";

export function useAuth() {
  const context = useContext(authContext);
  return context;
}
