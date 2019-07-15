import React from 'react';
import {StyleSheet, ScrollView, FlatList, Text, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {watchInvoiceStartFireAmmo,watchInvoiceFinishFireAmmo,watchInvoiceMoovingireAmmo} from '../../redux/app-redux';
import * as firebase from "firebase";
import { LinearGradient } from 'expo';
let place="";

export default class invoices extends React.Component  {



    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            arrData:[]
        };
    }

    componentDidMount() {
        var ref = firebase.database().ref("Invoices"); //Here assuming 'Invoices' as main table of contents

        ref.once('value').then(snapshot => {


            // get children as an array
            let items = [];
            snapshot.forEach((child) => {
                items.push({
                    team: child.val().צוות,
                    time: child.val().Time,
                    type: child.val().Type,
                    נפיץ: child.val().נפיץ,
                    עשן_ישן: child.val().עשן_ישן,
                    עשן_חדש: child.val().עשן_חדש,
                    תאורה: child.val().תאורה,
                    מרעום137: child.val().מרעום137,
                    מרעום739: child.val().מרעום739,
                    מרעום557: child.val().מרעום557,
                    M7: child.val().M7,
                    M9: child.val().M9,
                    תחל: child.val().תחל,
                });
            });

            this.setState({ arrData: items,loading: false});

        });
    }
    render() {

        if (this.state.loading) {
            return (
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <ActivityIndicator size="large" color="dodgerblue" />
                </View>
            )
        }
        let ammo1 = this.state.arrData ? Object.values(this.state.arrData) : []
        let ammo2 = this.state.arrData ? Object.values(ammo1) : []
        console.log(ammo2)
        return (

            <View style={styles.container}>

                <LinearGradient
                    colors={['#455a64', '#455a64', '#455a64']}
                    style={styles.pageStyle}>
                    <Text style={styles.title}>דוחות</Text>
                </LinearGradient>
                <FlatList
                    extraData={this.props}
                    data={this.state.arrData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>
                        <LinearGradient
                            colors={['#9900ff', '#b84dff', '#d699ff']}
                        >

                            <Text style={styles.hebrowText} > {' תאריך : '+item.time}</Text>
                            <Text style={styles.hebrowText} > {' דו"ח מסוג: '+item.type}</Text>
                            <Text style={styles.hebrowText} > {' צוות: '+item.team}</Text>
                            <Text style={styles.hebrowText} > {'תחמושת:'}</Text>
                            <Text style={styles.hebrowText} > {'עשן ישן: '+item.עשן_ישן}{ ' עשן חדש: '+item.עשן_חדש +' תאורה: '+item.תאורה}</Text>
                            <Text style={styles.hebrowText} > {item.M7+' :M7 '+item.M9+' :M9 '+ ' נפיץ: '+item.נפיץ+' תחל: '+item.תחל}</Text>
                            <Text style={styles.hebrowText} > {'מרעום137: '+item.מרעום137+' מרעום739: '+item.מרעום739+' מרעום557: '+item.מרעום557}</Text>
                          
                           
                        </LinearGradient>
                    }
                    keyExtractor={(item,index) => item+index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:100,
    },
    pageStyle:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
    },
    title:{
        color:'#fff',
        marginTop: 30,

        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    hebrowText: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: '#fff',
        textAlign:'right',
        fontStyle: 'italic',
        fontWeight: '300',

    }

});
