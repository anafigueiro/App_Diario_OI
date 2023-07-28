import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import { useAnalysis } from '../../hooks/useAnalysis';

import { BarChart } from 'react-native-chart-kit';

const MyBarChart = () => {
  const chartConfig = {
    fromZero: true,
    backgroundColor: '#F3E1F5',
    backgroundGradientFrom: '#F3E1F5',
    backgroundGradientTo: '#F3E1F5',
    fillShadowGradientFrom: '#7E3586',
    fillShadowGradientTo: '#7E3586',
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientToOpacity: 1,
    strokeWidth: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const { userEnergy } = useAnalysis();

  return (
    <>
      <BarChart
        fromZero={true}
        data={{
          labels: userEnergy.map((item) => item.data),
          datasets: [
            {
              data: userEnergy.map((item) => item.energia),
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={chartConfig}
        style={{
          marginVertical: 8,
          borderRadius: 16,          
        }}
      />
    </>
  );
};

export default function Analise() {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>
          Análise de Energia
        </Text>
      <View>
        <MyBarChart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
    gap: 20,
    width: '100%',
  },
  titulo: {
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    marginTop: "10%",
  },
});
