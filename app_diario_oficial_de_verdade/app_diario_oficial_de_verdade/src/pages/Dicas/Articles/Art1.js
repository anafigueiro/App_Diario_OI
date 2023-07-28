import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-paper';
import { useAuth } from '../../../hooks/useAuth';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Art1() {
  return (
    <View accessible={true} style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <View style={styles.center} accessible={true}>
          <Text style={styles.titulo}> Sistemas digestório e urinário </Text>
          <Text style={styles.subtitulo}>
            Estoma e o sistemas digestório e urinário
          </Text>
          <Text style={styles.texto}>
            Compreender o funcionamento do sistema digestivo e urinário irá lhe
            ajudar na compreensão do funcionamento da sua estomia.
          </Text>
          <Image
            accessible={true}
            accessibilityLabel="Imagem sistema digestório e urinário"
            style={styles.img}
            source={require('../../../imagens/imagem_sistemas.png')}
          />

          <Text style={styles.texto}>
            O processo de digestão começa na boca, onde inicia com a mastigação.
            Em seguida, o alimento passa pela faringe e pelo esôfago, até chegar
            ao estômago. No estômago, ocorre a digestão química, transformando o
            alimento em uma substância chamada de quimo. Depois, o quimo passa
            para o intestino delgado (íleo), onde ocorre a maior parte da
            digestão e absorção dos nutrientes.
          </Text>

          <Text style={styles.texto}>
            Nesse processo, enzimas pancreáticas e a bile são liberadas para
            auxiliar na quebra dos alimentos em moléculas menores. No intestino
            delgado, os nutrientes são absorvidos. O que sobra, como fibras e
            resíduos não digeridos, segue para o intestino grosso (cólon), onde
            ocorre a absorção de água e a formação das fezes. Por fim, as fezes
            são armazenadas no reto até serem eliminadas através do ânus durante
            a evacuação.
          </Text>

          <Text style={styles.texto}>
            O sistema urinário é responsável pela produção, armazenamento e
            eliminação da urina. Os rins são os principais órgãos do sistema
            urinário. Eles filtram o sangue e produzem a urina. A urina passa
            dos rins até a bexiga pelos ureteres e é armazenada na bexiga até
            que seja conveniente eliminá-la. Quando a bexiga está cheia, ocorre
            a eliminação da urina através da uretra - canal que conduz a urina
            para fora do corpo.
          </Text>

          <Text style={styles.subtitulo}>
            Qual é o impacto de uma colostomia ou ileostomia no funcionamento do
            sistema digestório?
          </Text>

          <Text style={styles.texto}>
            Uma colostomia ou ileostomia tem um impacto significativo no
            funcionamento do sistema digestório.
          </Text>

          <Text style={styles.texto}>
            No caso de uma colostomia, a parte do cólon (intestino grosso) é
            desviada e conectada a essa abertura, enquanto em uma ileostomia, é
            o íleo (parte final do intestino delgado) que é desviado. Isso
            significa que as fezes ou o conteúdo intestinal passam diretamente
            pela abertura (estoma) e são coletados em uma bolsa externa, ao
            invés de seguir o caminho normal até o reto e serem eliminados pelo
            ânus.
          </Text>

          <Text style={styles.texto}>
            Como resultado, a função do cólon ou do íleo é interrompida na
            passagem das fezes ou do conteúdo intestinal. Além disso, a absorção
            de água e nutrientes pode ser afetada, já que o tempo de contato
            entre os alimentos e o intestino é reduzido.
          </Text>
          <Text style={styles.texto}>
            É importante mencionar que, embora uma colostomia ou ileostomia
            possa alterar o processo normal de eliminação de resíduos, o sistema
            digestório continua a cumprir seu papel fundamental na digestão dos
            alimentos e na absorção de nutrientes. No entanto, a forma como
            essas funções são realizadas é modificada devido ao desvio criado
            pela estomia.
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
    fontSize: 14,
    width: 250,
    margin: '2%',
    textAlign:"justify"
  },
  img: {
    width: 250,
    height: 160,
    margin: '5%',
  },
});
