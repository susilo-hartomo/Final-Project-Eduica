import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Provider } from 'react-redux';
import store from './store';

//import screens
import Welcome from './screens/Welcome';
import HomeStudent from './screens/HomeStudent';
import HomeTeacher from './screens/teachers/HomeTeacher';
import Login from './screens/SignIn';
import Transaction from "./screens/Transaction";
import TeachersList from './screens/TeachersList'
import SetJadwalBelajar from './screens/SetJadwalBelajar';
import Payments from './screens/Payments';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeStudent" component={HomeStudent} />
          <Stack.Screen name="Transaction" component={Transaction} />
          <Stack.Screen name="TeachersList" component={TeachersList} />
          <Stack.Screen name="SetJadwalBelajar" component={SetJadwalBelajar} />
          <Stack.Screen name="Payments" component={Payments} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

//stack not yet created
// <Stack.Screen name="TeacherLogin" component={TeacherLogin}/>
// <Stack.Screen name="StudentLogin" component={StudentLogin}/>

//sisa screensnya
//ex: home, transaction, etc
