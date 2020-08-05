import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function JadwalCard(props) {
  const navigation = props.navigation
  const showQrCode = () => {
    navigation.navigate('QR', {student: props.student})
  }

    return (
        <View style={styles.card}>
            <View style={styles.left}>
                <Image
                    style={{ marginRight: 8, borderRadius: 100, width: 50, height: 50, backgroundColor: '#b1b1b1' }} />
                <View style={styles.content}>
                    <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Username</Text>
                    <Text style={{ color: '#616161', fontSize: 12, marginBottom: 3 }}>Matapelajaran</Text>
                    <Text style={{}}>Jadwal Belajar</Text>
                </View>
            </View>
            <TouchableOpacity onPress={showQrCode} style={styles.right}>
                <Image
                    source={require('../../assets/svg/icn_qrCode.png')}
                    style={{width: 24, height: 24, alignItems: 'center'}}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 90,
        width: 360,
        padding: 10,
        marginBottom: 8,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffff'
    },
    left: {
        flexDirection: 'row',
    }
})
