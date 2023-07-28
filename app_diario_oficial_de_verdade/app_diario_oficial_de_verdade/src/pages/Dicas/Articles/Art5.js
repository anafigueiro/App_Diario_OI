import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-paper';
import { useAuth } from '../../../hooks/useAuth';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Art5() {
  return (
    <View accessible={true} style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <View style={styles.center} accessible={true}>
          <Text style={styles.titulo}> Psicológico </Text>
          <Text style={styles.subtitulo}>Aceitando as mudanças</Text>
          <Text style={styles.texto}>
            Aqui estão algumas orientações e estratégias para lidar com os
            obstáculos e as frustrações que surgem ao conviver com uma estomia.
            Enfrentar as mudanças após a cirurgia de estomia pode ser uma
            jornada repleta de altos e baixos. Não existe uma solução mágica,
            mas com o tempo, você encontrará um equilíbrio e a felicidade em sua
            vida, assim como outros que enfrentaram desafios semelhantes.
          </Text>
          <Image
            accessible={true}
            accessibilityLabel="Imagem ilustrativa sobre mudanças na vida"
            style={styles.img}
            source={require('../../../imagens/imagem_mudanca.jpg')}
          />
          <Text style={styles.subtitulo}>Quando a frustração se instala </Text>
          <Text style={styles.texto}>
            Inicialmente, é natural que você estivesse preocupado(a) com todas
            as habilidades práticas que precisava aprender. Talvez tenha sentido
            alívio no começo, já que a cirurgia fazia parte do tratamento para
            uma doença ou, pelo menos, para superar diversas dificuldades.
            Contudo, ao retornar à vida cotidiana, é possível que sentimentos de
            confusão e frustração comecem a surgir. Embora não haja uma solução
            universal para lidar com esses sentimentos, existem algumas coisas
            que você pode fazer para recuperar o equilíbrio em sua vida.
          </Text>

          <Text style={styles.subtitulo}>Assuma o controle</Text>
          <Text style={styles.texto}>
            Não é raro sentir uma perda de controle em relação à sua situação.
            Se esse for o caso, é importante que você participe ativamente de
            todas as decisões relacionadas à sua estomia, desde a escolha dos
            produtos adequados até a definição dos seus próprios limites. Isso
            lhe proporcionará uma sensação maior de controle e, sem dúvida,
            fortalecerá sua confiança.
          </Text>

          <Text style={styles.subtitulo}>Você ainda é a mesma pessoa</Text>
          <Text style={styles.texto}>
            Também é perfeitamente normal sentir uma certa perda de identidade,
            como se de alguma forma você se tornasse alguém diferente após a
            cirurgia. Nesse sentido, é importante continuar realizando as
            atividades que você costumava fazer e apreciava antes. Não para
            ficar preso(a) na nostalgia da vida pré-cirurgia, mas sim para se
            lembrar de todas as experiências positivas que ainda pode desfrutar.
          </Text>

          <Text style={styles.texto}>
            Faça uma lista de todas as coisas que você costumava fazer e gostava
            antes, e assegure-se de continuar praticando pelo menos algumas
            delas regularmente. E lembre-se: apenas as circunstâncias físicas
            mudaram, não quem você é como pessoa.
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
