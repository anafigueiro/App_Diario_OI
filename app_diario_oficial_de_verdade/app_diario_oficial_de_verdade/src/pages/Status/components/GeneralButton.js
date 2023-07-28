import intestine from "../../../imagens/intestine.png";
import yoga from "../../../imagens/yoga.png";
import fitness from "../../../imagens/fitness.png";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
const handleImageByName = {
  Digestão: intestine,
  Exercícios: yoga,
  Pele: fitness,
};

export const GeneralButton = ({ onPress, name }) => {
  return (
    <View style={{ alignItems: "center", margin: "5%" }} accessible={true}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} accessible={true}>
        <View style={styles.button_icon} onPress={onPress} accessible={true}>
          {handleImageByName[name] && (
            <Image accessible={true}
              style={{ width: 40, height: 40 }}
              source={handleImageByName[name]}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", fontSize: 13, marginTop: 5 }}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button_icon: {
    backgroundColor: "#D5F6E6",
    borderRadius: 10,
    padding: 10,
  },
});
