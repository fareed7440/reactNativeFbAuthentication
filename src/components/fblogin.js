import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Body, Button, Left, Title, Right, Icon, View } from 'native-base';
 import { StyleSheet, Text,Image } from 'react-native';
 import { Actions } from 'react-native-router-flux';


  

class Login extends Component {
  constructor(props) {
    super(props)
    this.onLogin = this.onLogin.bind(this);
  }

onLogin(){
  this.props.loginData()
}


 render(){
   return(

  <Button onPress = {this.onLogin} full>
            <Text>FACEBOOK LOGIN</Text>
          </Button>



   )

 }
  }
export default Login;


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
btn : {
    width :300,
    marginTop:150,
    marginLeft: 22,
     backgroundColor: '#1eb3cd',
}, 
inpt : {
    width:200,
    height : 60,
     backgroundColor: 'transparent',
     color:'white',
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',



},
 background: {
    backgroundColor: '#acbad1',
    justifyContent: 'center'
  },
 hdr: {
    backgroundColor: '#1eb3cd',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ff00',
  },container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


