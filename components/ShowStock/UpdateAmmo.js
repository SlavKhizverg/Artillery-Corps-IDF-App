import React, {Component} from 'react';
import {Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UpdateAmmo extends Component {

   render() {
       return(

                <View>
                    <Button
                        icon={
                            <Icon
                                name='arrow-right'
                                size={15}
                                color='white'
                            />
                        }
                        buttonStyle={{
                            backgroundColor: "#96103f",
                            width: 100,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 1,
                            borderRadius: 5
                        }}
                        title='Add'
                        onPress={this.props.added}
                    />
                    <Button
                        icon={
                            <Icon
                                name='arrow-right'
                                size={15}
                                color='white'
                            />
                        }
                        buttonStyle={{
                            backgroundColor: "#96103f",
                            width: 100,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 1,
                            borderRadius: 5
                        }}
                        title='Remove'
                        onPress={this.props.removed}
                    />


                </View>

       );
   }

}