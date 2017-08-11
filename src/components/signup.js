import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Body, Button, Left, Title, Right, Icon } from 'native-base';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
      
    }


    

    render() {
        return (
          <Text>agha</Text>
        )
    }
}



export default Signup;

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    btn: {
        width: 300,
        marginTop: 30,
        marginLeft: 22,
        backgroundColor: '#1eb3cd',
    },
    inpt: {
        width: 200,
        height: 60,
        backgroundColor: 'transparent',
        color: 'white',
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
    },
    txt: {
        color: 'white',
        marginLeft: 80,
        marginTop: 20
    }, container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
