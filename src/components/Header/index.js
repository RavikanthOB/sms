import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Header = ({title, onClose, onSave, logout,customStyle,titleStyle}) => {
  return (
    <View style={[styles.HeaderConatiner,customStyle]}>
      {onClose ? (
        <Icon name="close" onPress={onClose} color={'red'} size={18} />
      ) : null}

      <Text style={titleStyle}>{title}</Text>
      {logout || onSave ? (
        <TouchableOpacity onPress={logout ? logout : onSave} style={{paddingRight:10}}>
          <Text>{logout ? 'logout' : 'Save'}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
