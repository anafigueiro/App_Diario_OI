import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button, List } from 'react-native-paper';

export default function Duvidas({ navigation }) {
  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Clique para acessar">
      <View style={styles.center} accessible={true}>
        <Text style={styles.titulo}> Dúvidas frequentes </Text>
        <Text style={styles.texto}>
          Dúvidas sobre o funcionamento e uso do aplicativo
        </Text>
      </View>

      <View style={styles.center} accessible={true}>
        <List.Section accessible={true}>
          <List.Accordion
            accessible={true}
            accessibilityLabel="Como acessar"
            accessibilityHint="Acesse instruções sobre como acessar o sistema"
            accessibilityState="expanded"
            style={styles.list}
            title="Como acessar">
            <List.Item accessible={true} title="blaballbalbal" />
          </List.Accordion>

          <List.Accordion
            accessible={true}
            accessibilityLabel="Como utilizar"
            accessibilityHint="Acesse instruções sobre como utilizar o sistema"
            accessibilityState="expanded"
            style={styles.list}
            title="Como utilizar">
            <List.Item title="First item" />
          </List.Accordion>

          <List.Accordion
            accessible={true}
            accessibilityLabel="Como registrar"
            accessibilityHint="Acesse instruções sobre como registrar-se no sistema"
            accessibilityState="expanded"
            style={styles.list}
            title="Como registrar">
            <List.Item title="blaballbalbal" />
          </List.Accordion>
        </List.Section>
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
    padding: '10%',
    height: '100%',
  },
  center: {
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  texto: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 13,
    width: 250,
  },
  img: {
    marginTop: -20,
    marginBottom: 10,
    alignContent: 'center',
    height: 240,
    width: 250,
    alignSelf: 'center',
  },
  list: {
    backgroundColor: '#F3E1F5',
    contentAlign: 'center',
    marginBottom: 13,
    borderWidth: 0,
    borderColor: '#F3E1F5',
    padding: 7,
    width: 250,
    borderRadius: 10,
  },
});
