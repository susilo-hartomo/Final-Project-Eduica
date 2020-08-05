import React, {useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {
    TextInput, View, StyleSheet, Button, Text, Dimensions, Image, naviga, Picker,
} from 'react-native';
// import Navbar from '../components/navbarStudent'

const {width, height} = Dimensions.get('screen')

const Form = ({ route, navigation }) => {
    const [chosenDate, setChosenDate] = useState('')

    const [isVisible, setIsVisible] = useState(false)
    const [grade, setGrade] = useState('')


    const handlePicker = (datetime) => {
        setIsVisible(false)
        setChosenDate(moment(datetime).format('MMMM, Do YYYY HH:mm'))
    }

    const showPicker = () => {
    setIsVisible(true)
    }

    const hidePicker = () => {
    setIsVisible(false)
    }

    const changeGrade = (itemValue) => {
        setGrade(itemValue)
    }

    function onPress() {
        navigation.navigate("Payments"/* , {jadwal: chosenDate} */)
    }

    return (

        <View style={styles.container}>

          <View style={styles.mainTitle}>
            <Text style={styles.title}>Pilih jadwal belajarmu</Text>
          </View>

          <View style={styles.image}>
              <Image
                  source={require('../assets/svg/jadwal.png')}
                  style={{ width: 200, height: 180 }}
              />
          </View>

        <View style={styles.main}>
          <View style={styles.content}>
            <Text>Pilih Jadwal Lecture anda</Text>

            <View style={styles.username} >
              <TouchableOpacity  onPress={showPicker}>
                <Image
                  source={require('../assets/svg/icn_calendar.png')}
                  style={{width: 20, height: 20, marginLeft: 20, marginTop: 10}}
                />
              </TouchableOpacity>

              <TextInput disabled onKeyPress={showPicker} style={{ height: 40, textAlign:'center', width: 200, fontSize: 20}}
              placeholder='Jadwal Belajar'
              value={chosenDate} />
            </View>

              <DateTimePicker
              isVisible={isVisible}
              onConfirm={handlePicker}
              onCancel={hidePicker}
              mode={'datetime'}
              is24Hour={false}
              display="spinner"
              />

              <View style={styles.picker}>
                  <Picker
                  // style={styles.picker}
                  selectedValue={grade}
                  onValueChange={(itemValue, itemIndex) => changeGrade(itemValue)}>
                      <Picker.Item label="Pilih Jenjang Studi" value="" />
                      <Picker.Item label="SD" value="SD" />
                      <Picker.Item label="SMP" value="SMP" />
                      <Picker.Item label="SMA" value="SMA" />
                      <Picker.Item label="Universitas" value="Universitas" />
                  </Picker>
              </View>

            </View>

            <View>
              <TouchableOpacity
              onPress={onPress}
              style={styles.btnPayment}>
              <Text style={{fontWeight: '600', marginRight: 12}}>Go to payments</Text>
              <Image
              source={require('../assets/svg/button.png')}
              style={{width: 88, height: 36}}
              onPress={onPress}
              />
              </TouchableOpacity>
            </View>

          </View>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 5,
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 2,
        margin: 20
    },
    titleDescription: {
        marginTop: 80,
        fontSize: 20,
        fontWeight: '600',
        // fontFamily: 'poppins',
    },
    mainDescription: {
        marginTop: 20,
        fontSize: 16,
        lineHeight: 26,
        color: '#616161'
    },
    username: {
        display: 'flex',
        flexDirection: 'row',
        padding: 4,
        marginTop: 20,
        borderColor: '#616161',
        borderWidth: 1,
        borderRadius: 100,
        paddingStart: 2
    },
    btnPayment: {
        // flex:2,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        justifyContent: 'flex-end'
    },
    picker: {
        width: width-25,
        marginTop: 15,
        marginLeft:20,
        marginRight:20,
        borderColor: '#E3E3E3',
        borderWidth:1,
        borderRadius: 100,
        alignSelf: 'center',
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        color: 'black',
        fontWeight: '600',
        fontSize: 18,
    },
    mainTitle: {
      backgroundColor: '#FED32C',
      marginBottom: 10,
      height: 80,
      paddingHorizontal: 20,
      justifyContent: 'center'
    },
    main: {
      flex: 5

    }
})

export default Form;
