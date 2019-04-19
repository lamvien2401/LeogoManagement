import React, { Component } from 'react';
import { SafeAreaView,
         View,
         Text,
         StyleSheet,
         Image,
         TouchableOpacity,
         TextInput } from 'react-native';
         
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.block}>
          <Image source={require('../srcImage/Logo.png')} style={styles.logo} />
        </SafeAreaView> 
        <SafeAreaView style={styles.header}>
          <Text style={{ fontSize: 28, color: '#2e384d' }}>Sign in to LEOGO </Text>
          <Text style={{ paddingTop: 10, color: '#8798ad' }}>Please enter your credentials to preceed</Text>
        </SafeAreaView> 
        <SafeAreaView style={styles.body}>
          <View style={{ paddingHorizontal: 16, paddingVertical: 11}}>
            <Text style ={styles.label}>EMAIL ADDRESS </Text>
            <TextInput 
              placeholder = "Enter Your email or Username"
              style={styles.textInput}
              autoCapitalize = "none"
              keyboardType = "email-address"
              autoCorrect = {false}>
            </TextInput>
          </View>
          <View style={{ paddingHorizontal: 16, paddingVertical: 11}}>
            <Text style ={styles.label}>PASSWORD </Text>
            <TextInput 
              placeholder = "Enter Password"
              secureTextEntry = {true}
              style={styles.textInput}
              autoCapitalize = "none"
              keyboardType ='email-address'
              autoCorrect = {false}>
            </TextInput>
          </View>
          <View style={styles.viewCoverBtn}>
          <TouchableOpacity 
            onPress={()=> {
              this.props.navigation.navigate('HomeScreen');
            }}
            style ={styles.btnLogin}
           >
            <Text style={{fontSize: 20, color: '#E0e7ff'}}>Sign in</Text>
           </TouchableOpacity>
           </View>
        </SafeAreaView> 
      </SafeAreaView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    body: {
      flex: 3,
      height: '100%',
      width: '100%',
    },
    logo: {
      resizeMode: 'contain',
      height: 200,
      width: 200
    },
    label: {
      color: '#8798ad',
      fontSize: 11,
      textTransform: 'uppercase',
      marginBottom:  4
    },
    textInput: {
      backgroundColor: 'rgba(224,231,255,0.20)',
      borderWidth: 1,
      borderColor: '#E0e7ff',
      marginTop: 6,
      padding: 10,
      color: '#2e384d',
      fontSize: 15,
      height: 40,
      borderRadius: 5,
    },
    btnLogin:{
      backgroundColor:'#ffc048',
      borderRadius: 5,
      height: 45,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewCoverBtn:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 11
    }
});
