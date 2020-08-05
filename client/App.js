
import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux';
import store from './store';

//import screens
import Welcome from './screens/Welcome';
import Login from './screens/SignIn';

// screens students
import HomeStudent from './screens/HomeStudent';
import TeachersList from './screens/TeachersList';
import StudentTransaction from "./screens/Transaction";
import ProfileStudent from './screens/Profile';
import SetJadwalBelajar from './screens/SetJadwalBelajar';//import screens student
import UploadImage from './screens/Image'
import ScannerScreen from './screens/Scanner'
import Payments from './screens/Payments'

// screens teachers
import HomeTeacher from './screens/teachers/HomeTeacher';
import ListOrderSiswa from './screens/teachers/ListOrderSiswa';
import TeacherTransaction from './screens/teachers/Transaction';
import ProfileTeacher from './screens/teachers/Profile';
import QR from './screens/teachers/QR'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Splash = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

const SetJadwalNavigator = () => {

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Teachers List" component={TeachersList} />
      <Stack.Screen name="SetJadwalBelajar" component={SetJadwalBelajar} />
      <Stack.Screen name="Payments" component={Payments} />
    </Stack.Navigator>
  );
}

const Home = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeStudent} />
      <Stack.Screen name="ScannerScreen" component={ScannerScreen} />

    </Stack.Navigator>
  )
}

const QRNavigator = () => {

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeTeacher} />
      <Stack.Screen name="QR" component={QR} />
    </Stack.Navigator>
  );
}

export default function App() {

  const isStudent = false
  const isTeacher = true
  const isLogout = false

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator headerMode="none" >

          {isStudent && (
            <>
              <Tab.Screen
                name="HomeStudent"
                component={Home}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => <Image
                    source={require('./assets/svg/home-light.png')}
                    style={{width: 20, height: 20, marginBottom: 4, marginTop: 5}}
                  />,
                }}
              />
              <Tab.Screen
              name="TeachersList"
              component={SetJadwalNavigator}
              options={{
                tabBarLabel: "Teachers List",
                tabBarIcon: ({ color, size }) =>  <Image
                source={require('./assets/svg/teacher-light.png')}
                style={{width: 20, height: 22, marginBottom: 4, marginTop: 5}}
                />
              }}
              />
              <Tab.Screen
              name="StudentTransaction"
              component={StudentTransaction}
              options={{
                tabBarLabel: "Transaction",
                tabBarIcon: ({ color, size }) => <Image
                source={require('./assets/svg/transaction-light.png')}
                style={{width: 20, height: 20, marginBottom: 4, marginTop: 5}}
                />,
              }}
              />
              <Tab.Screen
                name="ProfileStudent"
                component={UploadImage}
                options={{
                  tabBarLabel: "Profile",
                  tabBarIcon: ({ color, size }) => <Image
                    source={require('./assets/svg/user-light.png')}
                    style={{width: 20, height: 20, marginBottom: 4, marginTop: 5}}
                  />,
                }}
              />
            </>
          )}
          {isTeacher && (
            <>
              <Tab.Screen
                name="HomeTeacher"
                component={QRNavigator}
                options={{
                  tabBarLabel: "HomeTeacher",
                  tabBarIcon: ({ color, size }) => <Image
                    source={require('./assets/svg/home-light.png')}
                    style={{width: 20, height: 20, marginBottom: 4, marginTop: 5}}
                  />,
                }}
              />
              <Tab.Screen
              name="ListOrderSiswa"
              component={ListOrderSiswa}
              options={{
                tabBarLabel: "StudentsList",
                tabBarIcon: ({ color, size }) =>  <Image
                source={require('./assets/svg/icn_student.png')}
                style={{width: 20, height: 22, marginBottom: 4, marginTop: 5}}
                />
              }}
              />
              <Tab.Screen
              name="TeacherTransaction"
              component={TeacherTransaction}
              options={{
                tabBarLabel: "Transaction",
                tabBarIcon: ({ color, size }) => <Image
                source={require('./assets/svg/transaction-light.png')}
                style={{width: 20, height: 20, marginBottom: 4, marginTop: 5}}
                />,
              }}
              />
              <Tab.Screen
                name="ProfileTeacher"
                component={ProfileTeacher}
                options={{
                  tabBarLabel: "Profile",
                  tabBarIcon: ({ color, size }) => <Image
                    source={require('./assets/svg/user-light.png')}
                    style={{width: 20, height: 20, marginBottom: 4, marginTop: 5}}
                  />,
                }}
              />
            </>
          )}
          {isLogout && (
            <Tab.Screen
              name="Splash"
              component={Splash}
              options={{
                tabBarVisible: false
              }}
            />
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
