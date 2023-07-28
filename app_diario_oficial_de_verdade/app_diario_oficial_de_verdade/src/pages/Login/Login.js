import { useState } from 'react';
import { Image, Text, TextInput, StyleSheet, View } from 'react-native';

import { Button } from 'react-native-paper';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth } from '../../hooks/useAuth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { CreateSession } = useAuth();
  const onFooterLinkPress = () => {
    navigation.navigate('Cadastro');
  };

  const logar = () => {
    CreateSession(email, senha);
  };

  return (
    <View style={styles.container} accessible={true}>
      <KeyboardAwareScrollView
        accessible={true}
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <View style={styles.center} accessible={true}>
          <Image
           accessible={true}
            accessibilityLabel="Imagem logo"
            style={styles.logo}
            source={require('../../imagens/loguinho.png')}
          />
        </View>

        <View style={styles.center} accessible={true}>
          <Text style={styles.titulo}> Entrar com e-mail </Text>
          <Text style={styles.subtitulo}>
            Insira seus dados para continuar.
          </Text>
        </View>

        <View style={styles.campo_input} accessible={true}>
          <Text style={styles.label}> E-mail </Text>
          <TextInput
            accessible={true}
            accessibilityLabel="Informe seu email"
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            autoComplete="email"
          />
          <Text style={styles.label}> Senha </Text>
          <TextInput
            accessible={true}
            accessibilityLabel="Informe sua senha"
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Senha"
            onChangeText={(text) => setSenha(text)}
            value={senha}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.center} accessible={true}>
          <Button
            accessible={true}
            accessibilityLabel="Fazer login"
            color="white"
            title="Entrar"
            mode="contained"
            style={styles.button}
            onPress={() => logar()}>
            Continuar
          </Button>

          <Text onPress={onFooterLinkPress} style={styles.footerLink}>
            Não tem uma conta? Cadastre-se
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
  campo_input: {
    marginTop: 20,
  },
  titulo: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitulo: {
    alignSelf: 'center',
    fontSize: 14,
    marginTop: 2,
  },
  label: {
    marginLeft: 30,
  },
  logo: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#F5E7F7',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#C770D1',
    contentAlign: 'center',

    marginTop: 10,
    marginBottom: 13,
    borderWidth: 0,
    borderColor: '#763C00',
    padding: 7,
    width: 250,
    borderRadius: 20,
  },
  footerLink: {
    color: 'black',
    textDecoration: 'underline',
    fontSize: 14,
    marginBottom: 20,
  },
});
