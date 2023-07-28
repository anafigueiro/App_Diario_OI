import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { Modal } from 'native-base';
import { ImgButton } from './components/ImgButton';

const handleOptionsByTitle = {
  Digestão: ['Boa', 'Razoável', 'Ruim'],
  Exercícios: ['Agradável', 'Pouco', 'Nada'],
  Pele: ['Saudável', 'Sensível', 'Irritada'],
};

export function ModalUI({ open, onClose, titulo, desc, onSubmit }) {
  const [selected, setSelected] = useState();

  const handleSelected = (id) => {
    setSelected(id);
  };

  const getStyle = (item) => {
    if (item === selected)
      return {
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#7E3586',
        padding: 12,
      };
    return {
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 5,
      borderColor: '#C770D1',
      padding: 12,
    };
  };

  const options = handleOptionsByTitle[titulo];

  return (
    <Modal
      acessible={true}
      isOpen={open}
      onClose={onClose}
      safeAreaTop={true}
      _backdrop={{
        bg: 'warmGray.50',
      }}>
      <Modal.Content
        acessible={true}
        width="100%"
        marginBottom="0"
        marginTop="auto"
        bg="#D5F6E6"
        borderRadius="20">
        <Modal.Body acessible={true}>
          <Text style={styles.titulo_modal}>{titulo}</Text>
          <Text style={styles.texto_modal}>{desc}</Text>
          <View style={styles.view_icons} acessible={true}>
            {options?.length > 0 &&
              options.map((item, i) => (
                <ImgButton
                  acessible={true}
                  accessibilityLabel="Imagem do botão"
                  key={item}
                  desc={item}
                  style={getStyle(item)}
                  onPress={() => handleSelected(item)}
                />
              ))}
          </View>
          <View style={styles.center} acessible={true}>
            <Button
              acessible={true}
              accessibilityLabel="Monitorar"
              disabled={!selected}
              color="white"
              mode="contained"
              style={styles.button_modal}
              onPress={() => onSubmit(titulo, selected)}>
              Monitore
            </Button>
          </View>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  view_icons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '10%',
  },
  titulo_modal: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
    margin: '5%',
  },
  texto_modal: {
    textAlign: 'left',
    fontSize: 14,
    marginLeft: '5%',
  },
  button_modal: {
    backgroundColor: '#C770D1',
    contentAlign: 'center',
    marginBottom: 13,
    borderWidth: 0,
    borderColor: '#763C00',
    padding: 5,
    width: 250,
    borderRadius: 20,
  },
});
