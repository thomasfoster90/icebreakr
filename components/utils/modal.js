
Modal,



setModalVisible(visible) {
this.setState({modalVisible: visible});
}




{/* <Modal
animationType={"slide"}
transparent={false}
visible={this.state.modalVisible}
onRequestClose={() => {alert("Modal has been closed.")}}
>
 <View style={{margin:10, padding:10, marginTop: 22}}>
  <View>
    <ScrollView>
      <Text>The rules of the game is easy. One person say a topic/subject and the other has to angrily (but still humorous) rant about it in a single post and then say a new topic/subject and the game move on.</Text>
    </ScrollView>

    <TouchableHighlight onPress={() => {
      this.setModalVisible(!this.state.modalVisible)
    }}>
      <Text style={[styles.button, {marginTop:10, textAlign: 'center'}]}>BACK TO GAME</Text>
    </TouchableHighlight>
  </View>
 </View>
</Modal> */}
<TouchableHighlight onPress={() => {
this.setModalVisible(true)
}}>
<Text style={[styles.button, {textAlign:'center'}]}>
  RULES OF DON'T GET ME STARTED
</Text>
</TouchableHighlight>
