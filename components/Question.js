import React, { Component } from 'react';
import {
  AppRegistry,
  Style,
  Text,
  View,
  Navigator
} from 'react-native';

export default class Question extends Component {

    render(){
      return(
        <View>
          <View>
            <Text>Question:</Text>
            {/* <View>{this._showQuestion()}</View> */}
          </View>
        </View>
    )
  }
}
//
// logo: {
//   justifyContent: 'flex-start',
//   height: 24,
//   width: 24
// },
// topBar: {
//   flexDirection: 'row',
//   justifyContent: 'space-between'
// },
// questionContainer:{
//   color:'white',
//   fontSize:30,
//   margin:10,
//   marginTop:30
// },
// nextButton:{
//   color:'white',
//   fontSize:18,
//   alignItems:'center',
// },
// dontGetMeStarted:{
//   color:'white',
//   fontSize:25
// },
// rulesButton: {
//   color: 'white',
//   backgroundColor: "#2962FF",
//   padding: 2,
//   borderRadius: 8,
//   borderWidth:1,
//   borderColor: "#25746c",
//   textAlign: 'center',
//   alignSelf:'flex-end',
//   position:"absolute",
//   bottom:0,
//   flex: 0.1
//   },
