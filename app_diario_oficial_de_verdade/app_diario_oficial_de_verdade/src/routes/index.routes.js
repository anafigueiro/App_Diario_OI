import React from "react";
import { PublicRoutes } from "./public.routes";
import { AuthRoutes } from "./auth.routes";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { session } = useAuth();
  return (
    <NavigationContainer>
      {!!session ? <AuthRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
