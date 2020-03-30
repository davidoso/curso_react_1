import React, { Component } from 'react';
import { ListItem, Icon } from 'react-native-elements';

export default class Tarea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
      // Se pasa desde App.js en <Tarea/>
      // key={this.tarea.id}
      title={this.props.nombre}
      rightIcon={
        <Icon
          raised
          reverse
          name='trash'
          type='font-awesome'
          color='red'
          onPress={ () => this.props.deleteTask(this.props.id) }
        />
      }
      style={{borderBottomWidth: 1, borderColor: "#EFEFEF"}}
    />
    )
  }
}