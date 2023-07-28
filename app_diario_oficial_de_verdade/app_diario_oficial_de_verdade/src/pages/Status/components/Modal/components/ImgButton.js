import ok from "../../../../../imagens/ok.png";
import like from "../../../../../imagens/like.png";
import dislike from "../../../../../imagens/dislike.png";
import running from "../../../../../imagens/running.png";
import walk from "../../../../../imagens/walk.png";
import weakness from "../../../../../imagens/weakness.png";
import happiness from "../../../../../imagens/happiness.png";
import neutral from "../../../../../imagens/neutral.png";
import sad from "../../../../../imagens/sad.png";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const handleImageByName = {
  Boa: ok,
  Razoável: like,
  Ruim: dislike,
  Agradável: running,
  Pouco: walk,
  Nada: weakness,
  Saudável: happiness,
  Sensível: neutral,
  Irritada: sad,
};

export const ImgButton = ({ style, onPress, desc }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={style} onPress={onPress}>
          {handleImageByName[desc] && (
            <Image
              style={{ width: 40, height: 40 }}
              source={handleImageByName[desc]}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={{ fontSize: 14, marginTop: 5 }}>{desc}</Text>
    </View>
  );
};
