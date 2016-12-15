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
          id:'General'
        })
      }
      onTravelPress(){
        this.props.navigator.push({
          id:'Travel'
        })
      }
      onDontGetMeStartedPress(){
        this.props.navigator.push({
          id:'DontGetMeStarted'
        })
      }
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.firstContainer}>
            <Text style={styles.mainTitle}>IceBreakr</Text>
          </View>
          <TouchableHighlight style={styles.secondContainer} onPress={this.onButtonPress.bind(this)}>
            <View>
              <Text style={styles.titles}>General</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.thirdContainer} onPress={this.onTravelPress.bind(this)}>
            <View>
              <Text style={styles.titles}>Travel</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.fourthContainer} onPress={this.onDontGetMeStartedPress.bind(this)}>
            <View>
              <Text style={styles.titles}>Don't Get Me Started</Text>
            </View>
          </TouchableHighlight>
        </View>

      )
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 20,
    marginTop:20,
    justifyContent: 'center',
  },
  titles: {
    fontSize: 20,
    color: 'white',
    fontFamily:"Sahitya-Regular",
  },
  mainTitle: {
    fontSize:50,
    fontFamily: 'Sahitya-Bold',
    color:'white',
  },
  firstContainer: {
    flex:2,
    fontSize:50,
    backgroundColor: "#82B1FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondContainer: {
    flex:1,
    backgroundColor: "#448AFF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdContainer: {
    flex:1,
    backgroundColor: "#2979FF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  fourthContainer: {
    flex:1,
    backgroundColor: "#2962FF",
    justifyContent: 'center',
    alignItems: 'center',
  },

});
