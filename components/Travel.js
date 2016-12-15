import React, {Component} from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  Image
} from 'react-native';

import firebase from './utils/firebase';
import CountDown from './Countdown';


export default class Travel extends Component {
  constructor(props){
    super(props)
    this.state={
      // dataSource: new ListView.DataSource({
      //   rowHasChanged:(row1,row2)=> row1 !== row2,
      // }),
      questions: [{
        question: 'What songs/type of music do you listen to whilst traveling?'
      },
      {
        question:"If you could time travel where would you go?"
      },
      {
        question: "What is the most beautiful place you've ever been to?"
      }],
      randomQuestion: { question: 'Loading...' }
    };
    this.questionsRef = this.getRef().child('questions');
  }

  getRef() {
    return firebase.database().ref();
  }


  listenForQuestions(questionsRef) {
    questionsRef.on('value', (snap) => {
      // get children as an array
      var questions = [];
      snap.forEach((child) => {
        //if statement for Travel questions
        if (child.val().category === 'Travel') {
          questions.push({
            question: child.val().question,
            _key: child.key
          });
        }
      });
      this.setState({
        questions: questions,
        // dataSource: this.state.dataSource.cloneWithRows(questions)
      });
      this._randomQuestion()
    });
  }
  componentDidMount() {
    this.listenForQuestions(this.questionsRef);
  }
  _renderQuestion(questions){
    return (
      <Text>{questions.question}</Text>
      //  question={question.question}
    )
  }
    static get defaultProps() {
      return {
        title: 'Travel',
        index: 2,
        id:'Travel'
          };
        }
        onButtonPress(){
          this.setState({
            randomQuestion: {
              question: 'Loading...'
            }
          })
          this.props.navigator.pop({
            id:'Home'
          })
        }
        onButtonNext(){
          this._randomQuestion()
        }

      _randomQuestion(){
        var random;
        random = Math.random();
        random = random * this.state.questions.length;
        random = Math.floor(random)
        let randomQuestion = this.state.questions[random]
        this.setState({
          randomQuestion
        })
      }

    render(){
      return(
        <View  style={styles.container}>

          <View style={styles.topBar}>
            <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
              <Image source={require('./public/home.png')} style={styles.logo}/>
            </TouchableHighlight>
            <Text style={styles.travel}>Travel</Text>

          </View>

          <Text style={styles.questionContainer}>
          {this.state.randomQuestion.question}
          </Text>

          <View>
            <TouchableHighlight  onPress={this.onButtonNext.bind(this)}>
              <Text style={styles.nextButton}>
              NEXT
              </Text>
            </TouchableHighlight>
          </View>
          <CountDown />

        </View>

      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#448AFF',
    margin: 10,
    marginTop:20,
    padding: 10,
  },
  logo: {
    justifyContent: 'flex-start',
    height: 24,
    width: 24
  },
  button: {
    color: 'white',
    backgroundColor: "#2962FF",
    padding: 2,
    borderRadius: 8,
    borderWidth:1,
    borderColor: "#25746c",
    textAlign: 'center'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'

  },
  questionContainer:{
    color:'white',
    fontSize:30,
    padding:30,
    marginTop:70,
    marginBottom:90,
    alignSelf:'center',
    fontFamily: 'Sahitya-Bold',

  },
  nextButton:{
    color:'white',
    fontSize:30,
    justifyContent:'center',
    alignSelf:'center',
    fontFamily:"Sahitya-Regular",

  },
  travel:{
    color:'white',
    fontSize:25,
    fontFamily:"Sahitya-Regular",

  },
});
