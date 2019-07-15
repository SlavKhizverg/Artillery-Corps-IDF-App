import React from 'react';
import {StyleSheet,View,Text,TextInput,Alert,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import * as firebase from 'firebase';


export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email:"",
          password:"",

        }};

    onLoginPress =() => {
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(() =>{

        }, (error)=> {
            Alert.alert(error.message);
        })
    }
    onSignUpPress =() => {

        let navActions = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: "Signup"})]
        });
        this.props.navigation.dispatch(navActions);
    }

    onForgotPasswordPress =() => {
        let navActions = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: "ForgotPassword"})]
        });
        this.props.navigation.dispatch(navActions);
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>


            <View style={styles.logoContianer}>
               <Image
                   style={styles.logo}
                   source={require('./../../images/Artillery-Corps.png')}/>
                <Text style={styles.title}>Management of ammunition in the Artillery Corps</Text>
            </View>

            <View style={styles.formContiner}>

                <TextInput placeholder="Email"
                           style={styles.input}

                           value={this.state.email}
                           onChangeText={(text) => {this.setState({email:text})}}
                />
                <TextInput placeholder="Password"
                           style={styles.input}
                           value={this.state.password}
                           secureTextEntry
                           onChangeText={(text) => {this.setState({password:text})}}
                />

                <View style={styles.alternativeLayoutButtonContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onSignUpPress}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onForgotPasswordPress}>
                    <Text style={styles.buttonText}>Forgot Password</Text>
                </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        );

    }
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            padding:20,
            backgroundColor:'#455a64',
        },
    logo: {
            width:150,
        height:150,
    },
    logoContianer: {
            flex:1,
            alignItems: 'center',

        justifyContent: 'center',
    },
    title:{
        color:'rgba(255, 255, 255, 0.7)',
        marginTop: 10,
        width:160,
        textAlign: 'center',
        opacity:0.9,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius:5,
    },
    formContiner: {


    },
    alternativeLayoutButtonContainer: {

        flexDirection: 'row',

       justifyContent: 'space-between'
    },
    buttonContainer: {
        width:100,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight:'700'
    },


});