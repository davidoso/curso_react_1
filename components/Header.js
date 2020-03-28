import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
              <Text style={{ alignSelf: 'center'}}>To-Do App</Text>
              <Input placeholder='Type task here' onChangeText={ (text) => this.props.setCurrentTask(this.props.text) }></Input>
              <View style={styles.myButtonMargin} >
                <Button
                  title='+'
                  type='outline'
                  // onPress={ () => {this.setState({texto: 'Otra tarea'}); } }>
                  onPress={ this.props.addTask }>
                </Button>
              </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  header: {
      // flex: 0.3,
      // flexDirection: 'row',
      justifyContent: 'flex-start',
      borderBottomWidth: 1,
      marginVertical: 30
  },
  myButtonMargin: {
    width: 120,
    marginVertical: 25,
    marginHorizontal: 50,
    color: '#333',
    alignSelf: 'center',
    borderWidth: 2,
},
});