import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'


export default function ProfileStudent({ navigation }) {
    const {width, height} =Dimensions.get('screen')

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Student's Profile </Text>
            {/* List transaction */}
            <View style={{paddingHorizontal: 20}}>

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
        paddingHorizontal: 12,
        paddingBottom:10,
        marginBottom: 20,
        marginVertical: 20,
        fontSize: 18,
        fontWeight: '500',
        borderBottomWidth: 1,
        borderBottomColor: '#616161',
    },

})
