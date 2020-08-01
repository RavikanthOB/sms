import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    backgroundColor:"#EEE",

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
  },
  UploadModalContainer:{
    flex:1,
    // padding:10,
    backgroundColor:"#EEE",
    
  },
  UploadButton:{
    flexDirection:"row",
    alignItems:"center",
    // justifyContent:"flex-end",
    
    
  },
AttachmentButton:{borderWidth:1,borderColor:"gray",borderRadius:10,justifyContent:"center",alignItems:"center",margin:10,padding:10}
});

export default styles;