import React, {Component} from 'react';
import {Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';

import  UpdateAmmo from './UpdateAmmo';

const controls = [
    { label: 'Shell', type: 'shell' },
    { label: 'Hane', type: 'hane' },
    { label: 'Fuse', type: 'fuse' },
    { label: 'Detonator', type: 'detonator' },
];

export default class AddRemove extends Component {



    render() {
        return(
                <View>
                    {controls.map(ctrl => (
                        <UpdateAmmo
                            key={ctrl.label}
                            //label={<Text>ctrl.label</Text>}
                            added={() => this.props.ingredientAdded(ctrl.type)}
                            removed={() => this.props.ingredientRemoved(ctrl.type)}
                            // disabled={props.disabled[ctrl.type]}

                        />
                    ))}

                </View>

        );
    }


}