import { useState, useCallback } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Modal } from 'native-base';
import { ArrowedCard } from '../../components/ArrowedCard';
import { useAuth } from '../../hooks/useAuth';

export default function UserSetting({ navigation }) {
  const { LogOut, DeleteAccount } = useAuth();
  const { session } = useAuth();

  const [modal1_open, setModal1_Open] = useState(false);
  const [modal2_open, setModal2_Open] = useState(false);

  const fazerLogOut = () => {
    LogOut();
  };

  const openModal1 = () => {
    setModal1_Open(true);
  };

  return (
    <View style={styles.container} accessible={true}>
      <View style={styles.view_nome} accessible={true}>
        <Text style={styles.titulo}>{session.nome}</Text>
        <Text style={styles.texto}>{session.email}</Text>
      </View>

      <View style={styles.center} accessible={true}>
        <ArrowedCard
          accessible={true}
          onPress={() => navigation.navigate('Duvidas')}
          titulo="Dúvidas frequentes"
          bgColor="#E5BCE9"
        />
      </View>

      <Modal
        accessible={true}
        isOpen={modal1_open}
        onClose={() => setModal1_Open(false)}
        safeAreaTop={true}>
        <Modal.Content accessible={true} width="80%" borderRadius="20">
          <Modal.CloseButton />
          <Modal.Header accessible={true} style={styles.modal_header}>
            <Text style={styles.titulo_modal}> Excluir conta </Text>
          </Modal.Header>
          <Modal.Body accessible={true} style={styles.modal_body}>
            <Text>
              A conta será excluída permanentemente e seu progresso não poderá
              ser recuperado. Você tem certeza que deseja excluir a sua conta?
            </Text>
          </Modal.Body>
          <Modal.Footer accessible={true} style={styles.modal_footer}>
            <Button
              accessible={true}
              accessibilityLabel="Sim"
              style={styles.button2}
              color="white"
              mode="contained"
              onPress={() => {
                setModal1_Open(false);
                setModal2_Open(true);
              }}>
              SIM
            </Button>
            <Button
              accessible={true}
              accessibilityLabel="Não"
              style={styles.button2}
              color="white"
              mode="contained"
              onPress={() => {
                setModal1_Open(false);
              }}>
              NÃO
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={modal2_open} safeAreaTop={true} accessible={true}>
        <Modal.Content width="80%" borderRadius="20" accessible={true}>
          <Modal.Header style={styles.modal_header} accessible={true}>
            <Text style={styles.titulo_modal}> Conta excluída! </Text>
          </Modal.Header>
          <Modal.Body style={styles.modal_body} accessible={true}>
            <Text>
              Sua conta foi excluída com sucesso! Espero que tenha aproveitado o
              uso do App Diário!
            </Text>
          </Modal.Body>
          <Modal.Footer style={styles.modal_footer} accessible={true}>
            <Button
              accessible={true}
              accessibilityLabel="Sair"
              style={styles.button2}
              color="white"
              mode="contained"
              onPress={() => {
                setModal2_Open(false);
                DeleteAccount();
                navigation.navigate('Inicio');
              }}>
              Sair
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <View style={styles.center}>
        <Button
          accessible={true}
          accessibilityLabel="Sair da conta"
          color="white"
          mode="contained"
          title="Sair da conta"
          style={styles.button_sair}
          onPress={() => fazerLogOut()}>
          Sair da conta
        </Button>

        <Button
          accessible={true}
          accessibilityLabel="Excluir conta"
          textColor="#C770D1"
          color="#C770D1"
          title="Tenho conta"
          backgroundColor="green"
          mode="outlined"
          style={styles.button1}
          onPress={() => openModal1()}>
          Excluir conta
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
  view_nome: {
    margin: '5%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: '10%',
    paddingTop: '5%',
  },
  center: {
    alignItems: 'center',
    margin: '5%',
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 22,
    alignSelf: 'left',
    textAlign: 'left',
  },
  texto: {
    textAlign: 'left',
    fontSize: 14,
    width: 250,
    alignSelf: 'left',
  },
  icon: {
    height: 10,
    width: 10,
    marginLeft: 20,
  },
  button: {
    textColor: 'black',
    backgroundColor: '#F3E1F5',
    contentAlign: 'center',
    fontFamily: 'Adamina',
    margin: '2%',
    padding: 7,
    width: 250,
    borderRadius: 10,
    flex: '1',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titulo_button: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 13,
    marginRight: 10,
  },
  button1: {
    contentAlign: 'center',
    fontFamily: 'Adamina',
    marginBottom: '10%',
    borderColor: '#C770D1',
    width: 250,
    padding: 7,
    borderRadius: 20,
  },
  button2: {
    color: 'white',
    backgroundColor: '#C770D1',
    contentAlign: 'center',
    fontFamily: 'Adamina',
    padding: 0,
    borderRadius: 10,
  },
  button_sair: {
    color: 'white',
    backgroundColor: '#C770D1',
    contentAlign: 'center',
    margin: '10%',
    borderWidth: 0,
    borderColor: '#763C00',
    padding: 7,
    width: 250,
    borderRadius: 20,
  },
  titulo_modal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modal_footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '7%',
  },
  modal_body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_header: {
    backgroundColor: '#AFEDCF',
  },
});
