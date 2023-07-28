import React, { useState } from 'react';

import Slider from '@react-native-community/slider';

import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  HStack,
} from 'react-native';

import { Card, Button, ProgressBar, FAB } from 'react-native-paper';

export default function Sentindo({ navigation }) {
  const [dor, setDor] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [apetite, setApetite] = useState('');
  const [sono, setSono] = useState('');

  const verificaDor = (sliderValue) => {
    setSliderValue(sliderValue);
    if (sliderValue > 35 && sliderValue < 65) {
      setDor('Dor Regular');
    } else if (sliderValue > 65) {
      setDor('Muita dor');
    } else if (sliderValue < 35) {
      setDor('Pouca dor');
    }
  };

  const verificaApetite = (sliderValue) => {
    setSliderValue(sliderValue);
    if (sliderValue > 35 && sliderValue < 65) {
      setDor('Apetite Regular');
    } else if (sliderValue > 65) {
      setDor('Muito apetite');
    } else if (sliderValue < 35) {
      setDor('Pouco apetite');
    }
  };

  const verificaSono = (sliderValue) => {
    setSliderValue(sliderValue);
    if (sliderValue > 35 && sliderValue < 65) {
      setDor('Sono Regular');
    } else if (sliderValue > 65) {
      setDor('Muito sono');
    } else if (sliderValue < 35) {
      setDor('Pouco sono');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.titulo}> O que mais está sentindo? </Text>
        <Text style={styles.texto}>
          Relate um pouquinho sobre mais informações de como você está se
          sentindo hoje.
        </Text>
      </View>

      <View style={styles.card2}>
        <View style={styles.card3}>
          <Text style={styles.titulo}> O que mais está sentindo? </Text>
        </View>
        <Image />
      </View>

      <View style={styles.center}>
        <Slider
          style={styles.slider}
          thumbTintColor="#C770D1"
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#D798DE"
          maximumTrackTintColor="#F3E1F5"
          step={1}
          value={sliderValue}
          onValueChange={verificaDor}
        />
        <Text> {sliderValue}% </Text>
        <Text style={styles.titulo}> {dor} </Text>

        <Slider
          style={styles.slider}
          thumbTintColor="#C770D1"
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#D798DE"
          maximumTrackTintColor="#F3E1F5"
          step={1}
          value={sliderValue}
          onValueChange={verificaSono}
        />
        <Text> {sliderValue}% </Text>
        <Text style={styles.titulo}> {sono} </Text>

        <Slider
          style={styles.slider}
          thumbTintColor="#C770D1"
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#D798DE"
          maximumTrackTintColor="#F3E1F5"
          step={1}
          value={sliderValue}
          onValueChange={verificaDor}
        />
        <Text> {sliderValue}% </Text>
        <Text style={styles.titulo}> {dor} </Text>
      </View>

      <View style={styles.center}>
        <Button
          color="white"
          mode="contained"
          title="Comece agora"
          style={styles.button2}
          onPress={() => navigation.navigate('Emocfoes')}>
          Salvar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
  },
  center: {
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  slider: {
    height: 10,
    width: 200,
    margin: '5%',
  },
  loguinho: {
    height: 70,
    width: 70,
    margin: '5%',
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#C770D1',
    contentAlign: 'center',
    fontFamily: 'Adamina',
    margin: '10%',
    borderWidth: 0,
    borderColor: '#763C00',
    padding: 7,
    width: 250,
    borderRadius: 20,
  },
});
