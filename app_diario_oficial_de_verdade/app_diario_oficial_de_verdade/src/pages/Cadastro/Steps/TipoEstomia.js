import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';

export default function TipoEstomia({ navigation }) {
  const { saveFormData } = useAuth();

  const onSumbit = (tipo) => {
    saveFormData({ tipo });
    navigation.navigate('DataEstomia');
  };
  return (
    <View accessible={true} style={styles.container}>
      <Text style={styles.titulo}> Qual a sua estomia? </Text>

      <Text style={styles.texto}>
        Selecione o tipo para melhor personalização.
      </Text>
      <TouchableOpacity
        accessible={true}
        style={styles.view}
        onPress={() => onSumbit('Colostomia')}>
        <View accessible={true} style={styles.card1}>
          <View accessible={true} style={{ width: '80%' }}>
            <Text style={styles.titulo2}> Colostomia</Text>

            <Text style={styles.texto2}>
              Cirurgia para a exteriorização do intestino grosso
            </Text>
          </View>
          <View
            style={{ ...styles.alignCenter, width: '10%' }}
            accessible={true}>
            <Image
              accessible={true}
              style={styles.logo}
              source={require('../../../imagens/right-arrow.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        style={styles.view}
        onPress={() => onSumbit('Ileostomia')}>
        <View style={styles.card1} accessible={true}>
          <View style={{ width: '80%' }} accessible={true}>
            <Text style={styles.titulo2}> Ileostomia</Text>
            <Text style={styles.texto2}>
              Cirurgia para a exteriorização do ileo
            </Text>
          </View>
          <View
            style={{ ...styles.alignCenter, width: '10%' }}
            accessible={true}>
            <Image
              accessible={true}
              style={styles.logo}
              source={require('../../../imagens/right-arrow.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        style={styles.view}
        onPress={() => onSumbit('Urostomia')}>
        <View style={styles.card1} accessible={true}>
          <View style={{ width: '80%' }} accessible={true}>
            <Text style={styles.titulo2}> Urostomia</Text>
            <Text style={styles.texto2}>
              Cirurgia para a exteriorização dos condutos urinários
            </Text>
          </View>
          <View
            style={{ ...styles.alignCenter, width: '10%' }}
            accessible={true}>
            <Image
              style={styles.logo}
              source={require('../../../imagens/right-arrow.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '10%',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 15,
  },

  titulo2: {
    margin: '5%',
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 16,
  },

  view: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  logo: {
    width: 10,
    height: 10,
  },

  texto: {
    textAlign: 'center',
    marginBottom: 35,
    fontSize: 12,
    width: 250,
  },

  texto2: {
    textAlign: 'left',
    margin: '5%',
    marginBottom: 20,
    fontSize: 13,
    width: '100%',
  },

  card1: {
    width: '100%',
    backgroundColor: '#D798DE',
    marginBottom: 13,
    borderWidth: 4,
    borderColor: '#D798DE',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
});
