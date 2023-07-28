import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-paper';
import { useAuth } from '../../../hooks/useAuth';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Art2() {
  return (
    <View accessible={true} style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <View style={styles.center} accessible={true}>
          <Text style={styles.titulo}> Alimentação </Text>
          <Text style={styles.subtitulo}>
            Cuidados com a alimentação pré e pós-cirurgia.
          </Text>
          <Text style={styles.texto}>
            Tanto antes quanto depois do procedimento cirúrgico, é importante
            adotar uma abordagem cuidadosa em relação à dieta, visando fornecer
            os nutrientes necessários, promover a cicatrização adequada e
            minimizar possíveis complicações.
          </Text>
          <Image accessible={true}
            accessibilityLabel="Imagem ilustrativa de alimentos"
            style={styles.img}
            source={require('../../../imagens/imagem_alimentacao.png')}
          />

          <Text style={styles.subtitulo}>O que comer antes da cirurgia?</Text>

          <Text style={styles.texto}>
            • Priorize uma variedade de frutas e vegetais em sua alimentação;
          </Text>

          <Text style={styles.texto}>
            • Opte por refeições menores contendo carboidratos ricos em amido,
            como batata, pão e arroz;
          </Text>

          <Text style={styles.texto}>
            • Inclua laticínios ou alternativas lácteas, como bebidas de soja,
            em sua dieta;
          </Text>

          <Text style={styles.texto}>
            • Obtenha proteínas de fontes como peixes, ovos, carnes ou feijão e
            leguminosas;
          </Text>

          <Text style={styles.texto}>
            • Escolha gorduras não saturadas e consuma em quantidades moderadas;
          </Text>

          <Text style={styles.texto}>
            • Mantenha-se hidratado, bebendo de 6 a 8 copos de líquidos por dia;
          </Text>

          <Text style={styles.texto}>
            • Reduza o consumo de alimentos e bebidas com alto teor de gordura,
            açúcar ou sal.
          </Text>

          <Text style={styles.subtitulo}>O que comer depois da cirurgia?</Text>

          <Text style={styles.texto}>
            Logo após a cirurgia, é comum haver um inchaço na região ao redor da
            estomia, o que pode dificultar a passagem de certos alimentos,
            especialmente os ricos em fibras. Nos primeiros dias após a
            operação, é aconselhável adotar uma abordagem de refeições menores e
            mais frequentes, a fim de evitar bloqueios que podem ser dolorosos e
            desconfortáveis. É recomendado começar com alimentos pastosos, como
            sopas fortificadas, mingaus, arroz doce, iogurte e vitaminas.
          </Text>
          <Text style={styles.texto}>
            Enquanto o inchaço e o desconforto ao redor da estomia não
            desaparecerem, é aconselhável seguir uma dieta leve. Isso significa
            limitar a ingestão de grandes quantidades de alimentos ricos em
            proteínas, frutas e vegetais com baixo teor de fibras, além de optar
            por massas não integrais e pão branco.
          </Text>

          <Text style={styles.subtitulo}>
            Como voltar com a alimentação normal?
          </Text>

          <Text style={styles.texto}>
            Quando a área ao redor da estomia externa começa a cicatrizar e
            ficar menos dolorida, isso indica que o interior também está
            começando a se recuperar. Nesse momento, você pode gradualmente
            reintroduzir alguns alimentos essenciais para uma dieta equilibrada.
            No entanto, é importante fazer isso gradualmente, a fim de evitar
            complicações, especialmente ao adicionar alimentos mais pesados,
            como vegetais ricos em fibras e nozes. Além disso, lembre-se de
            manter-se hidratado, pois a ingestão adequada de líquidos ajudará no
            movimento dos alimentos pelo intestino.
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
