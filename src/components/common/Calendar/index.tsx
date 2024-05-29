/**
 * Calendar
 * @file  日历组件
 * @module app/components/common/Calendar
 */

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import sizes from '@app/style/sizes';

// 数据源
const exerciseData = {
  '2024-02': [2, 3, 4, 10, 11, 12, 14, 20, 21, 22, 23, 24, 30],
  '2024-03': [2, 3, 4, 10, 11, 12, 14, 20, 21, 22, 23, 24, 30],
  '2024-04': [2, 3, 4, 10, 11, 12, 14, 20, 21, 22, 23, 24, 30],
  '2024-05': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
};

const daysInColumn = 7;
const weeksToShow = 12; 

const getLastThreeMonthsData = (data: Record<string, number[]>): Record<string, number[]> => {
  const result: Record<string, number[]> = {};
  const now = new Date();
  for (let i = 2; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    if (data[yearMonth]) {
      result[yearMonth] = data[yearMonth];
    }
  }
  return result;
};

const Calendar: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;
  const columnWidth = (screenWidth - sizes.gap * 3.5) / (weeksToShow + 0.5); // 动态计算列宽
  const daySize = columnWidth * 0.55; // 动态计算日历项大小

  const lastThreeMonthsData = getLastThreeMonthsData(exerciseData);
  const allDays: Date[] = [];
  const now = new Date();
  for (let i = 0; i < weeksToShow * daysInColumn; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    allDays.push(date);
  }
  allDays.reverse();

  const renderColumns = (monthDays: Date[]): JSX.Element[] => {
    let columns: JSX.Element[] = [];
    for (let i = 0; i < monthDays.length; i += daysInColumn) {
      const week = monthDays.slice(i, i + daysInColumn);
      columns.push(
        <View key={`column-${i}`} style={[styles.calendarColumn, { width: columnWidth * 0.8 }]}>
          {week.map((date) => {
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const yearMonth = `${date.getFullYear()}-${month.toString().padStart(2, '0')}`;
            const isExerciseDay = lastThreeMonthsData[yearMonth]?.includes(day);
            return (
              <View
                key={`${month}-${day}`}
                style={[
                  styles.calendarDay,
                  {
                    width: daySize,
                    height: daySize,
                    backgroundColor: isExerciseDay ? '#30A14E' : '#DEDEDE',
                  },
                ]}
              />
            );
          })}
        </View>
      );
    }
    return columns;
  };

  const groupDaysByMonth = (): Record<string, Date[]> => {
    const grouped: Record<string, Date[]> = {};
    allDays.forEach((date) => {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const key = `${year}-${month.toString().padStart(2, '0')}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(date);
    });
    return grouped;
  };

  const groupedDays = groupDaysByMonth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>近期动态</Text>
      <View style={styles.hairline} />
      <View style={styles.calendarContainer}>
        {Object.entries(groupedDays).map(([month, days]) => {
          const [year, monthNumber] = month.split('-').map(Number);
          return (
            <View key={month} style={[styles.calendarMonth]}>
              <Text style={styles.monthText}>{`${year}年${monthNumber}月`}</Text>
              <View style={styles.calendarColumnsContainer}>{renderColumns(days)}</View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: sizes.gap * 0.5,
    marginTop: sizes.gap * 0.2,
  },
  calendarMonth: {
    marginBottom: sizes.gap * 0.7,
  },
  monthText: {
    marginTop: sizes.gap * 0.4,
    fontSize: 15,
    marginBottom: sizes.gap * 0.4,
    textAlign: 'center',
  },
  calendarColumnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: sizes.gap * 0.1,
  },
  calendarColumn: {
    flexDirection: 'column',
  },
  calendarDay: {
    marginBottom: sizes.gap * 0.2, 
    borderRadius: 4,
  },
});

export default Calendar;
