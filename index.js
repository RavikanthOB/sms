/**
 * @format
 */

import AppConstants from './src/utilities/AppConstants';
import { setLoginRoot, setHomeTabRoot } from './src/navigation/Routes';
import { registerScreens } from 'sms-custom-navigation/RegisterScreens';
import AsyncStorage from '@react-native-community/async-storage';
import {Navigation} from 'react-native-navigation';


registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
    isUserLoggedIn().then((isloggedIn) =>{
        isloggedIn?setHomeTabRoot():setLoginRoot()
    })
})

const isUserLoggedIn = async () => {
    let userToken = await AsyncStorage.getItem(AppConstants.KEY_AUTH_KEY);
    if (userToken == undefined || userToken === null) {
      return false;
    } else {
      return true;
    }
  };