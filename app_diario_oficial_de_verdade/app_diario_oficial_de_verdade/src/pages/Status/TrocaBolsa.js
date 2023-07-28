import React, { useState, Component } from 'react';
import { Card, Button, Checkbox, RadioButton, List } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Modal } from 'native-base';
import { IconButton } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth';
import firebase from '../../config/database';
import Calendario from './Calendario';

export default function TrocaBolsa({ navigation }) {
  const [data, setData] = useState('');
  const [data1, setData1] = useState('');
  const [notas, setNotas] = useState('');
  const [selected, setSelected] = useState(undefined);
  const motivo = ['Rotina', 'Vazamento', 'Outro'];
  const pele = ['Saudável', 'Irritada'];

  const { session } = useAuth();
  const submit = () => {
    const date = new Date();

    const submitData = {
      aplicada: data,
      removida: data1,
      motivo: selected,
      notas: notas,
      data: date.toLocaleDateString('pt-BR'),
      hora: date.toLocaleTimeString('pt-BR'),
      user_id: session?.id,
    };
    console.log(submitData);

    var bd = firebase.database().ref('troca/');
    bd.push(submitData)
      .then(() => navigation.navigate('Status'))
      .catch((error) => console.log(error));

    navigation.navigate('Status');
  };
  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.titulo}> Informações sobre a troca </Text>

      <Text style={styles.texto}>
        Informe algumas informações sobre a troca da sua bolsa.
      </Text>

      <View accessible={true}>
        <TextInput
          accessible={true}
          accebilityLabel="Data de aplicação da bolsa"
          style={styles.input}
          placeholder="Bolsa aplicada"
          onChangeText={(text) => setData1(text)}
          value={data1}
        />
      </View>

      <View accessible={true}>
        <TextInput
          accessible={true}
          accebilityLabel="Data de remoção da bolsa"
          style={styles.input}
          placeholder="Bolsa removida"
          onChangeText={(text) => setData(text)}
          value={data}
        />
      </View>

      <View accessible={true}>
        <SelectList
          accessible={true}
          search={false}
          data={motivo}
          onSelect={setSelected}
          setSelected={(value) => {
            let ep = motivo.filter((e) => e.id === value);
            setSelected({ ...motivo, motivo: ep[0] });
          }}
          placeholder="Motivo da mudança"
          boxStyles={styles.accordion}
          inputStyles={styles.texto_input}
          dropdownTextStyles={styles.texto_select}
          dropdownStyles={styles.item_accordion}
        />
      </View>

      <View accessible={true}>
        <SelectList
          accessible={true}
          search={false}
          data={pele}
          onSelect={setSelected}
          setSelected={(value) => {
            let ep = pele.filter((e) => e.id === value);
            setSelected({ ...pele, pele: ep[0] });
          }}
          placeholder="Condição da pele"
          boxStyles={styles.accordion}
          inputStyles={styles.texto_input}
          dropdownTextStyles={styles.texto_select}
          dropdownStyles={styles.item_accordion}
        />
      </View>

      <View style={styles.campo_input} accessible={true}>
        <TextInput
          accessible={true}
          accebilityLabel="Adicionar nota opcional"
          style={styles.campo}
          placeholder="Notas (opcional)"
          onChangeText={(text) => setNotas(text)}
          value={notas}
        />
      </View>

      <View accessible={true} styles={{alignItems: 'center'}}>
        <Button
          accessible={true}
          accebilityLabel="Salvar"
          color="white"
          title="Salvar"
          mode="contained"
          style={styles.button}
          onPress={() => submit()}>
          Salvar
        </Button>
      </View>
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
  },

  texto: {
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 5,
    fontSize: 13,
    width: 250,
  },

  button: {
    backgroundColor: '#C770D1',
    contentAlign: 'center',
    fontFamily: 'Adamina',
    marginTop: 15,
    marginBottom: 13,
    borderWidth: 0,
    borderColor: '#763C00',
    padding: 7,
    width: 250,
    borderRadius: 20,
  },
  campo_input: {
    marginBottom: '10%',
  },
  campo: {
    height: 100,
    borderRadius: 10,
    backgroundColor: '#E5BCE9',
    placeholderTextColor: '#a',
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3,
    padding: '10%',
    overflow: 'scroll',
  },
  input: {
    height: 45,
    borderRadius: 10,
    backgroundColor: '#E5BCE9',
    placeholderTextColor: '#a',
    marginBottom: '10%',
    marginLeft: 3,
    marginRight: 3,
    paddingLeft: '5%',
    flexDirection: 'row',
  },
  input2: {
    height: 35,
    borderRadius: 10,
    backgroundColor: '#E5BCE9',
    placeholderTextColor: '#a',
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3,
    paddingLeft: '5%',
    flexDirection: 'row',
  },
  accordion: {
    backgroundColor: '#E5BCE9',
    marginBottom: '10%',
    marginLeft: 3,
    marginRight: 3,
    borderWidth: 0,
    padding: 8,
    height: 45,
    borderRadius: 10,
    paddingLeft: '5%',
    placeholderTextColor: '#a',
  },
  item_accordion: {
    backgroundColor: 'white',
    borderWidth: 0.1,
    alignSelf: 'left',
    padding: 8,
    borderRadius: 10,
    marginBottom: '10%',
  },
  texto_input: {
    marginTop: 1,
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3,
    fontSize: 14,
    color: 'grey',
    paddingLeft: '5%',
  },
  texto_select: {
    fontSize: 14,
    width: 200,
    marginBottom: 1,
    marginLeft: 3,
    marginRight: 3,
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 15,
  },
});
