import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function OrderSiswaCard() {
    return (
        <View style={styles.card}>
            <View style={{flexDirection: "row", marginBottom: 20, marginHorizontal: 5}}>
                <Image
                source={{}}
                style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#616161', marginRight: 10}} />
                <View>
                    <Text style={{fontWeight: '500'}}>Username</Text>
                    <Text style={{color: '#616161', height: 50, width: 100}}>Sma n 1 Tangsel</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", marginBottom: 20}}>
                <Image
                source={require('../../assets/svg/icn_calendar.png')}
                style={{width: 20, height:20, marginRight: 16}}
                />
                <View>
                    <Text style={{fontWeight: '500', marginBottom: 5}}>Tanggal</Text>
                    <Text style={{color: '#616161', marginBottom: 3}}>Jam Belajar</Text>
                    <Text style={{color: '#616161', backgroundColor: '#FFF5CF', padding: 4}}>Matapelajaran</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", marginBottom: 20}}>
                <Image
                source={require('../../assets/svg/icn_location.png')}
                style={{width: 18, height:25, marginRight: 16}} />
                <View>
                    <Text style={{fontWeight: '500'}}>Lokasi</Text>
                    <Text style={{color: '#616161'}}>Kota lokasi</Text>
                </View>
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 175,
        height: 250,
        marginHorizontal: 5,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#ffff'
    }
})
