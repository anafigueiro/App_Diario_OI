import React, { useState } from 'react';

import Slider from '@react-native-community/slider';

import Tooltip from 'react-native-walkthrough-tooltip';
import firebase from '../config/database';
import { Platform, StatusBar } from 'react-native';

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { useAnalysis } from '../hooks/useAnalysis';
import { Button, FAB } from 'react-native-paper';

export default function PaginaInicial({ navigation }) {
  const { updatableEnergy, saveEnergy } = useAnalysis();
  const [sliderValue, setSliderValue] = useState(50);
  const { session } = useAuth();

  const verificaEnergia = (value) => {
    if (sliderValue < 35) {
      return 'Baixa';
    }
    if (sliderValue < 65) {
      return 'Normal';
    }
    return 'Alta';
  };

  const salvar = () => {
    const date = new Date();
    saveEnergy(
      sliderValue,
      date.toLocaleDateString('pt-BR'),
      date.toLocaleTimeString('pt-BR')
    );
    navigation.navigate('Analise');
  };

  return (
    <View accessible={true} style={styles.container}>
      <View accessible={true} style={styles.card1}>
        <View />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={styles.loguinho}
            source={require('../imagens/loguinho.png')}
          />
          <View accessible={true}>
            <Text style={styles.titulo}>
              Oi, <Text style={{ color: '#7E3586' }}>{session.nome}</Text>!{' '}
            </Text>
            <Text style={styles.titulo}> Como você está? </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ width: 20, height: 20 }}
          onPress={() => navigation.navigate('UserSetting')}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../imagens/3pontos.png')}
          />
        </TouchableOpacity>
      </View>

      <View accessible={true} style={styles.card2}>
        <View accessible={true} style={styles.card3}>
          <Text style={styles.titulo}> Como está sua energia? </Text>
        </View>
        <Image
          accessibilityLabel="Imagem figurativa de estomizado acenando"
          style={styles.img}
          source={require('../imagens/imagem_inicio.png')}
        />
      </View>

      <View accessible={true} style={styles.center}>
        <Slider
          accessible={true}
          accessibilityLabel="Monitorar a energia através do slider."
          accessibilityHint="Arraste para a direita para aumentar a porcentagem da energia e arraste para a esquerda para diminuir"
          accessibilityRole="adjustable"
          style={styles.slider}
          thumbTintColor="#C770D1"
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#D798DE"
          maximumTrackTintColor="#F3E1F5"
          step={1}
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
        />
        <Text> {sliderValue}% </Text>
        <Text style={styles.titulo}>
          Energia {verificaEnergia(sliderValue)}
        </Text>
      </View>

      <View accessible={true} style={styles.center}>
        <Button
          accessible={true}
          accessibilityLabel="Salvar energia"
          color="white"
          mode="contained"
          title="Comece agora"
          disabled={!updatableEnergy}
          style={styles.button2}
          onPress={() => salvar()}
          buttonColor="#C770D1">
          {updatableEnergy ? 'Salvar' : 'Energia de hoje salva'}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
    gap: 20,
    width: '100%',
  },
  center: {
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
  },
  slider: {
    height: 10,
    width: 200,
    margin: '5%',
  },
  loguinho: {
    height: 70,
    width: 70,
    marginHorizontal: '5%',
  },
  img: {
    alignContent: 'center',
    height: 170,
    width: 120,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '-3%',
  },
  card1: {
    backgroundColor: '#F2D1F5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 10,
    width: '100%',
  },
  card2: {
    backgroundColor: '#F2D1F5',
    width: '80%',
    alignItems: 'center',
    borderRadius: 20,
    margin: '5%',
  },
  card3: {
    backgroundColor: '#C770D1',
    width: '100%',
    padding: '5%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button2: {
    color: 'white',
    // backgroundColor: "#C770D1",
    contentAlign: 'center',
    margin: '10%',
    borderWidth: 0,
    borderColor: '#763C00',
    padding: 7,
    width: 250,
    borderRadius: 20,
  },
});
