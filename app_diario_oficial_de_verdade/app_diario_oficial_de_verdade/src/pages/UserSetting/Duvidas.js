import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button, List } from 'react-native-paper';

export default function Duvidas({ navigation }) {
  return (
    <View style={styles.container} accessible={true}>
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
            style={styles.list}
            title="Como acessar"
            icon="folder">
            <Text style={styles.textList}>
              Ao abrir o Play Store ou Apple Store procure por "Diário - para
              estomizados" e instale o app no seu celular.
            </Text>
          </List.Accordion>

          <List.Accordion
            accessible={true}
            style={styles.list}
            title="Como utilizar"
            icon="folder">
            <Text style={styles.textList}>
              Para utilizar nosso aplicativo é bem simples!
              {'\n'}1° passo - Ao entrar no app, faça seu cadastro com os seus
              dados pessoais.
              {'\n'}2° passo - Selecione o tipo da estomia, a data da cirurgia e
              qual seu sistema de bolsa. Pode começar a usar o app!
              {'\n'}Você pode monitorar os sintomas e a bolsa, adicionar
              lembretes, medicação e clínicas médicas. Aproveite!
            </Text>{' '}
          </List.Accordion>

          <List.Accordion
            accessible={true}
            style={styles.list}
            title="Como registrar"
            icon="folder">
            <Text style={styles.textList}>
              Na página inicial clique no "+" que está posicionado no centro na
              parte inferior da tela. Selecione "monitorar status" e escolha o
              que mais corresponde ao seu sentimento no momento.
            </Text>{' '}
          </List.Accordion>
        </List.Section>
      </View>

      <View accessible={true}>
        <Image
          style={styles.img}
          source={require('../../imagens/duvida.png')}
          accessible={true}
          accessibilityLabel="Imagem figurativa de um estomizado com dúvida"
        />
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
  textList: {
    justifyContent: 'space-between',
    marginLeft: 5,
    marginBottom: 15,
  },
});
