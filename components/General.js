import React, {Component} from 'react';
import {
  StyleSheet,
  ListView,
  ListItem,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  Image
} from 'react-native';

import firebase from './utils/firebase';

import CountDown from './Countdown';
import Question from './Question';

export default class General extends Component {
  constructor(props){
    super(props)
    this.state={
      // dataSource: new ListView.DataSource({
      //   rowHasChanged:(row1,row2)=> row1 !== row2,
      // }),
      questions: [{
        question: 'What is your greatest accomplishment?'
      },
      {
        question: 'Who is your role model?'
      },
      {
        question: 'Who is your best friend and why?'
      },
      {
        question: 'If you won the lottery would you continue working?'
      },
      {
        question: 'If you were going to write a book, what would it be about?'
      },
      {
        question: 'What makes you who you are?'
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
        //if statement for General questions
        if (child.val().category === 'General') {
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
      title: 'General',
      index: 1,
      id:'General'
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
        <View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
              <Image source={require('./public/home.png')} style={styles.logo}/>
            </TouchableHighlight>
            <Text style={styles.general}>General</Text>
          </View>

          <View>
            <Text style={styles.questionContainer}>
            {this.state.randomQuestion.question}
            </Text>
          </View>

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
    fontFamily:"Sahitya-Regular",
    justifyContent:'center',
    textAlign:'center',
    alignSelf:'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 3,
    width: 100,
    padding:6
  },
  general:{
    color:'white',
    fontSize:25,
    fontFamily:"Sahitya-Regular",

  },
});
