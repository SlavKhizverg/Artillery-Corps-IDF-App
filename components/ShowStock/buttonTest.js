import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Button,Alert,Image} from 'react-native';


export default class buttonTest extends Component {


    render() {
        return (
            <View style={styles.alternativeLayoutButtonContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={null}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={null}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={null}>
                    <Text style={styles.buttonText}>Forgot Password</Text>
                </TouchableOpacity>
                </View>
            

        );

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#455a64',
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