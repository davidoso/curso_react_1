import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';

// REDUX
import { connect } from 'react-redux';
import { addTask } from './reducer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
    }
  }

  addTask = () => {
    if(this.state.texto === '') {
      Alert.alert(
        'Warning',
        'Please type a task name.',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      );
    } else {
      let tarea = {nombre: this.state.texto, id: new Date().valueOf()}
      this.props.addTask(tarea);
      /*this.setState({
        tareas: [...this.state.tareas, tarea],
        texto: '',
      }, () => {console.log('Task was added on addTask()');} );*/
    }
    console.log(this.props.tareas);
  }

  setCurrentTask = (task) => {
    // let tarea = {nombre: this.state.texto, id: new Date().getUTCMilliseconds()}
    // console.log(this.state.tareas)
    this.setState({
      texto: task,
      // tareas: [...this.state.tareas, tarea],
    });
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={{ alignSelf: 'center'}}>To-Do App</Text>
        <Input placeholder='Type task here' value={this.state.texto} onChangeText={ (text) => this.setCurrentTask(text) }></Input>
        <View style={styles.btnAddTask} >
          <Button
            title='+'
            type='outline'
            // onPress={ () => {this.setState({texto: 'Otra tarea'}); } }>
            onPress={ this.addTask }>
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
    marginVertical: 30,
  },
  btnAddTask: {
    width: 120,
    marginVertical: 25,
    marginHorizontal: 50,
    color: '#333',
    alignSelf: 'center',
    borderWidth: 2,
  },
});

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);