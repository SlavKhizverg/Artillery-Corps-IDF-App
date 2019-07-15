
import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,FlatList,ImageBackground} from 'react-native';
import {LinearGradient} from 'expo';


import { createStackNavigator, createAppContainer } from 'react-navigation';

import storageScreen from './storage/strorageScreen'; 


import * as firebase from 'firebase';



class StockScreen extends React.Component {

    divisionPress =() => {
        this.props.navigation.navigate('storageScreen',{test:'אגד215/ammo'});
    }

    dragonPress =() => {
        this.props.navigation.navigate('storageScreen',{test:'55/ammo'});
    }
    Dragon_battery_01_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א'});
    }
    Dragon_division_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א_1'});
    }
    Dragon_Section_1_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א_1_א/ammo'});
    }
    Dragon_Section_1_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א_1_ב/ammo'});
    }
    Dragon_Section_1_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א_1_ג/ammo'});
    }
    Dragon_division_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א_2'});
    }
    Dragon_Section_1_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א_2_א/ammo'});
    }
    Dragon_Section_1_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א_2_ב/ammo'});
    }
    Dragon_Section_1_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55א_2_ג/ammo'});
    }

    Dragon_battery_02_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב'});
    }
    Dragon_Section_2_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב_1_א/ammo'});
    }
    Dragon_Section_2_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב_1_ב/ammo'});
    }
    Dragon_Section_2_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב_1_ג/ammo'});
    }
    Dragon_division_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב_1'});
    }
    Dragon_division_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב_2'});
    }
    Dragon_Section_2_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב_2_א/ammo'});
    }
    Dragon_Section_2_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב_2_ב/ammo'});
    }
    Dragon_Section_2_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ב_2_ג/ammo'});
    }

    Dragon_battery_03_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג'});
    }
    Dragon_division_3_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג_1'});
    }
    Dragon_division_3_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג_2'});
    }
   
    Dragon_Section_3_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג_1_א/ammo'});
    }
    Dragon_Section_3_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג_1_ב/ammo'});
    }
    Dragon_Section_3_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג_1_ג/ammo'});
    }
  
    Dragon_Section_3_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג_2_א/ammo'});
    }
    Dragon_Section_3_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג_2_ב/ammo'});
    }
    Dragon_Section_3_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'55ג_2_ג/ammo'});
    }

    tigerPress =() => {
        this.props.navigation.navigate('storageScreen',{test:'402/ammo'});
    }
    tiger_battery_01_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א'});
    }
    tiger_division_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א_1'});
    }
    
    tiger_Section_1_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א_1_א/ammo'});
    }
    tiger_Section_1_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א_1_ב/ammo'});
    }
    tiger_Section_1_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א_1_ג/ammo'});
    }
    tiger_division_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א_2'});
    }
    tiger_Section_1_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א_2_א/ammo'});
    }
    
    tiger_Section_1_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א_2_ב/ammo'});
    }
    tiger_Section_1_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402א_2_ג/ammo'});
    }

    tiger_battery_02_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב'});
    }
    tiger_division_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב_1'});
    }
    tiger_division_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב_2'});
    }
    tiger_Section_2_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב_1_א/ammo'});
    }
    tiger_Section_2_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב_1_ב/ammo'});
    }
    tiger_Section_2_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב_1_ג/ammo'});
    }
    tiger_Section_2_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב_2_א/ammo'});
    }
    tiger_Section_2_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב_2_ב/ammo'});
    }
    tiger_Section_2_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ב_2_ג/ammo'});
    }

    tiger_battery_03_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג'});
    }
    tiger_division_3_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג_1'});
    }
    tiger_division_3_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג_2'});
    }
    tiger_Section_3_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג_1_א/ammo'});
    }
    tiger_Section_3_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג_1_ב/ammo'});
    }
    tiger_Section_3_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג_1_ג/ammo'});
    }
    tiger_Section_3_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג_2_א/ammo'});
    }
    tiger_Section_3_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג_2_ב/ammo'});
    }
    tiger_Section_3_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'402ג_2_ג/ammo'});
    }
   
    kerenPress =() => {
        this.props.navigation.navigate('storageScreen',{test:'403/ammo'});
    }
    keren_battery_01_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א'});
    }
    keren_battery_02_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב'});
    }
    keren_battery_03_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג'});
    }
    keren_division_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א_1'});
    }
    keren_division_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א_2'});
    }
    keren_division_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב_1'});
    }
    keren_division_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב_2'});
    }
    keren_division_3_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג_1'});
    }
    keren_division_3_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג_2'});
    }
    keren_Section_1_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א_1_א/ammo'});
    }
    keren_Section_1_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א_1_ב/ammo'});
    }
    keren_Section_1_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א_1_ג/ammo'});
    }
    keren_Section_1_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א_2_א/ammo'});
    }
    keren_Section_1_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א_2_ב/ammo'});
    }
    keren_Section_1_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403א_2_ג/ammo'});
    }
    keren_Section_2_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב_1_א/ammo'});
    }
    keren_Section_2_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב_1_ב/ammo'});
    }
    keren_Section_2_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב_1_ג/ammo'});
    }
    keren_Section_2_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב_2_א/ammo'});
    }
    keren_Section_2_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב_2_ב/ammo'});
    }
    keren_Section_2_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ב_2_ג/ammo'});
    }
    keren_Section_3_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג_1_א/ammo'});
    }
    keren_Section_3_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג_1_ב/ammo'});
    }
    keren_Section_3_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג_1_ג/ammo'});
    }
    keren_Section_3_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג_2_א/ammo'});
    }
    keren_Section_3_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג_2_ב/ammo'});
    }
    keren_Section_3_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'403ג_2_ג/ammo'});
    }
 
   
    ReshefPress =() => {
        this.props.navigation.navigate('storageScreen',{test:'531/ammo'});
    }
    Reshef_battery_01_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א'});
    }
    Reshef_battery_02_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב'});
    }
    Reshef_battery_03_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג'});
    }
    Reshef_division_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א_1'});
    }
    Reshef_division_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א_2'});
    }
    Reshef_division_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב_1'});
    }
    Reshef_division_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב_2'});
    }
    Reshef_division_3_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג_1'});
    }
    Reshef_division_3_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג_2'});
    }
    Reshef_Section_1_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א_1_א/ammo'});
    }
    Reshef_Section_1_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א_1_ב/ammo'});
    }
    Reshef_Section_1_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א_1_ג/ammo'});
    }
    Reshef_Section_1_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א_2_א/ammo'});
    }
    Reshef_Section_1_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א_2_ב/ammo'});
    }
    Reshef_Section_1_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531א_2_ג/ammo'});
    }
    Reshef_Section_2_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב_1_א/ammo'});
    }
    Reshef_Section_2_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב_1_ב/ammo'});
    }
    Reshef_Section_2_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב_1_ג/ammo'});
    }
    Reshef_Section_2_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב_2_א/ammo'});
    }
    Reshef_Section_2_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב_2_ב/ammo'});
    }
    Reshef_Section_2_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ב_2_ג/ammo'});
    }
    Reshef_Section_3_1_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג_1_א/ammo'});
    }
    Reshef_Section_3_1_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג_1_ב/ammo'});
    }
    Reshef_Section_3_1_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג_1_ג/ammo'});
    }
    Reshef_Section_3_2_1_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג_2_א/ammo'});
    }
    Reshef_Section_3_2_2_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג_2_ב/ammo'});
    }
    Reshef_Section_3_2_3_Press =() => {
        this.props.navigation.navigate('storageScreen',{test:'531ג_2_ג/ammo'});
    }
    
    render() {
        
        let user="";
        user =  firebase.auth().currentUser.email;
        if (user == "215a@idf.com"){
            return (
               
                        <FlatList
                          data={[
                              {key: ['אגד 215',['#3399ff', '#66b3ff', '#cccccc'],this.divisionPress]},

                          {key: ['גדוד 55',['#33ccff', '#66d9ff', '#cccccc'],this.dragonPress]},

                          {key: ['סוללה א גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_01_Press]},

                          {key: ['פלגה א1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_1_1_Press]},

                          {key: ['צוות א1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_2_Press]},
                          {key: ['צוות א1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_3_Press]},
                  
                          {key: ['פלגה א2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_1_2_Press]},

                          {key: ['צוות א2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_3_Press]},
                        
                          {key: ['סוללה ב גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_02_Press]},

                          {key: ['פלגה ב1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_2_1_Press]},

                          {key: ['צוות ב1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_1_Press]},
                          {key: ['צוות ב1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_2_Press]},
                          {key: ['צוות ב1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_3_Press]},
                          
                          {key: ['פלגה ב2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],,this.Dragon_division_2_2_Press]},
                          
                          {key: ['צוות ב2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_3_Press]},

                          {key: ['סוללה ג גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_03_Press]},

                          {key: ['פלגה ג1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_3_1_Press]},
                          
                          {key: ['צוות ג1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_1_Press]},
                          {key: ['צוות ג1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_3_Press]},
                  
                          {key: ['פלגה ג2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_3_2_Press]},

                          {key: ['צוות ג2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_1_Press]},
                          {key: ['צוות ג2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_2_Press]},
                          {key: ['צוות ג2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_3_Press]},
                          
            
                          {key: ['גדוד 402',['#33ccff', '#66d9ff', '#cccccc'],this.tigerPress]},
                          
                          {key: ['סוללה א גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_01_Press]},
                          {key: ['פלגה א1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_1_1_Press]},

                          {key: ['צוות א1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_2_Press]},
                          {key: ['צוות א1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_3_Press]},
                  
                          {key: ['פלגה א2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_1_2_Press]},

                          {key: ['צוות א2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_3_Press]},
                        
                          {key: ['סוללה ב גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_02_Press]},

                          {key: ['פלגה ב1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_2_1_Press]},

                          {key: ['צוות ב1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_1_Press]},
                          {key: ['צוות ב1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_2_Press]},
                          {key: ['צוות ב1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_3_Press]},
                          
                          {key: ['פלגה ב2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],,this.tiger_division_2_2_Press]},

                          {key: ['צוות ב2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_3_Press]},

                          {key: ['סוללה ג גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_03_Press]},

                          {key: ['פלגה ג1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_3_1_Press]},

                          {key: ['צוות ג1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_1_Press]},
                          {key: ['צוות ג1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_3_Press]},
                  
                          {key: ['פלגה ג2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_3_2_Press]},

                          {key: ['צוות ג2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_1_Press]},
                          {key: ['צוות ג2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_2_Press]},
                          {key: ['צוות ג2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_3_Press]},
                        

                          {key: ['גדוד 403',['#33ccff', '#66d9ff', '#cccccc'],this.kerenPress]},

                          {key: ['סוללה א גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_01_Press]},

                          {key: ['פלגה א1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_1_1_Press]},

                          {key: ['צוות א1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_3_Press]},
                  
                          {key: ['פלגה א2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_1_2_Press]},

                          {key: ['צוות א2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_3_Press]},
                        
                          {key: ['סוללה ב גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_02_Press]},

                          {key: ['פלגה ב1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_2_1_Press]},

                          {key: ['צוות ב1ר גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_1_Press]},
                          {key: ['צוות ב1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_2_Press]},
                          {key: ['צוות ב1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_3_Press]},
                          
                          {key: ['פלגה ב2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],,this.keren_division_2_2_Press]},
                          {key: ['צוות ב2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_3_Press]},

                          {key: ['סוללה ג גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_03_Press]},
                          {key: ['פלגה ג1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_3_1_Press]},
                          {key: ['צוות ג1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_1_Press]},
                          {key: ['צוות ג1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_3_Press]},
                  
                          {key: ['פלגה ג2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_3_2_Press]},
                          {key: ['צוות ג2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_1_Press]},
                          {key: ['צוות ג2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_2_Press]},
                          {key: ['צוות ג2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_3_Press]},
                          
                 
                          {key: ['גדוד 531',['#33ccff', '#66d9ff', '#cccccc'],this.ReshefPress]},

                          {key: ['סוללה א גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_01_Press]},
                          {key: ['פלגה א1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_1_1_Press]},
                          {key: ['צוות א1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_2_Press]},
                          {key: ['צוות א1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_3_Press]},
                  
                          {key: ['פלגה א2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_1_2_Press]},
                          {key: ['צוות א2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_3_Press]},

                          {key: ['סוללה ב גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_02_Press]},
                          {key: ['פלגה ב1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_2_1_Press]},
                          {key: ['צוות ב1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_1_Press]},
                          {key: ['צוות ב1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_2_Press]},
                          {key: ['צוות ב1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_3_Press]},
                          
                          {key: ['פלגה ב2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],,this.Reshef_division_2_2_Press]},
                          {key: ['צוות ב2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_3_Press]},
                          
                          {key: ['סוללה ג גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_03_Press]},
                          {key: ['פלגה ג1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_3_1_Press]},
                          {key: ['צוות ג1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_1_Press]},
                          {key: ['צוות ג1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_3_Press]},
                  
                          {key: ['פלגה ג2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_3_2_Press]},
                          {key: ['צוות ג2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_1_Press]},
                          {key: ['צוות ג2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_2_Press]},
                          {key: ['צוות ג2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_3_Press]}
                        
                          ]}
                          
                          renderItem={({item,index}) => <LinearGradient index={index}
                          colors={item.key[1]}
                          style={styles.container} >
                          <Image 
                          source={{uri:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUWGBcYGBgYGBgXGhcaFxgaGB0XGhoYHSggGRolGxcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR8tLS0tLS0tLS0tLS0tLSstKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgADBAUGB//EAEIQAAEDAgIGBwUHAgYBBQAAAAEAAhEDITFBBBJRYXHwBQYigZGhsRMywdHhByNCUmJy8YKSFDNDc6LCJIOTo7LS/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACkRAQEAAgEEAQQBBAMAAAAAAAABAhESAyExQQQFEzJRYSJxgbEUQlL/2gAMAwEAAhEDEQA/APSGs9U1Acf4SOmDbOyeo8Aas3hYxdVU6cOJJkzzJ2q8H+UtMCFRXrE2bhhPOARvQ8r6jzsMcc0pqi0cPisZ+kyS0G+B+Y3KqlOVxkpuffsqYs6oLY22SpRpRF1R7VrQSTghU6RaBJzsOck9zzS7+mQLKuq7esGr0oxvvOa3eSB6rBd1n0ZpvUn9rXnzAhRc4qY1u2zM4KbB4X5haMdb9F/O4f0O+AV9LrBoxwrs75b6gJcoNVtp7k4G/wA1qH9ZdEaL16fjPpKxa3XbQm/608GPPwVcsS1XRb+Sq5JxXO1Ov2hT77v/AG3/ACTM666C42rRuc148y1FygkdHqk4JogSZnBajRusWiOu3SKZOAGuPitg2sypdrgROTgfQp8oNLGvyCtLpQDR8kGgeacIZ3oHHcmISlp/hAIMVcw4YpNS6em2MUSCmLkgnDLmygdKjU9kcTO5B5ULkmvJyT2SzWQRjmyCZkAE+axNZusTcuBjh9FaHwcLbcitfpb9V2sLl2EYRGfzWWV1FSd2TX0sWjJYLukIJvfDh9Fq9P0gjDn6LV1NJJkrny6t22x6cboaXquMHYZzPf8ABY2l9ZadMXdJ2NufJc301pLhSkHAgnORgR4kLmWPkwCfdk5mdaLEgZFPDdLPUdXpfW51wynA2vd8lq63Ttd/+of6RHmtJqgHOU4Z+o+OC1+0z5sw1S4ySSd5una4Zx3knwCwBS2Ojhb0TsYRg5L7VHJmGq3d/Y4Kl7hy35qsNd+bzKcOOxp4iU50y5K3EbY8B8EmtlLv745yWUKhn3af9jfkhc5N7mgfBP7Y5McP3u/ulH236nd+omqUpyjxVf8AhOCOFLaPdOw/uZrekJGPDcNUH9JdTPkUx0Lm6YaFvPifmjgNsnR+nK7Pdr128KmuP+S2eifaFpVP3n06g2PYWH+4GFqG9Gg45p6nQbA0OO7EnMwnOmOTs+jftQoucG1qDqZP4mnXb4WPhK7tlZrmtcCNUiQRgQV4noPR1JpDg0Tvve29eu9XO1o9ImwDYjCdWwPlKO/LR9tbbRozMhV1KkxGCFUydwKaPFO30ACeSlaL3hM7YgA+oY2bc0DUED484qPE8I2wkBghG6NL/HxKKmudyiaVbqszBgjKx7ysGu+cTcZq+obuIGNu7csfV9FnnlteMavStEJuYjJaPTaJauuqCZlaTpTRTCxyx/TXHJx3Sd2kbZC0OhNc0uLhaI75BgeC6jTqOPw+q0mkUYnWggkANzJucvgn0rqn1JuMfSGCbHIenFU96zhS1gDLcBMHHaVUaN8V1SuaysfW5n6phU55Kt9jzklFJNICrzPDeoatvrjbim9lz4YIGnv5ugC2pzP1Ta1vrw3oCnv8yjqb/WEbAmoNqIf6/FT2e/zO9FrN/mdqNg2vvHzTtdz4qsN3+qZrRt5ujY0vY/nwTOqkwBnHqscc+SLXdpucGd5sf5Rb2OTu2fQvRVSu4imBANyTET55ZL07Q6Hs6TKQPutAJ4YxK4jqK8h1TU96RGwi8i/EEbI7j3WjPBAgGML5bQeBnwUdtqWMgDdhgiwXlQtsmZTm5SMzbqOKfVyVGsQqvYj1PFIRKBKAKm3Z6NqHb5IJr7lEtQ1Lm55bFWReVaT8fNIXW2eeamnCwqtIoAhWSOPBN6IDjumNC1SbWXJaey94+PjtXpPTWjS0rz7pgQe/5qMZrNdu8awNbnvSkpTz4oyulzoSlRnnxU59EAETz5oI8+qCQHn5IzZAfJEoMZ58VJvztCU/NHPnamDA28VJ58UpKg580EYHnwU14wOHl81Ab87kEB1vUFkmo6bNLSeBDgeBibrudGbadpLhwOB7xeFx32dMkVp2s/7YruIjHuWdaTwcDNWgKoX9J2ItHHba3qnCEuy27sUXQobA2hVvRaIBM7lCMFFApUnZ2KJrqJhW5spTAMovdA55hUHWBmLbjI+qkAQOM7DzZOHDCf4Q1t4nAWi23iowbSZ382QolZkghea9ZqOo6N/wPkvTwDguB+0CmGvaRnHoVOu8o32rkiUOf5UJQlbsTAqJJTIAozz44JUCefFAOFPr6JQjPPcgGUz525pQUxxQB2c+CI52JJRBQDAojn6JZ58FJQHdfZsf8/8Ao/7ruA0ZrhPs1xr/APp/913LlNqpBI33TMPldDeoSkYOncg5NrbUvBBgo4IxZApAZ3qJbb/BRLZqxo5jbtVZpQICb/FSBJvfkqsuecBI7h6o7eh3Pr2iCd/NlPZziI9I2KBr4EtBAyBE8cEpqPnVMxkCL28kwyGiFwX2kNh1Pnau+bUbGP8AK4D7SKwL6YCdngtuLUQlRUzRMklFBo5QBSOecFAghCigQlBiE5ShEoBSi1ByIQDIlKXIEoDufsy9+uN1P1eu8iF599mLvva37GHwcfmu/JKm+VQ7So4YJGTN8MuCJ+AS9GaVISqBMkcgoCVCkYyNnooiokYUmNbGrIHn5qVTO3yRjEoPMXhX6QSjTDSYJk5m6tFU4Z7YWK518eCYHLFLelaX06hixFje0Yrzj7R3k1WAmYHOC9FeOOS8t6/v+/cNgPnCLe8HqucKBWuq1DbYPdsYH7Zxxz3KlvDjj/yWnFntt4TFaZjiPKNozsgXcOdqOI23CkrUio6TjMHK8R5CCiKmEWi+4Hdv+aOI22yi1bSZm9zNxjiL7pt4rpqTiXvaR7hDRa84mPGFGd4ur43x/ve9Ne1GVumgRl4GO/eki+F+F/4Wf3HZPpd/9NOefNAFbg4ZR3xMRbel0d7ialhqsNMEwZOs0u7e6AcE51Npz+ncdby8tVKkrdh2yN3veDfrsCXSfceNx22v+Lafml9w79O1LeTb/Zofv6n+3/2C9FIXmv2cOjSXf7Z/+zV6O52xVa82Q02RBWOKnwMK1j7Ab0pT0s1UqclKRkqIAO5K4+SsACiNDaTv58VEsDYVEtGjilqCw808pHuKolRbuEIgXv8ARGOec0rxhipUsleVde6k1ncDz5L1Fk3mNq8l64VJrPjYfilPMK+K5Wq3mxm+73eCqjnnFZT+6JAntauZh/Zku37lQ0G2PC+t3brrpYla7d80COfooOdkpoPpa+sPLD6INnaBUa6KdYWjsnBzeDsxuwWR0n0BUpdoDXYRIc0Yj9ow47slr6WikwCQ3ifQC8ruOr/SXsqXsqjalZpwlrqZa6cS6pEWt2QcAsM7xu5XZhjyw1nP8+2o6tdFYVnjCSwGLWnX35x4odG3brECahLjl7xnHJdI7WdQrNayKz2llNusDAdDSQ4gAODSckKvRDaQGtDAIHaeALbZOK5fuXL+q99/r07+hMOllrxqe/drUOPpsAju+KrqTBAgGN2MYz8FfXq0G/60n9P3h/4TZYFbpKmDA1nf0x5OvKcu3bevhryzNCpGpSbUFyRDuIkERskFZXQ+i69DTDHuVaRG7VaQeJhxsk6vSBUBa4N1tZsgtnWxsRMT6rr9HZQ0T2oFQvfUIqFhiRLQ0RAsLG5R08v6spfEcXX6uXHDXe7/ANOUodF1XjWDCG5udDWxvJNgtZUqzrBkOaGkF8W4MH4h+pbbpvSNI0l5Dxq0QbMB97e+MRu/hYIowIgixjLLK1huTmWPp0TLqZy3LtGb9nh/8vjTd6tK9OAXlnUF3/mN3sf6T8F6it75eCqe4TGxW0TuOapFpt37BxTUzeclMUyUxECUjh3IVKmS0QOsi0iLqiT3I6u/4KdnpfbkqLH1TyVEchxOSkE5+CJbfFGUyLq7f470GOBmDO5RyRjoNvLelTTSakMMgYY7F4/1jdNR/wC3m69W6Q9x1yLYbV5H0/Zz+CU75Q7+Naes6M5/UQAYjDUm2OKoBytGMSPVZNZpBM603xHbGXaJHFUEcxbHJdLAtSmQSDYi3IOCI7vEeufBEiO6OPfsWw6B6PNasynrBou8lwJaAwaxMZi0IBtJ6Nq0qTahMB0SAbicJEW2LN6m6KKtVxNnMa6oXuhwY1sAmJlzjK7N3QNSvSIFSi5jgRIFTEWuMoPotB0Fo50fR6+vIc+p7I4jsUQXVCNomAs+pJxrf49tzmmTQ0gj3iCDjdvZJAPa/L9Vg1G0vaEPZTpvnsu7JDtljn3LmKmmvLzUBLXEk2J8Du3LpqwNSzgXSBlc92xcf2bhd/t7HS6069up3gVdGB7LgLZTA8QfJZvRejusGNaBuaAT3D1Kro6P7JgdWqdgGGtI1nH9Lc3n0zKr0zTX1QWw6nSOLAe2/wD3HDBv6BbbKWrlP4a3qS9scd5f6Z2k9NU6RAa0VnBzQ4gj2TJdHvA/euvgLDMlZnWzS2F1LSKeLRq1ML03RY3xabzvK5fTGQxoAtrMgAWjX/CI5uthpdfXtls//SeuM44ztfLL/j3LPeV7xuB0jRLfZ1acA3bVZ7wnAxN/HJaY04cRrBwnHI7zeRwWJotQ6vsyTrU/dO1hwjgbLI0edbhtFh+6108ZqadGGM42z/P91vUZ0abR4VB/8bl6tkvJOp5jTKH7nD/g8L1lb18/fNV1Na1lKcjHyT3TaoGW1KQbW8VS3eJ8kATPNkXTuTIzKaYi8QlnbCZvqmR/ZqKzV3hRPiW2M4pC7NIHWSmdiVqtHJQlVt3otuSJ4pGp6UIFFx4ryDpl0vedpHw8F6r1iqfdFozx3LyjpQdp/OQRj+ZX8Wp0h1yBEA2gDK2Ix8Tiqo52/JWVgJt9P6doSUgZtsJxyi+a6GIDn6rf9XGwyu+LuDKY365LnRa1qYHesDofQRWeGGwgknZb8N7mYXUdCaEGmlQmT/iCXb2/dQTe3ZBspy8MutdYV6J0bons6bGR7oAOGOZ8ZK846/1yypUp2hzpaBiGOaHvOFpqSO4r1ErhOtGiNOnNqQ5xbSE6rXOhxc4NktBgxKm477Ojp5fbnb9aee9HdHvrGGCwxcfdFuFyurdprWy2i0PdgXH3G9494/pFt61/T5ewkj2jab5JBY5svgCwdEiIPcVkUmgNERgLA29cVl1Zb5el8DGZbkuv2UMJcXvcXvNi50eAAENG4ABWHnd80Rx+frglcOHw7rrLy9jHHHCagn187+SAHlwt81I5zxz2I87scr3SPbF0xpEVG3LZt+ZpxG7asug6YM2xm1u7NTx5/NeyZhgjG3l+2+KplZq2z2HVNk6bRj8zj4NcfgvWpEfwvM+oNHW0ou/K1x73QB6lejnyWtfO5d8qZ2frsVbyczOajgbHLxRAskAfhl3/AM7VZO1Vubsi6IpkCwQD+03SFdSEYjgqqbThgmLxkec1U/aaf/EHYol19yifIaY7kCckpN0mvZTs9BUMXKyNYBpIHaI4SVi0LnWPu7/VKKt3EgkDYUS6PTFrtlrpuSOK816ZpRUcDnj6XXqrW61wAJtbYuF646Dqme9RO1lVe804N4gxnzgg2eEfxfxWXpVGTx3CTG/Kyxmt+HdjiIuuqOZ23ULQ+yC5jXGtUga7daKdJus4tkZl0TuXV6fojaek0SyiTrNfZmoyDTIIJmAbVHZ5blqeoxpgURrNGrRcTJE69SoSeBgC2yFvOktOpito49oyddwPabaabxfPGEk4997ZR6VdFtGrEzh90PM1I81z+jV31arNXWaKtV1VwBNmUh7JrCRbCk6wtJzxXS1qzWsc6RYE4jITZc31YpffHH7ujTZ3ua1zsvza3ilU9XxJ+6u6/wCje00Wo4AzTLXCMZmHcey5cjT90YRA2x/K9C6ZoB+jVm/np1M9oMEbMAvPGGWg2wF4gYbIx3rLqva+mflkYzvnvn+EHc4x3Ihu754bYw3IP2/KO4RZYPY2haZznMXm22yIb4ZWMG/4bYpY5z8UYz88u4RbimmmDTJx3zNv3WwQrWYXTGyxvNuza3eo0Xw+m82vwWP0i6A1oFzebXxAgRIzVYzdc/yM+GFrpPs60Uk1amXZaOPvH4LuitX1b6P9ho7KZEOjWf8AudcjusO5bB2JN7LSvBRrydnDYi14iTj5JS2c/JK5k/iKWzWC+/nJNTnAW5wSk2AGKbC5ucggL51cTJVLnqjWMyfFM126EXLYkXe0Ow+J+aiqtsHkop2eiu4pHs1hCjHAmB34pK1YgWwy3wn/ACAqEExJgWsNm9Smy2YCSntzxKslLezO3Cy1XTehe0YWnGLfyttrwg4A7ErNlK8d0/RC0ljhhgta9lh4ZCN0fFel9bOhDUb7RguB4rzzSqO2xGNrjulbdPP1WeePuO+6mVWPa2m72bmtoMOqdR0OJJN8jfBZ/TdbR21NGaTTj2hkDVNjSeB2RiJIWN0G6m/R6QJ0NxDGgsLWnVIAEE65k74Cx+nek6NEMJdRIFRhLaAaKnY7QM69hrBs2wJFlrpnjNNjp7NC9nUDadAuLHxq02zOqRiB2eOSxur73s9o/VDy4Mk03tOrAPZcHFpCxNN6+UnMcwU6ms5rh2nMAuDiQ4qzq5pTWmqajtTX1Y15aSJOGtxU1OX5Ts3Wl6RW9k9raMdhw7b2gRBuNTWvutxXBUSNUGcheN2xd3p/StEsfD9clrhDA5+IMe4CuA0d0tF8hxwwWXV8PX+m/lkyJyju+qhdn5/CEm7ym3qj39+fhOCxeuLo2d2zfOanftvt3RlxQB/ibcQZxTA5ybzebncRNgghbAnDsgmJFozme0dy2HVDo4165rP92mZ4uyHdj4LVPY+s9tCneXWAJLQcCcTYYyvTui9AbQpNptwaMcyTiTxWsmo8f5fW55cZ4jMAPFVVKhGR8D8la1CdibiVGr3z3fBQFWlxiCpTZJACVh7LTOeXOaR0uM/BZTi0Zk+ST/ER7ohKjaltNNbBWe1acQRvCjqTSCQZjddIbVyFEusVEKYJt2B/URmhffz6q2u+AIE7UKbwQlRDa+xN3pHMQg44oC2d1kzW5KpoMWKYTmmSxw71xXWvq6f82kP3NHqF2gPkqH1ATE+CA8Xr0dmGYvbesdrs57/xeE4L0vrH1dbUl1MarxiIMO52rgdM0FzHQ4OacxgTbLct8OpvtWWWGmN7c2w7MEXsIM7dq9apDSCxp9pTdMf6ZGJByftXkb2ASNw2RhhjjuRo1nNPZcRNveIJ4wcFd7pj1zSX1203ONSm3VaT/luuReDrPsuCou7Mkkk9onMl1zaYxXOPeTiSeJn1XRaOeyMcBxw9Fj1fD0/puuWS/dbhNsNs4oNd/OfCJwQ3fG38oiwmYHHteuCwevbPZm45cJ7PjOKVtV73+zohxe60idYg4g3iE2h6NU0h3s6QsD2nX1Rv5uV3fQfQ1PRmw0S4+884nduG5XJry8z5Pyv+uBerPQDdGbJh1Rw7Tsh+lu71W9cFW0lAgq3mnBQL0rkplIzNcr9EPa7lisbZPo79VwnakLDjtOA2q2owazTFjbwVT36jnDPLcgzSLXk4EJbC9zLOkNiDEYquj7r+CX27bkAyZz2oi1P9x9EFol+ZUVclRJap3HelbBMiNhiPgsPTKTiSdVzhAiCABBnMhYtLRXiOwRYTBaJjeHXE5R8lck0nbcF14lQFairRcDJa4AmxMHVHaxOvhBAi3fnY2i4xDakEH8QzwIl1u/BHH+RybdzoxElVGrjcGD4LVNpViRrsdvh4nMfmwwtGSzOjNHIJ1mxsuDPacbwTJggSfgiz+Rtmsbnmjq+aDsbIygCCsLpTo2nXGq8TsOY4FZjfNANQHmPWHqtUoyYL6f5hl+4fFc49kRa20Ykxnule5Fk2hcv0z1Pp1JdSPs34/pPdl3KpnYm47eZauNhPHs4ZXx710OjAarYmLfuw2bFiaf0PVomKlOBkfeYSc5Fp8Cs7ovQdIq6rWAtAiahluUY4ngE+pZlHT8TqzpW2hVrBpiA4/lbdtxuOK3PRXVirWh+kEsZkwe8RvOQ8+C3vQnVyjQh3vv8AzEYH9Iy9Vu5WXaeFdX5OfU7eIp0LRWU26jGhrRkB5rICDUwCcc4g70Qd6DmoByZEJ2qTvRlQHwSMUtbH5IDDkqPFp7kBk1PvGTHaaLjaNqxcEzKhBkZK8uY+5Oqc9hSLwTR6Wsd23cnr1NY2wFghUr21Wjs+Z4oAYJyD+Q1uYUV87kFXGjbBb80pwUUWfpRwocuc1FE/QR+I5yTDPgFFETyXo5wCDvgFFFZHKGXeEFEAMu9VD8XFRRKhj6f7h4fFNR9yl3+qiihUXNVzslFEQ6UKzPncgoriaDvxKU8Aoon7BGqH5+qiikGZgl/CeKiiAVuHO1Vn3vD1CiiUNecDxVtLBRRVE1aoootSf//Z"}}
                           style={{width:70,height:50,margin:5}}>
                              
                          </Image>
                          <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                          
                             <Text style={styles.buttonText}>{item.key[0]}</Text>
                         </TouchableOpacity>
                        </LinearGradient>}
                        keyExtractor={(item,index) => item+index}
                                 />
                        );
        }
        else if(user == "55@idf.com"){
            return (
            
                        <FlatList
                          data={[
                             
                            {key: ['גדוד 55',['#33ccff', '#66d9ff', '#cccccc'],this.dragonPress]},

                            {key: ['סוללה א גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_01_Press]},
  
                            {key: ['פלגה א1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_1_1_Press]},
  
                            {key: ['צוות א1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_1_Press]},
                            {key: ['צוות א1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_2_Press]},
                            {key: ['צוות א1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_3_Press]},
                    
                            {key: ['פלגה א2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_1_2_Press]},
  
                            {key: ['צוות א2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_1_Press]},
                            {key: ['צוות א2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_2_Press]},
                            {key: ['צוות א2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_3_Press]},
                          
                            {key: ['סוללה ב גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_02_Press]},
  
                            {key: ['פלגה ב1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_2_1_Press]},
  
                            {key: ['צוות ב1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_3_Press]},
                            
                            {key: ['פלגה ב2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],,this.Dragon_division_2_2_Press]},
                            
                            {key: ['צוות ב2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_3_Press]},
  
                            {key: ['סוללה ג גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_03_Press]},
  
                            {key: ['פלגה ג1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_3_1_Press]},
                            
                            {key: ['צוות ג1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_1_Press]},
                            {key: ['צוות ג1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_2_Press]},
                            {key: ['צוות ג1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_3_Press]},
                    
                            {key: ['פלגה ג2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_3_2_Press]},
  
                            {key: ['צוות ג2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_1_Press]},
                            {key: ['צוות ג2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_2_Press]},
                            {key: ['צוות ג2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_3_Press]}
                          
  
                          ]}
                          
                          renderItem={({item,index}) => <LinearGradient index={index}
                          colors={item.key[1]}
                          style={styles.container} >
                          <Image 
                          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                           style={{width:70,height:50,margin:5}}>
                              
                          </Image>
                          <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                          
                             <Text style={styles.buttonText}>{item.key[0]}</Text>
                         </TouchableOpacity>
                        </LinearGradient>}
                        keyExtractor={(item,index) => item+index}
                                 />
                        );
        }
        else if (user =="55a@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    
                    {key: ['סוללה א גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_01_Press]},
  
                            {key: ['פלגה א1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_1_1_Press]},
  
                            {key: ['צוות א1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_1_Press]},
                            {key: ['צוות א1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_2_Press]},
                            {key: ['צוות א1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_3_Press]},
                    
                            {key: ['פלגה א2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_1_2_Press]},
  
                            {key: ['צוות א2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_1_Press]},
                            {key: ['צוות א2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_2_Press]},
                            {key: ['צוות א2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="55a_1@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['פלגה א1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_1_1_Press]},
  
                            {key: ['צוות א1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_1_Press]},
                            {key: ['צוות א1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_2_Press]},
                            {key: ['צוות א1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_3_Press]}
                    
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="55a_1_a@idf.com"){
            return (
                
                <FlatList
                  data={[
                    
                    {key: ['צוות א1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_3_Press]},
                    
            
                    

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="55a_1_b@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
  
                            {key: ['צוות א1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_1_Press]},
                            {key: ['צוות א1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_2_Press]},
                            {key: ['צוות א1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_3_Press]},
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="55a_1_c@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                   
  
                            {key: ['צוות א1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_1_Press]},
                            {key: ['צוות א1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_2_Press]},
                            {key: ['צוות א1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_1_3_Press]},
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="55a_2@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['פלגה א2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_1_2_Press]},
  
                    {key: ['צוות א2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_3_Press]}
                  
                    
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="55a_2_a@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                   
  
                            {key: ['צוות א2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_1_Press]},
                            {key: ['צוות א2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_2_Press]},
                            {key: ['צוות א2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_3_Press]}
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="55a_2_b@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    
                    {key: ['צוות א2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_3_Press]}
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="55a_2_c@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_1_2_3_Press]}

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }

        else if(user == "55b@idf.com"){
           return(
            <FlatList
                          data={[
                             
                            
                          
                            {key: ['סוללה ב גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_02_Press]},
  
                            {key: ['פלגה ב1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_2_1_Press]},
  
                            {key: ['צוות ב1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_3_Press]},
                            
                            {key: ['פלגה ב2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],,this.Dragon_division_2_2_Press]},
                            
                            {key: ['צוות ב2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_3_Press]}
  
                            
                          
  
                          ]}
                          
                          renderItem={({item,index}) => <LinearGradient index={index}
                          colors={item.key[1]}
                          style={styles.container} >
                          <Image 
                          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                           style={{width:70,height:50,margin:5}}>
                              
                          </Image>
                          <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                          
                             <Text style={styles.buttonText}>{item.key[0]}</Text>
                         </TouchableOpacity>
                        </LinearGradient>}
                        keyExtractor={(item,index) => item+index}
                                 />
                        );
        }
        else if(user == "55b_1@idf.com"){
            return(
             <FlatList
                           data={[

                             {key: ['פלגה ב1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_2_1_Press]},
   
                             {key: ['צוות ב1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_1_Press]},
                             {key: ['צוות ב1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_2_Press]},
                             {key: ['צוות ב1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_3_Press]},
        
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "55b_1_a@idf.com"){
            return(
             <FlatList
                           data={[
                              
                             
                           
                             
   
                             {key: ['צוות ב1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_1_Press]},
                             {key: ['צוות ב1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_2_Press]},
                             {key: ['צוות ב1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_3_Press]},
                             
                            
   
                             
                           
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "55b_1_b@idf.com"){
            return(
             <FlatList
                           data={[
                              
                             
                           
                            
   
                             {key: ['צוות ב1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_1_Press]},
                             {key: ['צוות ב1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_2_Press]},
                             {key: ['צוות ב1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_3_Press]},
                             
                             
                             
                           
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "55b_1_c@idf.com"){
            return(
             <FlatList
                           data={[

                             {key: ['צוות ב1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_1_Press]},
                             {key: ['צוות ב1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_2_Press]},
                             {key: ['צוות ב1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_1_3_Press]},
            
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "55b_2@idf.com"){
            return(
             <FlatList
                           data={[

                             
                             {key: ['פלגה ב2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],,this.Dragon_division_2_2_Press]},
                             
                             {key: ['צוות ב2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_1_Press]},
                             {key: ['צוות ב2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_2_Press]},
                             {key: ['צוות ב2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_3_Press]}

                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "55b_2_a@idf.com"){
            return(
             <FlatList
                           data={[

                             
                             {key: ['צוות ב2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_1_Press]},
                             {key: ['צוות ב2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_2_Press]},
                             {key: ['צוות ב2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_3_Press]}
   
                             
                           
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "55b_2_b@idf.com"){
            return(
             <FlatList
                           data={[

                             
                             {key: ['צוות ב2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_1_Press]},
                             {key: ['צוות ב2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_2_Press]},
                             {key: ['צוות ב2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_3_Press]}
   
                             
                           
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "55b_2_c@idf.com"){
            return(
             <FlatList
                           data={[  
                             {key: ['צוות ב2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_1_Press]},
                             {key: ['צוות ב2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_2_Press]},
                             {key: ['צוות ב2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_2_2_3_Press]}

                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }

         else if(user == "55c@idf.com"){
            return(
             <FlatList
                           data={[
                              
                             
                           
                            {key: ['סוללה ג גדוד 55',['#66ffff', '#99ffff', '#cccccc'],this.Dragon_battery_03_Press]},
  
                            {key: ['פלגה ג1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_3_1_Press]},
                            
                            {key: ['צוות ג1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_1_Press]},
                            {key: ['צוות ג1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_2_Press]},
                            {key: ['צוות ג1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_3_Press]},
                    
                            {key: ['פלגה ג2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_3_2_Press]},
  
                            {key: ['צוות ג2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_1_Press]},
                            {key: ['צוות ג2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_2_Press]},
                            {key: ['צוות ג2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_3_Press]}
   
                             
                           
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "55c_1@idf.com"){
             return(
              <FlatList
                            data={[
                               
                              
                            
                               
  
                                {key: ['פלגה ג1 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_3_1_Press]},
                                
                                {key: ['צוות ג1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_3_Press]},
                        
                               
                              
                            
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "55c_1_a@idf.com"){
             return(
              <FlatList
                            data={[

                                {key: ['צוות ג1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_3_Press]},

                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "55c_1_b@idf.com"){
             return(
              <FlatList
                            data={[
                                {key: ['צוות ג1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_3_Press]},

    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "55c_1_c@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג1א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_1_3_Press]},
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "55c_2@idf.com"){
             return(
              <FlatList
                            data={[

                                {key: ['פלגה ג2 גדוד 55',['#66ffcc', '#99ffdd', '#cccccc'],this.Dragon_division_3_2_Press]},
      
                                {key: ['צוות ג2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_3_Press]}

                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "55c_2_a@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_3_Press]}
                            
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "55c_2_b@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_3_Press]}
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "55c_2_c@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 55',['#99ff99', '#ccffcc', '#cccccc'],this.Dragon_Section_3_2_3_Press]}
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
        
       
        else if(user == "402@idf.com"){
            return (
                
                        <FlatList
                          data={[
                            {key: ['גדוד 402',['#33ccff', '#66d9ff', '#cccccc'],this.tigerPress]},
                          
                            {key: ['סוללה א גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_01_Press]},
                            {key: ['פלגה א1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_1_1_Press]},
  
                            {key: ['צוות א1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_1_Press]},
                            {key: ['צוות א1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_2_Press]},
                            {key: ['צוות א1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_3_Press]},
                    
                            {key: ['פלגה א2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_1_2_Press]},
  
                            {key: ['צוות א2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_1_Press]},
                            {key: ['צוות א2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_2_Press]},
                            {key: ['צוות א2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_3_Press]},
                          
                            {key: ['סוללה ב גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_02_Press]},
  
                            {key: ['פלגה ב1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_2_1_Press]},
  
                            {key: ['צוות ב1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_3_Press]},
                            
                            {key: ['פלגה ב2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],,this.tiger_division_2_2_Press]},
  
                            {key: ['צוות ב2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_3_Press]},
  
                            {key: ['סוללה ג גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_03_Press]},
  
                            {key: ['פלגה ג1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_3_1_Press]},
  
                            {key: ['צוות ג1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_1_Press]},
                            {key: ['צוות ג1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_2_Press]},
                            {key: ['צוות ג1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_3_Press]},
                    
                            {key: ['פלגה ג2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_3_2_Press]},
  
                            {key: ['צוות ג2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_1_Press]},
                            {key: ['צוות ג2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_2_Press]},
                            {key: ['צוות ג2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_3_Press]}
                          
                        ]}
                          
                        renderItem={({item,index}) => <LinearGradient index={index}
                        colors={item.key[1]}
                        style={styles.container} >
                        <Image 
                        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                         style={{width:70,height:50,margin:5}}>
                            
                        </Image>
                        <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                        
                           <Text style={styles.buttonText}>{item.key[0]}</Text>
                       </TouchableOpacity>
                      </LinearGradient>}
                      keyExtractor={(item,index) => item+index}
                               />
                        );
        }
        else if (user =="402a@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    
                    {key: ['סוללה א גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_01_Press]},
                    {key: ['פלגה א1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_1_1_Press]},

                    {key: ['צוות א1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_3_Press]},
            
                    {key: ['פלגה א2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_1_2_Press]},

                    {key: ['צוות א2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="402a_1@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                   
                    {key: ['פלגה א1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_1_1_Press]},

                    {key: ['צוות א1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_3_Press]}
            
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="402a_1_a@idf.com"){
            return (
            
                <FlatList
                  data={[
                    
                    {key: ['צוות א1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="402a_1_b@idf.com"){
            return (
            
                <FlatList
                  data={[
                    {key: ['צוות א1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="402a_1_c@idf.com"){
            return (
            
                <FlatList
                  data={[
                   
                    {key: ['צוות א1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="402a_2@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['פלגה א2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_1_2_Press]},

                    {key: ['צוות א2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_3_Press]}
                    
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="402a_2_a@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="402a_2_b@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_3_Press]}

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="402a_2_c@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_1_2_3_Press]}

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }

        else if(user == "402b@idf.com"){
           return(
            <FlatList
                          data={[
                             
                            
                          
                            {key: ['סוללה ב גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_02_Press]},
  
                            {key: ['פלגה ב1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_2_1_Press]},
  
                            {key: ['צוות ב1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_3_Press]},
                            
                            {key: ['פלגה ב2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],,this.tiger_division_2_2_Press]},
  
                            {key: ['צוות ב2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_3_Press]}
  
                            
                          
  
                          ]}
                          
                          renderItem={({item,index}) => <LinearGradient index={index}
                          colors={item.key[1]}
                          style={styles.container} >
                          <Image 
                          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                           style={{width:70,height:50,margin:5}}>
                              
                          </Image>
                          <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                          
                             <Text style={styles.buttonText}>{item.key[0]}</Text>
                         </TouchableOpacity>
                        </LinearGradient>}
                        keyExtractor={(item,index) => item+index}
                                 />
                        );
        }
        else if(user == "402b_1@idf.com"){
            return(
             <FlatList
                           data={[

                            {key: ['פלגה ב1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_2_1_Press]},
  
                            {key: ['צוות ב1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_3_Press]}
        
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "402b_1_a@idf.com"){
            return(
             <FlatList
                           data={[
                           
  
                            {key: ['צוות ב1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "402b_1_b@idf.com"){
            return(
             <FlatList
                           data={[
                           
                            {key: ['צוות ב1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "402b_1_c@idf.com"){
            return(
             <FlatList
                           data={[

                            {key: ['צוות ב1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "402b_2@idf.com"){
            return(
             <FlatList
                           data={[

                             
                            {key: ['פלגה ב2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],,this.tiger_division_2_2_Press]},
  
                            {key: ['צוות ב2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_3_Press]}

                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "402b_2_a@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['צוות ב2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "402b_2_b@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['צוות ב2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "402b_2_c@idf.com"){
            return(
             <FlatList
                           data={[  
                            {key: ['צוות ב2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }

         else if(user == "402c@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['סוללה ג גדוד 402',['#66ffff', '#99ffff', '#cccccc'],this.tiger_battery_03_Press]},
  
                            {key: ['פלגה ג1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_3_1_Press]},
  
                            {key: ['צוות ג1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_1_Press]},
                            {key: ['צוות ג1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_2_Press]},
                            {key: ['צוות ג1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_3_Press]},
                    
                            {key: ['פלגה ג2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_3_2_Press]},
  
                            {key: ['צוות ג2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_1_Press]},
                            {key: ['צוות ג2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_2_Press]},
                            {key: ['צוות ג2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_3_Press]}
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "402c_1@idf.com"){
             return(
              <FlatList
                            data={[
                        
                                {key: ['פלגה ג1 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_3_1_Press]},
  
                                {key: ['צוות ג1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_3_Press]}
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "402c_1_a@idf.com"){
             return(
              <FlatList
                            data={[

                            {key: ['צוות ג1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_1_Press]},
                            {key: ['צוות ג1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_2_Press]},
                            {key: ['צוות ג1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_3_Press]}

                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "402c_1_b@idf.com"){
             return(
              <FlatList
                            data={[
                                {key: ['צוות ג1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_1_Press]},
                            {key: ['צוות ג1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_2_Press]},
                            {key: ['צוות ג1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_3_Press]}

    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "402c_1_c@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג1א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_1_3_Press]}
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "402c_2@idf.com"){
             return(
              <FlatList
                            data={[

                                {key: ['פלגה ג2 גדוד 402',['#66ffcc', '#99ffdd', '#cccccc'],this.tiger_division_3_2_Press]},
  
                                {key: ['צוות ג2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_3_Press]}

                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "402c_2_a@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_3_Press]}
                            
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "402c_2_b@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_3_Press]}
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "402c_2_c@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 402',['#99ff99', '#ccffcc', '#cccccc'],this.tiger_Section_3_2_3_Press]}
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }

        else if(user == "403@idf.com"){
            return (
               
                        <FlatList
                          data={[
    
                            {key: ['גדוד 403',['#33ccff', '#66d9ff', '#cccccc'],this.kerenPress]},

                          {key: ['סוללה א גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_01_Press]},

                          {key: ['פלגה א1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_1_1_Press]},

                          {key: ['צוות א1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_3_Press]},
                  
                          {key: ['פלגה א2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_1_2_Press]},

                          {key: ['צוות א2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_3_Press]},
                        
                          {key: ['סוללה ב גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_02_Press]},

                          {key: ['פלגה ב1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_2_1_Press]},

                          {key: ['צוות ב1ר גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_1_Press]},
                          {key: ['צוות ב1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_2_Press]},
                          {key: ['צוות ב1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_3_Press]},
                          
                          {key: ['פלגה ב2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],,this.keren_division_2_2_Press]},
                          {key: ['צוות ב2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_3_Press]},

                          {key: ['סוללה ג גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_03_Press]},
                          {key: ['פלגה ג1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_3_1_Press]},
                          {key: ['צוות ג1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_1_Press]},
                          {key: ['צוות ג1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_3_Press]},
                  
                          {key: ['פלגה ג2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_3_2_Press]},
                          {key: ['צוות ג2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_1_Press]},
                          {key: ['צוות ג2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_2_Press]},
                          {key: ['צוות ג2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_3_Press]}]}
                          
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                        );
        }
        else if (user =="403a@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['סוללה א גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_01_Press]},

                    {key: ['פלגה א1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_1_1_Press]},

                    {key: ['צוות א1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_2_Press]},
                    {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_3_Press]},
            
                    {key: ['פלגה א2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_1_2_Press]},

                    {key: ['צוות א2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="403a_1@idf.com"){
            return (
            
                <FlatList
                  data={[


                          {key: ['פלגה א1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_1_1_Press]},

                          {key: ['צוות א1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_3_Press]}

            
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="403a_1_a@idf.com"){
            return (
            
                <FlatList
                  data={[
                    
                    {key: ['צוות א1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_2_Press]},
                    {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="403a_1_b@idf.com"){
            return (
            
                <FlatList
                  data={[
                    {key: ['צוות א1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_2_Press]},
                    {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="403a_1_c@idf.com"){
            return (
            
                <FlatList
                  data={[
                   
                    {key: ['צוות א1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="403a_2@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['פלגה א2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_1_2_Press]},

                    {key: ['צוות א2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_3_Press]}
                    
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="403a_2_a@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="403a_2_b@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_3_Press]}

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="403a_2_c@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_1_Press]},
                    {key: ['צוות א2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_2_Press]},
                    {key: ['צוות א2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_1_2_3_Press]}

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }

        else if(user == "403b@idf.com"){
           return(
            <FlatList
                          data={[
                             
                            
                          
                            {key: ['סוללה ב גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_02_Press]},

                          {key: ['פלגה ב1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_2_1_Press]},

                          {key: ['צוות ב1ר גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_1_Press]},
                          {key: ['צוות ב1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_2_Press]},
                          {key: ['צוות ב1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_3_Press]},
                          
                          {key: ['פלגה ב2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],,this.keren_division_2_2_Press]},
                          {key: ['צוות ב2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_3_Press]}
  
                            
                          
  
                          ]}
                          
                          renderItem={({item,index}) => <LinearGradient index={index}
                          colors={item.key[1]}
                          style={styles.container} >
                          <Image 
                          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                           style={{width:70,height:50,margin:5}}>
                              
                          </Image>
                          <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                          
                             <Text style={styles.buttonText}>{item.key[0]}</Text>
                         </TouchableOpacity>
                        </LinearGradient>}
                        keyExtractor={(item,index) => item+index}
                                 />
                        );
        }
        else if(user == "403b_1@idf.com"){
            return(
             <FlatList
                           data={[

                            {key: ['פלגה ב1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_2_1_Press]},

                            {key: ['צוות ב1ר גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_3_Press]}
        
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "403b_1_a@idf.com"){
            return(
             <FlatList
                           data={[
                           
  
                            {key: ['צוות ב1ר גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "403b_1_b@idf.com"){
            return(
             <FlatList
                           data={[
                           
                            {key: ['צוות ב1ר גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "403b_1_c@idf.com"){
            return(
             <FlatList
                           data={[

                            {key: ['צוות ב1ר גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "403b_2@idf.com"){
            return(
             <FlatList
                           data={[

                             
                            {key: ['פלגה ב2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],,this.keren_division_2_2_Press]},
                          {key: ['צוות ב2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_3_Press]}

                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "403b_2_a@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['צוות ב2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "403b_2_b@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['צוות ב2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "403b_2_c@idf.com"){
            return(
             <FlatList
                           data={[  
                            {key: ['צוות ב2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }

         else if(user == "403c@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['סוללה ג גדוד 403',['#66ffff', '#99ffff', '#cccccc'],this.keren_battery_03_Press]},
                            {key: ['פלגה ג1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_3_1_Press]},
                            {key: ['צוות ג1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_1_Press]},
                            {key: ['צוות ג1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_2_Press]},
                            {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_3_Press]},
                    
                            {key: ['פלגה ג2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_3_2_Press]},
                            {key: ['צוות ג2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_1_Press]},
                            {key: ['צוות ג2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_2_Press]},
                            {key: ['צוות ג2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_3_Press]}
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "403c_1@idf.com"){
             return(
              <FlatList
                            data={[
                        
                                {key: ['פלגה ג1 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_3_1_Press]},
                                {key: ['צוות ג1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_3_Press]}
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "403c_1_a@idf.com"){
             return(
              <FlatList
                            data={[

                                {key: ['צוות ג1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_3_Press]}

                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "403c_1_b@idf.com"){
             return(
              <FlatList
                            data={[
                                {key: ['צוות ג1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_3_Press]}

    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "403c_1_c@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג1א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_1_3_Press]}
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "403c_2@idf.com"){
             return(
              <FlatList
                            data={[

                                {key: ['פלגה ג2 גדוד 403',['#66ffcc', '#99ffdd', '#cccccc'],this.keren_division_3_2_Press]},
                                {key: ['צוות ג2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_3_Press]}

                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "403c_2_a@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_3_Press]}
                            
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "403c_2_b@idf.com"){
             return(
              <FlatList
                            data={[
                                {key: ['צוות ג2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_3_Press]}
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "403c_2_c@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 403',['#99ff99', '#ccffcc', '#cccccc'],this.keren_Section_3_2_3_Press]}
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }

        else if(user == "531@idf.com"){
            return (
                
                        <FlatList
                          data={[
                              
                            {key: ['גדוד 531',['#33ccff', '#66d9ff', '#cccccc'],this.ReshefPress]},

                          {key: ['סוללה א גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_01_Press]},
                          {key: ['פלגה א1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_1_1_Press]},
                          {key: ['צוות א1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_2_Press]},
                          {key: ['צוות א1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_3_Press]},
                  
                          {key: ['פלגה א2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_1_2_Press]},
                          {key: ['צוות א2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_3_Press]},

                          {key: ['סוללה ב גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_02_Press]},
                          {key: ['פלגה ב1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_2_1_Press]},
                          {key: ['צוות ב1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_1_Press]},
                          {key: ['צוות ב1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_2_Press]},
                          {key: ['צוות ב1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_3_Press]},
                          
                          {key: ['פלגה ב2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],,this.Reshef_division_2_2_Press]},
                          {key: ['צוות ב2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_1_Press]},
                          {key: ['צוות ב2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_2_Press]},
                          {key: ['צוות ב2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_3_Press]},
                          
                          {key: ['סוללה ג גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_03_Press]},
                          {key: ['פלגה ג1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_3_1_Press]},
                          {key: ['צוות ג1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_1_Press]},
                          {key: ['צוות ג1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_2_Press]},
                          {key: ['צוות ג1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_3_Press]},
                  
                          {key: ['פלגה ג2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_3_2_Press]},
                          {key: ['צוות ג2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_1_Press]},
                          {key: ['צוות ג2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_2_Press]},
                          {key: ['צוות ג2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_3_Press]}
                        ]}
                          
                                 renderItem={({item,index}) => <LinearGradient key={index}
                                 colors={item.key[1]}
                                 style={styles.container} >
                                 <Image 
                                 source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                                  style={{width:70,height:50,margin:5}}>
                                     
                                 </Image>
                                 <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                                 
                                    <Text style={styles.buttonText}>{item.key[0]}</Text>
                                </TouchableOpacity>
                               </LinearGradient>}
                               keyExtractor={(item) => item + index}
                                        />
                                
                               
                         
                        );
        }
        else if (user =="531a@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                          {key: ['סוללה א גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_01_Press]},
                          {key: ['פלגה א1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_1_1_Press]},
                          {key: ['צוות א1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_1_Press]},
                          {key: ['צוות א1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_2_Press]},
                          {key: ['צוות א1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_3_Press]},
                  
                          {key: ['פלגה א2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_1_2_Press]},
                          {key: ['צוות א2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="531a_1@idf.com"){
            return (
            
                <FlatList
                  data={[

                    {key: ['פלגה א1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_1_1_Press]},
                    {key: ['צוות א1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_3_Press]}

            
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="531a_1_a@idf.com"){
            return (
            
                <FlatList
                  data={[
                    {key: ['צוות א1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="531a_1_b@idf.com"){
            return (
            
                <FlatList
                  data={[
                    {key: ['צוות א1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="531a_1_c@idf.com"){
            return (
            
                <FlatList
                  data={[
                   
                    {key: ['צוות א1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_1_Press]},
                    {key: ['צוות א1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_2_Press]},
                    {key: ['צוות א1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_1_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="531a_2@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['פלגה א2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_1_2_Press]},
                          {key: ['צוות א2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_3_Press]}
                    
                  

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="531a_2_a@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_3_Press]}
                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="531a_2_b@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_3_Press]}

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }
        else if (user =="531a_2_c@idf.com"){
            return (
            
                <FlatList
                  data={[
                     
                    {key: ['צוות א2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_1_Press]},
                          {key: ['צוות א2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_2_Press]},
                          {key: ['צוות א2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_1_2_3_Press]}

                  ]}
                  
                  renderItem={({item,index}) => <LinearGradient index={index}
                  colors={item.key[1]}
                  style={styles.container} >
                  <Image 
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                   style={{width:70,height:50,margin:5}}>
                      
                  </Image>
                  <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                  
                     <Text style={styles.buttonText}>{item.key[0]}</Text>
                 </TouchableOpacity>
                </LinearGradient>}
                keyExtractor={(item,index) => item+index}
                         />
                );
        }

        else if(user == "531b@idf.com"){
           return(
            <FlatList
                          data={[
                            {key: ['סוללה ב גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_02_Press]},
                            {key: ['פלגה ב1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_2_1_Press]},
                            {key: ['צוות ב1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_3_Press]},
                            
                            {key: ['פלגה ב2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],,this.Reshef_division_2_2_Press]},
                            {key: ['צוות ב2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_3_Press]}
  
                            
                          
  
                          ]}
                          
                          renderItem={({item,index}) => <LinearGradient index={index}
                          colors={item.key[1]}
                          style={styles.container} >
                          <Image 
                          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                           style={{width:70,height:50,margin:5}}>
                              
                          </Image>
                          <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                          
                             <Text style={styles.buttonText}>{item.key[0]}</Text>
                         </TouchableOpacity>
                        </LinearGradient>}
                        keyExtractor={(item,index) => item+index}
                                 />
                        );
        }
        else if(user == "531b_1@idf.com"){
            return(
             <FlatList
                           data={[

                            {key: ['פלגה ב1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_2_1_Press]},
                            {key: ['צוות ב1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_3_Press]}
        
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "531b_1_a@idf.com"){
            return(
             <FlatList
                           data={[
                           
  
                            
                            {key: ['צוות ב1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "531b_1_b@idf.com"){
            return(
             <FlatList
                           data={[
                           
                            {key: ['צוות ב1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "531b_1_c@idf.com"){
            return(
             <FlatList
                           data={[

                            {key: ['צוות ב1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_1_Press]},
                            {key: ['צוות ב1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_2_Press]},
                            {key: ['צוות ב1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_1_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "531b_2@idf.com"){
            return(
             <FlatList
                           data={[

                             
                            {key: ['פלגה ב2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],,this.Reshef_division_2_2_Press]},
                            {key: ['צוות ב2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_3_Press]}

                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "531b_2_a@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['צוות ב2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "531b_2_b@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['צוות ב2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "531b_2_c@idf.com"){
            return(
             <FlatList
                           data={[  
                            {key: ['צוות ב2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_1_Press]},
                            {key: ['צוות ב2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_2_Press]},
                            {key: ['צוות ב2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_2_2_3_Press]}
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }

         else if(user == "531c@idf.com"){
            return(
             <FlatList
                           data={[
                            {key: ['סוללה ג גדוד 531',['#66ffff', '#99ffff', '#cccccc'],this.Reshef_battery_03_Press]},
                            {key: ['פלגה ג1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_3_1_Press]},
                            {key: ['צוות ג1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_1_Press]},
                            {key: ['צוות ג1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_2_Press]},
                            {key: ['צוות ג1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_3_Press]},
                    
                            {key: ['פלגה ג2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_3_2_Press]},
                            {key: ['צוות ג2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_1_Press]},
                            {key: ['צוות ג2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_2_Press]},
                            {key: ['צוות ג2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_3_Press]}
   
                           ]}
                           
                           renderItem={({item,index}) => <LinearGradient index={index}
                           colors={item.key[1]}
                           style={styles.container} >
                           <Image 
                           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                            style={{width:70,height:50,margin:5}}>
                               
                           </Image>
                           <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                           
                              <Text style={styles.buttonText}>{item.key[0]}</Text>
                          </TouchableOpacity>
                         </LinearGradient>}
                         keyExtractor={(item,index) => item+index}
                                  />
                         );
         }
         else if(user == "531c_1@idf.com"){
             return(
              <FlatList
                            data={[
                        
                                {key: ['פלגה ג1 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_3_1_Press]},
                                {key: ['צוות ג1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_3_Press]}
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "531c_1_a@idf.com"){
             return(
              <FlatList
                            data={[

                                {key: ['צוות ג1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_3_Press]}

                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "531c_1_b@idf.com"){
             return(
              <FlatList
                            data={[
                                {key: ['צוות ג1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_3_Press]}

    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "531c_1_c@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג1א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_1_Press]},
                                {key: ['צוות ג1ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_2_Press]},
                                {key: ['צוות ג1ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_1_3_Press]}
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "531c_2@idf.com"){
             return(
              <FlatList
                            data={[

                                {key: ['פלגה ג2 גדוד 531',['#66ffcc', '#99ffdd', '#cccccc'],this.Reshef_division_3_2_Press]},
                            {key: ['צוות ג2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_1_Press]},
                            {key: ['צוות ג2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_2_Press]},
                            {key: ['צוות ג2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_3_Press]}

                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "531c_2_a@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_1_Press]},
                            {key: ['צוות ג2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_2_Press]},
                            {key: ['צוות ג2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_3_Press]}
                            
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "531c_2_b@idf.com"){
             return(
              <FlatList
                            data={[
                                {key: ['צוות ג2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_3_Press]}
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }
          else if(user == "531c_2_c@idf.com"){
             return(
              <FlatList
                            data={[
                               
                                {key: ['צוות ג2א גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_1_Press]},
                                {key: ['צוות ג2ב גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_2_Press]},
                                {key: ['צוות ג2ג גדוד 531',['#99ff99', '#ccffcc', '#cccccc'],this.Reshef_Section_3_2_3_Press]}
    
                            ]}
                            
                            renderItem={({item,index}) => <LinearGradient index={index}
                            colors={item.key[1]}
                            style={styles.container} >
                            <Image 
                            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhFYQL7h2m99YEF5tGgYbS4yxMwj1kpOqF0FjJBUysBkp40P-"}}
                             style={{width:70,height:50,margin:5}}>
                                
                            </Image>
                            <TouchableOpacity style={styles.container1}  onPress={item.key[2]}>
                            
                               <Text style={styles.buttonText}>{item.key[0]}</Text>
                           </TouchableOpacity>
                          </LinearGradient>}
                          keyExtractor={(item,index) => item+index}
                                   />
                          );
          }

    }
}

const StorageNavigator = createStackNavigator({
    StockScreen: {
        screen: StockScreen
    },
    storageScreen: {
        screen: storageScreen
      },
     
                             
});


const styles = StyleSheet.create({
    container:{
        flex:1,
      padding:5,
      backgroundColor:'#455a64',
        flexDirection:'row',
        
    },
    container1: {
        flex:1,justifyContent: "center",alignItems: "center",
       
        
       
     },
     container2: {
        backgroundColor:'#455a64',
     },
    
  buttonText: {

    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    
  },
});
export default createAppContainer(StorageNavigator);