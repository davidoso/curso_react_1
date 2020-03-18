import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
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
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ alignSelf: 'center'}}>To-Do App</Text>
          <Input placeholder='Type task here'></Input>
          <View style={MyStyles.myButtonMargin} >
            <Button
              title='+'
              type='outline'
              onPress={ () => {this.setState({texto: 'Otra tarea'}); } }>
            </Button>
          </View>
        </View>

        <Text style={{ alignSelf: 'center'}}>{this.state.texto}</Text>

        <View style={MyStyles.myButtonMargin} >
          <Button
            raised
            titleStyle={styles.customTitle}
            type='outline'
            title='Add'
            />
        </View>
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