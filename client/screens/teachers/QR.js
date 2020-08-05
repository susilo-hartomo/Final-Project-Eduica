'use strict';

import React, { Component, useState } from 'react'
import QRCode from 'react-native-qrcode-generator';

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';

export default function QR(props){

    const student = props.route.params.student
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, marginBottom: 10, justifyContent: 'center'}}>Scan this barcode :</Text>
        <QRCode
          value={JSON.stringify(student)}
          size={300}
          bgColor='black'
          fgColor='white'/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});

AppRegistry.registerComponent('QR', () => QR);
