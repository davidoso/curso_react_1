import React from 'react';
import { StyleSheet, ScrollView, Text, View, Alert, KeyboardAvoidingView } from 'react-native';
import { Button, Input, ListItem, Icon } from 'react-native-elements';

// CUSTOM COMPONENTS
import Header from './components/Header';
import Tarea from './components/Tarea';

// REDUCER
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/reducer';

const store = createStore(reducer)

// CUSTOM STYLES
// import MyStyles from './myStyles'

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
    this.state = {
      tareas: store.getState().tareas,
    }
    /*this.state = {
      texto: 'TAREA',
      tareas: [],
    }*/
  }

  /*addTask = () => {
    this.setState({
      texto: 'OTRA TAREA DESDE ARROW FX',
    });
  }*/

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
    let listaTareas = this.state.tareas.map(
      tarea => <Tarea key={tarea.id} id={tarea.id} nombre={tarea.nombre} deleteTask={this.deleteTask}/>
    );
    return(<View>{listaTareas}</View>)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <Header texto={this.props.text} addTask={this.addTask} setCurrentTask={this.setCurrentTask}/> */}
          <Header/>
          <KeyboardAvoidingView behavior="height" enabled style={styles.container}>
            <ScrollView
              ref={ref => this.scrollView = ref}
              onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
            >
              {this.getTasks()}
            </ScrollView>
            <View style={styles.btnClear}>
              <Button raised titleStyle={styles.customTitle} onPress={this.clearTasks} type='outline' title='Clear all'/>
            </View>
          </KeyboardAvoidingView>

          {/* <Text style={{ alignSelf: 'center'}}>{this.state.texto}</Text> */}

          {/* <View style={MyStyles.btnClear} >
            <Button
              raised
              title='Add'
              type='outline'
              titleStyle={styles.customTitle}
              />
          </View> */}
        </View>
      </Provider>
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
    justifyContent: 'flex-start',
  },
  btnClear: {
    width: 120,
    color: '#333',
    marginVertical: 25,
    marginHorizontal: 50,
    alignSelf: 'center',
    borderWidth: 2,
  },
  customTitle: {
    color: '#333',
  },
});