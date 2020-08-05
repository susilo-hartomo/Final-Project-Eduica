import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { useDispatch, useSelector } from 'react-redux'
import { setPicture } from '../store/actions/userActions'


const ImagePickerExample = ({navigation}) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    getPermissionAsync();
  }, [])


  const dispatch = useDispatch()

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImageUrl(result.uri)
        // this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const onPress = () => {
    dispatch(setPicture(imageUrl))
    navigation.navigate('HomeStudent')
    console.log(imageUrl)

  }

    return (
      <View>
        {imageUrl.length > 0 && <Image source={{uri: imageUrl}} style={{ width: 200, height: 200 }} />}

          <Button onPress={pickImage} title="Select Image"></Button>
          <TouchableOpacity
              style={{ marginBottom: 20, marginTop: 25, alignSelf:'center' }}
              onPress={onPress}
              >
              <Image
                  source={require('../assets/svg/button.png') }
                  style={{ width: 100, height: 40 }}
              />
          </TouchableOpacity>
          {/* <Button onPress={onPress} title="Submit"></Button> */}
      </View>
    );


}


const styles = StyleSheet.create({
  container: {
      flex: 1
  },
})


export default ImagePickerExample
