import React from 'react';
import {Navigation} from 'react-native-navigation';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Drawer from '../screens/Drawer';

const ComponentsList = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Drawer',
    component: Drawer,
  },
];

export const registerScreens = () => {
  ComponentsList.forEach((screen) => {
    Navigation.registerComponent(
      screen.name,
      // () => (props) => (
      //     // <Provider store={store}>
      //       <screen.component {...props} />
      //     // </Provider>
      // ),
      () => screen.component,
    );
  });

  return;
};
