import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CardTeacher(props) {
    const { navigation } = props

    const pilihGuru = () => {
        navigation.navigate('SetJadwalBelajar')
    }

    return (
        <View style={styles.card}>
            <View>
                <Image
                    style={{ height: 150, backgroundColor: "#616161", }}
                />
            </View>
            <View style={styles.description}>
                <Text style={{ fontWeight: '500', fontSize: 14 }}>Username</Text>
                <Text style={{ fontSize: 10, color: '#616161', marginBottom: 14 }}>Universitas</Text>
                <View style={{ padding: 4, backgroundColor: '#FFF5CF', marginBottom: 24, width: 90 }}>
                    <Text style={{ fontSize: 12, color: '#616161' }}>Matapelajaran</Text>
                </View>
                <Text style={{ fontWeight: '500', fontSize: 14, color: '#F7B81E', marginBottom: 10 }}>Rp. 200000</Text>
                <TouchableOpacity
                    onPress={pilihGuru}
                >
                    <Image
                        source={require('../assets/svg/btn_pilihGuru.png') }
                        style={{ width: 150, height: 32, justifyContent: 'center' }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 165,
        borderRadius: 20,
        backgroundColor: '#ffff',
        // backgroundColor: '#F6F6F4',
        borderColor: '#e3e3e3',
        shadowColor: '#e3e3e3',
        shadowOpacity: .8,
        shadowOffset: { width: 0, height: 1 },
        borderRadius: 12,
        elevation: 10,
        marginRight: 8,
        marginBottom: 10
    },
    description: {
        padding: 12
    }
})
