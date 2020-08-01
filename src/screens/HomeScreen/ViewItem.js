import React from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'

import Header from '../../components/Header';


const ViewItem = ({item,close}) => {
    open=(item)=>{

    }
    return ( 
        <View style={{flex:1,backgroundColor:"#eee"}}>
            <Header title={item.title} onClose={close} titleStyle={{width:"80%"}} />
            <DisplayContent {...item} />
            {/* <TouchableOpacity style={styles.AttachmentButton} key={index} onPress={()=>open(item,uploadFile)}>
                  <Icon name={item.icon} size={28} />
                  <Text>{item.name}</Text>
                </TouchableOpacity> */}
        </View>
    )
}

const DisplayContent=({file,title})=>{
console.log("props",file.type)
return (
    <View style={{padding:10}}>
        <Text>{title}</Text>
        <View>
           {file.type=="image/jpeg"? <Image source={{uri:file.uri}} style={{width:100,height:100}} />:null}
            <Text>{file.name}</Text>
        </View>
    </View>
)
}
export default ViewItem
