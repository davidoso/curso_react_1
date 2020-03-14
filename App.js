import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

// ESTILOS
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
        <View style={MyStyles.header}>
          <Text>My 1st app</Text>
          <Input placeholder="To Do"></Input>
          <Button title="+" onPress={ () => {this.setState({texto: 'Otra tarea'}) } }></Button>
        </View>

        <Text>{this.state.texto}</Text>

        <View style={MyStyles.myButtonMargin} >
          <Button
            raised
            titleStyle={MyStyles.customTitle}
            type="outline"
            title="My btn"
            />
        </View>
        {/* <View style={[
          MyStyles.buttonStyle,
          {borderColor: 'red', borderWidth: 5}
          ]}>
          <Button title='btn1'/>
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
    justifyContent: 'flex-start',
    // width: '80%'
  },
});