import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import AppConstants  from '../../utilities/AppConstants';
import {setHomeTabRoot} from '../../navigation/Routes';



const Login = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [errMsg, setErroMSg] = useState(null);

  login = async () => {
    if (
      !user ||
      !password ||
      user.trim().length == 0 ||
      password.trim().length == 0
    )
      return setErroMSg('Please Enter vaild UserName or password');
    try {
      if (
        user == AppConstants.USER.Teacher.user &&
        password == AppConstants.USER.Teacher.password
      ) {
        await AsyncStorage.setItem(
          AppConstants.KEY_AUTH_KEY,
          AppConstants.USER.Teacher.user,
        );
       return setHomeTabRoot();
      } else if (
        user == AppConstants.USER.Student.user &&
        password == AppConstants.USER.Student.password
      ) {
        await AsyncStorage.setItem(
          AppConstants.KEY_AUTH_KEY,
          AppConstants.USER.Student.user,
        );
       return setHomeTabRoot();
      }
      setErroMSg('Please Enter vaild UserName or password');
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.input}
        placeholder={'User Name'}
        onChangeText={(text) => setUser(text)}
        value={user}
      />
      <TextInput
        style={styles.input}
        textContentType="password"
        placeholder={'password'}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default Login;
