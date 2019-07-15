import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import {connect} from 'react-redux';
import {watchOperationData} from '../../redux/app-redux';
import * as firebase from "firebase";




const mapStateToProps = (state) => {
    return {

        operationData: state.operationData,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        watchOperationData: () => { dispatch(watchOperationData()) },
    };
}
const writeDataForUpper = (armor,place,sign) =>{
    let operationData ={}
    if(sign==='+'){
        firebase.database().ref("Operation/"+place).once("value", function(snapshot) {
            operationData = snapshot.val();
            let sum1=operationData.נפיץ+armor.נפיץ
            let sum2=operationData.עשן_ישן+armor.עשן_ישן
            let sum3=operationData.עשן_חדש+armor.עשן_חדש
            let sum4=operationData.תאורה+armor.תאורה
            let sum5=operationData.מרעום137+armor.מרעום137
            let sum6=operationData.מרעום739+armor.מרעום739
            let sum7=operationData.מרעום557+armor.מרעום557
            let sum8=operationData.M7+armor.M7
            let sum9=operationData.M9+armor.M9
            let sum10=operationData.תחל+armor.תחל

            firebase.database().ref('Operation/'+place).set({
                נפיץ:sum1,
                עשן_ישן:sum2,
                עשן_חדש:sum3,
                תאורה:sum4,
                מרעום137:sum5,
                מרעום739:sum6,
                מרעום557:sum7,
                M7:sum8,
                M9:sum9,
                תחל:sum10,


            }).then((data)=>{
                //success callback
                console.log('data ' , data)
            }).catch((error)=>{
                //error callback
                console.log('error ' , error)
            })
        });
    }else if(sign==='-'){
        firebase.database().ref("Operation/"+place).once("value", function(snapshot) {
            operationData = snapshot.val();
            let sum1=operationData.נפיץ-armor.נפיץ
            let sum2=operationData.עשן_ישן-armor.עשן_ישן
            let sum3=operationData.עשן_חדש-armor.עשן_חדש
            let sum4=operationData.תאורה-armor.תאורה
            let sum5=operationData.מרעום137-armor.מרעום137
            let sum6=operationData.מרעום739-armor.מרעום739
            let sum7=operationData.מרעום557-armor.מרעום557
            let sum8=operationData.M7-armor.M7
            let sum9=operationData.M9-armor.M9
            let sum10=operationData.תחל-armor.תחל

            firebase.database().ref('Operation/'+place).set({
                נפיץ:sum1,
                עשן_ישן:sum2,
                עשן_חדש:sum3,
                תאורה:sum4,
                מרעום137:sum5,
                מרעום739:sum6,
                מרעום557:sum7,
                M7:sum8,
                M9:sum9,
                תחל:sum10,


            }).then((data)=>{
                //success callback
                console.log('data ' , data)
            }).catch((error)=>{
                //error callback
                console.log('error ' , error)
            })
        });
    }

}

class QrCodeFire extends React.Component {
    state = {
        hasCameraPermission: null,
        lastScannedUrl: null,
        נפיץ:0,
        עשן_ישן:0,
        עשן_חדש:0,
        תאורה:0,
        מרעום137:0,
        מרעום739:0,
        מרעום557:0,
        M7:0,
        M9:0,
        תחל:0,
        visible:true,
    };
    constructor(props) {
        super(props);
        // this.state ={test:firebase.auth().currentUser.email.replace("@idf.com","").charAt(0).toUpperCase()}
        this.props.watchOperationData();
    }

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            LayoutAnimation.spring();
            this.setState({ lastScannedUrl: result.data });
        }
    };
    NafitzPress =() => {
        this.setState({
            נפיץ:1,
            M7:2,
            מרעום137:2,
            תחל:1
        })

    }

    ashanHadash = () =>{
        this.setState({
            עשן_חדש:1,
            M9:2,
            מרעום739:2,
            תחל:1
        })
    }

    ashanYashan = () =>{
        this.setState({
            עשן_ישן:1,
            M9:2,
            מרעום557:2,
            תחל:1
        })
    }

    Teura = () =>{
        this.setState({
            תאורה:1,
            M7:2,
            מרעום557:2,
            תחל:1
        })
    }

    shootingHandler= () =>{

        if(this.state.lastScannedUrl==="נפיץ"){
            this.NafitzPress()
            this.take()
            Alert.alert(
                'ירי נפיץ',
                'Ammo left',
                    [
                        {
                            text: ':נפיץ' + this.props.operationData.נפיץ+'  '+
                                'M7:'+this.props.operationData.M7+'  '+
                                ':מרעום137'+this.props.operationData.מרעום137+'  '+
                                ':תחל'+this.props.operationData.תחל,
                        },
                    ],
            )

        }else if(this.state.lastScannedUrl==="תאורה"){
            this.Teura()
            this.take()
            Alert.alert(
                'ירי תאורה',
                'Ammo left',
                    [
                    { text: '  :נפיץ'+this.props.operationData.נפיץ+'  '+
                            'M7:  '+this.props.operationData.M7+'  '+
                            '  :מרעום557'+this.props.operationData.מרעום557+'  '+
                            +'  :תחל'+this.props.operationData.תחל }
                    ],
            )
        }else if(this.state.lastScannedUrl==="עשן_ישן"){
            this.ashanYashan()
            this.take()
            Alert.alert(
                'ירי עשן_ישן',
                'Ammo left',
                [
                    { text: '  :נפיץ'+this.props.operationData.נפיץ+'  '+
                            'M9:  '+this.props.operationData.M9+'  '+
                            '  :מרעום557'+this.props.operationData.מרעום557+'  '+
                            +'  :תחל'+this.props.operationData.תחל }

                ],
            )
        }else if(this.state.lastScannedUrl==="עשן_חדש"){
            this.ashanHadash()
            this.take()
            Alert.alert(
                'ירי עשן_חדש',
                'Ammo left',
                [
                    { text: '  :נפיץ'+this.props.operationData.נפיץ+'  '+
                            'M9:  '+this.props.operationData.M9+'  '+
                            '  :מרעום739'+this.props.operationData.מרעום739+'  '+
                            +'  :תחל'+this.props.operationData.תחל }
                ],
            )
        }

    }

    take = () =>{
        let operationData = {}
        let armor = {
            נפיץ: parseInt(this.state.נפיץ, 10),
            עשן_ישן: parseInt(this.state.עשן_ישן, 10),
            עשן_חדש: parseInt(this.state.עשן_חדש, 10),
            תאורה: parseInt(this.state.תאורה, 10),
            מרעום137: parseInt(this.state.מרעום137, 10),
            מרעום739: parseInt(this.state.מרעום739, 10),
            מרעום557: parseInt(this.state.מרעום557, 10),
            M7: parseInt(this.state.M7, 10),
            M9: parseInt(this.state.M9, 10),
            תחל: parseInt(this.state.תחל, 10),
        }
        let str=""
        str = firebase.auth().currentUser.email.replace("@idf.com","")
        str = str.replace('a','א');
        str = str.replace('a','א');
        str = str.replace('b','ב');
        str = str.replace('b','ב');
        str = str.replace('c','ג');
        str = str.replace('c','ג');
        if(str==="215א"){
            str="אגד215"
        }
        firebase.database().ref("Operation/"+str).once("value", function(snapshot) {
            operationData = snapshot.val();
            let sum1=operationData.נפיץ-armor.נפיץ
            let sum2=operationData.עשן_ישן-armor.עשן_ישן
            let sum3=operationData.עשן_חדש-armor.עשן_חדש
            let sum4=operationData.תאורה-armor.תאורה
            let sum5=operationData.מרעום137-armor.מרעום137
            let sum6=operationData.מרעום739-armor.מרעום739
            let sum7=operationData.מרעום557-armor.מרעום557
            let sum8=operationData.M7-armor.M7
            let sum9=operationData.M9-armor.M9
            let sum10=operationData.תחל-armor.תחל


            if(sum1>0&&sum2>0&&sum3>0&&sum4>0&&sum5>0&&sum6>0&&sum7>0&&sum8>0&&sum9>0&&sum10>0) {
                firebase.database().ref('Operation/' + str).set({
                    נפיץ: sum1,
                    עשן_ישן: sum2,
                    עשן_חדש: sum3,
                    תאורה: sum4,
                    מרעום137: sum5,
                    מרעום739: sum6,
                    מרעום557: sum7,
                    M7: sum8,
                    M9: sum9,
                    תחל: sum10,


                }).then((data) => {
                    //success callback
                    console.log('data ', data)
                }).catch((error) => {
                    //error callback
                    console.log('error ', error)
                })

                if (str === "55א_1_א" || str === "55א_1_ב" || str === "55א_1_ג" ) {

                    writeDataForUpper(armor, "55א_1",'-')
                    writeDataForUpper(armor, "55א",'-')
                    writeDataForUpper(armor, "55"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "55א_2_א" || str === "55א_2_ב" || str === "55א_2_ג") {

                    writeDataForUpper(armor, "55א_2",'-')
                    writeDataForUpper(armor, "55א",'-')
                    writeDataForUpper(armor, "55"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "55ב_1_א" || str === "55ב_1_ב" || str === "55ב_1_ג") {

                    writeDataForUpper(armor, "55ב_1",'-')
                    writeDataForUpper(armor, "55ב",'-')
                    writeDataForUpper(armor, "55"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "55ב_2_א" || str === "55ב_2_ב" || str === "55ב_2_ג") {

                    writeDataForUpper(armor, "55ב_2",'-')
                    writeDataForUpper(armor, "55ב",'-')
                    writeDataForUpper(armor, "55"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                } else if (str === "55ג_1_א" || str === "55ג_1_ב" || str === "55ג_1_ג") {

                    writeDataForUpper(armor, "55ג_1",'-')
                    writeDataForUpper(armor, "55ג",'-')
                    writeDataForUpper(armor, "55",'-')
                    writeDataForUpper(armor, "אגד215",'-')


                } else if (str === "55ג_2_א" || str === "55ג_2_ב" || str === "55ג_2_ג") {

                    writeDataForUpper(armor, "55ג_2", '-')
                    writeDataForUpper(armor, "55ג", '-')
                    writeDataForUpper(armor, "55"+"/ammo", '-')
                    writeDataForUpper(armor, "אגד215"+"/ammo", '-')


                }else if (str === "402א_1_א" || str === "402א_1_ב" || str === "402א_1_ג" ) {

                    writeDataForUpper(armor, "402א_1",'-')
                    writeDataForUpper(armor, "402א",'-')
                    writeDataForUpper(armor, "402"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "402א_2_א" || str === "402א_2_ב" || str === "402א_2_ג") {

                    writeDataForUpper(armor, "402א_2",'-')
                    writeDataForUpper(armor, "402א",'-')
                    writeDataForUpper(armor, "402"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "402ב_1_א" || str === "402ב_1_ב" || str === "402ב_1_ג") {

                    writeDataForUpper(armor, "402ב_1",'-')
                    writeDataForUpper(armor, "402ב",'-')
                    writeDataForUpper(armor, "402"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "402ב_2_א" || str === "402ב_2_ב" || str === "402ב_2_ג") {

                    writeDataForUpper(armor, "402ב_2",'-')
                    writeDataForUpper(armor, "402ב",'-')
                    writeDataForUpper(armor, "402"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                } else if (str === "402ג_1_א" || str === "402ג_1_ב" || str === "402ג_1_ג") {

                    writeDataForUpper(armor, "402ג_1",'-')
                    writeDataForUpper(armor, "402ג",'-')
                    writeDataForUpper(armor, "402"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                } else if (str === "402ג_2_א" || str === "402ג_2_ב" || str === "402ג_2_ג") {

                    writeDataForUpper(armor, "402ג_2",'-')
                    writeDataForUpper(armor, "402ג",'-')
                    writeDataForUpper(armor, "402"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                }else if (str === "403א_1_א" || str === "403א_1_ב" || str === "403א_1_ג" ) {

                    writeDataForUpper(armor, "403א_1",'-')
                    writeDataForUpper(armor, "403א",'-')
                    writeDataForUpper(armor, "403"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "403א_2_א" || str === "403א_2_ב" || str === "403א_2_ג") {

                    writeDataForUpper(armor, "403א_2",'-')
                    writeDataForUpper(armor, "403א",'-')
                    writeDataForUpper(armor, "403"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "403ב_1_א" || str === "403ב_1_ב" || str === "403ב_1_ג") {

                    writeDataForUpper(armor, "403ב_1",'-')
                    writeDataForUpper(armor, "403ב",'-')
                    writeDataForUpper(armor, "403"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "403ב_2_א" || str === "403ב_2_ב" || str === "403ב_2_ג") {

                    writeDataForUpper(armor, "403ב_2",'-')
                    writeDataForUpper(armor, "403ב",'-')
                    writeDataForUpper(armor, "403"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                } else if (str === "403ג_1_א" || str === "403ג_1_ב" || str === "403ג_1_ג") {

                    writeDataForUpper(armor, "403ג_1",'-')
                    writeDataForUpper(armor, "403ג",'-')
                    writeDataForUpper(armor, "403"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                } else if (str === "403ג_2_א" || str === "403ג_2_ב" || str === "403ג_2_ג") {

                    writeDataForUpper(armor, "403ג_2",'-')
                    writeDataForUpper(armor, "403ג",'-')
                    writeDataForUpper(armor, "403"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                }else if (str === "531א_1_א" || str === "531א_1_ב" || str === "531א_1_ג" ) {

                    writeDataForUpper(armor, "531א_1",'-')
                    writeDataForUpper(armor, "531א",'-')
                    writeDataForUpper(armor, "531"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "531א_2_א" || str === "531א_2_ב" || str === "531א_2_ג") {

                    writeDataForUpper(armor, "531א_2",'-')
                    writeDataForUpper(armor, "531א",'-')
                    writeDataForUpper(armor, "531"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "531ב_1_א" || str === "531ב_1_ב" || str === "531ב_1_ג") {

                    writeDataForUpper(armor, "531ב_1",'-')
                    writeDataForUpper(armor, "531ב",'-')
                    writeDataForUpper(armor, "531"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                } else if (str === "531ב_2_א" || str === "531ב_2_ב" || str === "531ב_2_ג") {

                    writeDataForUpper(armor, "531ב_2",'-')
                    writeDataForUpper(armor, "531ב",'-')
                    writeDataForUpper(armor, "531"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                } else if (str === "531ג_1_א" || str === "531ג_1_ב" || str === "531ג_1_ג") {

                    writeDataForUpper(armor, "531ג_1",'-')
                    writeDataForUpper(armor, "531ג",'-')
                    writeDataForUpper(armor, "531"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')


                } else if (str === "531ג_2_א" || str === "531ג_2_ב" || str === "531ג_2_ג") {

                    writeDataForUpper(armor, "531ג_2",'-')
                    writeDataForUpper(armor, "531ג",'-')
                    writeDataForUpper(armor, "531"+"/ammo",'-')
                    writeDataForUpper(armor, "אגד215"+"/ammo",'-')

                }



            }else {
                Alert.alert(
                    'Alert',
                    'You can not take this amount!'
                )
            }
        });
        this.setState({
            נפיץ:0,
            עשן_ישן:0,
            עשן_חדש:0,
            תאורה:0,
            מרעום137:0,
            מרעום739:0,
            מרעום557:0,
            M7:0,
            M9:0,
            תחל:0,
        })
    }


    render() {
        return (
            <View style={styles.container}>

                {this.state.hasCameraPermission === null
                    ? <Text>Requesting for camera permission</Text>
                    : this.state.hasCameraPermission === false
                        ? <Text style={{ color: '#fff' }}>
                            Camera permission is not granted
                        </Text>
                        : <BarCodeScanner
                            onBarCodeRead={this._handleBarCodeRead}
                            style={{
                                height: Dimensions.get('window').height,
                                width: Dimensions.get('window').width,
                            }}
                        />}

                {this._maybeRenderUrl()}

                <StatusBar hidden />
            </View>
        );
    }

    _handlePressUrl = () => {
        Alert.alert(
            'האם אתה מעוניין לירות?',
            this.state.lastScannedUrl,
            [
                { text: 'לא', onPress: () => {} },
                {
                    text: 'כן',
                    // onPress: () => Linking.openURL(this.state.lastScannedUrl),
                    onPress: () => this.shootingHandler(),

                },

            ],
            { cancellable: false }
        );
    };

    _handlePressCancel = () => {
        this.setState({ lastScannedUrl: null });
    };

    _maybeRenderUrl = () => {
        if (!this.state.lastScannedUrl) {
            return;
        }

        return (
            <View style={styles.bottomBar}>


                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={this._handlePressCancel}>
                    <Text style={styles.cancelButtonText}>
                        ביטול
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
                    <Text numberOfLines={1} style={styles.urlText}>
                        {this.state.lastScannedUrl}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 20,
    },
    cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
        textAlign:'right',

    },
    buttonStyle: {
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(QrCodeFire);