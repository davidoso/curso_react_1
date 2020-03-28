import React from 'react';
import { StyleSheet, ScrollView, Text, View, Alert, KeyboardAvoidingView } from 'react-native';
import { Button, Input, ListItem, Icon } from 'react-native-elements';

// CUSTOM COMPONENTS
import Header from './components/Header';
import Tarea from './components/Tarea';


// CUSTOM STYLES
import MyStyles from './myStyles'

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      texto: 'TAREA',
      tareas: [],
    }
  }

  /*addTask = () => {
    this.setState({
      texto: 'OTRA TAREA DESDE ARROW FX',
    });
  }*/

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
      this.setState({
        tareas: [...this.state.tareas, tarea],
        texto: '',
      }, () => {console.log('Task was added on addTask()');} );
    }
  }

  setCurrentTask = (task) => {
    let tarea = {nombre: this.state.texto, id: new Date().getUTCMilliseconds()}
    // console.log(this.state.tareas)
    this.setState({
      texto: task,
      // tareas: [...this.state.tareas, tarea],
    });
  }

  clearTasks = () => {
    this.setState({
      tareas: [],
    });
  }

  deleteTask = (id) => {
    Alert.alert(
      'Warning',
      'Are you sure you want to delete this task?',
      [
        {text: 'Yes', onPress: () => {
          let tareasFiltradas = this.state.tareas.filter((tarea) => tarea.id != id);
          this.setState({
            tareas: tareasFiltradas,
          });
        }},
        {text: 'No'}
      ],
      { cancelable: true }
    );
  }

  getTasks = () => {
    letlistaTareas = this.state.tareas.map(
      tarea => <Tarea key={this.tarea.id} id={this.tarea.id} nombre={this.tarea.nombre} deleteTask={this.deleteTask}/>
    );
    return(<View>{listaTareas}</View>)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header texto={this.props.text} addTask={this.addTask} setCurrentTask={this.setCurrentTask}/>
        <KeyboardAvoidingView behavior="height" enabled style={styles.container}>
          <ScrollView
            ref={ref => this.scrollView = ref}
            onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
          >
            {this.getTasks()}
          </ScrollView>

          <View style={styles.myButtonMargin}>
            <Button raised titleStyle={styles.customTitle} onPress={this.clearTasks} type='outline' title='Clear all'/>
          </View>
        </KeyboardAvoidingView>

        {/* <Text style={{ alignSelf: 'center'}}>{this.state.texto}</Text> */}

        {/* <View style={MyStyles.myButtonMargin} >
          <Button
            raised
            title='Add'
            type='outline'
            titleStyle={styles.customTitle}
            />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    // alignItems: 'center',
    alignItems: 'stretch',
    // justifyContent: 'space-between',
    justifyContent: 'flex-start'
  },
  customTitle: {
    color: '#333'
  },
  header: {
      // flex: 0.3,
      // flexDirection: 'row',
      justifyContent: 'flex-start',
      borderBottomWidth: 1,
      marginVertical: 30
  },
});