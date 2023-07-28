import { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-paper';
import { useAuth } from '../../../hooks/useAuth';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DataEstomia() {
  const [data, setData] = useState('');
  const [selected, setSelected] = useState(undefined);
  const bolsas = ['Uma peça', 'Duas peças'];
  const { AddAccount } = useAuth();

  const onSumbit = () => {
    AddAccount({ data, sistema: selected });
  };
  return (
    <View accessible={true} style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <View style={styles.center} accessible={true}>
          <Text style={styles.titulo}> Informações adicionais </Text>
          <Text style={styles.subtitulo}>
            Informe algumas informações sobre a sua estomia
          </Text>
        </View>

        <View style={styles.campo_input} accessible={true}>
          <Text style={styles.label}> Data da cirurgia </Text>
          <TextInput
            accessible={true}
            accessibilityLabel="Informe a data da cirurgia"
            style={styles.input}
            placeholder="00/00/00"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setData(text)}
            value={data}
          />
        </View>

        <View
          style={{ ...styles.campo_input, marginTop: '5%' }}
          accessible={true}>
          <Text style={styles.label}> Sistema de bolsa </Text>
          <SelectList
            accessible={true}
            accessibilityLabel="Informe o seu sistema de bolsa"
            search={false}
            data={bolsas}
            setSelected={(value) => {
              setSelected(value);
            }}
            placeholder="Uma peça"
            boxStyles={styles.accordion}
            inputStyles={styles.texto_input}
            dropdownTextStyles={styles.texto_select}
            dropdownStyles={styles.item_accordion}
          />
        </View>

        <View style={styles.center} accessible={true}>
          <Button
            accessible={true}
            accessibilityLabel="Salvar informações"
            color="white"
            title="Salvar"
            style={styles.button}
            mode="contained"
            onPress={() => onSumbit()}>
            <Text> Salvar </Text>
          </Button>
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
  campo_input: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  center: {
    alignItems: 'center',
  },
  accordion: {
    backgroundColor: '#F5E7F7',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
    borderWidth: 0,
    padding: 8,
    width: '100%',
  },
  item_accordion: {
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderColor: 'grey',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    width: '100%',
  },
  titulo: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
  subtitulo: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    fontSize: 13,
    width: 250,
  },
  button: {
    backgroundColor: '#C770D1',
    color: 'white',
    contentAlign: 'center',

    marginTop: '15%',
    marginBottom: '15%',
    padding: 7,
    width: 250,
    borderRadius: 20,
  },
  label: {
    marginLeft: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#F5E7F7',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
  },
  texto_input: {
    textAlign: 'left',
    marginBottom: 4,
    marginTop: 4,
    fontSize: 14,
    width: 200,
    color: 'grey',
  },
  texto_select: {
    textAlign: 'left',
    fontSize: 14,
    width: 200,
  },
});
