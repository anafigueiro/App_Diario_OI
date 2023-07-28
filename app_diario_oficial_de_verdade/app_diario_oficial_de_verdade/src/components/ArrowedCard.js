import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export function ArrowedCard({ onPress, titulo, texto, bgColor }) {
  const cardWithBg = bgColor
    ? { ...styles.card1, backgroundColor: bgColor }
    : styles.card1;
  return (
    <TouchableOpacity style={styles.view} onPress={onPress} activeOpacity={0.8}>
      <View accessible={true} style={cardWithBg}>
        <View accessible={true} style={{ width: "80%", padding:"3%"}}>
          <Text style={styles.titulo2}>{titulo}</Text>
          {texto && <Text style={styles.texto2}>{texto}</Text>}
        </View>
        <View accessible={true} style={{ ...styles.alignCenter, width: "10%" }}>
          <Image accessible={true} accessibilityLabel="Clique para acessar"
            style={styles.logo}
            source={require("../imagens/right-arrow.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo2: {
    margin: "5%",
    fontWeight: "bold",
    fontSize: 16,
  },

  view: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  logo: {
    width: 10,
    height: 10,
  },

  texto2: {
    textAlign: "left",
    margin: "5%",
    marginBottom: 20,
    marginTop: 0,
    fontSize: 13,
    width: "100%",
  },

  card1: {
    width: "100%",
    backgroundColor: "#D798DE",
    marginBottom: 13,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
});
