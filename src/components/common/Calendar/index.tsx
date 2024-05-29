import React from 'react';
import sizes from '@app/style/sizes';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const exerciseData = {
  '2024-01': [4, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24],
  '2024-02': [1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24],
  '2024-03': [2, 3, 4, 10, 11, 12, 14, 20, 21, 22, 23, 24, 30],
  '2024-04': [2, 3, 4, 10, 11, 12, 14, 20, 21, 22, 23, 24, 30],
  '2024-05': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
};

// 动态获取每个月的天数
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

// 获取最近的3个月的数据
const getLastMonthsData = (data: any, months: number) => {
  const keys = Object.keys(data).slice(-months);
  return keys.reduce((result, key) => {
    // @ts-ignore
    result[key] = data[key];
    return result;
  }, {});
};

const daysInColumn = 7;

const renderCalendar = (month: number, year: number, days: any) => {
  let columns = [];
  let calendarDays = [];
  const daysInMonth = getDaysInMonth(year, month);

  for (let i = 1; i <= daysInMonth; i++) {
    const isExerciseDay = days.includes(i);
    calendarDays.push(
      <View
        key={`${month}-${i}`}
        style={[
          styles.calendarDay,
          isExerciseDay ? styles.exerciseDay : styles.noExerciseDay,
        ]}
      />
    );

    // 每7天生成一个新的列
    if (calendarDays.length === daysInColumn || i === daysInMonth) {
      columns.push(
        <View key={`${month}-column-${i}`} style={styles.calendarColumn}>
          {calendarDays}
        </View>
      );
      calendarDays = [];
    }
  }

  return columns;
};

const Calendar = () => {
  // 获取屏幕宽度
  const { width } = Dimensions.get('window');
  // 每个月份的宽度
  const monthWidth = sizes.gap * 4.75; // 固定宽度，你之前设置的值
  // 计算最多可以显示多少个月
  const monthsToShow = Math.floor(width / (monthWidth + sizes.gap * 0.48));

  // 获取最近几个月的数据
  const lastMonthsData = getLastMonthsData(exerciseData, monthsToShow);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>近期动态</Text>
      <View style={styles.hairline} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.calendarContainer}>
          {Object.entries(lastMonthsData).map(([month, days]) => {
            const [year, monthNumber] = month.split('-').map(Number);
            return (
              <View key={month} style={styles.calendarMonth}>
                <Text style={styles.monthText}>{`${year}年${monthNumber}月`}</Text>
                <View style={styles.calendarColumnsContainer}>
                  {renderCalendar(monthNumber, year, days)}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: sizes.gap * 12,
    marginBottom: sizes.gap,
    margin: sizes.gap,
    borderRadius: sizes.gap * 0.3,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden', 
  },
  title: {
    paddingTop: sizes.gap * 0.5,
    paddingLeft: sizes.gap * 0.5,
    fontSize: 17,
    marginBottom: sizes.gap * 0.4,
  },
  hairline: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  calendarContainer: {
    paddingTop: sizes.gap * 0.5,
    paddingLeft: sizes.gap * 0.5,
    marginTop: sizes.gap * 0.2,
    flexDirection: 'row',
  },
  calendarMonth: {
    width: sizes.gap * 4.75, 
    marginLeft: sizes.gap * 0.48,
  },
  monthText: {
    fontSize: 15,
    marginBottom: sizes.gap * 0.5,
    textAlign: 'center',
  },
  calendarColumnsContainer: {
    flexDirection: 'row',
  },
  calendarColumn: {
    flexDirection: 'column',
    marginRight: sizes.gap * 0.25,
  },
  calendarDay: {
    width: sizes.gap * 0.75,
    height: sizes.gap * 0.75,
    marginBottom: sizes.gap * 0.3,
    borderRadius: 4,
  },
  exerciseDay: {
    backgroundColor: '#30A14E',
  },
  noExerciseDay: {
    backgroundColor: '#DEDEDE',
  },
});

export default Calendar;
