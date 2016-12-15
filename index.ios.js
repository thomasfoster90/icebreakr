import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  ListView,
  Text,
  View,
  Navigator
} from 'react-native';


import Home from './components/Home';
import DontGetMeStarted from './components/DontGetMeStarted';
import General from './components/General';
import Travel from './components/Travel';
import WouldYouRather from './components/WouldYouRather';

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
        } />

)}
  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Home':
        return(<Home navigator={navigator} title='First' />)

      case 'General':
        return(<General navigator={navigator} title='General' />)
        return(<Home navigator={navigator} title='First' />)

      case 'Travel':
        return(<Travel navigator={navigator} title='Travel' />)
        return(<Home navigator={navigator} title='First' />)

      case 'DontGetMeStarted':
        return(<DontGetMeStarted navigator={navigator} title='DontGetMeStarted' />)
        return(<Home navigator={navigator} title='First' />)

      case 'WouldYouRather':
        return(<WouldYouRather navigator={navigator} title='WouldYouRather' />)
        return(<Home navigator={navigator} title='First' />)
    }
  }
}
AppRegistry.registerComponent('IceBreakr', () => IceBreakr);


console.disableYellowBox = true;
