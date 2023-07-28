import {useState, useMemo, useCallback} from 'react';
import {StyleSheet, Text, View, TextStyle} from 'react-native';
import {CalendarList, DateData} from 'react-native-calendars';

const initialDate = '2023-05-15';

interface Props {
  horizontalView?: boolean;
}

export default function Calendario({ navigation }, props: Props) {
  const {horizontalView} = props;
  const [selected, setSelected] = useState(initialDate);
  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#AFEDCF',
        selectedTextColor: 'white'
      }
    };
  }, [selected]);

  const onDayPress = useCallback((day: DateData) => {
    setSelected(day.dateString);
  }, []);

  return (
    <CalendarList accessible={true}
      current={initialDate} 
      onDayPress={onDayPress}
      markedDates={marked}
      renderHeader={!horizontalView ? renderCustomHeader : undefined}
      calendarHeight={!horizontalView ? 390 : undefined}
      horizontal={horizontalView}
      pagingEnabled={horizontalView}
      staticHeader={horizontalView}
    />
  );
};

function renderCustomHeader(date: any) {
  const header = date.toString('MMMM yyyy');
  const [month, year] = header.split(' ');
  const textStyle: TextStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#C770D1',
    paddingRight: 5,
  };

  return (
    <View style={styles.header} accessible={true}>
      <Text style={[styles.month, textStyle]}>{`${month}`}</Text>
      <Text style={[styles.year, textStyle]}>{year}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  month: {
    marginLeft: 5
  },
  year: {
    marginRight: 5
  },
});