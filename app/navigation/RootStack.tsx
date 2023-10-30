import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../presentations/HomeScreen";
import Logo from "../components/headerbuttons/Logo";
import UserInfo from "../components/headerbuttons/UserInfo";
const Stack = createStackNavigator();

const CardForFade = ({current}: {current: any}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const RootStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'Help'}>
          <Stack.Screen
            name="SplashScreen"
            component={HomeScreen}
            options={{headerShown: true,
              headerTitle:'',
              headerTitleAlign: 'center',
              headerTitleStyle:{color:'#40302A'},
              headerStyle: {
                borderColor:'#F4F4F4',
                backgroundColor: '#F4F4F4',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerLeft:()=><Logo/>,
              //Button to add new user
              headerRight:()=><UserInfo/>,
            }}
          />


        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
