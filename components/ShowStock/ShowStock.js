import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup} from 'react-native-elements';
import  ModalShow from './ModalShow';
import  AddRemove from './AddRemove';
import "@expo/vector-icons";

export default class ShowStock extends React.Component {
    state = {
        overlayOpt:[
'Group1','Batt1','batt2'
        ],
        ammo: {
            shell: 0,
            hane: 0,
            fuse: 0,
            detonator: 0
        },
        index: 0,
        modalVisible: false,

    }

    updatePurchaseState (ammo) {
        const sum = Object.keys( ammo )
            .map( igKey => {
                return ammo[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ammo[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ammo
        };
        updatedIngredients[type] = updatedCount;
        this.setState( { ammo: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
        fetch('https://artillery-corps.firebaseio.com/ammo.json', {
            method: 'POST',
            body: JSON.stringify({
                ammo: this.state.ammo,
            })
        })
            .catch(err=>console.log(err))
            .then(res=>res.json())
            .then(parsedRes=>{
                console.log(parsedRes)
            })
        ;

    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ammo[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ammo
        };
        updatedIngredients[type] = updatedCount;
        this.setState( { ammo: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    updateIndex = (index) => {
        this.setState({index})
    }



    render() {
        return (
          <View>
               <ButtonGroup
                    style={styles.container}
                    selectedBackgroundColor="pink"
                    onPress={this.updateIndex}
                    selectedIndex={this.state.index}
                    buttons={['Group', 'Battalion','Battery']}
                    containerStyle={{height: 30}} />
                <ModalShow
                    ammoShow={this.state.ammo}
                />
                 <AddRemove
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}

                />
          </View>

          
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0cf18e',
    },
    title:{
        color:'rgba(255, 255, 255, 0.7)',
        marginTop: 10,
        width:160,
        textAlign: 'center',
        opacity:0.9,
    },
});