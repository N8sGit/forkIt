import React from 'react';
import { Button, StyleSheet, Text, View , TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component {
  state = {
    input : ''
  }
  /*
  requirements: fuzzy matching + display matches in a dropdown under the textInput
  search api, repo api integrations
  textinput for searching the repos
  output display  
  */
  
  fetchItems = () => {
    console.log('WORKED')
    // fetch('https://api.github.com', {
    //   method: 'GET',
    //   headers:{
    //     'Accept': 'application/vnd.github.v3+json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    Keyboard.dismiss()
  }




  render() {
    let {input} = this.state
    return (
  <View style={styles.container}>
      <Text style={styles.intro}>Here is a tool for developers that allows you to sort through github repos
          to find forks that are the most vialble and useful. Simply search for a repo, and it'll show you the top 5 best forks based on several heuristics.
      </Text>
        
      <View style={{padding: 15, flexDirection:'row'}}> 
        <TextInput 
          style={styles.input}
          value={input} 
          onChangeText={text => {
            this.setState({ input: text });
          }}
          placeholder={"Search repos!"}
          />
      
        <Button 
          onPress={this.fetchItems} 
          title="Go!" > </Button> 
      </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    marginTop: -400,
    padding: 10
  },
  input:{
    width: 300,
    padding: 10,
    backgroundColor: "#ecf0f1"
  }
});
