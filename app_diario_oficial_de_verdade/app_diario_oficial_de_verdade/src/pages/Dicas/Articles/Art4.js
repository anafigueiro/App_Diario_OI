import { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-paper';
import { useAuth } from '../../../hooks/useAuth';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Art4() {
  return (
    <View accessible={true} style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <View style={styles.center} accessible={true}>
          <Text style={styles.titulo}> Rotina </Text>
          <Text style={styles.subtitulo}>De volta à rotina</Text>
          <Text style={styles.texto}>
            Lidar com o retorno ao trabalho ou à escola após passar pela
            cirurgia de estomia pode ser intimidante. É provável que você se
            sinta bastante exausto no início, portanto, comece de forma gradual,
            retomando aos poucos as tarefas diárias, os passatempos e as
            atividades que costumava realizar.
          </Text>
          <Image
            accessible={true}
            accessibilityLabel="Imagem ilustrativa com elementos da rotina"
            style={styles.img}
            source={require('../../../imagens/imagem_rotina.png')}
          />
          <Text style={styles.subtitulo}>Voltando ao trabalho </Text>
          <Text style={styles.texto}>
            A possibilidade de retornar ao trabalho após a cirurgia depende
            principalmente do tipo de intervenção realizada e das orientações
            médicas. Caso tenha planos de voltar ao trabalho, é fundamental
            discutir suas opções com o empregador o quanto antes. Alguns
            empregadores podem oferecer a opção de trabalhar em horários
            reduzidos durante um período inicial, uma vez que seu corpo ainda
            está se adaptando.
          </Text>

          <Text style={styles.subtitulo}>Voltando aos estudos</Text>
          <Text style={styles.texto}>
            A mesma orientação pode ser aplicada caso você esteja apto(a) a
            retornar aos estudos. É importante conversar com seu orientador(a)
            sobre a possibilidade de iniciar de forma gradual, matriculando-se
            em apenas algumas disciplinas, até que se sinta preparado(a).
          </Text>

          <Text style={styles.subtitulo}>Faça um teste</Text>
          <Text style={styles.texto}>
            Algumas semanas antes de retomar o trabalho ou os estudos, pode ser
            benéfico vestir-se e planejar o seu dia como se estivesse indo para
            o trabalho ou para a escola - uma espécie de simulação para
            estabelecer sua rotina. Leve em consideração as refeições e a
            frequência com que precisa trocar ou esvaziar sua bolsa, e planeje
            seu dia de acordo com essas necessidades.
          </Text>

          <Text style={styles.subtitulo}>Para quem você deveria contar</Text>
          <Text style={styles.texto}>
            Ao retornar ao trabalho ou à escola, cabe a você decidir se deseja
            compartilhar detalhes sobre o seu procedimento com as pessoas com as
            quais interage. No entanto, é recomendável informar pelo menos uma
            pessoa. Caso ocorra uma emergência médica em algum momento, será
            mais fácil lidar com a situação se alguém já estiver ciente da
            cirurgia.
          </Text>

          <Text style={styles.subtitulo}>Como explicar seu procedimento</Text>
          <Text style={styles.texto}>
            É normal sentir preocupação ao ter que explicar o seu procedimento
            para pessoas novas. A abordagem mais adequada é aquela que você se
            sentir mais confortável. Às vezes, ter uma explicação breve e
            confiante pode ajudar a tranquilizar a sua mente. Por exemplo, você
            pode simplesmente explicar de forma sucinta que passou por uma
            condição médica, o que exigiu uma cirurgia e agora utiliza uma bolsa
            de estomia. Evite ser excessivamente técnico e esteja aberto(a) a
            perguntas, sem precisar compartilhar detalhes excessivos. Lembre-se
            de que não é necessário explicar todos os detalhes da sua cirurgia
            para todas as pessoas que o questionarem.
          </Text>

          <Text style={styles.subtitulo}>
            O que fazer quando surgirem problemas fora de casa
          </Text>
          <Text style={styles.texto}>
            Como lidar com problemas quando você não está na comodidade do seu
            lar Se você planejar com antecedência, trocar a bolsa não deverá
            apresentar mais desafios do que em casa. No entanto, imprevistos
            podem ocorrer. Como você deve lidar com eles?
          </Text>

          <Text style={styles.subtitulo}>
            Problemas com o seu dispositivo de estomia?
          </Text>
          <Text style={styles.texto}>
            Se você enfrentar algum problema com o seu produto, você pode entrar
            em contato com a nossa equipe da Coloplast Ativa. Nossos
            especialistas possuem vasta experiência em lidar com diversas
            situações diferentes e podem fornecer conselhos tranquilizadores
            para ajudá-lo.
          </Text>

          <Text style={styles.subtitulo}>Se ocorrer um vazamento</Text>
          <Text style={styles.texto}>
            Não há como evitar: se ocorrer um vazamento em um ambiente público,
            é uma situação inconveniente. Mas você pode reduzir um pouco o
            estresse da situação se preparando antecipadamente: o que você dirá
            se a situação surgir? Saber como se expressar com um garçom em um
            restaurante pode diminuir o pânico. Basta explicar que você teve uma
            emergência médica e precisa de acesso ao banheiro, possivelmente de
            toalhas, sacolas plásticas ou qualquer outro item necessário.
          </Text>
          <Text style={styles.texto}>
            Não é necessário fornecer detalhes - na maioria dos casos, as
            palavras "emergência médica" são suficientes para obter a
            assistência imediata necessária. Ter um amigo ou parente de
            confiança, que esteja ciente da sua estomia, disponível para contato
            rápido pode ser extremamente útil caso algo inesperado aconteça.
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
  titulo: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '10%',
    marginBottom: '10%',
  },
  subtitulo: {
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 10,
    fontSize: 14,
    width: 250,
    fontWeight: 'bold',
  },
  texto: {
    textAlign:"justify",
    fontSize: 14,
    width: 250,
    margin: '2%',
  },
  img: {
    width: 250,
    height: 160,
    margin: '5%',
  },
});
