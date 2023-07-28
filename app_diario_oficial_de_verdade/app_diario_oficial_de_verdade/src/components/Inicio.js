import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";

export default function Inicio({ navigation }) {
  return (
    <View  accessible={true} style={styles.container}>
      <View  accessible={true} style={styles.center}>
        <Image accessible={true}
          accessibilityLabel="Logo do aplicativo" style={styles.logo} source={require("../imagens/logo.png")} />
        <Image accessible={true}
          accessibilityLabel="Imagem figurativa de estomizado acenando"
          style={styles.img}
          source={require("../imagens/imagem_inicio.png")}
        />
      </View>

      <View accessible={true} style={styles.center}>
        <Text style={styles.titulo}> Estomizados </Text>

        <Text style={styles.texto}>
          Acompanhe sua rotina, confira dicas de saúde e monitore seu progresso.
        </Text>
      </View>
      <View accessible={true} style={styles.center}>
        <Button accessible={true}
          accessibilityLabel="Fazer login"
          textColor="#C770D1"
          color="#C770D1"
          title="Tenho conta"
          mode="outlined"
          style={styles.button1}
          onPress={() => navigation.navigate("Login")}
        >
          Tenho uma conta
        </Button>

        <Button
          accessible={true}
          accessibilityLabel="Fazer Cadastro"
          color="white"
          mode="contained"
          title="Comece agora"
          style={styles.button2}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Comece agora
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    padding: "10%",
    height: "100%",
  },
  center: {
    alignItems: "center",
  },
  titulo: {
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  texto: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 13,
    width: 250,
  },
  logo: {
    margin: "10%",
    height: 70,
    width: 200,
  },
  img: {
    marginTop: -20,
    marginBottom: 10,
    alignContent: "center",
    height: 240,
    width: 170,
    alignSelf: "center",
  },
  button1: {
    contentAlign: "center",

    marginBottom: 13,
    borderColor: "#C770D1",
    width: 250,
    padding: 7,
    borderRadius: 20,
  },
  button2: {
    color: "white",
    backgroundColor: "#C770D1",
    contentAlign: "center",

    marginBottom: 13,
    borderWidth: 0,
    borderColor: "#763C00",
    padding: 7,
    width: 250,
    borderRadius: 20,
  },
});
