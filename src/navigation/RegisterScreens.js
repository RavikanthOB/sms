import React from 'react'
import { Navigation } from 'react-native-navigation';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';

const ComponentsList=[
    {
        name:"Login",component:Login
    },    {
        name:"Home",component:HomeScreen
    },    {
        name:"Dashboard",component:Dashboard
    }
]

export const registerScreens = () => {
    ComponentsList.forEach(screen => {
      Navigation.registerComponent(
        screen.name,
        // () => (props) => (
        //     // <Provider store={store}>
        //       <screen.component {...props} />
        //     // </Provider>
        // ),
        () => screen.component
      );

    });
  
    return;
  }