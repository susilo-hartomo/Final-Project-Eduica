import React from 'react';
import {
  TextInput, View, StyleSheet, Button, Text, Dimensions, Image, naviga, TouchableOpacity
} from 'react-native';
import Svg from 'react-native-svg'
import bg_welcome from '../assets/svg/bg_wellcome.png'

export default function Welcome({ navigation }) {
  const {width, height} = Dimensions.get('screen')

  function onPress() {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>

      <View style={styles.img}>
        <Image
          source={bg_welcome }
          style={{ width: 375, height: 280 }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.titleDescription}>Selamat Datang</Text>
        <Text style={styles.mainDescription}>
          Dapatkan teman belajar terbaikmu untuk
          membantu memahami materi belajar dengan mudah,
          cepat dan menyenangkan
        </Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.btnGetStarted}>
        <Text style={{fontWeight: '600', marginRight: 12}}>Get Started</Text>
        <Image
          source={require('../assets/svg/button.png')}
          style={{width: 88, height: 36}}
          onPress={onPress}
        />
        {/* <Button onPress={onPress} title="Get Started"></Button> */}
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  img: {
    flex: 5,
  },
  content: {
    flex: 5,
    margin: 20
  },
  btnGetStarted: {
    flex:2,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    justifyContent: 'flex-end'
  },
  titleDescription: {
    marginTop: 80,
    fontSize: 20,
    fontWeight: '600',
  },
  mainDescription: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 26,
    color: '#616161'
  },
})
