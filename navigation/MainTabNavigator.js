import React from 'react';
import {Text,View} from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import StockScreen from '../screens/StockScreen';
import LinksScreen from '../screens/OperationScreen';
import SettingsScreen from '../screens/ProfileScreen';

const TabNavigator = createBottomTabNavigator({
    ראשי:{screen: SettingsScreen},
    מלאים: { screen: StockScreen },
    מבצעים: { screen: LinksScreen }
    
},{
    swipeEnabled:false,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: 'white',

        labelStyle: {
            fontSize: 16,
        },
        style: {
            backgroundColor: '#1c313a',
        },
    }
});

export default createAppContainer(TabNavigator);



