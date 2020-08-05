import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import JadwalCard from '../../components/teachers/jadwalCard'
const { width, height } = Dimensions.get('screen')

export default function HomeTeacher({navigation}) {
  const [students, setStudents] = useState([
       {
           id: 1,
           nama: 'Rino',
           price: 100000,
           jadwal: '2020-12-12',
           matpel: 'React Native'
       },
       {
           id: 2,
           nama: 'Jackson',
           price: 200000,
           jadwal: '2020-12-10',
           matpel: 'Angular.js'
       },
       {
           id: 3,
           nama: 'Susilo',
           price: 100000,
           jadwal: '2020-12-09',
           matpel: 'React.js'
       },
       {
           id: 4,
           nama: 'Zeke',
           price: 200000,
           jadwal: '2020-11-11',
           matpel: 'Vue.js'
       }
   ])

    return (
        <View style={styles.container}>
            <View style={styles.bgHome}>
                <Image
                    source={require('../../assets/svg/bg_homeStudent.png')}
                    style={{ width: width, height: 220 }}
                />
            </View>
            <View style={styles.account}>
                <View style={{ flexDirection: 'row', height: 80,}}>
                    <Image
                        style={{ width: 60, height: 60, backgroundColor: "#e3e3e3", borderRadius: 100, marginRight: 12 }}
                    />
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>User Name</Text>
                        <Text style={{color: '#616161'}}>Saldo Rp. 0,- </Text>
                    </View>
                </View>
                <Image
                    source={require('../../assets/svg/btn_topUp.png') }
                    style={{ width: 104, height: 32 }}
                />
            </View>
            <View style={styles.banner}>
                <Image
                    source={require('../../assets/svg/banner.png') }
                    style={{ width: width, height: 180, justifyContent: 'center' }}
                />
            </View>
            <View style={styles.history}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    marginBottom: 14,
                    marginStart: 20 }}>Jadwal Mengajar</Text>
                <ScrollView style={{paddingHorizontal: 15, marginBottom: 10}}>
                {students.map(student => {
                    return (
                        <JadwalCard key={student.id} student={student} navigation={navigation}/>
                    )
                })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    account: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginStart: 20,
        marginEnd: 20,
        marginTop: 54,
        marginBottom: 20,
        height: 80,
        maxHeight: 80,
    },
    banner: {
        width: width
    },
    history: {
        flex: 1,
        // marginStart: 20,
        marginTop: 20,
    },
    bgHome: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
    }
})
