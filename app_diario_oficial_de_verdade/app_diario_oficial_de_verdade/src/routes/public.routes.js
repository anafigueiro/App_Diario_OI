import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import TipoEstomia from "../pages/Cadastro/Steps/TipoEstomia";
import DataEstomia from "../pages/Cadastro/Steps/DataEstomia";
import Inicio from "../components/Inicio";

const { Navigator, Screen } = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="Inicio"
        component={Inicio}
      />
      <Screen name="Login" component={Login} options={{ title: "" }} />
      <Screen name="Cadastro" component={Cadastro} options={{ title: "" }} />
      <Screen
        name="TipoEstomia"
        component={TipoEstomia}
        options={{ title: "" }}
      />
      <Screen
        name="DataEstomia"
        component={DataEstomia}
        options={{ title: "" }}
      />
    </Navigator>
  );
}
