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

export default class GenericContainer extends Component {
    static get defaultProps() {
      return {
        title: 'GenericContainer',
        index: 1,
        id:'GenericContainer'
          };
        }
        onButtonPress(){
          this.props.navigator.pop({
            id:'Home'
          })
        }
    render(){
      return(
        <View  style={styles.container}>
          <Text>GenericContainer</Text>
          <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
            <Text>Tap me to go back</Text>
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
