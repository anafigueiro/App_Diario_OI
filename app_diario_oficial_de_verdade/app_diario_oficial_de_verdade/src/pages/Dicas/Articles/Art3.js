import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-paper';
import { useAuth } from '../../../hooks/useAuth';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Art3() {
  return (
    <View accessible={true} style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <View style={styles.center} accessible={true}>
          <Text style={styles.titulo}> Atividades físicas </Text>
          <Text style={styles.subtitulo}>Estomia e a Prática de Esportes</Text>
          <Text style={styles.texto}>
            Dicas para praticar diversas atividades, desde ioga até esportes em
            equipe, e orientações sobre como se comportar em vestiários.
          </Text>
          <Image
            accessible={true}
            accessibilityLabel="Imagem retratando a prática de esportes"
            style={styles.img}
            source={require('../../../imagens/imagem_esportes.png')}
          />

          <Text style={styles.subtitulo}>Caminhada</Text>
          <Text style={styles.texto}>
            Caminhar é uma forma fácil e suave de retomar a rotina e pode ser
            iniciada logo após a cirurgia. Seja dentro de casa, como subir e
            descer escadas, ou ao ar livre, caminhar é uma atividade que pode
            ser gradualmente aumentada em velocidade e distância.
          </Text>
          <Text style={styles.texto}>
            Para desafiar a si mesmo, você pode aumentar sua rota, subir uma
            colina ou fazer um desvio através de um parque. Ao se desafiar a
            caminhar mais longe, você melhora sua força e resistência.
          </Text>

          <Text style={styles.subtitulo}>Corrida</Text>
          <Text style={styles.texto}>
            Com a autorização do seu médico ou enfermeiro especializado em
            cuidados com a estomia, a corrida é uma excelente maneira de
            manter-se em forma. Se você não está acostumado a correr, é
            importante começar devagar, alternando entre corrida e caminhada.
          </Text>

          <Text style={styles.subtitulo}>Ioga</Text>
          <Text style={styles.texto}>
            A prática de ioga é outra ótima forma de exercício. Ela reduz o
            estresse, fortalece os músculos, melhora o equilíbrio e a
            flexibilidade. A ioga pode ser realizada em qualquer lugar,
            tornando-se uma opção perfeita para começar.
          </Text>
          <Text style={styles.texto}>
            A ioga também é muito adequada para quem estava menos ativo
            anteriormente, pois pode ser personalizada de acordo com o nível de
            cada indivíduo.
          </Text>

          <Text style={styles.subtitulo}>Natação</Text>
          <Text style={styles.texto}>
            Não evite a piscina devido ao receio de que os outros saibam sobre
            sua estomia. A natação e a hidroginástica são excelentes formas de
            se manter em forma.
          </Text>
          <Text style={styles.texto}>
            Na água, o peso do seu corpo é suportado, o que proporciona um
            treino muscular com risco mínimo de lesões. A natação também pode
            ajudar a aumentar a flexibilidade e é uma ótima opção se você sofre
            de artrite.
          </Text>

          <Text style={styles.subtitulo}>Ciclismo</Text>
          <Text style={styles.texto}>
            Antes de começar a andar de bicicleta, é importante consultar o seu
            médico ou enfermeiro especializado em cuidados com a estomia para
            garantir que a área abdominal esteja completamente cicatrizada. Após
            esse período, andar de bicicleta é uma excelente opção, pois é um
            exercício de baixo impacto que não coloca muita pressão sobre o
            abdômen.
          </Text>
          <Text style={styles.texto}>
            Se você passou por uma cirurgia para a remoção do reto, é necessário
            esperar um pouco mais para começar, a fim de permitir que a área
            cicatrize. Sentar-se no selim da bicicleta precocemente pode causar
            desconforto e possíveis lesões.
          </Text>
          <Text style={styles.texto}>
            Caso você não esteja pronto para se exercitar com outras pessoas ou
            em locais onde possam vê-lo, uma ótima opção é utilizar uma
            bicicleta ergométrica em casa. Com o tempo, você ganhará confiança
            para treinar fora de casa.
          </Text>

          <Text style={styles.subtitulo}>Golfe</Text>
          <Text style={styles.texto}>
            O golfe pode ser uma ótima maneira de combinar exercícios ao ar
            livre e passar tempo com amigos. Com um pouco de preparação, não há
            razão para impedir que você dê algumas tacadas.
          </Text>
          <Text style={styles.texto}>
            No entanto, é importante estar ciente de que, devido ao torque
            envolvido em uma tacada de golfe, praticar esse esporte pode exigir
            medidas extras de segurança com a sua bolsa de estomia.
          </Text>

          <Text style={styles.subtitulo}>Treinamento de Força </Text>
          <Text style={styles.texto}>
            Uma combinação de treinamento de força e cardiovascular é a melhor
            maneira de ficar em forma. O treinamento de força fortalece o corpo
            para outros esportes e reduz o risco de lesões nas articulações.
            Além disso, molda o corpo e aumenta significativamente a queima de
            calorias.
          </Text>
          <Text style={styles.texto}>
            À medida que envelhecemos, perdemos gradualmente massa muscular
            essencial. O treinamento de força com pesos ou bandas de resistência
            ajuda a manter ou até mesmo desenvolver músculos, tornando o corpo
            mais resistente e reduzindo o risco de lesões nas articulações. Além
            disso, ajuda a manter uma aparência magra e saudável.
          </Text>

          <Text style={styles.subtitulo}>Esportes em equipe </Text>
          <Text style={styles.texto}>
            Contar com a confiança e a presença de outras pessoas pode ser o
            impulso necessário para começar a se exercitar. Muitos acham mais
            fácil superar problemas de autoconsciência e se engajar em esportes
            coletivos, em vez de esportes individuais.
          </Text>
          <Text style={styles.texto}>
            No entanto, é importante observar que esportes competitivos podem
            ser intensos, e podem não ser a melhor opção para começar,
            especialmente se você não estava acostumado a praticar exercícios
            anteriormente. De qualquer forma, é recomendado verificar com seu
            médico ou enfermeiro especializado em cuidados com a estomia antes
            de iniciar qualquer atividade física.
          </Text>

          <Text style={styles.subtitulo}>O que fazer nos vestiários? </Text>
          <Text style={styles.texto}>
            Estar em um vestiário com outras pessoas pode ser um desafio a ser
            superado. Em situações como essa, é útil antecipar possíveis
            reações. Você se perguntará: devo esconder a bolsa? Não existe uma
            resposta certa ou errada, então faça o que for melhor para você. No
            entanto, se você estiver se exercitando com alguém que conhece,
            considere se seria mais fácil, a longo prazo, ser aberto e sincero
            desde o início, em vez de ter que lidar com isso toda vez que vocês
            se exercitarem juntos.
          </Text>
          <Text style={styles.texto}>
            Pode ser útil pensar em uma explicação com antecedência. Talvez você
            possa simplesmente dizer que faz algum tempo desde a última vez que
            se exercitou ou que precisa ir devagar hoje, pois recentemente
            passou por uma cirurgia abdominal. Essa explicação deve ser o
            suficiente.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  center: {
    alignItems: 'center',
  },
  titulo: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '10%',
    marginBottom: '10%',
  },
  subtitulo: {
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 10,
    fontSize: 14,
    width: 250,
    fontWeight: 'bold',
  },
  texto: {
    textAlign:"justify",
    fontSize: 14,
    width: 250,
    margin: '2%',
  },
  img: {
    width: 250,
    height: 160,
    margin: '5%',
  },
});
