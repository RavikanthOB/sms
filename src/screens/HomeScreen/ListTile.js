import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal,Linking} from 'react-native';
import ViewItem from './ViewItem';

const ListTile = ({item}) => {
  const [isOpen, changeVisiblity] = useState(false);

  toggleModal = (file) => {
    console.log("open",file)
    // changeVisiblity(!isOpen);
    // Linking.canOpenURL(uri+".jpg").then(e=>console.log("eee",e)).catch(e=>console.log("eerr",r))
  };
  return (
    <>
      <TouchableOpacity style={{padding: 10}} onPress={()=>toggleModal(item.file)}>
        <View>
          <Text>{item.title}</Text>
          {item.file ? <Text>{item.file.name}</Text> : null}
        </View>
      </TouchableOpacity>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={toggleModal}
        presentationStyle="overFullScreen">
        <ViewItem item={item} close={toggleModal} />
      </Modal> */}
    </>
  );
};

export default ListTile;
