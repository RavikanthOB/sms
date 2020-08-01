import React, {useState, useEffect, Component} from 'react';
import {View, Text, Button, Modal, ScrollView, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import {v4 as uuid} from 'uuid';

import {setLoginRoot} from '../../navigation/Routes';
import AppConstants from '../../utilities/AppConstants';
import Header from '../../components/Header';

import styles from './styles';
import Upload from './Upload';
import ListTile from './ListTile';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isOpen: false,
      list: [],
      item: {},
    };
    this.setUpData()
  }

  setUpData = async () => {
    let user = await AsyncStorage.getItem(AppConstants.KEY_AUTH_KEY);
    let list = await AsyncStorage.getItem(AppConstants.data);
    console.log("list",list)
    this.setState({
      user: user,
      list: list ? JSON.parse(list) : [],
    });
  };

  logout = async () => {
    try {
      await AsyncStorage.clear();
      setLoginRoot();
    } catch (e) {
      // clear error
    }
  };

  toggleModal = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  uploadItems = async (item) => {
    let list = [...this.state.list];
    list.push(item);

    await AsyncStorage.setItem(AppConstants.data, JSON.stringify(list));
    this.setState({
      list,
      isOpen: !this.state.isOpen,
    });
  };

  openModal = () => {
    let item = {
      id: AppConstants.unquieID(),
    };
    this.setState({
      item,
      isOpen: !this.state.isOpen,
    });
  };

  reset = () => {
    this.setState({
      item: {},
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const {list, isOpen, item} = this.state;
    return (
      <>
        <Header title={'School Management System'} logout={this.logout} />
        <ScrollView style={{backgroundColor: '#eee', padding: 10}}>
          {/* {user && user==AppConstants.USER.Teacher.user?<Teacher} */}
          <FlatList
            data={list}
            renderItem={({item})=><ListTile item={item}/>}
            // keyExtractor={(item, index) => item.title + index}
          />
          <Button title="Create Subjects" onPress={this.openModal} />
          <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={this.toggleModal}
            presentationStyle="overFullScreen"
            // style={{flex:1,justifyContent:"center",alginItem:"center"}}
          >
            <Upload
              uploadItems={this.uploadItems}
              item={item}
              reset={this.reset}
            />
          </Modal>
        </ScrollView>
      </>
    );
  }
}

export default HomeScreen;
