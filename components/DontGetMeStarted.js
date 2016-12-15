import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  Modal,
  Image
} from 'react-native';

import firebase from './utils/firebase';
import CountDown from './Countdown';

export default class DontGetMeStarted extends Component {
  constructor(props){
    super(props)
    this.state={

      modalVisible: false,
      questions: [{
        question: 'Fedoras'
      },
      {
        question:"Vegans"
      },
      {
        question: 'Planet Fitness pizza parties'
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
        //if statement for Dont Get Me Started questions
        if (child.val().category === 'DontGetMeStarted') {
          questions.push({
            question: child.val().question,
            _key: child.key
          });
        }
      });
      this.setState({
        questions: questions,
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
        title: 'DontGetMeStarted',
        index: 3,
        id:'DontGetMeStarted'
          };
        }

        onButtonPress(){
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
        if (randomQuestion) {
          this.setState({
            randomQuestion
          })
        }
      }
      setModalVisible(visible) {
      this.setState({modalVisible: visible});
      }

    render(){
      return(
        <View  style={styles.container}>

          <View style={styles.topBar}>
            <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
              <Image source={require('./public/home.png')} style={styles.logo}/>
            </TouchableHighlight>
            <Text style={styles.dontGetMeStarted}>DontGetMeStarted
            </Text>
          </View>

          <Text style={styles.questionContainer}>
            {this.state.randomQuestion.question}
          </Text>

          <View>
            <TouchableHighlight onPress={this.onButtonNext.bind(this)}>
              <Text style={styles.nextButton}>NEXT
              </Text>
            </TouchableHighlight>
          </View>

          <CountDown />

          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
            <View >
              <View style={{padding: 10, margin:10, marginTop: 22, backgroundColor: "#82B1FF"}}>
                <ScrollView>
                  <Text style={styles.rulesText}>                                                                                 The rules of the game is easy. One person say a topic/subject and the other has to angrily (but still humorous) rant about it in a single post and then click a new topic/subject and continue the game.
                  </Text>
                </ScrollView>
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Text style={[styles.button, {marginTop:10, color:'white', textAlign: 'center'}]}>BACK TO GAME</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight onPress={() => {
              this.setModalVisible(true)
            }}>
            <Text style={styles.rulesButton}>
                RULES OF DON'T GET ME STARTED
            </Text>
          </TouchableHighlight>

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
    padding: 10
  },
  logo: {
    justifyContent: 'flex-start',
    height: 20,
    width: 20,
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
    marginTop:90,
    marginBottom:50,
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
  dontGetMeStarted:{
    color:'white',
    fontSize:25,
    fontFamily:"Sahitya-Regular",

  },
  rulesButton: {
    color: 'white',
    backgroundColor: "#2962FF",
    padding: 2,
    borderRadius: 8,
    borderWidth:1,
    borderColor: "#25746c",
    textAlign: 'center',
    alignSelf:'center',
    fontFamily:"Sahitya-Regular",

    },
    button: {
    color: '#25746c',
    backgroundColor: "#2962FF",
    padding: 2,
    borderRadius: 8,
    borderWidth:1,
    borderColor: "#25746c",
    textAlign: 'center'
  },

  rulesText: {
  color: 'white',
  fontFamily: 'Sahitya-Bold',
  fontSize:35
},
});
