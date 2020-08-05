import React from 'react';
import { TextInput, View, StyleSheet, Button, Text, Dimensions, Image, naviga, TouchableOpacity} from 'react-native';

export default function Payments({ navigation }) {

  return(
    <View>
      <Text>Midtrans Payment</Text>
      <Text>amount:</Text>

      <View>
        <Text>Card number</Text>
        <TextInput
          placeholder="ex: 4102XXX"
        />

        <Text>expire card</Text>
        <TextInput
          placeholder="01/01/2001"
        />

        <Text>CVV</Text>
        <TextInput
          placeholder="000"
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={onPress}
        />
        <Text>payment</Text>
        <Image
          source={require('../assets/svg/button.png')}
          onPress={onPress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
})
