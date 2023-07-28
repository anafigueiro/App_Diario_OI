import React, { useState } from 'react';

import Slider from '@react-native-community/slider';

import Tooltip from 'react-native-walkthrough-tooltip';

import { TouchableOpacity, Platform, StatusBar } from 'react-native';

import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  HStack,
  TextInput,
} from 'react-native';

import { Card, Button, ProgressBar, FAB } from 'react-native-paper';

export default function Dicas({ navigation }) {
  return (
    <View style={styles.container} accessible={true}>
      <View style={styles.center} accessible={true}>
        <TouchableOpacity
          accessible={true}
          style={styles.view}
          onPress={() => navigation.navigate('Art1')}
          activeOpacity={0.8}>
          <View style={styles.card} accessible={true}>
            <Image
              accessible={true}
              accessibilityLabel="Imagem sistemas digestório e urinário"
              style={styles.img}
              source={require('../../imagens/sistema.jpg')}
            />
            <Button
              accessible={true}
              accessibilityLabel="Acessar artigo sobre os sistemas digestório e urinário"
              textColor="black"
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Art1')}>
              <Text style={styles.titulo}>Sistemas digestório e urinário</Text>
            </Button>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          style={styles.view}
          onPress={() => navigation.navigate('Art2')}
          activeOpacity={0.8}>
          <View style={styles.card2} accessible={true}>
            <Image
              accessible={true}
              accessibilityLabel="Imagem alimentação"
              style={styles.img}
              source={require('../../imagens/alimentacao.jpg')}
            />
            <Button
              accessible={true}
              accessibilityLabel="Acessar artigo sobre alimentação"
              textColor="black"
              mode="contained"
              style={styles.button2}
              onPress={() => navigation.navigate('Art2')}>
              <Text style={styles.titulo}> Alimentação </Text>
            </Button>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          style={styles.view}
          onPress={() => navigation.navigate('Art3')}
          activeOpacity={0.8}>
          <View style={styles.card} accessible={true}>
            <Image
              accessible={true}
              accessibilityLabel="Imagem atividades"
              style={styles.img}
              source={require('../../imagens/atividades.jpg')}
            />
            <Button
              accessible={true}
              accessibilityLabel="Acessar artigo sobre atividades físicas"
              textColor="black"
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Art3')}>
              <Text style={styles.titulo}> Atividades Físicas </Text>
            </Button>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          style={styles.view}
          onPress={() => navigation.navigate('Art4')}
          activeOpacity={0.8}>
          <View style={styles.card2} accessible={true}>
            <Image
              accessible={true}
              accessibilityLabel="Imagem rotina"
              style={styles.img}
              source={require('../../imagens/rotina.jpg')}
            />
            <Button
              accessible={true}
              accessibilityLabel="Acessar artigo sobre rotina"
              textColor="black"
              mode="contained"
              style={styles.button2}
              onPress={() => navigation.navigate('Art4')}>
              <Text style={styles.titulo}> Rotina </Text>
            </Button>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          accessible={true}
          style={styles.view}
          onPress={() => navigation.navigate('Art5')}
          activeOpacity={0.8}>
          <View style={styles.card} accessible={true}>
            <Image
              accessible={true}
              accessibilityLabel="Imagem psicológico"
              style={styles.img}
              source={require('../../imagens/psicologico.jpg')}
            />
            <Button
              accessible={true}
              accessibilityLabel="Acessar artigo sobre psicológico"
              textColor="black"
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Art5')}>
              <Text style={styles.titulo}> Psicológico </Text>
            </Button>
          </View>
        </TouchableOpacity>
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
    alignContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  img: {
    height: 100,
    width: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card: {
    backgroundColor: '#D5F6E6',
    width: 250,
    alignItems: 'center',
    borderRadius: 20,
    contentAlign: 'center',
    marginTop: '7%',
  },
  card2: {
    backgroundColor: '#E5BCE9',
    width: 250,
    alignItems: 'center',
    borderRadius: 20,
    contentAlign: 'center',
    marginTop: '7%',
  },
  button: {
    textColor: 'black',
    backgroundColor: '#D5F6E6',
    contentAlign: 'center',
    fontFamily: 'Adamina',
    margin: '2%',
    width: 250,
    borderRadius: 10,
    flex: '1',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
  button2: {
    textColor: 'black',
    backgroundColor: '#E5BCE9',
    contentAlign: 'center',
    fontFamily: 'Adamina',
    margin: '2%',
    width: 250,
    borderRadius: 10,
    flex: '1',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
  view: {
    width: '100%',
    flexDirection: 'row',
  },
});
