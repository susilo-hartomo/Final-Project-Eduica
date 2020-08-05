import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import OrderSiswaCard from '../../components/teachers/orderSiswaCard'

export default function ListOrderSiswa({ navigation }) {
  const dummyData = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    }
  ]

    return (
        <View style={{flex:1}}>

          <View style={styles.mainTitle}>
            <Text style={styles.title}>Order siswa</Text>
          </View>

            <FlatList style={{paddingHorizontal: 10}}
              data={dummyData}
              numColumns={2}
              keyExtractor={(item, index) => item.id }
              renderItem={(item) =>
                <OrderSiswaCard navigation={navigation}/>
              }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        textShadowRadius: 2,
        textShadowColor: 'black'
    },
    mainTitle: {
      backgroundColor: '#FED32C',
      marginBottom: 10,
      height: 55,
      paddingHorizontal: 20,
      justifyContent: 'center'
    },
    listOrder: {
      flex: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
})
