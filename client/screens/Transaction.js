import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import TransactionCard from '../components/transactionCard'


export default function Transaction({ navigation }) {
    const {width, height} =Dimensions.get('screen')

    return (
        <View style={styles.container}>
          <View style={styles.mainTitle}>
            <Text style={styles.title}> List transaction </Text>
          </View>
            <View style={{paddingHorizontal: 20}}>
                <TransactionCard navigation={navigation}/>
                <TransactionCard navigation={navigation}/>
                <TransactionCard navigation={navigation}/>
                <TransactionCard navigation={navigation}/>
                <TransactionCard navigation={navigation}/>
            </View>
                <View style={{marginTop: (height - 78), alignSelf:'center', position: 'absolute', width: width  }}>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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

})
