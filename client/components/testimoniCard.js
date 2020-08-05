import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function TestimoniCard(props) {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', maxHeight: 80, marginBottom: 20 }}>
                <Image
                    style={{ width: 50, height: 50, backgroundColor: "#616161", borderRadius: 100, marginRight: 12 }}
                    source= {props.siswa.image}
                />
                <View>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>{props.siswa.nama}</Text>
                    <Text style={{ fontSize: 10, color: '#616161'}}>{props.siswa.sekolah}</Text>
                </View>
            </View>
            <Text style={{fontStyle: 'italic', fontSize: 12, color: '#616161'}}>
                {props.siswa.testimoni}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 210,
        height: 180,
        padding: 12,
        backgroundColor: '#ffff',
        borderColor: '#e3e3e3',
        shadowColor: '#e3e3e3',
        shadowOpacity: .8,
        shadowOffset: { width: 1, height: 4 },
        borderRadius: 20,
        marginRight: 10,
        elevation: 10,
    },
})
