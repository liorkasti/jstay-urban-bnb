import React, { useState, } from "react";
import { StyleSheet, View, Image, } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

let customI18n = {
  'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  'text': {
    'start': 'Check in',
    'end': 'Check out',
    'date': 'Date',
    'save': 'Confirm',
    'clear': 'Reset'
  },
  'date': 'DD / MM'  // date format
};

// optional property, too.
let color = {
  subColor: '#f0f0f0'
};

let calendar = "";

const block = { key: 'block', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const availible = { key: 'availible', color: 'green' };
const hagim = { key: 'hagim', color: 'gray' };


export default function CalendarCard(props) {
  const [startDate, setStartDate] = useState(new Date(2020, 7, 12))
  const [endDate, setEndDate] = useState(new Date(2020, 7, 19))

  // when confirm button is clicked, an object is conveyed to outer component
  // contains following property:
  // startDate [Date Object], endDate [Date Object]
  // startMoment [Moment Object], endMoment [Moment Object]
  const confirmDate = ({ startDate, endDate, startMoment, endMoment }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  const openCalendar = () => {
    calendar && calendar.open();
  }
  // in render function
  // It's an optional property, I use this to show the structure of customI18n object.

  const getCurrentDate = () => {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return year + '-' + month + '-' + date;//format: dd-mm-yyyy;
  }
  console.log("Hello Jstay! ", getCurrentDate());

  return (
    <View style={[styles.container, props.style]}>
      <Calendar

        // Initially visible month. Default = Date()
        current={getCurrentDate}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2020-07-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2023-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => { console.log('selected day', day) }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => { console.log('selected day', day) }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month) }}
        // Hide month navigation arrows. Default = false
        // hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => (<Arrow />)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        // disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        // firstDay={1}
        // Hide day names. Default = false
        // hideDayNames={true}
        // Show week numbers to the left. Default = false
        // showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        // disableArrowLeft={true}
        // Disable right arrow. Default = false
        // disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        renderHeader={(date) => {/*Return JSX*/ }}

        markedDtes={{
          '2020-07-14': {
            periods: [
              { startingDay: false, endingDay: true, color: '#5f9ea0' },
              { startingDay: false, endingDay: true, color: '#ffa500' },
              { startingDay: true, endingDay: false, color: '#f0e68c' }
            ]
          },
          '2020-07-21': {
            periods: [
              { startingDay: true, endingDay: false, color: '#ffa500' },
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#f0e68c' }
            ]
          },
        }}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType='multi-period'
        // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
        markingType={'custom'}
        markedDates={{
          startingDay: true,
          '2020-06-28': {
            customStyles: {
              container: {
                backgroundColor: 'blue'
              },
              text: {
                color: 'white',
                fontWeight: 'bold'
              }
            }
          },
          '2018-06-20': {
            endingDay: true,
            customStyles: {
              container: {
                backgroundColor: 'blue',
              },
              text: {
                color: 'white'
              }
            }
          }
        }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image2: {
    height: 420
  }
});