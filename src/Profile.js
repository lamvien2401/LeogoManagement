import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{flex:1,alignItems: 'center', justifyContent: 'center'}}> Profile </Text>
      </View>
    );
  }
}

export default Profile;