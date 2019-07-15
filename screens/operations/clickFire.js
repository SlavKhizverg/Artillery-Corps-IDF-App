import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text, View, Alert} from 'react-native';
import {connect} from 'react-redux';
import {watchOperationData} from '../../redux/app-redux';
import * as firebase from "firebase";
import { LinearGradient } from 'expo';

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
    }else{
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

const writeDataForUpStorage =(place,armor)=>{
    let operationData ={}
    firebase.database().ref("Storage/"+place).once("value", function(snapshot) {
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


        firebase.database().ref('Storage/'+place).set({
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


class clickFire extends React.Component {
    state={
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
        departTemp: 0,
        isPressed:false,


    }

    constructor(props) {
        super(props);
        // this.state ={test:firebase.auth().currentUser.email.replace("@idf.com","").charAt(0).toUpperCase()}
        this.props.watchOperationData();
    }
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


    take = (str) =>{
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

            if(sum1>=0&&sum2>=0&&sum3>=0&&sum4>=0&&sum5>=0&&sum6>=0&&sum7>=0&&sum8>=0&&sum9>=0&&sum10>=0) {
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

    startFireReport (place) {
        let operationData = {}
        firebase.database().ref("Operation/" + place).once("value", function (snapshot) {
            operationData = snapshot.val();
            let sum1 = operationData.נפיץ
            let sum2 = operationData.עשן_ישן
            let sum3 = operationData.עשן_חדש
            let sum4 = operationData.תאורה
            let sum5 = operationData.מרעום137
            let sum6 = operationData.מרעום739
            let sum7 = operationData.מרעום557
            let sum8 = operationData.M7
            let sum9 = operationData.M9
            let sum10 = operationData.תחל
            let date = new Date().getDate(); //Current Date
            let month = new Date().getMonth() + 1; //Current Month
            let year = new Date().getFullYear(); //Current Year
            let hours = new Date().getHours(); //Current Hours
            let min = new Date().getMinutes(); //Current Minutes
            let sec = new Date().getSeconds(); //Current Seconds

            //Write to Database  after reading
            firebase.database().ref("Invoices").push({
                Time: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
                Type: "Start Fire",
                צוות: place,
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
        });
    }

    finishFireReport(place){
        let ammoLeftInOperation ={}
        let operationData = {}
        let startfiresum1=0,startfiresum2=0,startfiresum3=0,startfiresum4=0,startfiresum5=0,
            startfiresum6=0,startfiresum7=0,startfiresum8=0,startfiresum9=0,startfiresum10=0

        let finishfiresum1=0,finishfiresum2=0,finishfiresum3=0,finishfiresum4=0,finishfiresum5=0,finishfiresum6=0,finishfiresum7=0,finishfiresum8=0,
        finishfiresum9=0,finishfiresum10=0

        let sum1=0,sum2=0,sum3=0,sum4=0,sum5=0,sum6=0,sum7=0,sum8=0,sum9=0,sum10=0
        firebase.database().ref("Invoices").once("value", function (snapshot) {
            operationData = snapshot.val();
            let items = [];
            let tempTime="";
            let tempTime2="";
            let date = new Date().getDate(); //Current Date
            let month = new Date().getMonth() + 1; //Current Month
            let year = new Date().getFullYear(); //Current Year
            let todayDate=date + '/' + month + '/' + year
            snapshot.forEach((child) => {
                tempTime=child.val().Time
                tempTime2=tempTime.substring(0,tempTime.indexOf(' '))
                if(child.val().Type==="Start Fire"&&tempTime2===todayDate){
                    console.log("enter if")
                    console.log(child.val().נפיץ)
                    startfiresum1 = child.val().נפיץ
                    startfiresum2 = child.val().עשן_ישן
                    startfiresum3 = child.val().עשן_חדש
                    startfiresum4 = child.val().תאורה
                    startfiresum5 = child.val().מרעום137
                    startfiresum6 = child.val().מרעום739
                    startfiresum7 = child.val().מרעום557
                    startfiresum8 = child.val().M7
                    startfiresum9 = child.val().M9
                    startfiresum10 = child.val().תחל
                    firebase.database().ref("Operation/" + place).once("value", function (snapshot) {
                        operationData = snapshot.val();
                        finishfiresum1 = operationData.נפיץ
                        finishfiresum2 = operationData.עשן_ישן
                        finishfiresum3 = operationData.עשן_חדש
                        finishfiresum4 = operationData.תאורה
                        finishfiresum5 = operationData.מרעום137
                        finishfiresum6 = operationData.מרעום739
                        finishfiresum7 = operationData.מרעום557
                        finishfiresum8 = operationData.M7
                        finishfiresum9 = operationData.M9
                        finishfiresum10 = operationData.תחל

                    });
                    console.log("startfiresum")
                    console.log(startfiresum1)
                    console.log("finishfiresum1")
                    console.log(finishfiresum1)
                    sum1=startfiresum1-finishfiresum1
                    sum2=startfiresum2-finishfiresum2
                    sum3=startfiresum3-finishfiresum3
                    sum4=startfiresum4-finishfiresum4
                    sum5=startfiresum5-finishfiresum5
                    sum6=startfiresum6-finishfiresum6
                    sum7=startfiresum7-finishfiresum7
                    sum8=startfiresum8-finishfiresum8
                    sum9=startfiresum9-finishfiresum9
                    sum10=startfiresum10-finishfiresum10

                    let date = new Date().getDate(); //Current Date
                    let month = new Date().getMonth() + 1; //Current Month
                    let year = new Date().getFullYear(); //Current Year
                    let hours = new Date().getHours(); //Current Hours
                    let min = new Date().getMinutes(); //Current Minutes
                    let sec = new Date().getSeconds(); //Current Seconds

                    //Write to Database after read data and calculate
                    firebase.database().ref("Invoices").push({
                        Time: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
                        Type: "Finish Fire",
                        צוות: place,
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


                    firebase.database().ref("Operation/" + place).once("value", function (snapshot) {
                        ammoLeftInOperation = snapshot.val();
                        sum1 = ammoLeftInOperation.נפיץ
                        sum2 = ammoLeftInOperation.עשן_ישן
                        sum3 = ammoLeftInOperation.עשן_חדש
                        sum4 = ammoLeftInOperation.תאורה
                        sum5 = ammoLeftInOperation.מרעום137
                        sum6 = ammoLeftInOperation.מרעום739
                        sum7 = ammoLeftInOperation.מרעום557
                        sum8 = ammoLeftInOperation.M7
                        sum9 = ammoLeftInOperation.M9
                        sum10 = ammoLeftInOperation.תחל
                    });
                    firebase.database().ref("Storage/" + place+"/ammo").once("value", function (snapshot) {
                        operationData = snapshot.val();
                        let temp1 = operationData.נפיץ
                        let temp2 = operationData.עשן_ישן
                        let temp3 = operationData.עשן_חדש
                        let temp4 = operationData.תאורה
                        let temp5 = operationData.מרעום137
                        let temp6 = operationData.מרעום739
                        let temp7 = operationData.מרעום557
                        let temp8 = operationData.M7
                        let temp9 = operationData.M9
                        let temp10 = operationData.תחל

                        finishfiresum1=temp1+sum1
                        finishfiresum2=temp2+sum2
                        finishfiresum3=temp3+sum3
                        finishfiresum4=temp4+sum4
                        finishfiresum5=temp5+sum5
                        finishfiresum6=temp6+sum6
                        finishfiresum7=temp7+sum7
                        finishfiresum8=temp8+sum8
                        finishfiresum9=temp9+sum9
                        finishfiresum10=temp10+sum10

                        firebase.database().ref('Storage/' + place+"/ammo").set({
                            נפיץ: finishfiresum1,
                            עשן_ישן: finishfiresum2,
                            עשן_חדש: finishfiresum3,
                            תאורה: finishfiresum4,
                            מרעום137: finishfiresum5,
                            מרעום739: finishfiresum6,
                            מרעום557: finishfiresum7,
                            M7: finishfiresum8,
                            M9: finishfiresum9,
                            תחל: finishfiresum10,

                        }).then((data) => {
                            //success callback
                            console.log('data ', data)
                        }).catch((error) => {
                            //error callback
                            console.log('error ', error)
                        })
                    });




                    if(place==="55א_1_א"||place==="55א_1_ב" ||place==="55א_1_ג"){
                        writeDataForUpStorage("55א_1",ammoLeftInOperation)
                        writeDataForUpStorage("55א",ammoLeftInOperation)
                        writeDataForUpStorage("55/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="55א_2_א"||place==="55א_2_ב" ||place==="55א_2_ג"){
                        writeDataForUpStorage("55א_2",ammoLeftInOperation)
                        writeDataForUpStorage("55א",ammoLeftInOperation)
                        writeDataForUpStorage("55/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="55ב_1_א"||place==="55ב_1_ב" ||place==="55ב_1_ג"){
                        writeDataForUpStorage("55ב_1",ammoLeftInOperation)
                        writeDataForUpStorage("55ב",ammoLeftInOperation)
                        writeDataForUpStorage("55/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="55ב_2_א"||place==="55ב_2_ב" ||place==="55ב_2_ג"){
                        writeDataForUpStorage("55ב_2",ammoLeftInOperation)
                        writeDataForUpStorage("55ב",ammoLeftInOperation)
                        writeDataForUpStorage("55/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="55ג_1_א"||place==="55ג_1_ב" ||place==="55ג_1_ג"){
                        writeDataForUpStorage("55ג_1",ammoLeftInOperation)
                        writeDataForUpStorage("55ג",ammoLeftInOperation)
                        writeDataForUpStorage("55/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="55ג_2_א"||place==="55ג_2_ב" ||place==="55ג_2_ג"){
                        writeDataForUpStorage("55ג_2",ammoLeftInOperation)
                        writeDataForUpStorage("55ג",ammoLeftInOperation)
                        writeDataForUpStorage("55/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="402א_1_א"||place==="402א_1_ב" ||place==="402א_1_ג"){
                        writeDataForUpStorage("402א_1",ammoLeftInOperation)
                        writeDataForUpStorage("402א",ammoLeftInOperation)
                        writeDataForUpStorage("402/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="402א_2_א"||place==="402א_2_ב" ||place==="402א_2_ג"){
                        writeDataForUpStorage("402א_2",ammoLeftInOperation)
                        writeDataForUpStorage("402א",ammoLeftInOperation)
                        writeDataForUpStorage("402/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="402ב_1_א"||place==="402ב_1_ב" ||place==="402ב_1_ג"){
                        writeDataForUpStorage("402ב_1",ammoLeftInOperation)
                        writeDataForUpStorage("402ב",ammoLeftInOperation)
                        writeDataForUpStorage("402/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="402ב_2_א"||place==="402ב_2_ב" ||place==="402ב_2_ג"){
                        writeDataForUpStorage("402ב_2",ammoLeftInOperation)
                        writeDataForUpStorage("402ב",ammoLeftInOperation)
                        writeDataForUpStorage("402/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="402ג_1_א"||place==="402ג_1_ב" ||place==="402ג_1_ג"){
                        writeDataForUpStorage("402ג_1",ammoLeftInOperation)
                        writeDataForUpStorage("402ג",ammoLeftInOperation)
                        writeDataForUpStorage("402/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="402ג_2_א"||place==="402ג_2_ב" ||place==="402ג_2_ג"){
                        writeDataForUpStorage("402ג_2",ammoLeftInOperation)
                        writeDataForUpStorage("402ג",ammoLeftInOperation)
                        writeDataForUpStorage("402/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="403א_1_א"||place==="403א_1_ב" ||place==="403א_1_ג"){
                        writeDataForUpStorage("403א_1",ammoLeftInOperation)
                        writeDataForUpStorage("403א",ammoLeftInOperation)
                        writeDataForUpStorage("403/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="403א_2_א"||place==="403א_2_ב" ||place==="403א_2_ג"){
                        writeDataForUpStorage("403א_2",ammoLeftInOperation)
                        writeDataForUpStorage("403א",ammoLeftInOperation)
                        writeDataForUpStorage("403/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="403ב_1_א"||place==="403ב_1_ב" ||place==="403ב_1_ג"){
                        writeDataForUpStorage("403ב_1",ammoLeftInOperation)
                        writeDataForUpStorage("403ב",ammoLeftInOperation)
                        writeDataForUpStorage("403/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="403ב_2_א"||place==="403ב_2_ב" ||place==="403ב_2_ג"){
                        writeDataForUpStorage("403ב_2",ammoLeftInOperation)
                        writeDataForUpStorage("403ב",ammoLeftInOperation)
                        writeDataForUpStorage("403/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="403ג_1_א"||place==="403ג_1_ב" ||place==="403ג_1_ג"){
                        writeDataForUpStorage("403ג_1",ammoLeftInOperation)
                        writeDataForUpStorage("403ג",ammoLeftInOperation)
                        writeDataForUpStorage("403/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="403ג_2_א"||place==="403ג_2_ב" ||place==="403ג_2_ג"){
                        writeDataForUpStorage("403ג_2",ammoLeftInOperation)
                        writeDataForUpStorage("403ג",ammoLeftInOperation)
                        writeDataForUpStorage("403/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="531א_1_א"||place==="531א_1_ב" ||place==="531א_1_ג"){
                        writeDataForUpStorage("531א_1",ammoLeftInOperation)
                        writeDataForUpStorage("531א",ammoLeftInOperation)
                        writeDataForUpStorage("531/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="531א_2_א"||place==="531א_2_ב" ||place==="531א_2_ג"){
                        writeDataForUpStorage("531א_2",ammoLeftInOperation)
                        writeDataForUpStorage("531א",ammoLeftInOperation)
                        writeDataForUpStorage("531/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="531ב_1_א"||place==="531ב_1_ב" ||place==="531ב_1_ג"){
                        writeDataForUpStorage("531ב_1",ammoLeftInOperation)
                        writeDataForUpStorage("531ב",ammoLeftInOperation)
                        writeDataForUpStorage("531/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="531ב_2_א"||place==="531ב_2_ב" ||place==="531ב_2_ג"){
                        writeDataForUpStorage("531ב_2",ammoLeftInOperation)
                        writeDataForUpStorage("531ב",ammoLeftInOperation)
                        writeDataForUpStorage("531/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="531ג_1_א"||place==="531ג_1_ב" ||place==="531ג_1_ג"){
                        writeDataForUpStorage("531ג_1",ammoLeftInOperation)
                        writeDataForUpStorage("531ג",ammoLeftInOperation)
                        writeDataForUpStorage("531/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }else if(place==="531ג_2_א"||place==="531ג_2_ב" ||place==="531ג_2_ג"){
                        writeDataForUpStorage("531ג_2",ammoLeftInOperation)
                        writeDataForUpStorage("531ג",ammoLeftInOperation)
                        writeDataForUpStorage("531/ammo",ammoLeftInOperation)
                        writeDataForUpStorage("אגד215"+"/ammo",ammoLeftInOperation)
                    }
                    firebase.database().ref('Operation/' + place).set({
                        נפיץ: 0,
                        עשן_ישן: 0,
                        עשן_חדש: 0,
                        תאורה: 0,
                        מרעום137: 0,
                        מרעום739: 0,
                        מרעום557: 0,
                        M7: 0,
                        M9: 0,
                        תחל: 0,

                    }).then((data) => {
                        //success callback
                        console.log('data ', data)
                    }).catch((error) => {
                        //error callback
                        console.log('error ', error)
                    })
                }
            });


        });






    }


    render() {
        let place=""
        place = firebase.auth().currentUser.email.replace("@idf.com","")
        place = place.replace('a','א');
        place = place.replace('a','א');
        place = place.replace('b','ב');
        place = place.replace('b','ב');
        place = place.replace('c','ג');
        place = place.replace('c','ג');
        if(place==="215א"){
            place="אגד215"
        }

        return (
            <View style={styles.container}>


                <LinearGradient
                    colors={['#455a64', '#455a64', '#455a64']}
                    style={styles.pageStyle}>

                    <View style={styles.alternativeLayoutButtonContainer}>
                    <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.take(place)}>

                        <Text style={styles.buttonText}  >{'ירי'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.startFireReport(place)}>

                        <Text style={styles.buttonText}  >{'התחלה'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.finishFireReport(place)}>

                        <Text style={styles.buttonText}  >{'סוף'}</Text>
                    </TouchableOpacity>
                    </View>


                </LinearGradient>
                <FlatList
                     data={[
                        {key: [' נפיץ',this.props.operationData.נפיץ,this.NafitzPress]},
                        {key: [' עשן_חדש',this.props.operationData.עשן_חדש,this.ashanHadash]},
                         {key: [' עשן_ישן',this.props.operationData.עשן_ישן,this.ashanYashan]},
                        {key: [' תאורה',this.props.operationData.תאורה,this.Teura]},
                        {key: [' M7 ',this.props.operationData.M7]}, 
                        {key:[' M9 ', this.props.operationData.M9]},
                        {key: [' מרעום 137',this.props.operationData.מרעום137]}, 
                        {key: [' מרעום557',this.props.operationData.מרעום557]},
                        {key: [' מרעום739',this.props.operationData.מרעום739]},
                        {key: [' תחל',this.props.operationData.תחל]},
                    ]}


                    renderItem={({item,index}) => <View index = {index} style={styles.container1}  >
                           {item.key[1] >= 20? <TouchableOpacity style={styles.greenItem} onPress={item.key[2]}>
                            <Text style={styles.hebrowText} >{item.key[0]}</Text>
                            <Text style={styles.leftText} > {item.key[1]}</Text>
                        </TouchableOpacity>: <TouchableOpacity style={styles.redItem} onPress={item.key[2]}>
                            <Text style={styles.hebrowText} >{item.key[0]}</Text>
                            <Text style={styles.leftText} > {item.key[1]}</Text>
                        </TouchableOpacity> }                                            
                        
                        
                    </View>}
                    numColumns={2}
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
    container1:{
        flex: 1,
       
    },
    pageStyle:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
    },
    buttonText: {

        backgroundColor: 'transparent',
        fontSize: 30,
        color:'#fff',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: '300',

    },
    greenItem: {

        
        borderRadius: 5,
        backgroundColor:'#00CC00',
       

        height: 80,
        margin: 10,
    },
    redItem: {

        
        borderRadius: 5,
        backgroundColor:'#CD0000',
       

        height: 80,
        margin: 10,
    },
    alternativeLayoutButtonContainer: {

        flexDirection: 'row',

        justifyContent: 'space-between'
    },
    title:{
        color:'#fff',
        marginTop: 30,

        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    buttonContainer: {
        width:120,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13

    },
    hebrowText: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: '#fff',
        textAlign:'right',
        fontStyle: 'italic',
        fontWeight: '300',

    },
    leftText: {
        backgroundColor: 'transparent',
        fontSize: 20,
        color: '#fff',
        textAlign:'left',
        fontStyle: 'italic',
        fontWeight: '300',

    }
});
export default connect(mapStateToProps, mapDispatchToProps)(clickFire);