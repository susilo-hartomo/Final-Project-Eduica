import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { TextInput, View, StyleSheet, Button, Text, Image, Dimensions } from 'react-native';
import bg_login from '../assets/svg/bgLogin.png'
import line from '../assets/svg/lineSignIn.png'
import icn_username from '../assets/svg/icn_username.png'
import icn_password from '../assets/svg/icn_password.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signIn } from '../store/actions/userActions'


export default function SignIn({ route, navigation }) {
  const dispatch = useDispatch()
  const submitUser = () => {
    // navigation.navigate("HomeStudent")
    navigation.navigate("HomeStudent") // test teacher page
    // dispatch(signIn(username, password))
   }
  const { width, height } = Dimensions.get('screen')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.bgLogin}>
      <Image
        source={bg_login }
        style={{ width: width, height: height }} >
      </Image>
      <View style={styles.content} >
        <View>
          <Text style={styles.signIn}>Sign</Text>
          <Image
            source={line }
            style={{ width: 40, height: 4, marginLeft: 4, marginBottom: 20 }} />
        </View>
        <View style={styles.username}>
          <Image
            source={icn_username }
            style={{ width: 40, height: 40, marginLeft: 4, marginRight: 10 }} />
          <TextInput style={{ height: 40, width: 200, }}
            onChangeText={text => setUsername(text)}
            placeholder='username'
            value={username} />
        </View>
        <View style={styles.username}>
          <Image
            source={icn_password }
            style={{ width: 40, height: 40, marginLeft: 4, marginRight: 10 }} />
          <TextInput style={{ height: 40, width: 200, }}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            placeholder='password'
            value={password} />
        </View>
        <TouchableOpacity
          style={{ marginTop: 80 }}
          onPress={submitUser}
        >
          <Image
            source={require('../assets/svg/btn_signIn.png') }
            style={{ width: 280, height: 42 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bgLogin: {
    flex: 1,
  },
  content: {
    position: 'absolute',
    marginStart: 40,
    flex: 1,
  },
  signIn: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 130,
    padding: 4,
  },
  username: {
    display: 'flex',
    flexDirection: 'row',
    padding: 4,
    marginTop: 20,
    borderColor: '#E3E3E3',
    borderWidth: 1,
    borderRadius: 100,
    paddingStart: 2
  }
})
