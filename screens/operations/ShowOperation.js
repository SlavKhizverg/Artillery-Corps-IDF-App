
import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import clickFire from './clickFire';
import QrCodeFire from './QrCodeFire';
import invoices from './invoices';
import * as firebase from 'firebase';



class ShowOpreation extends React.Component {


    clickFire_Press =() => {
        this.props.navigation.navigate('clickFire');
    }
    QrCodeFire_Press =() => {
        this.props.navigation.navigate('QrCodeFire');
    }
    invoices_Press =() => {
        this.props.navigation.navigate('invoices');
    }

    render() {
        let user="";
        user =  firebase.auth().currentUser.email;
        user=user.replace('_','');

        if(!user.includes('_')){
            return (
                <View style={styles.container}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.invoices_Press}
                    >
                        <Text> צפייה בדוחות </Text>
                    </TouchableOpacity>

                </View>

            );
        }
        else{
            return (
                <View style={styles.container}>


                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.clickFire_Press}
                    >
                        <Text> ירי בלחיצה </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.QrCodeFire_Press}
                    >
                        <Text> ירי בסריקה </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

}


const StorageNavigator = createStackNavigator({
    ShowOpreation: {
        screen: ShowOpreation
    },
    clickFire: {
        screen: clickFire
    },
    QrCodeFire: {
        screen: QrCodeFire
    },
    invoices: {
        screen: invoices
    },


});


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor:'#455a64',
    },
    button: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }

});
export default createAppContainer(StorageNavigator);