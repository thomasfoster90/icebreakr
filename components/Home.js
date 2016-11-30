import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  PixelRatio,
  TouchableHighlight,
  Navigator
} from 'react-native';

export default class Home extends Component {
    static get defaultProps() {
      return {
        title: 'Home',
        id:0,
        id:'Home'
          };
        }
      onButtonPress(){
        this.props.navigator.push({
          id:'GenericContainer'
        })
      }
    render(){
      return(
        <View  style={styles.container}>
          <Text>Home</Text>
          <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
            <Text>Tap me to load the next scene</Text>
          </TouchableHighlight>
        </View>

      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
