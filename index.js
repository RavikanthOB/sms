/**
 * @format
 */

import AppConstants from './src/utilities/AppConstants';
import { setLoginRoot } from './src/navigation/Routes';
import { registerScreens } from 'sms-custom-navigation/RegisterScreens';

import {Navigation} from 'react-native-navigation';


registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
    // if(isUserLoggedIn)?loginRoo
    setLoginRoot()
})

// const isUserLoggedIn = async () => {
//     let userToken = await AsyncStorage.getItem(AppConstants.KEY_AUTH_KEY);
//     if (userToken == undefined || userToken === null) {
//       return false;
//     } else {
//       return true;
//     }
//   };