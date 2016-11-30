/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './components/Home';
import GenericContainer from './components/GenericContainer'

export default class IceBreakr extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home',
                        index: 0 ,
                        id: 'Home'
                      }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    )
  }

  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Home':
        return(<Home navigator={navigator} title='First' />)
      case 'GenericContainer':
        return(<GenericContainer navigator={navigator} title='GenericContainer' />)
    }
  }
}


AppRegistry.registerComponent('IceBreakr', () => IceBreakr);
