import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Agenda({ navigation }) {
  return (
    <View  accessible={true} style={styles.container}>
      <View style={styles.center} accessible={true}>
        <Text style={styles.titulo}> Adicione lembretes importantes </Text>

        <Text style={styles.texto}>
          Agende seus medicamentos e suas consultas
        </Text>
      </View>

      <View accessible={true} style={styles.center}>
        <Button accessible={true} accessibilityLabel=""
          textColor="black"
          title="Medicamento"
          mode="contained"
          icon="first-aid-alt"
          style={styles.button1}
          onPress={() => navigation.navigate('Medicamento')}>
          <Text style={styles.textButton}>Medicamento</Text>
        </Button>

        <Button
          title="Consulta"
          mode="contained"
          icon="doctor"
          style={styles.button2}
          onPress={() => navigation.navigate('Consulta')}>
          <Text style={styles.textButton}>Consulta</Text>
        </Button>
      </View>
    </View>
  );
}
/* https://oblador.github.io/react-native-vector-icons/ */ 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
    fontSize: 16,
  },
  texto: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 13,
    width: 250,
  },
  button1: {
    backgroundColor: '#C770D1',
    contentAlign: 'center',
    marginBottom: 13,
    borderWidth: 0,
    width: 250,
    padding: 20,
    borderRadius: 10,
  },
  button2: {
    backgroundColor: '#C770D1',
    contentAlign: 'center',
    borderWidth: 0,
    borderColor: '#763C00',
    padding: 20,
    width: 250,
    borderRadius: 10,
  },
  textButton:{
    color: "black",
    fontWeight:"bold", 
    padding: 10,
  },
});
