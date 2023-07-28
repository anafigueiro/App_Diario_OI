import { Text, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';
import { useState } from 'react';
import { GeneralButton } from './components/GeneralButton';
import { ArrowedCard } from '../../components/ArrowedCard';
import { ModalUI } from './components/Modal';
import { useAuth } from '../../hooks/useAuth';
import firebase from '../../config/database';

export default function Status({ navigation }) {
  const timeElapsed = Date.now();
  let date = new Date(timeElapsed);

  const { session } = useAuth();
  date = date.toLocaleDateString();
  console.log(date);

  const [open, setOpen] = useState();

  const submit = (type, value) => {
    const date = new Date();

    const submitData = {
      valor: value,
      data: date.toLocaleDateString('pt-BR'),
      hora: date.toLocaleTimeString('pt-BR'),
      user_id: session?.id,
    };
    var bd = firebase.database().ref(`${type}/`);
    bd.push(submitData)
      .then(() => setOpen())
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container} accessible={true}>
      {/*Sessão dos modal 1: DIGESTÃO */}
      <ModalUI
        accessible={true}
        open={open === 'Digestão'}
        onClose={() => setOpen()}
        titulo="Digestão"
        desc="Monitore sua digestão para obter melhores resultados."
        onSubmit={submit}
      />

      {/*Sessão dos modal 2: EXERCÍCIOS */}
      <ModalUI
        accessible={true}
        open={open === 'Exercícios'}
        onClose={() => setOpen()}
        titulo="Exercícios"
        desc="Monitore a quantidade de exercícios que você tem praticado."
        onSubmit={submit}
      />

      {/*Sessão dos modal 3: PELE */}
      <ModalUI
        accessible={true}
        open={open === 'Pele'}
        onClose={() => setOpen()}
        titulo="Pele"
        desc="Monitore a condição da sua pele no dia."
        onSubmit={submit}
      />

      <KeyboardAwareScrollView
        accessible={true}
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <View style={styles.center} accessible={true}>
          <Text style={styles.titulo_roxo}> Hoje: {date} </Text>
          <Text style={styles.texto}>Monitore seu status de hoje!</Text>
        </View>
        <View style={styles.center} accessible={true}>
          <View style={styles.view_icons} accessible={true}>
            <GeneralButton
              accessible={true}
              accebilityLabel="Monitorar digestão"
              onPress={() => setOpen('Digestão')}
              name="Digestão"
            />
            <GeneralButton
              accessible={true}
              accebilityLabel="Monitorar exercícios"
              onPress={() => setOpen('Exercícios')}
              name="Exercícios"
            />
            <GeneralButton
              onPress={() => setOpen('Pele')}
              name="Pele"
              accessible={true}
              accebilityLabel="Monitorar pele"
            />
          </View>
        </View>

        <View style={styles.center} accessible={true}>
          <ArrowedCard
            accessible={true}
            accebilityLabel="Registrar as informações da troca"
            onPress={() => navigation.navigate('TrocaBolsa')}
            titulo="Trocou sua bolsa?"
            texto="Registre as informações da troca"
            bgColor="#E5BCE9"
          />
        </View>

        <View style={styles.view_emocoes} accessible={true}>
          <Text style={styles.titulo}> Emoções </Text>
          <AirbnbRating
            accessible={true}
            accebilityLabel="Registrar as emoções"
            count={5}
            reviews={['Bravo', 'Triste', 'Normal', 'Feliz', 'Animado']}
            reviewColor="#D798DE"
            reviewSize={10}
            selectedColor="#8DE1B8"
            unSelectedColor="#D5F6E6"
            size={35}
          />
        </View>

        <View style={styles.center} accessible={true}>
          <Button
            accessible={true}
            accebilityLabel="Sair"
            color="white"
            mode="contained"
            style={styles.button1}
            onPress={() => navigation.navigate('PaginaInicial')}>
            Sair
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: '10%',
    height: '100%',
  },
  center: {
    alignItems: 'center',
  },
  view_emocoes: {
    alignItems: 'center',
    margin: '10%',
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 13,
    marginRight: 10,
    color: 'black',
  },
  titulo_roxo: {
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    color: '#C770D1',
    fontSize: 15,
  },
  texto: {
    textAlign: 'left',
    fontSize: 13,
  },
  button1: {
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
  view_icons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '10%',
  },
});
