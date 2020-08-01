import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DocumentPicker from 'react-native-document-picker';

import styles from './styles';
import Header from '../../components/Header';
import AppConstants from '../../utilities/AppConstants';
import {uploadAttachements} from './uploadAttachements';

const Upload = ({item, uploadItems,reset}) => {
  const [title, setTitle] = useState(null);
  const [errMsg, setErroMSg] = useState(null);
  const [file,setFile]=useState(null)
  
  onSave = () => {
    if (!title || title.trim().length == 0)
      return setErroMSg('Please Enter Subject Name');

      let newItem={...item,
        title,
        file
      }
      uploadItems(newItem) 
  };

  uploadFile=(res)=>{
    setFile(res)
  }


  return (
    <View style={styles.UploadModalContainer}>
      <Header title="Add Subject" onClose={reset} onSave={onSave} />
      <View style={{padding: 10}}>
        <TextInput
          style={styles.input}
          placeholder={'Subject Title'}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}

        {file?<FilePreView  file={file}/>:null}

        <View>
          <Text style={{fontWeight: '700'}}>Upload Attachment</Text>
          <View>
            {AppConstants.Attachments.map((item, index) => {
              return (
                <TouchableOpacity style={styles.AttachmentButton} key={index} onPress={()=>uploadAttachements(item,uploadFile)}>
                  <Icon name={item.icon} size={28} />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};


const FilePreView=({file})=>{
  return (<View>
    <Text>{file.name}</Text>
  </View>)
}

export default Upload;
