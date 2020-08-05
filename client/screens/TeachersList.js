import React, { useState } from 'react';
import CardTeacher from '../components/cardTeacher'
import { TextInput, View, StyleSheet, Button, Text, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen')

export default function TeachersList({ navigation }) {
  const dummyData = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    }
  ]

  return (
    <View style={styles.container}>

      <View style={styles.mainTitle}>
        <Text style={styles.title}>Temukan Guru Terbaikmu</Text>
      </View>

      <>
        <FlatList style={{marginHorizontal: 20}}
          data={dummyData}
          numColumns={2}
          keyExtractor={(item, index) => item.id }
          renderItem={(item) =>
            <CardTeacher navigation={navigation}/>
          }
        />
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
