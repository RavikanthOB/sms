import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  input: {
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
  },
  errMsg:{
      color:"red",
      marginVertical:10
  }
});

export default styles;
