import React from "react";
import PaginaInicial from "../components/PaginaInicial";
import Status from "../pages/Status/Status";
import Layout from "../Layout";
import TrocaBolsa from "../pages/Status/TrocaBolsa";
import UserSetting from "../pages/UserSetting";
import Duvidas from "../pages/UserSetting/Duvidas";
import Dicas from "../pages/Dicas/Dicas";
import Analise from "../pages/Analise";
import Art1 from "../pages/Dicas/Articles/Art1";
import Art2 from "../pages/Dicas/Articles/Art2";
import Art3 from "../pages/Dicas/Articles/Art3";
import Art4 from "../pages/Dicas/Articles/Art4";
import Art5 from "../pages/Dicas/Articles/Art5";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

function InicialLayout({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <PaginaInicial navigation={navigation} />
    </Layout>
  );
}

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="PaginaInicial"
        component={InicialLayout}
        options={{ headerShown: false }}
      />
      <Screen name="Status" component={Status} options={{ title: "" }} />
      <Screen
        name="UserSetting"
        component={UserSetting}
        options={{ title: "" }}
      />
      <Screen
        name="TrocaBolsa"
        component={TrocaBolsa}
        options={{ title: "" }}
      />
       <Screen
        name="Duvidas"
        component={Duvidas}
        options={{ title: "Duvidas" }}
      />
      <Screen
        name="Analise"
        component={Analise}
        options={{ title: "Análise" }}
      />
       <Screen
        name="Dicas"
        component={Dicas}
        options={{ title: "Dicas" }}
      />
       <Screen
        name="Art1"
        component={Art1}
        options={{ title: " " }}
      />
       <Screen
        name="Art2"
        component={Art2}
        options={{ title: " " }}
      />
       <Screen
        name="Art3"
        component={Art3}
        options={{ title: " " }}
      />
       <Screen
        name="Art4"
        component={Art4}
        options={{ title: " " }}
      />
       <Screen
        name="Art5"
        component={Art5}
        options={{ title: " " }}
      />

    </Navigator>
  );
}
