import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function TransactionCard() {
    return (
      <View style={styles.container}>
          <View style={styles.leftContent}>
              <Image
                  source={require('../../assets/svg/icn_succes.png') }
                  style={{ width: 16, height: 16, marginRight: 6, marginTop: 4}}
              />
              <Image
                  source={{}}
                  style={{ width: 50, height: 50, backgroundColor: '#616161' , marginRight: 12, borderRadius: 6}}
              />
              <View>
                  <Text style={{ fontSize: 14, fontWeight: '500' }}>Username</Text>
                  <Text style={{ fontSize: 12, color: '#616161' }}>Matapelajaran</Text>
                  <Text style={{ fontSize: 10, color: '#c1c1c1' }}>Tanggal</Text>
              </View>
          </View>
          <View style={styles.rightConten}>
              <Text style={{ fontSize: 12, color: '#c1c1c1', marginBottom: 6 }}>Biaya Les</Text>
              <Text style={{ fontSize: 16, color: '#F7B81E', fontWeight: '500' }}>Rp 200.000,-</Text>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
      width: 360,
      height: 75,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignContent: 'center',
      backgroundColor: '#ffff',
      marginBottom: 8,
      padding: 10,
      borderRadius: 8
  },
  leftContent: {
      justifyContent: 'center',
      flexDirection: 'row'
  }
})
