import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import TesimoniCard from '../components/testimoniCard'
const { width, height } = Dimensions.get('screen')
// import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch, useSelector } from 'react-redux'

export default function HomeStudent({navigation}) {

  const testimoniDummy = [
    {
      id: 1,
      nama: 'Susi susanti',
      image: require('../assets/testimoni/susiSusanti.jpg'),
      sekolah: "SMAN 1 Banten",
      testimoni: "Pengajarnya seru, jago bermain bulu tangkis, saya dapat memahami materi dengan sangat baik"
    },
    {
      id: 2,
      nama: 'Muhammad Athar',
      image: require('../assets/testimoni/rafathar.jpeg'),
      sekolah: 'SDN 1 Jakarta',
      testimoni: 'seru! saya suka saya suka!'
    },
    {
      id: 3,
      nama: 'Maudy Ayundi',
      image: require('../assets/testimoni/maudy.jpg'),
      sekolah: 'Universitas Indonesia',
      testimoni: 'Memiliki metode mengajar yang mantap'
    },
  ]

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const picture = useSelector( state => state.userReducer.imageUrl)

  const showScanner = () => {
       navigation.navigate("ScannerScreen")
   }

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);
  //
  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };
  //
  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

    return (
        <View style={styles.container}>
            <View style={styles.bgHome}>
                <Image
                    source={require('../assets/svg/bg_homeStudent.png') }
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
                    source={ require('../assets/svg/btn_topUp.png') }
                    style={{ width: 104, height: 32 }}
                />
            </View>
            <View style={styles.banner}>
                <Image
                    source={require('../assets/svg/banner.png') }
                    style={{ width: width, height: 180, justifyContent: 'center' }}
                />
            </View>

            <View style={{
              width: width,
              flexDirection: 'row',
              marginTop: 10,
              backgroundColor: '#FFF5C7',
              alignItems: 'center',
              paddingHorizontal: 20,
              padding: 10,
              borderRadius: 10
            }}>
              <Text style={{
                  fontSize: 18,
                  fontWeight: '500',
                  marginBottom: 14,
                  marginStart: 20 }}>Scan untuk mulai belajar! </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
        {/*  <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />

          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}*/}
        </View>
              <TouchableOpacity onPress={showScanner}>
                <Image
                source={ require('../assets/svg/scan.png') }
                style={{ width: 30, height: 30, marginLeft: 50}}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.history}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    marginBottom: 14,
                    marginStart: 20 }}>Testimoni siswa</Text>
                <ScrollView horizontal style={{paddingStart: 20, marginBottom: 10}}>
                  {testimoniDummy.map( (siswa, i)=> {
                    return(
                      <TesimoniCard key={i} siswa={siswa}/>
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
        marginBottom: 10,
        height: 80,
        maxHeight: 80,
    },
    banner: {
        width: width
    },
    history: {
        flex: 1,
        marginTop: 20,
    },
    bgHome: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
    }
})
