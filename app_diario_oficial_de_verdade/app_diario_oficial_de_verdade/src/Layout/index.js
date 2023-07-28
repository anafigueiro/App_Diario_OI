import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import { Button, FAB } from 'react-native-paper';
import { Platform, StatusBar } from 'react-native';
import lightbulb from '../imagens/lightbulb.png';
import analise from '../imagens/analise.png';

const ImageButton = ({ onPress, name, image }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} accessible={true}>
      <View style={{ alignItems: 'center', margin: '5%' }} accessible={true}>
        <View onPress={onPress} accessible={true}>
          {image && (
            <Image
              accessible={true}
              style={{ width: 26, height: 26 }}
              source={image}
            />
          )}
        </View>
        <Text style={{ fontSize: 12, marginTop: 2 }}>{name}</Text>
      </View>{' '}
    </TouchableOpacity>
  );
};

export default function Layout({ children, navigation }) {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.footer}>
        <View accessible={true}>
          <ImageButton
            onPress={() => navigation.navigate('Analise')}
            name="Análise"
            image={analise}
          />
        </View>
        <View accessible={true}>
          <FAB
            accessible={true}
            accessibilityLabel="Acessar monitoramento de status ou agenda"
            icon="plus"
            style={styles.fab}
            onPress={() => navigation.navigate('Status')}
          />
        </View>
        <View accessible={true}>
          <ImageButton
            onPress={() => navigation.navigate('Dicas')}
            name="Dicas"
            image={lightbulb}
          />
        </View>
      </View>
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
  footer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3E1F5',
    gap: 18,
  },
  fab: {
    position: 'relative',
    backgroundColor: '#C770D1',
    borderRadius: 100,
    height: 54,
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
