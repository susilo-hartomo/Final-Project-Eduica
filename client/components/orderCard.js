import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

export default function OrderCard() {
    return (
        <View style={styles.card}>
            <View style={styles.leftContaint}>
                <Image
                    style={{ width: 10, height: 10, borderRadius: 100, backgroundColor: '#7AA3C7' }}
                />
                <View>
                    <Text>Matapelajaran</Text>
                    <Text>Hari Belajar</Text>
                </View>
            </View>
            <View style={styles.rightContaint}>
                <Text>Waktu belajar</Text>
            </View>
        </View>
    )
}

const { width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    card: {
        width: width,
        height: 70,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    leftContaint: {

    }, 
    rightContaint: {

    }
})
