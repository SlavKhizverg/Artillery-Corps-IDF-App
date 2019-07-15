import React from 'react';
import {StyleSheet,View,Text,TextInput,Image,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';
import {NavigationActions, StackActions} from "react-navigation";
import * as firebase from 'firebase';
export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };

    }

    onResetPasswordPress =() => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("password reset email has been sent");
        },(error) => {
            Alert.alert(error.message);
        });
    }
    onBackToLoginPress =() => {

        let navActions = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: "Login"})]
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
                    <TextInput placeholder="New Password"
                               style={styles.input}
                               value={this.state.password}
                               secureTextEntry
                               onChangeText={(text) => {this.setState({password:text})}}
                    />

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onResetPasswordPress}>
                            <Text style={styles.buttonText}>Reset Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onBackToLoginPress}>
                            <Text style={styles.buttonText}>Back To Login...</Text>
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