import React from 'react';
import { TextInput, View, StyleSheet, Button, Text, Dimensions, Image, naviga, TouchableOpacity} from 'react-native';
import bg_payments from '../assets/svg/bg_payments.png';
import NumberFormat from 'react-number-format';
export default function Payments({ navigation }) {

  function onPress() {
    navigation.navigate('StudentTransaction')
  }

  return(
    <View style={styles.container}>

      <View style={styles.mainTitle}>
        <Text style={styles.title}>Payment</Text>
      </View>

      <View style={styles.img}>
        <Image
          source={ bg_payments }
          style={{width: 200, height: 180}}
        />
      </View>

      <View style ={styles.content}>
        <Text style={styles.titleDescription}>Midtrans Payment</Text>

        <View style={styles.mainDescription}>
          <View style={styles.amount}>
            <Text>Amount:</Text>
            <NumberFormat value={200000} displayType={'text'} thousandSeparator={true} prefix={'Rp'} renderText={value => <Text>{value}</Text>}/>
          </View>
            <View style={styles.infoCard}>
              <Text>Card number</Text>
              <TextInput style={{ padding: 10, backgroundColor: "white", marginBottom: 10, marginTop: 10}}
                placeholder="ex: 4102XXX"
              />

            <View style={styles.cardNCVV}>
              <View style={{flex: 6, marginRight: 4}}>
                <Text>Expire card</Text>
                <TextInput style={{ padding: 10, backgroundColor: "white", marginBottom: 10, marginTop: 10}}
                  placeholder="01/01/2001"
                />
              </View>

              <View style={{flex: 4}}>
                <Text>CVV</Text>
                <TextInput style={{ padding: 10, backgroundColor: "white", marginBottom: 10, marginTop: 10}}
                  placeholder="000"
                />
              </View>

            </View>

            </View>
          </View>
          <TouchableOpacity
          onPress={onPress}
          style={styles.btnPayment}
          >
          <Text style={{fontWeight: '600', marginRight: 12}}>payment</Text>
          <Image
          source={require('../assets/svg/button.png')}
          style={{width: 88, height: 36}}
          onPress={onPress}
          />
          </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  img: {
    flex: 2,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  amount: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#ffde9e",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    flex: 4,
    margin: 20
  },
  btnPayment: {
    flex:2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,

    margin: 20,
    justifyContent: 'flex-end'
  },
  titleDescription: {
    fontSize: 20,
    fontWeight: '600',
  },
  mainDescription: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 26,
    color: '#616161'
  },
  infoCard: {
    borderRadius: 20,
    backgroundColor: "#FED32C",
    padding: 10,
  },
  mainTitle: {
    flex: 0.6,
    backgroundColor: '#FED32C',
    marginBottom: 10,
    height: 55,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  title: {
      fontSize: 18,
      color: 'white',
      fontWeight: '600',
      fontSize: 18,
      textShadowRadius: 2,
      textShadowColor: 'black'
  },
  cardNCVV: {
    flexDirection: 'row',

  }
})
