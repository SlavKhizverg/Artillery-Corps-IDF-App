import React from 'react';
import {StyleSheet,View,Text,TextInput,Alert,ScrollView,TouchableOpacity} from 'react-native';
import PickerCascader from '../../screens/operations/PickerCascader';
import * as firebase from 'firebase';
import AwesomeButton from "react-native-really-awesome-button";
import {setOperationData} from "../../redux/app-redux";


const setNewData= (armor,source,place) =>{
    firebase.database().ref(source+'/'+place).set({
        נפיץ:armor.נפיץ,
        עשן_ישן:armor.עשן_ישן,
        עשן_חדש:armor.עשן_חדש,
        תאורה:armor.תאורה,
        מרעום137:armor.מרעום137,
        מרעום739:armor.מרעום739,
        מרעום557:armor.מרעום557,
        M7:armor.M7,
        M9:armor.M9,
        תחל:armor.תחל,


    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
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

export default class AddOperation extends React.Component {

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
        departTemp: "",
        gdudForSupply:'',
        truck:'',
        currentUser:'',
        isPressed:false,
        answer:false,

    }


    add = () =>{
        let operationData = {}
        let sourceDepartment =""
        let temp3 = this.state.departTemp.text
        if (temp3.indexOf('|') != -1) {
            sourceDepartment = temp3.substring(0,temp3.indexOf(' | '))
        } else {
            sourceDepartment = temp3
        }

        console.log(sourceDepartment)

        let truck = ""
        let temp1 = this.state.truck.text
        if (temp1.indexOf('|') != -1) {
            truck = temp1.substring(temp1.lastIndexOf(' | ') + 3)
        } else {
            truck = temp1
        }
        console.log(truck)

        let destinationGdud = ""
        let temp2 = this.state.gdudForSupply.text
        if (temp2.indexOf('|') != -1) {
            destinationGdud = temp2.substring(temp2.lastIndexOf(' | ') + 3)
        } else {
            destinationGdud = temp2
        }
        console.log(destinationGdud)

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
        firebase.database().ref("Storage/"+sourceDepartment+"/"+truck).once("value", function(snapshot) {
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

            firebase.database().ref("Storage/"+sourceDepartment+"/"+truck).set({
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
            });


            firebase.database().ref("Storage/"+destinationGdud+"/" + truck).once("value", function (snapshot) {
                operationData = snapshot.val();
                let sum1 = operationData.נפיץ + armor.נפיץ
                let sum2 = operationData.עשן_ישן + armor.עשן_ישן
                let sum3 = operationData.עשן_חדש + armor.עשן_חדש
                let sum4 = operationData.תאורה + armor.תאורה
                let sum5 = operationData.מרעום137 + armor.מרעום137
                let sum6 = operationData.מרעום739 + armor.מרעום739
                let sum7 = operationData.מרעום557 + armor.מרעום557
                let sum8 = operationData.M7 + armor.M7
                let sum9 = operationData.M9 + armor.M9
                let sum10 = operationData.תחל + armor.תחל

                firebase.database().ref("Storage/"+destinationGdud+"/" + truck).set({
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

            firebase.database().ref("Storage/" + sourceDepartment+"/"+truck).once("value", function (snapshot) {
                operationData = snapshot.val();
                let sum1 = operationData.נפיץ - armor.נפיץ
                let sum2 = operationData.עשן_ישן - armor.עשן_ישן
                let sum3 = operationData.עשן_חדש - armor.עשן_חדש
                let sum4 = operationData.תאורה - armor.תאורה
                let sum5 = operationData.מרעום137 - armor.מרעום137
                let sum6 = operationData.מרעום739 - armor.מרעום739
                let sum7 = operationData.מרעום557 - armor.מרעום557
                let sum8 = operationData.M7 - armor.M7
                let sum9 = operationData.M9 - armor.M9
                let sum10 = operationData.תחל - armor.תחל

                firebase.database().ref("Storage/" + sourceDepartment+"/"+truck).set({
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

    addEged = () =>{
        let operationData = {}
        let sourceDepartment =""
        let temp3 = this.state.departTemp.text
        if (temp3.indexOf('|') != -1) {
            sourceDepartment = temp3.substring(0,temp3.indexOf(' | '))
        } else {
            sourceDepartment = temp3
        }

        console.log(sourceDepartment)

        let truck = ""
        let temp1 = this.state.truck.text
        if (temp1.indexOf('|') != -1) {
            truck = temp1.substring(temp1.lastIndexOf(' | ') + 3)
        } else {
            truck = temp1
        }
        console.log(truck)

        let destinationGdud = ""
        let temp2 = this.state.gdudForSupply.text
        if (temp2.indexOf('|') != -1) {
            destinationGdud = temp2.substring(temp2.lastIndexOf(' | ') + 3)
        } else {
            destinationGdud = temp2
        }
        console.log(destinationGdud)

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
        firebase.database().ref("Storage/"+sourceDepartment+"/"+truck).once("value", function(snapshot) {
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

            firebase.database().ref("Storage/"+sourceDepartment+"/"+truck).set({
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
            });


            firebase.database().ref("Storage/"+destinationGdud+"/" + truck).once("value", function (snapshot) {
                operationData = snapshot.val();
                let sum1 = operationData.נפיץ + armor.נפיץ
                let sum2 = operationData.עשן_ישן + armor.עשן_ישן
                let sum3 = operationData.עשן_חדש + armor.עשן_חדש
                let sum4 = operationData.תאורה + armor.תאורה
                let sum5 = operationData.מרעום137 + armor.מרעום137
                let sum6 = operationData.מרעום739 + armor.מרעום739
                let sum7 = operationData.מרעום557 + armor.מרעום557
                let sum8 = operationData.M7 + armor.M7
                let sum9 = operationData.M9 + armor.M9
                let sum10 = operationData.תחל + armor.תחל

                firebase.database().ref("Storage/"+destinationGdud+"/" + truck).set({
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

            firebase.database().ref("Storage/" + sourceDepartment+"/"+truck).once("value", function (snapshot) {
                operationData = snapshot.val();
                let sum1 = operationData.נפיץ - armor.נפיץ
                let sum2 = operationData.עשן_ישן - armor.עשן_ישן
                let sum3 = operationData.עשן_חדש - armor.עשן_חדש
                let sum4 = operationData.תאורה - armor.תאורה
                let sum5 = operationData.מרעום137 - armor.מרעום137
                let sum6 = operationData.מרעום739 - armor.מרעום739
                let sum7 = operationData.מרעום557 - armor.מרעום557
                let sum8 = operationData.M7 - armor.M7
                let sum9 = operationData.M9 - armor.M9
                let sum10 = operationData.תחל - armor.תחל

                firebase.database().ref("Storage/" + sourceDepartment+"/"+truck).set({
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

    take = () =>{
        let operationData = {}
        let truck = ""
        let temp1 = this.state.truck.text
        if (temp1.indexOf('|') != -1) {
            truck = temp1.substring(temp1.lastIndexOf(' | ') + 3)
        } else {
            truck = temp1
        }
        console.log(truck)

        let destinationGdud = ""
        let temp2 = this.state.gdudForSupply.text
        if (temp2.indexOf('|') != -1) {
            destinationGdud = temp2.substring(temp2.lastIndexOf(' | ') + 3)
        } else {
            destinationGdud = temp2
        }
        console.log(destinationGdud)
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

        firebase.database().ref("Storage/אגד215/ammo").once("value", function(snapshot) {
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

            firebase.database().ref("Storage/אגד215/ammo").set({
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
            firebase.database().ref("Storage/אגד215/" + truck).once("value", function (snapshot) {
                operationData = snapshot.val();
                let sum1 = operationData.נפיץ + armor.נפיץ
                let sum2 = operationData.עשן_ישן + armor.עשן_ישן
                let sum3 = operationData.עשן_חדש + armor.עשן_חדש
                let sum4 = operationData.תאורה + armor.תאורה
                let sum5 = operationData.מרעום137 + armor.מרעום137
                let sum6 = operationData.מרעום739 + armor.מרעום739
                let sum7 = operationData.מרעום557 + armor.מרעום557
                let sum8 = operationData.M7 + armor.M7
                let sum9 = operationData.M9 + armor.M9
                let sum10 = operationData.תחל + armor.תחל

                firebase.database().ref("Storage/אגד215/" + truck).set({
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

            firebase.database().ref("Storage/" + destinationGdud+"/ammo").once("value", function (snapshot) {
                operationData = snapshot.val();
                let sum1 = operationData.נפיץ - armor.נפיץ
                let sum2 = operationData.עשן_ישן - armor.עשן_ישן
                let sum3 = operationData.עשן_חדש - armor.עשן_חדש
                let sum4 = operationData.תאורה - armor.תאורה
                let sum5 = operationData.מרעום137 - armor.מרעום137
                let sum6 = operationData.מרעום739 - armor.מרעום739
                let sum7 = operationData.מרעום557 - armor.מרעום557
                let sum8 = operationData.M7 - armor.M7
                let sum9 = operationData.M9 - armor.M9
                let sum10 = operationData.תחל - armor.תחל

                firebase.database().ref("Storage/" + destinationGdud+"/ammo").set({
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

            firebase.database().ref("Storage/אגד215/" + truck).once("value", function (snapshot) {
                operationData = snapshot.val();
                let sum1 = operationData.נפיץ - armor.נפיץ
                let sum2 = operationData.עשן_ישן - armor.עשן_ישן
                let sum3 = operationData.עשן_חדש - armor.עשן_חדש
                let sum4 = operationData.תאורה - armor.תאורה
                let sum5 = operationData.מרעום137 - armor.מרעום137
                let sum6 = operationData.מרעום739 - armor.מרעום739
                let sum7 = operationData.מרעום557 - armor.מרעום557
                let sum8 = operationData.M7 - armor.M7
                let sum9 = operationData.M9 - armor.M9
                let sum10 = operationData.תחל - armor.תחל

                firebase.database().ref("Storage/אגד215/" + truck).set({
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



        });
    }


    removeFromStorage = (armor,place) =>{
        let operationData = {}
        firebase.database().ref("Storage/"+place).once("value", function(snapshot) {
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



    writeData = (armor,source) =>{
        let operationData={}
        firebase.database().ref("Operation/"+source).once("value", function(snapshot) {
            operationData = snapshot.val();
            let sum1 = operationData.נפיץ + armor.נפיץ
            let sum2 = operationData.עשן_ישן + armor.עשן_ישן
            let sum3 = operationData.עשן_חדש + armor.עשן_חדש
            let sum4 = operationData.תאורה + armor.תאורה
            let sum5 = operationData.מרעום137 + armor.מרעום137
            let sum6 = operationData.מרעום739 + armor.מרעום739
            let sum7 = operationData.מרעום557 + armor.מרעום557
            let sum8 = operationData.M7 + armor.M7
            let sum9 = operationData.M9 + armor.M9
            let sum10 = operationData.תחל + armor.תחל

            firebase.database().ref('Operation/'+source).set({
                נפיץ:sum1,
                עשן_ישן:sum2,
                עשן_חדש:sum3,
                תאורה:sum4,
                מרעום137:sum5,
                מרעום557:sum6,
                מרעום739:sum7,
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


    defaultOperation = () =>{

        let data = {
            נפיץ: 240,
            עשן_ישן: 336,
            עשן_חדש: 912,
            תאורה: 72,
            מרעום137: 312,
            מרעום739: 240,
            מרעום557: 1008,
            M7: 408,
            M9: 1152,
            תחל: 1680,

        }
        setNewData(data,"Operation", "55/ammo")
        setNewData(data,"Operation", "402/ammo")
        setNewData(data,"Operation", "403/ammo")
        setNewData(data,"Operation", "531/ammo")
        this.removeFromStorage(data,"55/ammo")
        this.removeFromStorage(data,"402/ammo")
        this.removeFromStorage(data,"403/ammo")
        this.removeFromStorage(data,"531/ammo")

        data = {
            נפיץ: 144,
            עשן_ישן: 0,
            עשן_חדש: 0,
            תאורה: 0,
            מרעום137: 24,
            מרעום739: 120,
            מרעום557: 0,
            M7: 48,
            M9: 96,
            תחל: 160,

        }
        setNewData(data,"Operation/55", "משאית1")
        setNewData(data,"Operation/55", "משאית2")
        setNewData(data,"Operation/55", "משאית3")
        setNewData(data,"Operation/55", "משאית4")

        setNewData(data,"Operation/402", "משאית1")
        setNewData(data,"Operation/402", "משאית2")
        setNewData(data,"Operation/402", "משאית3")
        setNewData(data,"Operation/402", "משאית4")

        setNewData(data,"Operation/403", "משאית1")
        setNewData(data,"Operation/403", "משאית2")
        setNewData(data,"Operation/403", "משאית3")
        setNewData(data,"Operation/403", "משאית4")

        setNewData(data,"Operation/531", "משאית1")
        setNewData(data,"Operation/531", "משאית2")
        setNewData(data,"Operation/531", "משאית3")
        setNewData(data,"Operation/531", "משאית4")

        data = {
            נפיץ: 0,
            עשן_ישן: 0,
            עשן_חדש: 144,
            תאורה: 0,
            מרעום137: 48,
            מרעום739: 0,
            מרעום557: 96,
            M7: 48,
            M9: 96,
            תחל: 160,

        }
        setNewData(data,"Operation/55", "משאית5")
        setNewData(data,"Operation/402", "משאית5")
        setNewData(data,"Operation/403", "משאית5")
        setNewData(data,"Operation/531", "משאית5")

        data = {
            נפיץ: 0,
            עשן_ישן: 48,
            עשן_חדש: 0,
            תאורה: 96,
            מרעום137: 48,
            מרעום739: 0,
            מרעום557: 96,
            M7: 48,
            M9: 96,
            תחל: 160,

        }
        setNewData(data,"Operation/55", "משאית6")
        setNewData(data,"Operation/402", "משאית6")
        setNewData(data,"Operation/403", "משאית6")
        setNewData(data,"Operation/531", "משאית6")

        data = {
            נפיץ: 960,
            עשן_ישן: 1344,
            עשן_חדש: 3648,
            תאורה: 288,
            מרעום137: 1248,
            מרעום739: 960,
            מרעום557: 4032,
            M7: 1632,
            M9: 4608,
            תחל: 6720,

        }
        setNewData(data,"Operation/אגד215", "ammo")
        this.removeFromStorage(data,"אגד215/ammo")
        data = {
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

        }
        setNewData(data,"Operation/אגד215", "משאית1")
        setNewData(data,"Operation/אגד215", "משאית2")
        setNewData(data,"Operation/אגד215", "משאית3")
        setNewData(data,"Operation/אגד215", "משאית4")
        setNewData(data,"Operation/אגד215", "משאית5")
        setNewData(data,"Operation/אגד215", "משאית6")
        setNewData(data,"Operation/אגד215", "משאית7")
        setNewData(data,"Operation/אגד215", "משאית8")
        setNewData(data,"Operation/אגד215", "משאית9")
        setNewData(data,"Operation/אגד215", "משאית10")

        data = {
            נפיץ: 80,
            עשן_ישן: 112,
            עשן_חדש: 304,
            תאורה: 24,
            מרעום137: 104,
            מרעום739: 80,
            מרעום557: 336,
            M7: 136,
            M9: 384,
            תחל: 560,

        }
        setNewData(data,"Operation", "55א")
        setNewData(data,"Operation", "55ב")
        setNewData(data,"Operation", "55ג")
        this.removeFromStorage(data,"55א")
        this.removeFromStorage(data,"55ב")
        this.removeFromStorage(data,"55ג")


        data = {
            נפיץ: 80,
            עשן_ישן: 112,
            עשן_חדש: 304,
            תאורה: 24,
            מרעום137: 104,
            מרעום739: 80,
            מרעום557: 336,
            M7: 136,
            M9: 384,
            תחל: 560,

        }
        setNewData(data,"Operation","402א")
        setNewData(data,"Operation","402ב")
        setNewData(data,"Operation","402ג")
        this.removeFromStorage(data,"402א")
        this.removeFromStorage(data,"402ב")
        this.removeFromStorage(data,"402ג")


        data = {
            נפיץ: 80,
            עשן_ישן: 112,
            עשן_חדש: 304,
            תאורה: 24,
            מרעום137: 104,
            מרעום739: 80,
            מרעום557: 336,
            M7: 136,
            M9: 384,
            תחל: 560,

        }
        setNewData(data,"Operation","403א")
        setNewData(data,"Operation","403ב")
        setNewData(data,"Operation","403ג")
        this.removeFromStorage(data,"403א")
        this.removeFromStorage(data,"403ב")
        this.removeFromStorage(data,"403ג")


        data = {
            נפיץ: 80,
            עשן_ישן: 112,
            עשן_חדש: 304,
            תאורה: 24,
            מרעום137: 104,
            מרעום739: 80,
            מרעום557: 336,
            M7: 136,
            M9: 384,
            תחל: 560,

        }
        setNewData(data,"Operation","531א")
        setNewData(data,"Operation","531ב")
        setNewData(data,"Operation","531ג")
        this.removeFromStorage(data,"531א")
        this.removeFromStorage(data,"531ב")
        this.removeFromStorage(data,"531ג")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","55א_1")
        setNewData(data,"Operation","55א_2")
        this.removeFromStorage(data,"55א_1")
        this.removeFromStorage(data,"55א_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","55ב_1")
        setNewData(data,"Operation","55ב_2")
        this.removeFromStorage(data,"55ב_1")
        this.removeFromStorage(data,"55ב_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","55ג_1")
        setNewData(data,"Operation","55ג_2")
        this.removeFromStorage(data,"55ג_1")
        this.removeFromStorage(data,"55ג_2")

        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","531א_1")
        setNewData(data,"Operation","531א_2")
        this.removeFromStorage(data,"531א_1")
        this.removeFromStorage(data,"531א_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","531ב_1")
        setNewData(data,"Operation","531ב_2")
        this.removeFromStorage(data,"531ב_1")
        this.removeFromStorage(data,"531ב_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","531ג_1")
        setNewData(data,"Operation","531ג_2")
        this.removeFromStorage(data,"531ג_1")
        this.removeFromStorage(data,"531ג_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","402א_1")
        setNewData(data,"Operation","402א_2")
        this.removeFromStorage(data,"402א_1")
        this.removeFromStorage(data,"402א_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","402ב_1")
        setNewData(data,"Operation","402ב_2")
        this.removeFromStorage(data,"402ב_1")
        this.removeFromStorage(data,"402ב_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","402ג_1")
        setNewData(data,"Operation","402ג_2")
        this.removeFromStorage(data,"402ג_1")
        this.removeFromStorage(data,"402ג_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","403א_1")
        setNewData(data,"Operation","403א_2")
        this.removeFromStorage(data,"403א_1")
        this.removeFromStorage(data,"403א_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","403ב_1")
        setNewData(data,"Operation","403ב_2")
        this.removeFromStorage(data,"403ב_1")
        this.removeFromStorage(data,"403ב_2")


        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Operation","403ג_1")
        setNewData(data,"Operation","403ג_2")
        this.removeFromStorage(data,"403ג_1")
        this.removeFromStorage(data,"403ג_2")

        data={
            נפיץ:13,
            עשן_ישן:18,
            עשן_חדש:50,
            תאורה:4,
            מרעום137:17,
            מרעום739:13,
            מרעום557:56,
            M7:22,
            M9:64,
            תחל:93,

        }
        setNewData(data,"Operation","55א_1_א")
        setNewData(data,"Operation","55א_1_ב")
        setNewData(data,"Operation","55א_1_ג")
        setNewData(data,"Operation","55א_2_א")
        setNewData(data,"Operation","55א_2_ב")
        setNewData(data,"Operation","55א_2_ג")
        setNewData(data,"Operation","55ב_1_א")
        setNewData(data,"Operation","55ב_1_ב")
        setNewData(data,"Operation","55ב_1_ג")
        setNewData(data,"Operation","55ב_2_א")
        setNewData(data,"Operation","55ב_2_ב")
        setNewData(data,"Operation","55ב_2_ג")
        setNewData(data,"Operation","55ג_1_א")
        setNewData(data,"Operation","55ג_1_ב")
        setNewData(data,"Operation","55ג_1_ג")
        setNewData(data,"Operation","55ג_2_א")
        setNewData(data,"Operation","55ג_2_ב")
        setNewData(data,"Operation","55ג_2_ג")
        this.removeFromStorage(data,"55א_1_א"+"/ammo")
        this.removeFromStorage(data,"55א_1_ב"+"/ammo")
        this.removeFromStorage(data,"55א_1_ג"+"/ammo")
        this.removeFromStorage(data,"55א_2_א"+"/ammo")
        this.removeFromStorage(data,"55א_2_ב"+"/ammo")
        this.removeFromStorage(data,"55א_2_ג"+"/ammo")
        this.removeFromStorage(data,"55ב_1_א"+"/ammo")
        this.removeFromStorage(data,"55ב_1_ב"+"/ammo")
        this.removeFromStorage(data,"55ב_1_ג"+"/ammo")
        this.removeFromStorage(data,"55ב_2_א"+"/ammo")
        this.removeFromStorage(data,"55ב_2_ב"+"/ammo")
        this.removeFromStorage(data,"55ב_2_ג"+"/ammo")
        this.removeFromStorage(data,"55ג_1_א"+"/ammo")
        this.removeFromStorage(data,"55ג_1_ב"+"/ammo")
        this.removeFromStorage(data,"55ג_1_ג"+"/ammo")
        this.removeFromStorage(data,"55ג_2_א"+"/ammo")
        this.removeFromStorage(data,"55ג_2_ב"+"/ammo")
        this.removeFromStorage(data,"55ג_2_ג"+"/ammo")



        data={
            נפיץ:13,
            עשן_ישן:18,
            עשן_חדש:50,
            תאורה:4,
            מרעום137:17,
            מרעום739:13,
            מרעום557:56,
            M7:22,
            M9:64,
            תחל:93,

        }
        setNewData(data,"Operation","402א_1_א")
        setNewData(data,"Operation","402א_1_ב")
        setNewData(data,"Operation","402א_1_ג")
        setNewData(data,"Operation","402א_2_א")
        setNewData(data,"Operation","402א_2_ב")
        setNewData(data,"Operation","402א_2_ג")
        setNewData(data,"Operation","402ב_1_א")
        setNewData(data,"Operation","402ב_1_ב")
        setNewData(data,"Operation","402ב_1_ג")
        setNewData(data,"Operation","402ב_2_א")
        setNewData(data,"Operation","402ב_2_ב")
        setNewData(data,"Operation","402ב_2_ג")
        setNewData(data,"Operation","402ג_1_א")
        setNewData(data,"Operation","402ג_1_ב")
        setNewData(data,"Operation","402ג_1_ג")
        setNewData(data,"Operation","402ג_2_א")
        setNewData(data,"Operation","402ג_2_ב")
        setNewData(data,"Operation","402ג_2_ג")
        this.removeFromStorage(data,"402א_1_א"+"/ammo")
        this.removeFromStorage(data,"402א_1_ב"+"/ammo")
        this.removeFromStorage(data,"402א_1_ג"+"/ammo")
        this.removeFromStorage(data,"402א_2_א"+"/ammo")
        this.removeFromStorage(data,"402א_2_ב"+"/ammo")
        this.removeFromStorage(data,"402א_2_ג"+"/ammo")
        this.removeFromStorage(data,"402ב_1_א"+"/ammo")
        this.removeFromStorage(data,"402ב_1_ב"+"/ammo")
        this.removeFromStorage(data,"402ב_1_ג"+"/ammo")
        this.removeFromStorage(data,"402ב_2_א"+"/ammo")
        this.removeFromStorage(data,"402ב_2_ב"+"/ammo")
        this.removeFromStorage(data,"402ב_2_ג"+"/ammo")
        this.removeFromStorage(data,"402ג_1_א"+"/ammo")
        this.removeFromStorage(data,"402ג_1_ב"+"/ammo")
        this.removeFromStorage(data,"402ג_1_ג"+"/ammo")
        this.removeFromStorage(data,"402ג_2_א"+"/ammo")
        this.removeFromStorage(data,"402ג_2_ב"+"/ammo")
        this.removeFromStorage(data,"402ג_2_ג"+"/ammo")


        data={
            נפיץ:13,
            עשן_ישן:18,
            עשן_חדש:50,
            תאורה:4,
            מרעום137:17,
            מרעום739:13,
            מרעום557:56,
            M7:22,
            M9:64,
            תחל:93,

        }
        setNewData(data,"Operation","403א_1_א")
        setNewData(data,"Operation","403א_1_ב")
        setNewData(data,"Operation","403א_1_ג")
        setNewData(data,"Operation","403א_2_א")
        setNewData(data,"Operation","403א_2_ב")
        setNewData(data,"Operation","403א_2_ג")
        setNewData(data,"Operation","403ב_1_א")
        setNewData(data,"Operation","403ב_1_ב")
        setNewData(data,"Operation","403ב_1_ג")
        setNewData(data,"Operation","403ב_2_א")
        setNewData(data,"Operation","403ב_2_ב")
        setNewData(data,"Operation","403ב_2_ג")
        setNewData(data,"Operation","403ג_1_א")
        setNewData(data,"Operation","403ג_1_ב")
        setNewData(data,"Operation","403ג_1_ג")
        setNewData(data,"Operation","403ג_2_א")
        setNewData(data,"Operation","403ג_2_ב")
        setNewData(data,"Operation","403ג_2_ג")
        this.removeFromStorage(data,"403א_1_א"+"/ammo")
        this.removeFromStorage(data,"403א_1_ב"+"/ammo")
        this.removeFromStorage(data,"403א_1_ג"+"/ammo")
        this.removeFromStorage(data,"403א_2_א"+"/ammo")
        this.removeFromStorage(data,"403א_2_ב"+"/ammo")
        this.removeFromStorage(data,"403א_2_ג"+"/ammo")
        this.removeFromStorage(data,"403ב_1_א"+"/ammo")
        this.removeFromStorage(data,"403ב_1_ב"+"/ammo")
        this.removeFromStorage(data,"403ב_1_ג"+"/ammo")
        this.removeFromStorage(data,"403ב_2_א"+"/ammo")
        this.removeFromStorage(data,"403ב_2_ב"+"/ammo")
        this.removeFromStorage(data,"403ב_2_ג"+"/ammo")
        this.removeFromStorage(data,"403ג_1_א"+"/ammo")
        this.removeFromStorage(data,"403ג_1_ב"+"/ammo")
        this.removeFromStorage(data,"403ג_1_ג"+"/ammo")
        this.removeFromStorage(data,"403ג_2_א"+"/ammo")
        this.removeFromStorage(data,"403ג_2_ב"+"/ammo")
        this.removeFromStorage(data,"403ג_2_ג"+"/ammo")


        data={
            נפיץ:13,
            עשן_ישן:18,
            עשן_חדש:50,
            תאורה:4,
            מרעום137:17,
            מרעום739:13,
            מרעום557:56,
            M7:22,
            M9:64,
            תחל:93,

        }
        setNewData(data,"Operation","531א_1_א")
        setNewData(data,"Operation","531א_1_ב")
        setNewData(data,"Operation","531א_1_ג")
        setNewData(data,"Operation","531א_2_א")
        setNewData(data,"Operation","531א_2_ב")
        setNewData(data,"Operation","531א_2_ג")
        setNewData(data,"Operation","531ב_1_א")
        setNewData(data,"Operation","531ב_1_ב")
        setNewData(data,"Operation","531ב_1_ב")
        setNewData(data,"Operation","531ב_2_א")
        setNewData(data,"Operation","531ב_2_ב")
        setNewData(data,"Operation","531ב_2_ג")
        setNewData(data,"Operation","531ג_1_א")
        setNewData(data,"Operation","531ג_1_ב")
        setNewData(data,"Operation","531ג_1_ג")
        setNewData(data,"Operation","531ג_2_א")
        setNewData(data,"Operation","531ג_2_ב")
        setNewData(data,"Operation","531ג_2_ג")
        this.removeFromStorage(data,"531א_1_א"+"/ammo")
        this.removeFromStorage(data,"531א_1_ב"+"/ammo")
        this.removeFromStorage(data,"531א_1_ג"+"/ammo")
        this.removeFromStorage(data,"531א_2_א"+"/ammo")
        this.removeFromStorage(data,"531א_2_ב"+"/ammo")
        this.removeFromStorage(data,"531א_2_ג"+"/ammo")
        this.removeFromStorage(data,"531ב_1_א"+"/ammo")
        this.removeFromStorage(data,"531ב_1_ב"+"/ammo")
        this.removeFromStorage(data,"531ב_1_ג"+"/ammo")
        this.removeFromStorage(data,"531ב_2_א"+"/ammo")
        this.removeFromStorage(data,"531ב_2_ב"+"/ammo")
        this.removeFromStorage(data,"531ב_2_ג"+"/ammo")
        this.removeFromStorage(data,"531ג_1_א"+"/ammo")
        this.removeFromStorage(data,"531ג_1_ב"+"/ammo")
        this.removeFromStorage(data,"531ג_1_ג"+"/ammo")
        this.removeFromStorage(data,"531ג_2_א"+"/ammo")
        this.removeFromStorage(data,"531ג_2_ב"+"/ammo")
        this.removeFromStorage(data,"531ג_2_ג"+"/ammo")
    }


    defaultStorage = () => {


        let data = {
            נפיץ: 720,
            עשן_ישן: 1008,
            עשן_חדש: 2736,
            תאורה: 216,
            מרעום137: 936,
            מרעום739: 720,
            מרעום557: 3024,
            M7: 1224,
            M9: 3456,
            תחל: 5040,

        }
        setNewData(data,"Storage", "55/ammo")
        setNewData(data,"Storage", "402/ammo")
        setNewData(data,"Storage", "403/ammo")
        setNewData(data,"Storage", "531/ammo")

        data = {
            נפיץ: 144,
            עשן_ישן: 0,
            עשן_חדש: 0,
            תאורה: 0,
            מרעום137: 24,
            מרעום739: 120,
            מרעום557: 0,
            M7: 48,
            M9: 96,
            תחל: 160,

        }
        setNewData(data,"Storage/55/קרקע", "משאית1")
        setNewData(data,"Storage/55/קרקע", "משאית2")
        setNewData(data,"Storage/55/קרקע", "משאית3")
        setNewData(data,"Storage/55/קרקע", "משאית4")

        setNewData(data,"Storage/402/קרקע", "משאית1")
        setNewData(data,"Storage/402/קרקע", "משאית2")
        setNewData(data,"Storage/402/קרקע", "משאית3")
        setNewData(data,"Storage/402/קרקע", "משאית4")

        setNewData(data,"Storage/403/קרקע", "משאית1")
        setNewData(data,"Storage/403/קרקע", "משאית2")
        setNewData(data,"Storage/403/קרקע", "משאית3")
        setNewData(data,"Storage/403/קרקע", "משאית4")

        setNewData(data,"Storage/531/קרקע", "משאית1")
        setNewData(data,"Storage/531/קרקע", "משאית2")
        setNewData(data,"Storage/531/קרקע", "משאית3")
        setNewData(data,"Storage/531/קרקע", "משאית4")

        data = {
            נפיץ: 0,
            עשן_ישן: 0,
            עשן_חדש: 144,
            תאורה: 0,
            מרעום137: 48,
            מרעום739: 0,
            מרעום557: 96,
            M7: 48,
            M9: 96,
            תחל: 160,

        }
        setNewData(data,"Storage/55/קרקע", "משאית5")
        setNewData(data,"Storage/402/קרקע", "משאית5")
        setNewData(data,"Storage/403/קרקע", "משאית5")
        setNewData(data,"Storage/531/קרקע", "משאית5")

        data = {
            נפיץ: 0,
            עשן_ישן: 48,
            עשן_חדש: 0,
            תאורה: 96,
            מרעום137: 48,
            מרעום739: 0,
            מרעום557: 96,
            M7: 48,
            M9: 96,
            תחל: 160,

        }
        setNewData(data,"Storage/55/קרקע", "משאית6")
        setNewData(data,"Storage/402/קרקע", "משאית6")
        setNewData(data,"Storage/403/קרקע", "משאית6")
        setNewData(data,"Storage/531/קרקע", "משאית6")



        data = {
            נפיץ: 2880,
            עשן_ישן: 4032,
            עשן_חדש: 10944,
            תאורה: 864,
            מרעום137: 3744,
            מרעום739: 2880,
            מרעום557: 12096,
            M7: 4896,
            M9: 13824,
            תחל: 20160,

        }
        setNewData(data,"Storage/אגד215", "ammo")
        data = {
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

        }
        setNewData(data,"Storage/אגד215", "משאית1")
        setNewData(data,"Storage/אגד215", "משאית2")
        setNewData(data,"Storage/אגד215", "משאית3")
        setNewData(data,"Storage/אגד215", "משאית4")
        setNewData(data,"Storage/אגד215", "משאית5")
        setNewData(data,"Storage/אגד215", "משאית6")
        setNewData(data,"Storage/אגד215", "משאית7")
        setNewData(data,"Storage/אגד215", "משאית8")
        setNewData(data,"Storage/אגד215", "משאית9")
        setNewData(data,"Storage/אגד215", "משאית10")

        setNewData(data,"Storage/55", "משאית1")
        setNewData(data,"Storage/55", "משאית2")
        setNewData(data,"Storage/55", "משאית3")
        setNewData(data,"Storage/55", "משאית4")
        setNewData(data,"Storage/55", "משאית5")
        setNewData(data,"Storage/55", "משאית6")
        setNewData(data,"Storage/55", "משאית7")
        setNewData(data,"Storage/55", "משאית8")
        setNewData(data,"Storage/55", "משאית9")
        setNewData(data,"Storage/55", "משאית10")

        setNewData(data,"Storage/402", "משאית1")
        setNewData(data,"Storage/402", "משאית2")
        setNewData(data,"Storage/402", "משאית3")
        setNewData(data,"Storage/402", "משאית4")
        setNewData(data,"Storage/402", "משאית5")
        setNewData(data,"Storage/402", "משאית6")
        setNewData(data,"Storage/402", "משאית7")
        setNewData(data,"Storage/402", "משאית8")
        setNewData(data,"Storage/402", "משאית9")
        setNewData(data,"Storage/402", "משאית10")

        setNewData(data,"Storage/403", "משאית1")
        setNewData(data,"Storage/403", "משאית2")
        setNewData(data,"Storage/403", "משאית3")
        setNewData(data,"Storage/403", "משאית4")
        setNewData(data,"Storage/403", "משאית5")
        setNewData(data,"Storage/403", "משאית6")
        setNewData(data,"Storage/403", "משאית7")
        setNewData(data,"Storage/403", "משאית8")
        setNewData(data,"Storage/403", "משאית9")
        setNewData(data,"Storage/403", "משאית10")

        setNewData(data,"Storage/531", "משאית1")
        setNewData(data,"Storage/531", "משאית2")
        setNewData(data,"Storage/531", "משאית3")
        setNewData(data,"Storage/531", "משאית4")
        setNewData(data,"Storage/531", "משאית5")
        setNewData(data,"Storage/531", "משאית6")
        setNewData(data,"Storage/531", "משאית7")
        setNewData(data,"Storage/531", "משאית8")
        setNewData(data,"Storage/531", "משאית9")
        setNewData(data,"Storage/531", "משאית10")

        setNewData(data,"Storage/55", "משאית1")
        setNewData(data,"Storage/55", "משאית2")
        setNewData(data,"Storage/55", "משאית3")
        setNewData(data,"Storage/55", "משאית4")
        setNewData(data,"Storage/55", "משאית5")
        setNewData(data,"Storage/55", "משאית6")
        setNewData(data,"Storage/55", "משאית7")
        setNewData(data,"Storage/55", "משאית8")
        setNewData(data,"Storage/55", "משאית9")
        setNewData(data,"Storage/55", "משאית10")



        setNewData(data,"Storage/55א_1_א", "משאית1")
        setNewData(data,"Storage/55א_1_א", "משאית2")
        setNewData(data,"Storage/55א_1_א", "משאית3")
        setNewData(data,"Storage/55א_1_א", "משאית4")
        setNewData(data,"Storage/55א_1_א", "משאית5")
        setNewData(data,"Storage/55א_1_א", "משאית6")
        setNewData(data,"Storage/55א_1_א", "משאית7")
        setNewData(data,"Storage/55א_1_א", "משאית8")
        setNewData(data,"Storage/55א_1_א", "משאית9")
        setNewData(data,"Storage/55א_1_א", "משאית10")

        setNewData(data,"Storage/55א_1_ב", "משאית1")
        setNewData(data,"Storage/55א_1_ב", "משאית2")
        setNewData(data,"Storage/55א_1_ב", "משאית3")
        setNewData(data,"Storage/55א_1_ב", "משאית4")
        setNewData(data,"Storage/55א_1_ב", "משאית5")
        setNewData(data,"Storage/55א_1_ב", "משאית6")
        setNewData(data,"Storage/55א_1_ב", "משאית7")
        setNewData(data,"Storage/55א_1_ב", "משאית8")
        setNewData(data,"Storage/55א_1_ב", "משאית9")
        setNewData(data,"Storage/55א_1_ב", "משאית10")

        setNewData(data,"Storage/55א_1_ג", "משאית1")
        setNewData(data,"Storage/55א_1_ג", "משאית2")
        setNewData(data,"Storage/55א_1_ג", "משאית3")
        setNewData(data,"Storage/55א_1_ג", "משאית4")
        setNewData(data,"Storage/55א_1_ג", "משאית5")
        setNewData(data,"Storage/55א_1_ג", "משאית6")
        setNewData(data,"Storage/55א_1_ג", "משאית7")
        setNewData(data,"Storage/55א_1_ג", "משאית8")
        setNewData(data,"Storage/55א_1_ג", "משאית9")
        setNewData(data,"Storage/55א_1_ג", "משאית10")

        setNewData(data,"Storage/55א_2_א", "משאית1")
        setNewData(data,"Storage/55א_2_א", "משאית2")
        setNewData(data,"Storage/55א_2_א", "משאית3")
        setNewData(data,"Storage/55א_2_א", "משאית4")
        setNewData(data,"Storage/55א_2_א", "משאית5")
        setNewData(data,"Storage/55א_2_א", "משאית6")
        setNewData(data,"Storage/55א_2_א", "משאית7")
        setNewData(data,"Storage/55א_2_א", "משאית8")
        setNewData(data,"Storage/55א_2_א", "משאית9")
        setNewData(data,"Storage/55א_2_א", "משאית10")

        setNewData(data,"Storage/55א_2_ב", "משאית1")
        setNewData(data,"Storage/55א_2_ב", "משאית2")
        setNewData(data,"Storage/55א_2_ב", "משאית3")
        setNewData(data,"Storage/55א_2_ב", "משאית4")
        setNewData(data,"Storage/55א_2_ב", "משאית5")
        setNewData(data,"Storage/55א_2_ב", "משאית6")
        setNewData(data,"Storage/55א_2_ב", "משאית7")
        setNewData(data,"Storage/55א_2_ב", "משאית8")
        setNewData(data,"Storage/55א_2_ב", "משאית9")
        setNewData(data,"Storage/55א_2_ב", "משאית10")

        setNewData(data,"Storage/55א_2_ג", "משאית1")
        setNewData(data,"Storage/55א_2_ג", "משאית2")
        setNewData(data,"Storage/55א_2_ג", "משאית3")
        setNewData(data,"Storage/55א_2_ג", "משאית4")
        setNewData(data,"Storage/55א_2_ג", "משאית5")
        setNewData(data,"Storage/55א_2_ג", "משאית6")
        setNewData(data,"Storage/55א_2_ג", "משאית7")
        setNewData(data,"Storage/55א_2_ג", "משאית8")
        setNewData(data,"Storage/55א_2_ג", "משאית9")
        setNewData(data,"Storage/55א_2_ג", "משאית10")

        setNewData(data,"Storage/55ב_1_א", "משאית1")
        setNewData(data,"Storage/55ב_1_א", "משאית2")
        setNewData(data,"Storage/55ב_1_א", "משאית3")
        setNewData(data,"Storage/55ב_1_א", "משאית4")
        setNewData(data,"Storage/55ב_1_א", "משאית5")
        setNewData(data,"Storage/55ב_1_א", "משאית6")
        setNewData(data,"Storage/55ב_1_א", "משאית7")
        setNewData(data,"Storage/55ב_1_א", "משאית8")
        setNewData(data,"Storage/55ב_1_א", "משאית9")
        setNewData(data,"Storage/55ב_1_א", "משאית10")

        setNewData(data,"Storage/55ב_1_ב", "משאית1")
        setNewData(data,"Storage/55ב_1_ב", "משאית2")
        setNewData(data,"Storage/55ב_1_ב", "משאית3")
        setNewData(data,"Storage/55ב_1_ב", "משאית4")
        setNewData(data,"Storage/55ב_1_ב", "משאית5")
        setNewData(data,"Storage/55ב_1_ב", "משאית6")
        setNewData(data,"Storage/55ב_1_ב", "משאית7")
        setNewData(data,"Storage/55ב_1_ב", "משאית8")
        setNewData(data,"Storage/55ב_1_ב", "משאית9")
        setNewData(data,"Storage/55ב_1_ב", "משאית10")

        setNewData(data,"Storage/55ב_1_ג", "משאית1")
        setNewData(data,"Storage/55ב_1_ג", "משאית2")
        setNewData(data,"Storage/55ב_1_ג", "משאית3")
        setNewData(data,"Storage/55ב_1_ג", "משאית4")
        setNewData(data,"Storage/55ב_1_ג", "משאית5")
        setNewData(data,"Storage/55ב_1_ג", "משאית6")
        setNewData(data,"Storage/55ב_1_ג", "משאית7")
        setNewData(data,"Storage/55ב_1_ג", "משאית8")
        setNewData(data,"Storage/55ב_1_ג", "משאית9")
        setNewData(data,"Storage/55ב_1_ג", "משאית10")

        setNewData(data,"Storage/55ב_2_א", "משאית1")
        setNewData(data,"Storage/55ב_2_א", "משאית2")
        setNewData(data,"Storage/55ב_2_א", "משאית3")
        setNewData(data,"Storage/55ב_2_א", "משאית4")
        setNewData(data,"Storage/55ב_2_א", "משאית5")
        setNewData(data,"Storage/55ב_2_א", "משאית6")
        setNewData(data,"Storage/55ב_2_א", "משאית7")
        setNewData(data,"Storage/55ב_2_א", "משאית8")
        setNewData(data,"Storage/55ב_2_א", "משאית9")
        setNewData(data,"Storage/55ב_2_א", "משאית10")

        setNewData(data,"Storage/55ב_2_ב", "משאית1")
        setNewData(data,"Storage/55ב_2_ב", "משאית2")
        setNewData(data,"Storage/55ב_2_ב", "משאית3")
        setNewData(data,"Storage/55ב_2_ב", "משאית4")
        setNewData(data,"Storage/55ב_2_ב", "משאית5")
        setNewData(data,"Storage/55ב_2_ב", "משאית6")
        setNewData(data,"Storage/55ב_2_ב", "משאית7")
        setNewData(data,"Storage/55ב_2_ב", "משאית8")
        setNewData(data,"Storage/55ב_2_ב", "משאית9")
        setNewData(data,"Storage/55ב_2_ב", "משאית10")

        setNewData(data,"Storage/55ב_2_ג", "משאית1")
        setNewData(data,"Storage/55ב_2_ג", "משאית2")
        setNewData(data,"Storage/55ב_2_ג", "משאית3")
        setNewData(data,"Storage/55ב_2_ג", "משאית4")
        setNewData(data,"Storage/55ב_2_ג", "משאית5")
        setNewData(data,"Storage/55ב_2_ג", "משאית6")
        setNewData(data,"Storage/55ב_2_ג", "משאית7")
        setNewData(data,"Storage/55ב_2_ג", "משאית8")
        setNewData(data,"Storage/55ב_2_ג", "משאית9")
        setNewData(data,"Storage/55ב_2_ג", "משאית10")

        setNewData(data,"Storage/55ג_1_א", "משאית1")
        setNewData(data,"Storage/55ג_1_א", "משאית2")
        setNewData(data,"Storage/55ג_1_א", "משאית3")
        setNewData(data,"Storage/55ג_1_א", "משאית4")
        setNewData(data,"Storage/55ג_1_א", "משאית5")
        setNewData(data,"Storage/55ג_1_א", "משאית6")
        setNewData(data,"Storage/55ג_1_א", "משאית7")
        setNewData(data,"Storage/55ג_1_א", "משאית8")
        setNewData(data,"Storage/55ג_1_א", "משאית9")
        setNewData(data,"Storage/55ג_1_א", "משאית10")

        setNewData(data,"Storage/55ג_1_ב", "משאית1")
        setNewData(data,"Storage/55ג_1_ב", "משאית2")
        setNewData(data,"Storage/55ג_1_ב", "משאית3")
        setNewData(data,"Storage/55ג_1_ב", "משאית4")
        setNewData(data,"Storage/55ג_1_ב", "משאית5")
        setNewData(data,"Storage/55ג_1_ב", "משאית6")
        setNewData(data,"Storage/55ג_1_ב", "משאית7")
        setNewData(data,"Storage/55ג_1_ב", "משאית8")
        setNewData(data,"Storage/55ג_1_ב", "משאית9")
        setNewData(data,"Storage/55ג_1_ב", "משאית10")

        setNewData(data,"Storage/55ג_1_ג", "משאית1")
        setNewData(data,"Storage/55ג_1_ג", "משאית2")
        setNewData(data,"Storage/55ג_1_ג", "משאית3")
        setNewData(data,"Storage/55ג_1_ג", "משאית4")
        setNewData(data,"Storage/55ג_1_ג", "משאית5")
        setNewData(data,"Storage/55ג_1_ג", "משאית6")
        setNewData(data,"Storage/55ג_1_ג", "משאית7")
        setNewData(data,"Storage/55ג_1_ג", "משאית8")
        setNewData(data,"Storage/55ג_1_ג", "משאית9")
        setNewData(data,"Storage/55ג_1_ג", "משאית10")

        setNewData(data,"Storage/55ג_2_א", "משאית1")
        setNewData(data,"Storage/55ג_2_א", "משאית2")
        setNewData(data,"Storage/55ג_2_א", "משאית3")
        setNewData(data,"Storage/55ג_2_א", "משאית4")
        setNewData(data,"Storage/55ג_2_א", "משאית5")
        setNewData(data,"Storage/55ג_2_א", "משאית6")
        setNewData(data,"Storage/55ג_2_א", "משאית7")
        setNewData(data,"Storage/55ג_2_א", "משאית8")
        setNewData(data,"Storage/55ג_2_א", "משאית9")
        setNewData(data,"Storage/55ג_2_א", "משאית10")

        setNewData(data,"Storage/55ג_2_ב", "משאית1")
        setNewData(data,"Storage/55ג_2_ב", "משאית2")
        setNewData(data,"Storage/55ג_2_ב", "משאית3")
        setNewData(data,"Storage/55ג_2_ב", "משאית4")
        setNewData(data,"Storage/55ג_2_ב", "משאית5")
        setNewData(data,"Storage/55ג_2_ב", "משאית6")
        setNewData(data,"Storage/55ג_2_ב", "משאית7")
        setNewData(data,"Storage/55ג_2_ב", "משאית8")
        setNewData(data,"Storage/55ג_2_ב", "משאית9")
        setNewData(data,"Storage/55ג_2_ב", "משאית10")

        setNewData(data,"Storage/55ג_2_ג", "משאית1")
        setNewData(data,"Storage/55ג_2_ג", "משאית2")
        setNewData(data,"Storage/55ג_2_ג", "משאית3")
        setNewData(data,"Storage/55ג_2_ג", "משאית4")
        setNewData(data,"Storage/55ג_2_ג", "משאית5")
        setNewData(data,"Storage/55ג_2_ג", "משאית6")
        setNewData(data,"Storage/55ג_2_ג", "משאית7")
        setNewData(data,"Storage/55ג_2_ג", "משאית8")
        setNewData(data,"Storage/55ג_2_ג", "משאית9")
        setNewData(data,"Storage/55ג_2_ג", "משאית10")

        setNewData(data,"Storage/402א_1_א", "משאית1")
        setNewData(data,"Storage/402א_1_א", "משאית2")
        setNewData(data,"Storage/402א_1_א", "משאית3")
        setNewData(data,"Storage/402א_1_א", "משאית4")
        setNewData(data,"Storage/402א_1_א", "משאית5")
        setNewData(data,"Storage/402א_1_א", "משאית6")
        setNewData(data,"Storage/402א_1_א", "משאית7")
        setNewData(data,"Storage/402א_1_א", "משאית8")
        setNewData(data,"Storage/402א_1_א", "משאית9")
        setNewData(data,"Storage/402א_1_א", "משאית10")

        setNewData(data,"Storage/402א_1_ב", "משאית1")
        setNewData(data,"Storage/402א_1_ב", "משאית2")
        setNewData(data,"Storage/402א_1_ב", "משאית3")
        setNewData(data,"Storage/402א_1_ב", "משאית4")
        setNewData(data,"Storage/402א_1_ב", "משאית5")
        setNewData(data,"Storage/402א_1_ב", "משאית6")
        setNewData(data,"Storage/402א_1_ב", "משאית7")
        setNewData(data,"Storage/402א_1_ב", "משאית8")
        setNewData(data,"Storage/402א_1_ב", "משאית9")
        setNewData(data,"Storage/402א_1_ב", "משאית10")

        setNewData(data,"Storage/402א_1_ג", "משאית1")
        setNewData(data,"Storage/402א_1_ג", "משאית2")
        setNewData(data,"Storage/402א_1_ג", "משאית3")
        setNewData(data,"Storage/402א_1_ג", "משאית4")
        setNewData(data,"Storage/402א_1_ג", "משאית5")
        setNewData(data,"Storage/402א_1_ג", "משאית6")
        setNewData(data,"Storage/402א_1_ג", "משאית7")
        setNewData(data,"Storage/402א_1_ג", "משאית8")
        setNewData(data,"Storage/402א_1_ג", "משאית9")
        setNewData(data,"Storage/402א_1_ג", "משאית10")

        setNewData(data,"Storage/402א_2_א", "משאית1")
        setNewData(data,"Storage/402א_2_א", "משאית2")
        setNewData(data,"Storage/402א_2_א", "משאית3")
        setNewData(data,"Storage/402א_2_א", "משאית4")
        setNewData(data,"Storage/402א_2_א", "משאית5")
        setNewData(data,"Storage/402א_2_א", "משאית6")
        setNewData(data,"Storage/402א_2_א", "משאית7")
        setNewData(data,"Storage/402א_2_א", "משאית8")
        setNewData(data,"Storage/402א_2_א", "משאית9")
        setNewData(data,"Storage/402א_2_א", "משאית10")

        setNewData(data,"Storage/402א_2_ב", "משאית1")
        setNewData(data,"Storage/402א_2_ב", "משאית2")
        setNewData(data,"Storage/402א_2_ב", "משאית3")
        setNewData(data,"Storage/402א_2_ב", "משאית4")
        setNewData(data,"Storage/402א_2_ב", "משאית5")
        setNewData(data,"Storage/402א_2_ב", "משאית6")
        setNewData(data,"Storage/402א_2_ב", "משאית7")
        setNewData(data,"Storage/402א_2_ב", "משאית8")
        setNewData(data,"Storage/402א_2_ב", "משאית9")
        setNewData(data,"Storage/402א_2_ב", "משאית10")

        setNewData(data,"Storage/402א_2_ג", "משאית1")
        setNewData(data,"Storage/402א_2_ג", "משאית2")
        setNewData(data,"Storage/402א_2_ג", "משאית3")
        setNewData(data,"Storage/402א_2_ג", "משאית4")
        setNewData(data,"Storage/402א_2_ג", "משאית5")
        setNewData(data,"Storage/402א_2_ג", "משאית6")
        setNewData(data,"Storage/402א_2_ג", "משאית7")
        setNewData(data,"Storage/402א_2_ג", "משאית8")
        setNewData(data,"Storage/402א_2_ג", "משאית9")
        setNewData(data,"Storage/402א_2_ג", "משאית10")

        setNewData(data,"Storage/402ב_1_א", "משאית1")
        setNewData(data,"Storage/402ב_1_א", "משאית2")
        setNewData(data,"Storage/402ב_1_א", "משאית3")
        setNewData(data,"Storage/402ב_1_א", "משאית4")
        setNewData(data,"Storage/402ב_1_א", "משאית5")
        setNewData(data,"Storage/402ב_1_א", "משאית6")
        setNewData(data,"Storage/402ב_1_א", "משאית7")
        setNewData(data,"Storage/402ב_1_א", "משאית8")
        setNewData(data,"Storage/402ב_1_א", "משאית9")
        setNewData(data,"Storage/402ב_1_א", "משאית10")

        setNewData(data,"Storage/402ב_1_ב", "משאית1")
        setNewData(data,"Storage/402ב_1_ב", "משאית2")
        setNewData(data,"Storage/402ב_1_ב", "משאית3")
        setNewData(data,"Storage/402ב_1_ב", "משאית4")
        setNewData(data,"Storage/402ב_1_ב", "משאית5")
        setNewData(data,"Storage/402ב_1_ב", "משאית6")
        setNewData(data,"Storage/402ב_1_ב", "משאית7")
        setNewData(data,"Storage/402ב_1_ב", "משאית8")
        setNewData(data,"Storage/402ב_1_ב", "משאית9")
        setNewData(data,"Storage/402ב_1_ב", "משאית10")

        setNewData(data,"Storage/402ב_1_ג", "משאית1")
        setNewData(data,"Storage/402ב_1_ג", "משאית2")
        setNewData(data,"Storage/402ב_1_ג", "משאית3")
        setNewData(data,"Storage/402ב_1_ג", "משאית4")
        setNewData(data,"Storage/402ב_1_ג", "משאית5")
        setNewData(data,"Storage/402ב_1_ג", "משאית6")
        setNewData(data,"Storage/402ב_1_ג", "משאית7")
        setNewData(data,"Storage/402ב_1_ג", "משאית8")
        setNewData(data,"Storage/402ב_1_ג", "משאית9")
        setNewData(data,"Storage/402ב_1_ג", "משאית10")

        setNewData(data,"Storage/402ב_2_א", "משאית1")
        setNewData(data,"Storage/402ב_2_א", "משאית2")
        setNewData(data,"Storage/402ב_2_א", "משאית3")
        setNewData(data,"Storage/402ב_2_א", "משאית4")
        setNewData(data,"Storage/402ב_2_א", "משאית5")
        setNewData(data,"Storage/402ב_2_א", "משאית6")
        setNewData(data,"Storage/402ב_2_א", "משאית7")
        setNewData(data,"Storage/402ב_2_א", "משאית8")
        setNewData(data,"Storage/402ב_2_א", "משאית9")
        setNewData(data,"Storage/402ב_2_א", "משאית10")

        setNewData(data,"Storage/402ב_2_ב", "משאית1")
        setNewData(data,"Storage/402ב_2_ב", "משאית2")
        setNewData(data,"Storage/402ב_2_ב", "משאית3")
        setNewData(data,"Storage/402ב_2_ב", "משאית4")
        setNewData(data,"Storage/402ב_2_ב", "משאית5")
        setNewData(data,"Storage/402ב_2_ב", "משאית6")
        setNewData(data,"Storage/402ב_2_ב", "משאית7")
        setNewData(data,"Storage/402ב_2_ב", "משאית8")
        setNewData(data,"Storage/402ב_2_ב", "משאית9")
        setNewData(data,"Storage/402ב_2_ב", "משאית10")

        setNewData(data,"Storage/402ב_2_ג", "משאית1")
        setNewData(data,"Storage/402ב_2_ג", "משאית2")
        setNewData(data,"Storage/402ב_2_ג", "משאית3")
        setNewData(data,"Storage/402ב_2_ג", "משאית4")
        setNewData(data,"Storage/402ב_2_ג", "משאית5")
        setNewData(data,"Storage/402ב_2_ג", "משאית6")
        setNewData(data,"Storage/402ב_2_ג", "משאית7")
        setNewData(data,"Storage/402ב_2_ג", "משאית8")
        setNewData(data,"Storage/402ב_2_ג", "משאית9")
        setNewData(data,"Storage/402ב_2_ג", "משאית10")

        setNewData(data,"Storage/402ג_1_א", "משאית1")
        setNewData(data,"Storage/402ג_1_א", "משאית2")
        setNewData(data,"Storage/402ג_1_א", "משאית3")
        setNewData(data,"Storage/402ג_1_א", "משאית4")
        setNewData(data,"Storage/402ג_1_א", "משאית5")
        setNewData(data,"Storage/402ג_1_א", "משאית6")
        setNewData(data,"Storage/402ג_1_א", "משאית7")
        setNewData(data,"Storage/402ג_1_א", "משאית8")
        setNewData(data,"Storage/402ג_1_א", "משאית9")
        setNewData(data,"Storage/402ג_1_א", "משאית10")

        setNewData(data,"Storage/402ג_1_ב", "משאית1")
        setNewData(data,"Storage/402ג_1_ב", "משאית2")
        setNewData(data,"Storage/402ג_1_ב", "משאית3")
        setNewData(data,"Storage/402ג_1_ב", "משאית4")
        setNewData(data,"Storage/402ג_1_ב", "משאית5")
        setNewData(data,"Storage/402ג_1_ב", "משאית6")
        setNewData(data,"Storage/402ג_1_ב", "משאית7")
        setNewData(data,"Storage/402ג_1_ב", "משאית8")
        setNewData(data,"Storage/402ג_1_ב", "משאית9")
        setNewData(data,"Storage/402ג_1_ב", "משאית10")

        setNewData(data,"Storage/402ג_1_ג", "משאית1")
        setNewData(data,"Storage/402ג_1_ג", "משאית2")
        setNewData(data,"Storage/402ג_1_ג", "משאית3")
        setNewData(data,"Storage/402ג_1_ג", "משאית4")
        setNewData(data,"Storage/402ג_1_ג", "משאית5")
        setNewData(data,"Storage/402ג_1_ג", "משאית6")
        setNewData(data,"Storage/402ג_1_ג", "משאית7")
        setNewData(data,"Storage/402ג_1_ג", "משאית8")
        setNewData(data,"Storage/402ג_1_ג", "משאית9")
        setNewData(data,"Storage/402ג_1_ג", "משאית10")

        setNewData(data,"Storage/402ג_2_א", "משאית1")
        setNewData(data,"Storage/402ג_2_א", "משאית2")
        setNewData(data,"Storage/402ג_2_א", "משאית3")
        setNewData(data,"Storage/402ג_2_א", "משאית4")
        setNewData(data,"Storage/402ג_2_א", "משאית5")
        setNewData(data,"Storage/402ג_2_א", "משאית6")
        setNewData(data,"Storage/402ג_2_א", "משאית7")
        setNewData(data,"Storage/402ג_2_א", "משאית8")
        setNewData(data,"Storage/402ג_2_א", "משאית9")
        setNewData(data,"Storage/402ג_2_א", "משאית10")

        setNewData(data,"Storage/402ג_2_ב", "משאית1")
        setNewData(data,"Storage/402ג_2_ב", "משאית2")
        setNewData(data,"Storage/402ג_2_ב", "משאית3")
        setNewData(data,"Storage/402ג_2_ב", "משאית4")
        setNewData(data,"Storage/402ג_2_ב", "משאית5")
        setNewData(data,"Storage/402ג_2_ב", "משאית6")
        setNewData(data,"Storage/402ג_2_ב", "משאית7")
        setNewData(data,"Storage/402ג_2_ב", "משאית8")
        setNewData(data,"Storage/402ג_2_ב", "משאית9")
        setNewData(data,"Storage/402ג_2_ב", "משאית10")

        setNewData(data,"Storage/402ג_2_ג", "משאית1")
        setNewData(data,"Storage/402ג_2_ג", "משאית2")
        setNewData(data,"Storage/402ג_2_ג", "משאית3")
        setNewData(data,"Storage/402ג_2_ג", "משאית4")
        setNewData(data,"Storage/402ג_2_ג", "משאית5")
        setNewData(data,"Storage/402ג_2_ג", "משאית6")
        setNewData(data,"Storage/402ג_2_ג", "משאית7")
        setNewData(data,"Storage/402ג_2_ג", "משאית8")
        setNewData(data,"Storage/402ג_2_ג", "משאית9")
        setNewData(data,"Storage/402ג_2_ג", "משאית10")

        setNewData(data,"Storage/403א_1_א", "משאית1")
        setNewData(data,"Storage/403א_1_א", "משאית2")
        setNewData(data,"Storage/403א_1_א", "משאית3")
        setNewData(data,"Storage/403א_1_א", "משאית4")
        setNewData(data,"Storage/403א_1_א", "משאית5")
        setNewData(data,"Storage/403א_1_א", "משאית6")
        setNewData(data,"Storage/403א_1_א", "משאית7")
        setNewData(data,"Storage/403א_1_א", "משאית8")
        setNewData(data,"Storage/403א_1_א", "משאית9")
        setNewData(data,"Storage/403א_1_א", "משאית10")

        setNewData(data,"Storage/403א_1_ב", "משאית1")
        setNewData(data,"Storage/403א_1_ב", "משאית2")
        setNewData(data,"Storage/403א_1_ב", "משאית3")
        setNewData(data,"Storage/403א_1_ב", "משאית4")
        setNewData(data,"Storage/403א_1_ב", "משאית5")
        setNewData(data,"Storage/403א_1_ב", "משאית6")
        setNewData(data,"Storage/403א_1_ב", "משאית7")
        setNewData(data,"Storage/403א_1_ב", "משאית8")
        setNewData(data,"Storage/403א_1_ב", "משאית9")
        setNewData(data,"Storage/403א_1_ב", "משאית10")

        setNewData(data,"Storage/403א_1_ג", "משאית1")
        setNewData(data,"Storage/403א_1_ג", "משאית2")
        setNewData(data,"Storage/403א_1_ג", "משאית3")
        setNewData(data,"Storage/403א_1_ג", "משאית4")
        setNewData(data,"Storage/403א_1_ג", "משאית5")
        setNewData(data,"Storage/403א_1_ג", "משאית6")
        setNewData(data,"Storage/403א_1_ג", "משאית7")
        setNewData(data,"Storage/403א_1_ג", "משאית8")
        setNewData(data,"Storage/403א_1_ג", "משאית9")
        setNewData(data,"Storage/403א_1_ג", "משאית10")

        setNewData(data,"Storage/403א_2_א", "משאית1")
        setNewData(data,"Storage/403א_2_א", "משאית2")
        setNewData(data,"Storage/403א_2_א", "משאית3")
        setNewData(data,"Storage/403א_2_א", "משאית4")
        setNewData(data,"Storage/403א_2_א", "משאית5")
        setNewData(data,"Storage/403א_2_א", "משאית6")
        setNewData(data,"Storage/403א_2_א", "משאית7")
        setNewData(data,"Storage/403א_2_א", "משאית8")
        setNewData(data,"Storage/403א_2_א", "משאית9")
        setNewData(data,"Storage/403א_2_א", "משאית10")

        setNewData(data,"Storage/403א_2_ב", "משאית1")
        setNewData(data,"Storage/403א_2_ב", "משאית2")
        setNewData(data,"Storage/403א_2_ב", "משאית3")
        setNewData(data,"Storage/403א_2_ב", "משאית4")
        setNewData(data,"Storage/403א_2_ב", "משאית5")
        setNewData(data,"Storage/403א_2_ב", "משאית6")
        setNewData(data,"Storage/403א_2_ב", "משאית7")
        setNewData(data,"Storage/403א_2_ב", "משאית8")
        setNewData(data,"Storage/403א_2_ב", "משאית9")
        setNewData(data,"Storage/403א_2_ב", "משאית10")

        setNewData(data,"Storage/403א_2_ג", "משאית1")
        setNewData(data,"Storage/403א_2_ג", "משאית2")
        setNewData(data,"Storage/403א_2_ג", "משאית3")
        setNewData(data,"Storage/403א_2_ג", "משאית4")
        setNewData(data,"Storage/403א_2_ג", "משאית5")
        setNewData(data,"Storage/403א_2_ג", "משאית6")
        setNewData(data,"Storage/403א_2_ג", "משאית7")
        setNewData(data,"Storage/403א_2_ג", "משאית8")
        setNewData(data,"Storage/403א_2_ג", "משאית9")
        setNewData(data,"Storage/403א_2_ג", "משאית10")

        setNewData(data,"Storage/403ב_1_א", "משאית1")
        setNewData(data,"Storage/403ב_1_א", "משאית2")
        setNewData(data,"Storage/403ב_1_א", "משאית3")
        setNewData(data,"Storage/403ב_1_א", "משאית4")
        setNewData(data,"Storage/403ב_1_א", "משאית5")
        setNewData(data,"Storage/403ב_1_א", "משאית6")
        setNewData(data,"Storage/403ב_1_א", "משאית7")
        setNewData(data,"Storage/403ב_1_א", "משאית8")
        setNewData(data,"Storage/403ב_1_א", "משאית9")
        setNewData(data,"Storage/403ב_1_א", "משאית10")

        setNewData(data,"Storage/403ב_1_ב", "משאית1")
        setNewData(data,"Storage/403ב_1_ב", "משאית2")
        setNewData(data,"Storage/403ב_1_ב", "משאית3")
        setNewData(data,"Storage/403ב_1_ב", "משאית4")
        setNewData(data,"Storage/403ב_1_ב", "משאית5")
        setNewData(data,"Storage/403ב_1_ב", "משאית6")
        setNewData(data,"Storage/403ב_1_ב", "משאית7")
        setNewData(data,"Storage/403ב_1_ב", "משאית8")
        setNewData(data,"Storage/403ב_1_ב", "משאית9")
        setNewData(data,"Storage/403ב_1_ב", "משאית10")

        setNewData(data,"Storage/403ב_1_ג", "משאית1")
        setNewData(data,"Storage/403ב_1_ג", "משאית2")
        setNewData(data,"Storage/403ב_1_ג", "משאית3")
        setNewData(data,"Storage/403ב_1_ג", "משאית4")
        setNewData(data,"Storage/403ב_1_ג", "משאית5")
        setNewData(data,"Storage/403ב_1_ג", "משאית6")
        setNewData(data,"Storage/403ב_1_ג", "משאית7")
        setNewData(data,"Storage/403ב_1_ג", "משאית8")
        setNewData(data,"Storage/403ב_1_ג", "משאית9")
        setNewData(data,"Storage/403ב_1_ג", "משאית10")

        setNewData(data,"Storage/403ב_2_א", "משאית1")
        setNewData(data,"Storage/403ב_2_א", "משאית2")
        setNewData(data,"Storage/403ב_2_א", "משאית3")
        setNewData(data,"Storage/403ב_2_א", "משאית4")
        setNewData(data,"Storage/403ב_2_א", "משאית5")
        setNewData(data,"Storage/403ב_2_א", "משאית6")
        setNewData(data,"Storage/403ב_2_א", "משאית7")
        setNewData(data,"Storage/403ב_2_א", "משאית8")
        setNewData(data,"Storage/403ב_2_א", "משאית9")
        setNewData(data,"Storage/403ב_2_א", "משאית10")

        setNewData(data,"Storage/403ב_2_ב", "משאית1")
        setNewData(data,"Storage/403ב_2_ב", "משאית2")
        setNewData(data,"Storage/403ב_2_ב", "משאית3")
        setNewData(data,"Storage/403ב_2_ב", "משאית4")
        setNewData(data,"Storage/403ב_2_ב", "משאית5")
        setNewData(data,"Storage/403ב_2_ב", "משאית6")
        setNewData(data,"Storage/403ב_2_ב", "משאית7")
        setNewData(data,"Storage/403ב_2_ב", "משאית8")
        setNewData(data,"Storage/403ב_2_ב", "משאית9")
        setNewData(data,"Storage/403ב_2_ב", "משאית10")

        setNewData(data,"Storage/403ב_2_ג", "משאית1")
        setNewData(data,"Storage/403ב_2_ג", "משאית2")
        setNewData(data,"Storage/403ב_2_ג", "משאית3")
        setNewData(data,"Storage/403ב_2_ג", "משאית4")
        setNewData(data,"Storage/403ב_2_ג", "משאית5")
        setNewData(data,"Storage/403ב_2_ג", "משאית6")
        setNewData(data,"Storage/403ב_2_ג", "משאית7")
        setNewData(data,"Storage/403ב_2_ג", "משאית8")
        setNewData(data,"Storage/403ב_2_ג", "משאית9")
        setNewData(data,"Storage/403ב_2_ג", "משאית10")

        setNewData(data,"Storage/403ג_1_א", "משאית1")
        setNewData(data,"Storage/403ג_1_א", "משאית2")
        setNewData(data,"Storage/403ג_1_א", "משאית3")
        setNewData(data,"Storage/403ג_1_א", "משאית4")
        setNewData(data,"Storage/403ג_1_א", "משאית5")
        setNewData(data,"Storage/403ג_1_א", "משאית6")
        setNewData(data,"Storage/403ג_1_א", "משאית7")
        setNewData(data,"Storage/403ג_1_א", "משאית8")
        setNewData(data,"Storage/403ג_1_א", "משאית9")
        setNewData(data,"Storage/403ג_1_א", "משאית10")

        setNewData(data,"Storage/403ג_1_ב", "משאית1")
        setNewData(data,"Storage/403ג_1_ב", "משאית2")
        setNewData(data,"Storage/403ג_1_ב", "משאית3")
        setNewData(data,"Storage/403ג_1_ב", "משאית4")
        setNewData(data,"Storage/403ג_1_ב", "משאית5")
        setNewData(data,"Storage/403ג_1_ב", "משאית6")
        setNewData(data,"Storage/403ג_1_ב", "משאית7")
        setNewData(data,"Storage/403ג_1_ב", "משאית8")
        setNewData(data,"Storage/403ג_1_ב", "משאית9")
        setNewData(data,"Storage/403ג_1_ב", "משאית10")

        setNewData(data,"Storage/403ג_1_ג", "משאית1")
        setNewData(data,"Storage/403ג_1_ג", "משאית2")
        setNewData(data,"Storage/403ג_1_ג", "משאית3")
        setNewData(data,"Storage/403ג_1_ג", "משאית4")
        setNewData(data,"Storage/403ג_1_ג", "משאית5")
        setNewData(data,"Storage/403ג_1_ג", "משאית6")
        setNewData(data,"Storage/403ג_1_ג", "משאית7")
        setNewData(data,"Storage/403ג_1_ג", "משאית8")
        setNewData(data,"Storage/403ג_1_ג", "משאית9")
        setNewData(data,"Storage/403ג_1_ג", "משאית10")

        setNewData(data,"Storage/403ג_2_א", "משאית1")
        setNewData(data,"Storage/403ג_2_א", "משאית2")
        setNewData(data,"Storage/403ג_2_א", "משאית3")
        setNewData(data,"Storage/403ג_2_א", "משאית4")
        setNewData(data,"Storage/403ג_2_א", "משאית5")
        setNewData(data,"Storage/403ג_2_א", "משאית6")
        setNewData(data,"Storage/403ג_2_א", "משאית7")
        setNewData(data,"Storage/403ג_2_א", "משאית8")
        setNewData(data,"Storage/403ג_2_א", "משאית9")
        setNewData(data,"Storage/403ג_2_א", "משאית10")

        setNewData(data,"Storage/403ג_2_ב", "משאית1")
        setNewData(data,"Storage/403ג_2_ב", "משאית2")
        setNewData(data,"Storage/403ג_2_ב", "משאית3")
        setNewData(data,"Storage/403ג_2_ב", "משאית4")
        setNewData(data,"Storage/403ג_2_ב", "משאית5")
        setNewData(data,"Storage/403ג_2_ב", "משאית6")
        setNewData(data,"Storage/403ג_2_ב", "משאית7")
        setNewData(data,"Storage/403ג_2_ב", "משאית8")
        setNewData(data,"Storage/403ג_2_ב", "משאית9")
        setNewData(data,"Storage/403ג_2_ב", "משאית10")

        setNewData(data,"Storage/403ג_2_ג", "משאית1")
        setNewData(data,"Storage/403ג_2_ג", "משאית2")
        setNewData(data,"Storage/403ג_2_ג", "משאית3")
        setNewData(data,"Storage/403ג_2_ג", "משאית4")
        setNewData(data,"Storage/403ג_2_ג", "משאית5")
        setNewData(data,"Storage/403ג_2_ג", "משאית6")
        setNewData(data,"Storage/403ג_2_ג", "משאית7")
        setNewData(data,"Storage/403ג_2_ג", "משאית8")
        setNewData(data,"Storage/403ג_2_ג", "משאית9")
        setNewData(data,"Storage/403ג_2_ג", "משאית10")

        setNewData(data,"Storage/531א_1_א", "משאית1")
        setNewData(data,"Storage/531א_1_א", "משאית2")
        setNewData(data,"Storage/531א_1_א", "משאית3")
        setNewData(data,"Storage/531א_1_א", "משאית4")
        setNewData(data,"Storage/531א_1_א", "משאית5")
        setNewData(data,"Storage/531א_1_א", "משאית6")
        setNewData(data,"Storage/531א_1_א", "משאית7")
        setNewData(data,"Storage/531א_1_א", "משאית8")
        setNewData(data,"Storage/531א_1_א", "משאית9")
        setNewData(data,"Storage/531א_1_א", "משאית10")

        setNewData(data,"Storage/531א_1_ב", "משאית1")
        setNewData(data,"Storage/531א_1_ב", "משאית2")
        setNewData(data,"Storage/531א_1_ב", "משאית3")
        setNewData(data,"Storage/531א_1_ב", "משאית4")
        setNewData(data,"Storage/531א_1_ב", "משאית5")
        setNewData(data,"Storage/531א_1_ב", "משאית6")
        setNewData(data,"Storage/531א_1_ב", "משאית7")
        setNewData(data,"Storage/531א_1_ב", "משאית8")
        setNewData(data,"Storage/531א_1_ב", "משאית9")
        setNewData(data,"Storage/531א_1_ב", "משאית10")

        setNewData(data,"Storage/531א_1_ג", "משאית1")
        setNewData(data,"Storage/531א_1_ג", "משאית2")
        setNewData(data,"Storage/531א_1_ג", "משאית3")
        setNewData(data,"Storage/531א_1_ג", "משאית4")
        setNewData(data,"Storage/531א_1_ג", "משאית5")
        setNewData(data,"Storage/531א_1_ג", "משאית6")
        setNewData(data,"Storage/531א_1_ג", "משאית7")
        setNewData(data,"Storage/531א_1_ג", "משאית8")
        setNewData(data,"Storage/531א_1_ג", "משאית9")
        setNewData(data,"Storage/531א_1_ג", "משאית10")

        setNewData(data,"Storage/531א_2_א", "משאית1")
        setNewData(data,"Storage/531א_2_א", "משאית2")
        setNewData(data,"Storage/531א_2_א", "משאית3")
        setNewData(data,"Storage/531א_2_א", "משאית4")
        setNewData(data,"Storage/531א_2_א", "משאית5")
        setNewData(data,"Storage/531א_2_א", "משאית6")
        setNewData(data,"Storage/531א_2_א", "משאית7")
        setNewData(data,"Storage/531א_2_א", "משאית8")
        setNewData(data,"Storage/531א_2_א", "משאית9")
        setNewData(data,"Storage/531א_2_א", "משאית10")

        setNewData(data,"Storage/531א_2_ב", "משאית1")
        setNewData(data,"Storage/531א_2_ב", "משאית2")
        setNewData(data,"Storage/531א_2_ב", "משאית3")
        setNewData(data,"Storage/531א_2_ב", "משאית4")
        setNewData(data,"Storage/531א_2_ב", "משאית5")
        setNewData(data,"Storage/531א_2_ב", "משאית6")
        setNewData(data,"Storage/531א_2_ב", "משאית7")
        setNewData(data,"Storage/531א_2_ב", "משאית8")
        setNewData(data,"Storage/531א_2_ב", "משאית9")
        setNewData(data,"Storage/531א_2_ב", "משאית10")

        setNewData(data,"Storage/531א_2_ג", "משאית1")
        setNewData(data,"Storage/531א_2_ג", "משאית2")
        setNewData(data,"Storage/531א_2_ג", "משאית3")
        setNewData(data,"Storage/531א_2_ג", "משאית4")
        setNewData(data,"Storage/531א_2_ג", "משאית5")
        setNewData(data,"Storage/531א_2_ג", "משאית6")
        setNewData(data,"Storage/531א_2_ג", "משאית7")
        setNewData(data,"Storage/531א_2_ג", "משאית8")
        setNewData(data,"Storage/531א_2_ג", "משאית9")
        setNewData(data,"Storage/531א_2_ג", "משאית10")

        setNewData(data,"Storage/531ב_1_א", "משאית1")
        setNewData(data,"Storage/531ב_1_א", "משאית2")
        setNewData(data,"Storage/531ב_1_א", "משאית3")
        setNewData(data,"Storage/531ב_1_א", "משאית4")
        setNewData(data,"Storage/531ב_1_א", "משאית5")
        setNewData(data,"Storage/531ב_1_א", "משאית6")
        setNewData(data,"Storage/531ב_1_א", "משאית7")
        setNewData(data,"Storage/531ב_1_א", "משאית8")
        setNewData(data,"Storage/531ב_1_א", "משאית9")
        setNewData(data,"Storage/531ב_1_א", "משאית10")

        setNewData(data,"Storage/531ב_1_ב", "משאית1")
        setNewData(data,"Storage/531ב_1_ב", "משאית2")
        setNewData(data,"Storage/531ב_1_ב", "משאית3")
        setNewData(data,"Storage/531ב_1_ב", "משאית4")
        setNewData(data,"Storage/531ב_1_ב", "משאית5")
        setNewData(data,"Storage/531ב_1_ב", "משאית6")
        setNewData(data,"Storage/531ב_1_ב", "משאית7")
        setNewData(data,"Storage/531ב_1_ב", "משאית8")
        setNewData(data,"Storage/531ב_1_ב", "משאית9")
        setNewData(data,"Storage/531ב_1_ב", "משאית10")

        setNewData(data,"Storage/531ב_1_ג", "משאית1")
        setNewData(data,"Storage/531ב_1_ג", "משאית2")
        setNewData(data,"Storage/531ב_1_ג", "משאית3")
        setNewData(data,"Storage/531ב_1_ג", "משאית4")
        setNewData(data,"Storage/531ב_1_ג", "משאית5")
        setNewData(data,"Storage/531ב_1_ג", "משאית6")
        setNewData(data,"Storage/531ב_1_ג", "משאית7")
        setNewData(data,"Storage/531ב_1_ג", "משאית8")
        setNewData(data,"Storage/531ב_1_ג", "משאית9")
        setNewData(data,"Storage/531ב_1_ג", "משאית10")

        setNewData(data,"Storage/531ב_2_א", "משאית1")
        setNewData(data,"Storage/531ב_2_א", "משאית2")
        setNewData(data,"Storage/531ב_2_א", "משאית3")
        setNewData(data,"Storage/531ב_2_א", "משאית4")
        setNewData(data,"Storage/531ב_2_א", "משאית5")
        setNewData(data,"Storage/531ב_2_א", "משאית6")
        setNewData(data,"Storage/531ב_2_א", "משאית7")
        setNewData(data,"Storage/531ב_2_א", "משאית8")
        setNewData(data,"Storage/531ב_2_א", "משאית9")
        setNewData(data,"Storage/531ב_2_א", "משאית10")

        setNewData(data,"Storage/531ב_2_ב", "משאית1")
        setNewData(data,"Storage/531ב_2_ב", "משאית2")
        setNewData(data,"Storage/531ב_2_ב", "משאית3")
        setNewData(data,"Storage/531ב_2_ב", "משאית4")
        setNewData(data,"Storage/531ב_2_ב", "משאית5")
        setNewData(data,"Storage/531ב_2_ב", "משאית6")
        setNewData(data,"Storage/531ב_2_ב", "משאית7")
        setNewData(data,"Storage/531ב_2_ב", "משאית8")
        setNewData(data,"Storage/531ב_2_ב", "משאית9")
        setNewData(data,"Storage/531ב_2_ב", "משאית10")

        setNewData(data,"Storage/531ב_2_ג", "משאית1")
        setNewData(data,"Storage/531ב_2_ג", "משאית2")
        setNewData(data,"Storage/531ב_2_ג", "משאית3")
        setNewData(data,"Storage/531ב_2_ג", "משאית4")
        setNewData(data,"Storage/531ב_2_ג", "משאית5")
        setNewData(data,"Storage/531ב_2_ג", "משאית6")
        setNewData(data,"Storage/531ב_2_ג", "משאית7")
        setNewData(data,"Storage/531ב_2_ג", "משאית8")
        setNewData(data,"Storage/531ב_2_ג", "משאית9")
        setNewData(data,"Storage/531ב_2_ג", "משאית10")

        setNewData(data,"Storage/531ג_1_א", "משאית1")
        setNewData(data,"Storage/531ג_1_א", "משאית2")
        setNewData(data,"Storage/531ג_1_א", "משאית3")
        setNewData(data,"Storage/531ג_1_א", "משאית4")
        setNewData(data,"Storage/531ג_1_א", "משאית5")
        setNewData(data,"Storage/531ג_1_א", "משאית6")
        setNewData(data,"Storage/531ג_1_א", "משאית7")
        setNewData(data,"Storage/531ג_1_א", "משאית8")
        setNewData(data,"Storage/531ג_1_א", "משאית9")
        setNewData(data,"Storage/531ג_1_א", "משאית10")

        setNewData(data,"Storage/531ג_1_ב", "משאית1")
        setNewData(data,"Storage/531ג_1_ב", "משאית2")
        setNewData(data,"Storage/531ג_1_ב", "משאית3")
        setNewData(data,"Storage/531ג_1_ב", "משאית4")
        setNewData(data,"Storage/531ג_1_ב", "משאית5")
        setNewData(data,"Storage/531ג_1_ב", "משאית6")
        setNewData(data,"Storage/531ג_1_ב", "משאית7")
        setNewData(data,"Storage/531ג_1_ב", "משאית8")
        setNewData(data,"Storage/531ג_1_ב", "משאית9")
        setNewData(data,"Storage/531ג_1_ב", "משאית10")

        setNewData(data,"Storage/531ג_1_ג", "משאית1")
        setNewData(data,"Storage/531ג_1_ג", "משאית2")
        setNewData(data,"Storage/531ג_1_ג", "משאית3")
        setNewData(data,"Storage/531ג_1_ג", "משאית4")
        setNewData(data,"Storage/531ג_1_ג", "משאית5")
        setNewData(data,"Storage/531ג_1_ג", "משאית6")
        setNewData(data,"Storage/531ג_1_ג", "משאית7")
        setNewData(data,"Storage/531ג_1_ג", "משאית8")
        setNewData(data,"Storage/531ג_1_ג", "משאית9")
        setNewData(data,"Storage/531ג_1_ג", "משאית10")

        setNewData(data,"Storage/531ג_2_א", "משאית1")
        setNewData(data,"Storage/531ג_2_א", "משאית2")
        setNewData(data,"Storage/531ג_2_א", "משאית3")
        setNewData(data,"Storage/531ג_2_א", "משאית4")
        setNewData(data,"Storage/531ג_2_א", "משאית5")
        setNewData(data,"Storage/531ג_2_א", "משאית6")
        setNewData(data,"Storage/531ג_2_א", "משאית7")
        setNewData(data,"Storage/531ג_2_א", "משאית8")
        setNewData(data,"Storage/531ג_2_א", "משאית9")
        setNewData(data,"Storage/531ג_2_א", "משאית10")

        setNewData(data,"Storage/531ג_2_ב", "משאית1")
        setNewData(data,"Storage/531ג_2_ב", "משאית2")
        setNewData(data,"Storage/531ג_2_ב", "משאית3")
        setNewData(data,"Storage/531ג_2_ב", "משאית4")
        setNewData(data,"Storage/531ג_2_ב", "משאית5")
        setNewData(data,"Storage/531ג_2_ב", "משאית6")
        setNewData(data,"Storage/531ג_2_ב", "משאית7")
        setNewData(data,"Storage/531ג_2_ב", "משאית8")
        setNewData(data,"Storage/531ג_2_ב", "משאית9")
        setNewData(data,"Storage/531ג_2_ב", "משאית10")

        setNewData(data,"Storage/531ג_2_ג", "משאית1")
        setNewData(data,"Storage/531ג_2_ג", "משאית2")
        setNewData(data,"Storage/531ג_2_ג", "משאית3")
        setNewData(data,"Storage/531ג_2_ג", "משאית4")
        setNewData(data,"Storage/531ג_2_ג", "משאית5")
        setNewData(data,"Storage/531ג_2_ג", "משאית6")
        setNewData(data,"Storage/531ג_2_ג", "משאית7")
        setNewData(data,"Storage/531ג_2_ג", "משאית8")
        setNewData(data,"Storage/531ג_2_ג", "משאית9")
        setNewData(data,"Storage/531ג_2_ג", "משאית10")



        data = {
            נפיץ: 240,
            עשן_ישן: 336,
            עשן_חדש: 912,
            תאורה: 72,
            מרעום137: 312,
            מרעום739: 240,
            מרעום557: 1008,
            M7: 408,
            M9: 1152,
            תחל: 1680,

        }
        setNewData(data,"Storage/", "55א")
        setNewData(data,"Storage/", "55ב")
        setNewData(data,"Storage/", "55ג")


        data={
            נפיץ:240,
            עשן_ישן:336,
            עשן_חדש:912,
            תאורה:72,
            מרעום137:312,
            מרעום739:240,
            מרעום557:1008,
            M7:408,
            M9:1152,
            תחל:1680,

        }
        setNewData(data,"Storage/","402א")
        setNewData(data,"Storage/","402ב")
        setNewData(data,"Storage/","402ג")


        data={
            נפיץ:240,
            עשן_ישן:336,
            עשן_חדש:912,
            תאורה:72,
            מרעום137:312,
            מרעום739:240,
            מרעום557:1008,
            M7:408,
            M9:1152,
            תחל:1680,

        }
        setNewData(data,"Storage/","403א")
        setNewData(data,"Storage/","403ב")
        setNewData(data,"Storage/","403ג")


        data={
            נפיץ:240,
            עשן_ישן:336,
            עשן_חדש:912,
            תאורה:72,
            מרעום137:312,
            מרעום739:240,
            מרעום557:1008,
            M7:408,
            M9:1152,
            תחל:1680,

        }
        setNewData(data,"Storage/","531א")
        setNewData(data,"Storage/","531ב")
        setNewData(data,"Storage/","531ג")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","55א_1")
        setNewData(data,"Storage/","55א_2")

        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","55ב_1")
        setNewData(data,"Storage/","55ב_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","55ג_1")
        setNewData(data,"Storage/","55ג_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","531א_1")
        setNewData(data,"Storage/","531א_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","531ב_1")
        setNewData(data,"Storage/","531ב_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","531ג_1")
        setNewData(data,"Storage/","531ג_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","402א_1")
        setNewData(data,"Storage/","402א_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","402ב_1")
        setNewData(data,"Storage/","402ב_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","402ג_1")
        setNewData(data,"Storage/","402ג_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","403א_1")
        setNewData(data,"Storage/","403א_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","403ב_1")
        setNewData(data,"Storage/","403ב_2")


        data={
            נפיץ:120,
            עשן_ישן:168,
            עשן_חדש:456,
            תאורה:36,
            מרעום137:156,
            מרעום739:120,
            מרעום557:504,
            M7:204,
            M9:576,
            תחל:840,

        }
        setNewData(data,"Storage/","403ג_1")
        setNewData(data,"Storage/","403ג_2")

        data={
            נפיץ:40,
            עשן_ישן:56,
            עשן_חדש:152,
            תאורה:12,
            מרעום137:52,
            מרעום739:40,
            מרעום557:168,
            M7:68,
            M9:192,
            תחל:280,

        }
        setNewData(data,"Storage/55א_1_א","ammo")
        setNewData(data,"Storage/55א_1_ב","ammo")
        setNewData(data,"Storage/55א_1_ג","ammo")
        setNewData(data,"Storage/55א_2_א","ammo")
        setNewData(data,"Storage/55א_2_ב","ammo")
        setNewData(data,"Storage/55א_2_ג","ammo")
        setNewData(data,"Storage/55ב_1_א","ammo")
        setNewData(data,"Storage/55ב_1_ב","ammo")
        setNewData(data,"Storage/55ב_1_ג","ammo")
        setNewData(data,"Storage/55ב_2_א","ammo")
        setNewData(data,"Storage/55ב_2_ב","ammo")
        setNewData(data,"Storage/55ב_2_ג","ammo")
        setNewData(data,"Storage/55ג_1_א","ammo")
        setNewData(data,"Storage/55ג_1_ב","ammo")
        setNewData(data,"Storage/55ג_1_ג","ammo")
        setNewData(data,"Storage/55ג_2_א","ammo")
        setNewData(data,"Storage/55ג_2_ב","ammo")
        setNewData(data,"Storage/55ג_2_ג","ammo")

        setNewData(data,"Storage/402א_1_א","ammo")
        setNewData(data,"Storage/402א_1_ב","ammo")
        setNewData(data,"Storage/402א_1_ג","ammo")
        setNewData(data,"Storage/402א_2_א","ammo")
        setNewData(data,"Storage/402א_2_ב","ammo")
        setNewData(data,"Storage/402א_2_ג","ammo")
        setNewData(data,"Storage/402ב_1_א","ammo")
        setNewData(data,"Storage/402ב_1_ב","ammo")
        setNewData(data,"Storage/402ב_1_ג","ammo")
        setNewData(data,"Storage/402ב_2_א","ammo")
        setNewData(data,"Storage/402ב_2_ב","ammo")
        setNewData(data,"Storage/402ב_2_ג","ammo")
        setNewData(data,"Storage/402ג_1_א","ammo")
        setNewData(data,"Storage/402ג_1_ב","ammo")
        setNewData(data,"Storage/402ג_1_ג","ammo")
        setNewData(data,"Storage/402ג_2_א","ammo")
        setNewData(data,"Storage/402ג_2_ב","ammo")
        setNewData(data,"Storage/402ג_2_ג","ammo")

        setNewData(data,"Storage/403א_1_א","ammo")
        setNewData(data,"Storage/403א_1_ב","ammo")
        setNewData(data,"Storage/403א_1_ג","ammo")
        setNewData(data,"Storage/403א_2_א","ammo")
        setNewData(data,"Storage/403א_2_ב","ammo")
        setNewData(data,"Storage/403א_2_ג","ammo")
        setNewData(data,"Storage/403ב_1_א","ammo")
        setNewData(data,"Storage/403ב_1_ב","ammo")
        setNewData(data,"Storage/403ב_1_ג","ammo")
        setNewData(data,"Storage/403ב_2_א","ammo")
        setNewData(data,"Storage/403ב_2_ב","ammo")
        setNewData(data,"Storage/403ב_2_ג","ammo")
        setNewData(data,"Storage/403ג_1_א","ammo")
        setNewData(data,"Storage/403ג_1_ב","ammo")
        setNewData(data,"Storage/403ג_1_ג","ammo")
        setNewData(data,"Storage/403ג_2_א","ammo")
        setNewData(data,"Storage/403ג_2_ב","ammo")
        setNewData(data,"Storage/403ג_2_ג","ammo")

        setNewData(data,"Storage/531א_1_א","ammo")
        setNewData(data,"Storage/531א_1_ב","ammo")
        setNewData(data,"Storage/531א_1_ג","ammo")
        setNewData(data,"Storage/531א_2_א","ammo")
        setNewData(data,"Storage/531א_2_ב","ammo")
        setNewData(data,"Storage/531א_2_ג","ammo")
        setNewData(data,"Storage/531ב_1_א","ammo")
        setNewData(data,"Storage/531ב_1_ב","ammo")
        setNewData(data,"Storage/531ב_1_ג","ammo")
        setNewData(data,"Storage/531ב_2_א","ammo")
        setNewData(data,"Storage/531ב_2_ב","ammo")
        setNewData(data,"Storage/531ב_2_ג","ammo")
        setNewData(data,"Storage/531ג_1_א","ammo")
        setNewData(data,"Storage/531ג_1_ב","ammo")
        setNewData(data,"Storage/531ג_1_ג","ammo")
        setNewData(data,"Storage/531ג_2_א","ammo")
        setNewData(data,"Storage/531ג_2_ב","ammo")
        setNewData(data,"Storage/531ג_2_ג","ammo")

    }

    onSetOperation = () => {
        let str = ""
        let armor = {}
        let temp1 = this.state.departTemp.text
        if (temp1.indexOf('|') != -1) {
            str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
        } else {
            str = temp1
        }
        if(str==="יצירת מבצע"){
            armor = {
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
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.setState({isPressed: true})

        }else if (str === "55" || str === "402" || str === "403" || str === "531") {
            armor = {
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

            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.setState({isPressed: true})

        } else if (str === "55א" || str === "55ב" || str === "55ג") {
            armor = {
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
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.setState({isPressed: true})

        } else if (str === "55א_1" || str === "55א_2") {
            armor = {
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
            writeDataForUpper(armor, "55א",'+')
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55א")
            this.setState({isPressed: true})

        } else if (str === "55ב_1" || str === "55ב_2") {
            armor = {
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
            writeDataForUpper(armor, "55ב",'+')
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55ב")
            this.setState({isPressed: true})

        } else if (str === "55ג_1" || str === "55ג_2") {
            armor = {
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
            writeDataForUpper(armor, "55ג",'+')
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55ג")
            this.setState({isPressed: true})

        } else if (str === "531א" || str === "531ב" || str === "531ג") {
            armor = {
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
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.setState({isPressed: true})

        } else if (str === "531א_1" || str === "531א_2") {
            armor = {
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
            writeDataForUpper(armor, "531א",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531א")
            this.setState({isPressed: true})

        } else if (str === "531ב_1" || str === "531ב_2") {
            armor = {
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
            writeDataForUpper(armor, "531ב",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531ב")
            this.setState({isPressed: true})

        } else if (str === "531ג_1" || str === "531ג_2") {
            armor = {
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
            writeDataForUpper(armor, "531ג",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531ג")
            this.setState({isPressed: true})

        } else if (str === "402א" || str === "402ב" || str === "402ג") {
            armor = {
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
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.setState({isPressed: true})

        } else if (str === "402א_1" || str === "402א_2") {
            armor = {
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
            writeDataForUpper(armor, "402א",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402א")
            this.setState({isPressed: true})

        } else if (str === "402ב_1" || str === "402ב_2") {
            armor = {
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
            writeDataForUpper(armor, "402ב",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402ב")
            this.setState({isPressed: true})


        } else if (str === "402ג_1" || str === "402ג_2") {
            armor = {
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
            writeDataForUpper(armor, "402ג",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402א")
            this.setState({isPressed: true})

        } else if (str === "403א" || str === "403ב" || str === "403ג") {
            armor = {
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
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.setState({isPressed: true})

        } else if (str === "403א_1" || str === "403א_2") {
            armor = {
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
            writeDataForUpper(armor, "403א",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403א")
            this.setState({isPressed: true})

        } else if (str === "403ב_1" || str === "403ב_2") {
            armor = {
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
            writeDataForUpper(armor, "403ב",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403ב")
            this.setState({isPressed: true})

        } else if (str === "403ג_1" || str === "403ג_2") {
            armor = {
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
            writeDataForUpper(armor, "403ג",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403ג")
            this.setState({isPressed: true})

        }else if (str === "55א_1_א" || str === "55א_1_ב" || str === "55א_1_ג" ) {
            armor = {
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
            writeDataForUpper(armor, "55א_1",'+')
            writeDataForUpper(armor, "55א",'+')
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55א")
            this.removeFromStorage(armor,"55א_1")
            this.setState({isPressed: true})

        } else if (str === "55א_2_א" || str === "55א_2_ב" || str === "55א_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "55א_2",'+')
            writeDataForUpper(armor, "55א",'+')
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55א")
            this.removeFromStorage(armor,"55א_2")
            this.setState({isPressed: true})

        } else if (str === "55ב_1_א" || str === "55ב_1_ב" || str === "55ב_1_ג") {
            armor = {
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
            writeDataForUpper(armor, "55ב_1",'+')
            writeDataForUpper(armor, "55ב",'+')
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55ב")
            this.removeFromStorage(armor,"55ב_1")
            this.setState({isPressed: true})

        } else if (str === "55ב_2_א" || str === "55ב_2_ב" || str === "55ב_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "55ב_2",'+')
            writeDataForUpper(armor, "55ב",'+')
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55ב")
            this.removeFromStorage(armor,"55ב_2")
            this.setState({isPressed: true})


        } else if (str === "55ג_1_א" || str === "55ג_1_ב" || str === "55ג_1_ג") {
            armor = {
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
            writeDataForUpper(armor, "55ג_1",'+')
            writeDataForUpper(armor, "55ג",'+')
            writeDataForUpper(armor, "55/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55ג")
            this.removeFromStorage(armor,"55ג_1")
            this.setState({isPressed: true})

        } else if (str === "55ג_2_א" || str === "55ג_2_ב" || str === "55ג_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "55ג_2", '+')
            writeDataForUpper(armor, "55ג", '+')
            writeDataForUpper(armor, "55/"+"ammo", '+')
            writeDataForUpper(armor, "אגד215"+"/ammo", '+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"55"+"/ammo")
            this.removeFromStorage(armor,"55ג")
            this.removeFromStorage(armor,"55ג_2")
            this.setState({isPressed: true})


        }else if (str === "402א_1_א" || str === "402א_1_ב" || str === "402א_1_ג" ) {
            armor = {
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
            writeDataForUpper(armor, "402א_1",'+')
            writeDataForUpper(armor, "402א",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402א")
            this.removeFromStorage(armor,"402א_1")
            this.setState({isPressed: true})

        } else if (str === "402א_2_א" || str === "402א_2_ב" || str === "402א_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "402א_2",'+')
            writeDataForUpper(armor, "402א",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402א")
            this.removeFromStorage(armor,"402א_2")
            this.setState({isPressed: true})

        } else if (str === "402ב_1_א" || str === "402ב_1_ב" || str === "402ב_1_ג") {
            armor = {
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
            writeDataForUpper(armor, "402ב_1",'+')
            writeDataForUpper(armor, "402ב",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402ב")
            this.removeFromStorage(armor,"402ב_1")
            this.setState({isPressed: true})

        } else if (str === "402ב_2_א" || str === "402ב_2_ב" || str === "402ב_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "402ב_2",'+')
            writeDataForUpper(armor, "402ב",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402ב")
            this.removeFromStorage(armor,"402ב_2")
            this.setState({isPressed: true})


        } else if (str === "402ג_1_א" || str === "402ג_1_ב" || str === "402ג_1_ג") {
            armor = {
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
            writeDataForUpper(armor, "402ג_1",'+')
            writeDataForUpper(armor, "402ג",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402ג")
            this.removeFromStorage(armor,"402ג_1")
            this.setState({isPressed: true})


        } else if (str === "402ג_2_א" || str === "402ג_2_ב" || str === "402ג_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "402ג_2",'+')
            writeDataForUpper(armor, "402ג",'+')
            writeDataForUpper(armor, "402/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"402"+"/ammo")
            this.removeFromStorage(armor,"402ג")
            this.removeFromStorage(armor,"402ג_2")
            this.setState({isPressed: true})


        }else if (str === "403א_1_א" || str === "403א_1_ב" || str === "403א_1_ג" ) {
            armor = {
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
            writeDataForUpper(armor, "403א_1",'+')
            writeDataForUpper(armor, "403א",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403א")
            this.removeFromStorage(armor,"403א_1")
            this.setState({isPressed: true})

        } else if (str === "403א_2_א" || str === "403א_2_ב" || str === "403א_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "403א_2",'+')
            writeDataForUpper(armor, "403א",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403א")
            this.removeFromStorage(armor,"403א_2")
            this.setState({isPressed: true})

        } else if (str === "403ב_1_א" || str === "403ב_1_ב" || str === "403ב_1_ג") {
            armor = {
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
            writeDataForUpper(armor, "403ב_1",'+')
            writeDataForUpper(armor, "403ב",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403ב")
            this.removeFromStorage(armor,"403ב_1")
            this.setState({isPressed: true})

        } else if (str === "403ב_2_א" || str === "403ב_2_ב" || str === "403ב_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "403ב_2",'+')
            writeDataForUpper(armor, "403ב",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403ב")
            this.removeFromStorage(armor,"403ב_2")
            this.setState({isPressed: true})


        } else if (str === "403ג_1_א" || str === "403ג_1_ב" || str === "403ג_1_ג") {
            armor = {
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
            writeDataForUpper(armor, "403ג_1",'+')
            writeDataForUpper(armor, "403ג",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403ג")
            this.removeFromStorage(armor,"403ג_1")
            this.setState({isPressed: true})


        } else if (str === "403ג_2_א" || str === "403ג_2_ב" || str === "403ג_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "403ג_2",'+')
            writeDataForUpper(armor, "403ג",'+')
            writeDataForUpper(armor, "403/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"403"+"/ammo")
            this.removeFromStorage(armor,"403ג")
            this.removeFromStorage(armor,"403ג_2")
            this.setState({isPressed: true})


        }else if (str === "531א_1_א" || str === "531א_1_ב" || str === "531א_1_ג" ) {
            armor = {
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
            writeDataForUpper(armor, "531א_1",'+')
            writeDataForUpper(armor, "531א",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531א")
            this.removeFromStorage(armor,"531א_1")
            this.setState({isPressed: true})

        } else if (str === "531א_2_א" || str === "531א_2_ב" || str === "531א_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "531א_2",'+')
            writeDataForUpper(armor, "531א",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531א")
            this.removeFromStorage(armor,"531א_2")
            this.setState({isPressed: true})

        } else if (str === "531ב_1_א" || str === "531ב_1_ב" || str === "531ב_1_ג") {
            armor = {
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
            writeDataForUpper(armor, "531ב_1",'+')
            writeDataForUpper(armor, "531ב",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531ב")
            this.removeFromStorage(armor,"531ב_1")
            this.setState({isPressed: true})

        } else if (str === "531ב_2_א" || str === "531ב_2_ב" || str === "531ב_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "531ב_2",'+')
            writeDataForUpper(armor, "531ב",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531ב")
            this.removeFromStorage(armor,"531ב_2")
            this.setState({isPressed: true})


        } else if (str === "531ג_1_א" || str === "531ג_1_ב" || str === "531ג_1_ג") {
            armor = {
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
            writeDataForUpper(armor, "531ג_1",'+')
            writeDataForUpper(armor, "531ג",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531ג")
            this.removeFromStorage(armor,"531ג_1")
            this.setState({isPressed: true})


        } else if (str === "531ג_2_א" || str === "531ג_2_ב" || str === "531ג_2_ג") {
            armor = {
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
            writeDataForUpper(armor, "531ג_2",'+')
            writeDataForUpper(armor, "531ג",'+')
            writeDataForUpper(armor, "531/"+"ammo",'+')
            writeDataForUpper(armor, "אגד215"+"/ammo",'+')
            this.writeData(armor, str)
            this.removeFromStorage(armor,"אגד215"+"/ammo")
            this.removeFromStorage(armor,"531"+"/ammo")
            this.removeFromStorage(armor,"531ג")
            this.removeFromStorage(armor,"531ג_2")
            this.setState({isPressed: true})

        }


    }
    chooseTruck (){
        let str = ""
        let temp1 = this.state.departTemp.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="העברת תחמושת"){
                return  <PickerCascader
                    data={[
                        {
                            key: '100', text: 'משאיות', children: [{
                                key: '101', text: 'משאית1'
                            },
                                {
                                    key: '102', text: 'משאית2'
                                },
                                {
                                    key: '103', text: 'משאית3'
                                },
                                {
                                    key: '104', text: 'משאית4'
                                },
                                {
                                    key: '105', text: 'משאית5'
                                },
                                {
                                    key: '106', text: 'משאית6'
                                },
                                {
                                    key: '107', text: 'משאית7'
                                },
                                {
                                    key: '108', text: 'משאית8'
                                },
                                {
                                    key: '109', text: 'משאית9'
                                },
                                {
                                    key: '110', text: 'משאית10'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר משאית"}
                    onValueChange={(truck) => this.setState({truck}) }>
                    >

                </PickerCascader>

            }
        }
    }
    chooseTransitAmmoForEged (){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [

                                {
                                    key: '2', text: 'צוותים 55א_1', children: [{
                                        key: '3', text: '55א_1_א'
                                    },
                                        {
                                            key: '4', text: '55א_1_ב'
                                        },
                                        {
                                            key: '5', text: '55א_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '10', text: 'צוותים 55א_2', children: [{
                                        key: '11', text: '55א_2_א'
                                    },
                                        {
                                            key: '12', text: '55א_2_ב'
                                        },
                                        {
                                            key: '13', text: '55א_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '20', text: 'צוותים 55ב_1', children: [{
                                        key: '21', text: '55ב_1_א'
                                    },
                                        {
                                            key: '22', text: '55ב_1_ב'
                                        },
                                        {
                                            key: '23', text: '55ב_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '30', text: 'צוותים 55ב_2', children: [{
                                        key: '31', text: '55ב_2_א'
                                    },
                                        {
                                            key: '32', text: '55ב_2_ב'
                                        },
                                        {
                                            key: '33', text: '55ב_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '40', text: 'צוותים 55ג_1', children: [{
                                        key: '41', text: '55ג_1_א'
                                    },
                                        {
                                            key: '42', text: '55ג_1_ב'
                                        },
                                        {
                                            key: '43', text: '55ג_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '50', text: 'צוותים 55ג_2', children: [{
                                        key: '51', text: '55ג_2_א'
                                    },
                                        {
                                            key: '52', text: '55ג_2_ב'
                                        },
                                        {
                                            key: '53', text: '55ג_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '60', text: 'צוותים 402א_1', children: [{
                                        key: '61', text: '402א_1_א'
                                    },
                                        {
                                            key: '62', text: '402א_1_ב'
                                        },
                                        {
                                            key: '63', text: '402א_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '70', text: 'צוותים 402א_2', children: [{
                                        key: '71', text: '402א_2_א'
                                    },
                                        {
                                            key: '72', text: '402א_2_ב'
                                        },
                                        {
                                            key: '73', text: '402א_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '80', text: 'צוותים 402ב_1', children: [{
                                        key: '81', text: '402ב_1_א'
                                    },
                                        {
                                            key: '82', text: '402ב_1_ב'
                                        },
                                        {
                                            key: '83', text: '402ב_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '90', text: 'צוותים 402ב_2', children: [{
                                        key: '91', text: '402ב_2_א'
                                    },
                                        {
                                            key: '92', text: '402ב_2_ב'
                                        },
                                        {
                                            key: '93', text: '402ב_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '100', text: 'צוותים 402ג_1', children: [{
                                        key: '101', text: '402ג_1_א'
                                    },
                                        {
                                            key: '102', text: '402ג_1_ב'
                                        },
                                        {
                                            key: '103', text: '402ג_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '110', text: 'צוותים 402ג_2', children: [{
                                        key: '111', text: '402ג_2_א'
                                    },
                                        {
                                            key: '112', text: '402ג_2_ב'
                                        },
                                        {
                                            key: '113', text: '402ג_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '120', text: 'צוותים 403א_1', children: [{
                                        key: '121', text: '403א_1_א'
                                    },
                                        {
                                            key: '122', text: '403א_1_ב'
                                        },
                                        {
                                            key: '123', text: '403א_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '130', text: 'צוותים 403א_2', children: [{
                                        key: '131', text: '403א_2_א'
                                    },
                                        {
                                            key: '132', text: '403א_2_ב'
                                        },
                                        {
                                            key: '133', text: '403א_2_ג'
                                        },

                                    ]
                                },
                                {
                                    key: '140', text: 'צוותים 403ב_1', children: [{
                                        key: '141', text: '403ב_1_א'
                                    },
                                        {
                                            key: '142', text: '403ב_1_ב'
                                        },
                                        {
                                            key: '143', text: '403ב_1_ג'
                                        },

                                    ]
                                },


                                {
                                    key: '150', text: 'צוותים 403ב_2', children: [{
                                        key: '151', text: '403ב_2_א'
                                    },
                                        {
                                            key: '152', text: '403ב_2_ב'
                                        },
                                        {
                                            key: '153', text: '403ב_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '160', text: 'צוותים 403ג_1', children: [{
                                        key: '161', text: '403ג_1_א'
                                    },
                                        {
                                            key: '162', text: '403ג_1_ב'
                                        },
                                        {
                                            key: '163', text: '403ג_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '170', text: 'צוותים 403ג_2', children: [{
                                        key: '171', text: '403ג_2_א'
                                    },
                                        {
                                            key: '172', text: '403ג_2_ב'
                                        },
                                        {
                                            key: '173', text: '403ג_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '180', text: 'צוותים 531א_1', children: [{
                                        key: '181', text: '531א_1_א'
                                    },
                                        {
                                            key: '182', text: '531א_1_ב'
                                        },
                                        {
                                            key: '183', text: '531א_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '190', text: 'צוותים 531א_2', children: [{
                                        key: '191', text: '531א_2_א'
                                    },
                                        {
                                            key: '192', text: '531א_2_ב'
                                        },
                                        {
                                            key: '193', text: '531א_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '200', text: 'צוותים 531ב_1', children: [{
                                        key: '201', text: '531ב_1_א'
                                    },
                                        {
                                            key: '202', text: '531ב_1_ב'
                                        },
                                        {
                                            key: '203', text: '531ב_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '210', text: 'צוותים 531ב_2', children: [{
                                        key: '211', text: '531ב_2_א'
                                    },
                                        {
                                            key: '212', text: '531ב_2_ב'
                                        },
                                        {
                                            key: '213', text: '531ב_2_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '220', text: 'צוותים 531ג_1', children: [{
                                        key: '221', text: '531ג_1_א'
                                    },
                                        {
                                            key: '222', text: '531ג_1_ב'
                                        },
                                        {
                                            key: '223', text: '531ג_1_ג'
                                        },

                                    ]
                                },

                                {
                                    key: '230', text: 'צוותים 531ג_2', children: [{
                                        key: '231', text: '531ג_2_א'
                                    },
                                        {
                                            key: '232', text: '531ג_2_ב'
                                        },
                                        {
                                            key: '233', text: '531ג_2_ג'
                                        },

                                    ]
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForGdud55(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'סוללות להובלה', children: [{
                                key: '2', text: '55א'
                            },
                                {
                                    key: '3', text: '55ב'
                                },
                                {
                                    key: '4', text: '55ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר סוללה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }
    chooseTransitAmmoForGdud402Picker(){
        console.log("enter chooseTransitAmmoForGdud402Picker")
        let flag=""
        firebase.database().ref("Storage/402/flag").once("value", function (snapshot) {
            flag = snapshot.val();
            console.log(flag)
            if(flag.flag===true){
                console.log("return true")
                return <PickerCascader
                    data={[
                        {
                            key: '1', text: 'סוללות להובלה', children: [
                                {
                                key: '2', text: '402א'
                            },
                                {
                                    key: '3', text: '402ב'
                                },
                                {
                                    key: '4', text: '402ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר סוללה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;
            }

        });

    }

    chooseTransitAmmoForGdud402(){
        let str = ""
        let answer =false
        let temp1 = this.state.departTemp.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="העברת תחמושת"){

                let query = firebase.database().ref("Storage/402").orderByKey();
                query.once("value")
                    .then(function(snapshot) {
                        snapshot.forEach(function(childSnapshot) {
                            // key will be "ada" the first time and "alan" the second time
                            let key = childSnapshot.key;
                            // childData will be the actual contents of the child
                            if(key!=="ammo"&&key!=="קרקע"){
                                let childData = childSnapshot.val();
                                let sum1 = childData.נפיץ
                                let sum2 = childData.עשן_ישן
                                let sum3 = childData.עשן_חדש
                                let sum4 = childData.תאורה
                                let sum5 = childData.מרעום137
                                let sum6 = childData.מרעום739
                                let sum7 = childData.מרעום557
                                let sum8 = childData.M7
                                let sum9 = childData.M9
                                let sum10 = childData.תחל
                                console.log(sum1)
                                console.log(sum2)
                                console.log(sum3)
                                console.log(sum4)
                                console.log(sum5)
                                console.log(sum6)
                                console.log(sum7)
                                console.log(sum8)
                                console.log(sum9)
                                console.log(sum10)
                                if(sum1>0||sum2>0||sum3>0||sum4>0||sum5>0||sum6>0||sum7>0||sum8>0
                                    ||sum9>0||sum10>0){
                                    console.log("enter if")
                                    firebase.database().ref("Storage/402/flag").set({
                                        flag:true

                                    }).then((data) => {
                                        //success callback
                                        console.log('data ', data)
                                    }).catch((error) => {
                                        //error callback
                                        console.log('error ', error)
                                    })
                                    answer=true;
                                }else{
                                    console.log("answer is false")
                                }
                            }
                        });
                    });

            }
        }


    }

    chooseTransitAmmoForGdud403(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'סוללות להובלה', children: [{
                                key: '2', text: '403א'
                            },
                                {
                                    key: '3', text: '403ב'
                                },
                                {
                                    key: '4', text: '403ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר סוללה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForGdud531(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'סוללות להובלה', children: [{
                                key: '2', text: '531א'
                            },
                                {
                                    key: '3', text: '531ב'
                                },
                                {
                                    key: '4', text: '531ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר סוללה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela55a(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '55א_1'
                            },
                                {
                                    key: '3', text: '55א_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela55b(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '55ב_1'
                            },
                                {
                                    key: '3', text: '55ב_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }
    chooseTransitAmmoForSolela55c(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '55ג_1'
                            },
                                {
                                    key: '3', text: '55ג_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela402a(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '402א_1'
                            },
                                {
                                    key: '3', text: '402א_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela402b(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '402ב_1'
                            },
                                {
                                    key: '3', text: '402ב_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela402c(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '402ג_1'
                            },
                                {
                                    key: '3', text: '402ג_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela403a(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '403א_1'
                            },
                                {
                                    key: '3', text: '403א_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela403b(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '403ב_1'
                            },
                                {
                                    key: '3', text: '403ב_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela403c(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '403ג_1'
                            },
                                {
                                    key: '3', text: '403ג_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela531a(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '531א_1'
                            },
                                {
                                    key: '3', text: '531א_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela531b(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '531ב_1'
                            },
                                {
                                    key: '3', text: '531ב_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForSolela531c(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'פלגות להובלה', children: [{
                                key: '2', text: '531ג_1'
                            },
                                {
                                    key: '3', text: '531ג_2'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר פלגה"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga55a1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '55א_1_א'
                            },
                                {
                                    key: '3', text: '55א_1_ב'
                                },
                                {
                                    key: '4', text: '55א_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga55a2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '55א_2_א'
                            },
                                {
                                    key: '3', text: '55א_2_ב'
                                },
                                {
                                    key: '4', text: '55א_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga55b1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '55ב_1_א'
                            },
                                {
                                    key: '3', text: '55ב_1_ב'
                                },
                                {
                                    key: '4', text: '55ב_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga55b2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '55ב_2_א'
                            },
                                {
                                    key: '3', text: '55ב_2_ב'
                                },
                                {
                                    key: '4', text: '55ב_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga55c1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '55ג_1_א'
                            },
                                {
                                    key: '3', text: '55ג_1_ב'
                                },
                                {
                                    key: '4', text: '55ג_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga55c2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '55ג_2_א'
                            },
                                {
                                    key: '3', text: '55ג_2_ב'
                                },
                                {
                                    key: '4', text: '55ג_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga402a1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '402א_1_א'
                            },
                                {
                                    key: '3', text: '402א_1_ב'
                                },
                                {
                                    key: '4', text: '402א_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga402a2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '402א_2_א'
                            },
                                {
                                    key: '3', text: '402א_2_ב'
                                },
                                {
                                    key: '4', text: '402א_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga402b1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '402ב_1_א'
                            },
                                {
                                    key: '3', text: '402ב_1_ב'
                                },
                                {
                                    key: '4', text: '402ב_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga402b2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '402ב_2_א'
                            },
                                {
                                    key: '3', text: '402ב_2_ב'
                                },
                                {
                                    key: '4', text: '402ב_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga402c1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '402ג_1_א'
                            },
                                {
                                    key: '3', text: '402ג_1_ב'
                                },
                                {
                                    key: '4', text: '402ג_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga402c2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '402ג_2_א'
                            },
                                {
                                    key: '3', text: '402ג_2_ב'
                                },
                                {
                                    key: '4', text: '402ג_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga403a1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '403א_1_א'
                            },
                                {
                                    key: '3', text: '403א_1_ב'
                                },
                                {
                                    key: '4', text: '403א_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga403a2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '403א_2_א'
                            },
                                {
                                    key: '3', text: '403א_2_ב'
                                },
                                {
                                    key: '4', text: '403א_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga403b1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '403ב_1_א'
                            },
                                {
                                    key: '3', text: '403ב_1_ב'
                                },
                                {
                                    key: '4', text: '403ב_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga403b2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '403ב_2_א'
                            },
                                {
                                    key: '3', text: '403ב_2_ב'
                                },
                                {
                                    key: '4', text: '403ב_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga403c1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '403ג_1_א'
                            },
                                {
                                    key: '3', text: '403ג_1_ב'
                                },
                                {
                                    key: '4', text: '403ג_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga403c2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '403ג_2_א'
                            },
                                {
                                    key: '3', text: '403ג_2_ב'
                                },
                                {
                                    key: '4', text: '403ג_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga531a1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '531א_1_א'
                            },
                                {
                                    key: '3', text: '531א_1_ב'
                                },
                                {
                                    key: '4', text: '531א_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga531a2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '531א_2_א'
                            },
                                {
                                    key: '3', text: '531א_2_ב'
                                },
                                {
                                    key: '4', text: '531א_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga531b1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '531ב_1_א'
                            },
                                {
                                    key: '3', text: '531ב_1_ב'
                                },
                                {
                                    key: '4', text: '531ב_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga531b2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '531ב_2_א'
                            },
                                {
                                    key: '3', text: '531ב_2_ב'
                                },
                                {
                                    key: '4', text: '531ב_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga531c1(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '531ג_1_א'
                            },
                                {
                                    key: '3', text: '531ג_1_ב'
                                },
                                {
                                    key: '4', text: '531ג_1_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    chooseTransitAmmoForPalga531c2(){
        let str = ""
        let temp1 = this.state.truck.text
        if(temp1 !== undefined){
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            if(str ==="משאית1" || str ==="משאית2" || str ==="משאית3" || str ==="משאית4" || str ==="משאית5" ||
                str ==="משאית6" || str ==="משאית7" || str ==="משאית8" || str ==="משאית9" || str ==="משאית10"){
                return  <PickerCascader
                    data={[
                        {
                            key: '1', text: 'צוותים להובלה', children: [{
                                key: '2', text: '531ג_2_א'
                            },
                                {
                                    key: '3', text: '531ג_2_ב'
                                },
                                {
                                    key: '4', text: '531ג_2_ג'
                                },
                            ]
                        }
                    ]}
                    message = {"תבחר צוות"}
                    onValueChange={(gdudForSupply) => this.setState({gdudForSupply}) }>
                    >
                </PickerCascader>;


            }
        }
    }

    showAddTake (){
        let str = ""
        let temp1 = this.state.gdudForSupply.text
        if(temp1 !== undefined) {
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            return <View style={styles.rowButtons}>
                <TouchableOpacity
                    onPress={this.add}
                >
                    <Text style={styles.textButton}>
                        Add
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.take}
                >
                    <Text style={styles.textButton}>
                        Take
                    </Text>

                </TouchableOpacity>
            </View>


        }

    }

    showAddTakeEged (){
        let str = ""
        let temp1 = this.state.gdudForSupply.text
        if(temp1 !== undefined) {
            if (temp1.indexOf('|') !== -1) {
                str = temp1.substring(temp1.lastIndexOf(' | ') + 3)
            } else {
                str = temp1
            }
            return <View style={styles.rowButtons}>
                <TouchableOpacity
                    onPress={this.addEged()}
                >
                    <Text style={styles.textButton}>
                        Add
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.take}
                >
                    <Text style={styles.textButton}>
                        Take
                    </Text>

                </TouchableOpacity>
            </View>


        }

    }


    egedView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: 'אגד215',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '10', text: 'גדוד', children: [{
                                key: '11', text: '55'
                            },
                                {
                                    key: '12', text: '402'
                                },
                                {
                                    key: '13', text: '403'
                                },
                                {
                                    key: '14', text: '531'
                                }
                            ]
                        },

                        {
                            key: '20', text: 'סוללות 55', children: [{
                                key: '21', text: '55א'
                            },
                                {
                                    key: '22', text: '55ב '
                                },
                                {
                                    key: '23', text: '55ג '
                                }
                            ]
                        },

                        {
                            key: '30', text: 'סוללות 402', children: [{
                                key: '31', text: '402א'
                            },
                                {
                                    key: '32', text: '402ב '
                                },
                                {
                                    key: '33', text: '402ג '
                                }
                            ]
                        },

                        {
                            key: '40', text: 'סוללות 403', children: [{
                                key: '41', text: '403א'
                            },
                                {
                                    key: '42', text: '403ב '
                                },
                                {
                                    key: '43', text: '403ג '
                                }
                            ]
                        },

                        {
                            key: '50', text: 'סוללות 531', children: [{
                                key: '51', text: '531א'
                            },
                                {
                                    key: '52', text: '531ב '
                                },
                                {
                                    key: '53', text: '531ג '
                                }
                            ]
                        },

                        {
                            key: '60', text: 'פלגות 55', children: [{
                                key: '61', text: '55א_1'
                            },
                                {
                                    key: '62', text: '55א_2 '
                                },
                                {
                                    key: '63', text: '55ב_1 '
                                },
                                {
                                    key: '64', text: '55ב_2 '
                                },
                                {
                                    key: '65', text: '55ג_1 '
                                },
                                {
                                    key: '66', text: '55ג_2 '
                                },

                            ]
                        },

                        {
                            key: '70', text: 'פלגות 402', children: [{
                                key: '71', text: '402א_1'
                            },
                                {
                                    key: '72', text: '402א_2 '
                                },
                                {
                                    key: '73', text: '402ב_1 '
                                },
                                {
                                    key: '74', text: '402ב_2 '
                                },
                                {
                                    key: '75', text: '402ג_1 '
                                },
                                {
                                    key: '76', text: '402ג_2 '
                                },

                            ]
                        },

                        {
                            key: '80', text: 'פלגות 403', children: [{
                                key: '81', text: '403א_1'
                            },
                                {
                                    key: '82', text: '403א_2 '
                                },
                                {
                                    key: '83', text: '403ב_1 '
                                },
                                {
                                    key: '84', text: '403ב_2 '
                                },
                                {
                                    key: '85', text: '403ג_1 '
                                },
                                {
                                    key: '86', text: '403ג_2 '
                                },

                            ]
                        },

                        {
                            key: '90', text: 'פלגות 531', children: [{
                                key: '91', text: '531א_1'
                            },
                                {
                                    key: '92', text: '531א_2 '
                                },
                                {
                                    key: '93', text: '531ב_1 '
                                },
                                {
                                    key: '94', text: '531ב_2 '
                                },
                                {
                                    key: '95', text: '531ג_1 '
                                },
                                {
                                    key: '96', text: '531ג_2 '
                                },

                            ]
                        },
                        {
                            key: '100', text: 'צוותים 55א_1', children: [{
                                key: '101', text: '55א_1_א'
                            },
                                {
                                    key: '102', text: '55א_1_ב'
                                },
                                {
                                    key: '103', text: '55א_1_ג'
                                },

                            ]
                        },

                        {
                            key: '110', text: 'צוותים 55א_2', children: [{
                                key: '111', text: '55א_2_א'
                            },
                                {
                                    key: '112', text: '55א_2_ב'
                                },
                                {
                                    key: '113', text: '55א_2_ג'
                                },

                            ]
                        },
                        {
                            key: '120', text: 'צוותים 55ב_1', children: [{
                                key: '121', text: '55ב_1_א'
                            },
                                {
                                    key: '122', text: '55ב_1_ב'
                                },
                                {
                                    key: '123', text: '55ב_1_ג'
                                },

                            ]
                        },

                        {
                            key: '130', text: 'צוותים 55ב_2', children: [{
                                key: '131', text: '55ב_2_א'
                            },
                                {
                                    key: '132', text: '55ב_2_ב'
                                },
                                {
                                    key: '133', text: '55ב_2_ג'
                                },

                            ]
                        },
                        {
                            key: '140', text: 'צוותים 55ג_1', children: [{
                                key: '141', text: '55ג_1_א'
                            },
                                {
                                    key: '142', text: '55ג_1_ב'
                                },
                                {
                                    key: '143', text: '55ג_1_ג'
                                },

                            ]
                        },
                        {
                            key: '150', text: 'צוותים 55ג_2', children: [{
                                key: '151', text: '55ג_2_א'
                            },
                                {
                                    key: '152', text: '55ג_2_ב'
                                },
                                {
                                    key: '153', text: '55ג_2_ג'
                                },

                            ]
                        },

                        {
                            key: '160', text: 'צוותים 402א_1', children: [{
                                key: '161', text: '402א_1_א'
                            },
                                {
                                    key: '162', text: '402א_1_ב'
                                },
                                {
                                    key: '163', text: '402א_1_ג'
                                },

                            ]
                        },
                        {
                            key: '170', text: 'צוותים 402א_2', children: [{
                                key: '171', text: '402א_2_א'
                            },
                                {
                                    key: '172', text: '402א_2_ב'
                                },
                                {
                                    key: '173', text: '402א_2_ג'
                                },

                            ]
                        },
                        {
                            key: '180', text: 'צוותים 402ב_1', children: [{
                                key: '181', text: '402ב_1_א'
                            },
                                {
                                    key: '182', text: '402ב_1_ב'
                                },
                                {
                                    key: '183', text: '402ב_1_ג'
                                },

                            ]
                        },
                        {
                            key: '190', text: 'צוותים 402ב_2', children: [{
                                key: '191', text: '402ב_2_א'
                            },
                                {
                                    key: '192', text: '402ב_2_ב'
                                },
                                {
                                    key: '193', text: '402ב_2_ג'
                                },

                            ]
                        },
                        {
                            key: '200', text: 'צוותים 402ג_1', children: [{
                                key: '201', text: '402ג_1_א'
                            },
                                {
                                    key: '202', text: '402ג_1_ב'
                                },
                                {
                                    key: '203', text: '402ג_1_ג'
                                },

                            ]
                        },
                        {
                            key: '210', text: 'צוותים 402ג_2', children: [{
                                key: '211', text: '402ג_2_א'
                            },
                                {
                                    key: '212', text: '402ג_2_ב'
                                },
                                {
                                    key: '213', text: '402ג_2_ג'
                                },

                            ]
                        },

                        {
                            key: '220', text: 'צוותים 403א_1', children: [{
                                key: '221', text: '403א_1_א'
                            },
                                {
                                    key: '222', text: '403א_1_ב'
                                },
                                {
                                    key: '223', text: '403א_1_ג'
                                },

                            ]
                        },
                        {
                            key: '230', text: 'צוותים 403א_2', children: [{
                                key: '231', text: '403א_2_א'
                            },
                                {
                                    key: '232', text: '403א_2_ב'
                                },
                                {
                                    key: '233', text: '403א_2_ג'
                                },

                            ]
                        },
                        {
                            key: '240', text: 'צוותים 403ב_1', children: [{
                                key: '241', text: '403ב_1_א'
                            },
                                {
                                    key: '242', text: '403ב_1_ב'
                                },
                                {
                                    key: '243', text: '403ב_1_ג'
                                },

                            ]
                        },
                        {
                            key: '250', text: 'צוותים 403ב_2', children: [{
                                key: '251', text: '403ב_2_א'
                            },
                                {
                                    key: '252', text: '403ב_2_ב'
                                },
                                {
                                    key: '253', text: '403ב_2_ג'
                                },

                            ]
                        },
                        {
                            key: '260', text: 'צוותים 403ג_1', children: [{
                                key: '261', text: '403ג_1_א'
                            },
                                {
                                    key: '262', text: '403ג_1_ב'
                                },
                                {
                                    key: '263', text: '403ג_1_ג'
                                },

                            ]
                        },
                        {
                            key: '270', text: 'צוותים 403ג_2', children: [{
                                key: '271', text: '403ג_2_א'
                            },
                                {
                                    key: '272', text: '403ג_2_ב'
                                },
                                {
                                    key: '273', text: '403ג_2_ג'
                                },

                            ]
                        },
                        {
                            key: '280', text: 'צוותים 531א_1', children: [{
                                key: '281', text: '531א_1_א'
                            },
                                {
                                    key: '282', text: '531א_1_ב'
                                },
                                {
                                    key: '283', text: '531א_1_ג'
                                },

                            ]
                        },
                        {
                            key: '290', text: 'צוותים 531א_2', children: [{
                                key: '291', text: '531א_2_א'
                            },
                                {
                                    key: '292', text: '531א_2_ב'
                                },
                                {
                                    key: '293', text: '531א_2_ג'
                                },

                            ]
                        },
                        {
                            key: '300', text: 'צוותים 531ב_1', children: [{
                                key: '301', text: '531ב_1_א'
                            },
                                {
                                    key: '302', text: '531ב_1_ב'
                                },
                                {
                                    key: '303', text: '531ב_1_ג'
                                },

                            ]
                        },
                        {
                            key: '310', text: 'צוותים 531ב_2', children: [{
                                key: '311', text: '531ב_2_א'
                            },
                                {
                                    key: '312', text: '531ב_2_ב'
                                },
                                {
                                    key: '313', text: '531ב_2_ג'
                                },

                            ]
                        },
                        {
                            key: '320', text: 'צוותים 531ג_1', children: [{
                                key: '321', text: '531ג_1_א'
                            },
                                {
                                    key: '322', text: '531ג_1_ב'
                                },
                                {
                                    key: '323', text: '531ג_1_ג'
                                },

                            ]
                        },
                        {
                            key: '330', text: 'צוותים 531ג_2', children: [{
                                key: '331', text: '531ג_2_א'
                            },
                                {
                                    key: '332', text: '531ג_2_ב'
                                },
                                {
                                    key: '333', text: '531ג_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {this.chooseTruck()}
                    {this.chooseTransitAmmoForEged()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.defaultOperation}>
                            <Text style={styles.buttonText}>מבצעים קבועים</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.defaultStorage}>
                            <Text style={styles.buttonText}>מלאי דיפולטיבי</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }

    gdud55View(){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' סוללות 55 ', children: [{
                                key: '21', text: '55א'
                            },
                                {
                                    key: '22', text: '55ב '
                                },
                                {
                                    key: '23', text: '55ג '
                                }
                            ]
                        },
                        {
                            key: '60', text: 'פלגות 55', children: [{
                                key: '61', text: '55א_1'
                            },
                                {
                                    key: '62', text: '55א_2 '
                                },
                                {
                                    key: '63', text: '55ב_1 '
                                },
                                {
                                    key: '64', text: '55ב_2 '
                                },
                                {
                                    key: '65', text: '55ג_1 '
                                },
                                {
                                    key: '66', text: '55ג_2 '
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {/*{this.chooseTransitAmmoForGdud55()}*/}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    gdud402View(){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' סוללות 402 ', children: [{
                                key: '21', text: '402א'
                            },
                                {
                                    key: '22', text: '402ב '
                                },
                                {
                                    key: '23', text: '402ג '
                                }
                            ]
                        },
                        {
                            key: '60', text: 'פלגות 402', children: [{
                                key: '61', text: '402א_1'
                            },
                                {
                                    key: '62', text: '402א_2 '
                                },
                                {
                                    key: '63', text: '402ב_1 '
                                },
                                {
                                    key: '64', text: '402ב_2 '
                                },
                                {
                                    key: '65', text: '402ג_1 '
                                },
                                {
                                    key: '66', text: '402ג_2 '
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{this.chooseTransitAmmoForGdud402()}*/}
                    {/*{this.chooseTransitAmmoForGdud402Picker()}*/}


                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }
    gdud403View(){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' סוללות 403 ', children: [{
                                key: '21', text: '403א'
                            },
                                {
                                    key: '22', text: '403ב '
                                },
                                {
                                    key: '23', text: '403ג '
                                }
                            ]
                        },
                        {
                            key: '60', text: 'פלגות 55', children: [{
                                key: '61', text: '403א_1'
                            },
                                {
                                    key: '62', text: '403א_2 '
                                },
                                {
                                    key: '63', text: '403ב_1 '
                                },
                                {
                                    key: '64', text: '403ב_2 '
                                },
                                {
                                    key: '65', text: '403ג_1 '
                                },
                                {
                                    key: '66', text: '403ג_2 '
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForGdud403()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    gdud531View(){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' סוללות 531 ', children: [{
                                key: '21', text: '531א'
                            },
                                {
                                    key: '22', text: '531ב '
                                },
                                {
                                    key: '23', text: '531ג '
                                }
                            ]
                        },
                        {
                            key: '60', text: 'פלגות 55', children: [{
                                key: '61', text: '531א_1'
                            },
                                {
                                    key: '62', text: '531א_2 '
                                },
                                {
                                    key: '63', text: '531ב_1 '
                                },
                                {
                                    key: '64', text: '531ב_2 '
                                },
                                {
                                    key: '65', text: '531ג_1 '
                                },
                                {
                                    key: '66', text: '531ג_2 '
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForGdud531()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    solela55aView(){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55א',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 55א ', children: [{
                                key: '21', text: '55א_1'
                            },
                                {
                                    key: '22', text: '55א_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 55א', children: [{
                                key: '61', text: '55א_1_א'
                            },
                                {
                                    key: '62', text: '55א_1_ב'
                                },
                                {
                                    key: '63', text: '55א_1_ג'
                                },
                                {
                                    key: '64', text: '55א_2_א'
                                },
                                {
                                    key: '65', text: '55א_2_ב'
                                },
                                {
                                    key: '66', text: '55א_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela55a()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    solela55bView(){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55ב',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 55ב ', children: [{
                                key: '21', text: '55ב_1'
                            },
                                {
                                    key: '22', text: '55ב_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 55ב', children: [{
                                key: '61', text: '55ב_1_א'
                            },
                                {
                                    key: '62', text: '55ב_1_ב'
                                },
                                {
                                    key: '63', text: '55ב_1_ג'
                                },
                                {
                                    key: '64', text: '55ב_2_א'
                                },
                                {
                                    key: '65', text: '55ב_2_ב'
                                },
                                {
                                    key: '66', text: '55ב_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela55b()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    solela55cView(){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55ג',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 55ג ', children: [{
                                key: '21', text: '55ג_1'
                            },
                                {
                                    key: '22', text: '55ג_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 55ג', children: [{
                                key: '61', text: '55ג_1_א'
                            },
                                {
                                    key: '62', text: '55ג_1_ב'
                                },
                                {
                                    key: '63', text: '55ג_1_ג'
                                },
                                {
                                    key: '64', text: '55ג_2_א'
                                },
                                {
                                    key: '65', text: '55ג_2_ב'
                                },
                                {
                                    key: '66', text: '55ג_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela55c()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }
    solela402aView(){

        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402א',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 402א ', children: [{
                                key: '21', text: '402א_1'
                            },
                                {
                                    key: '22', text: '402א_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 402א', children: [{
                                key: '61', text: '402א_1_א'
                            },
                                {
                                    key: '62', text: '402א_1_ב'
                                },
                                {
                                    key: '63', text: '402א_1_ג'
                                },
                                {
                                    key: '64', text: '402א_2_א'
                                },
                                {
                                    key: '65', text: '402א_2_ב'
                                },
                                {
                                    key: '66', text: '402א_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela402a()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }
    solela402bView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402ב',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 402ב ', children: [{
                                key: '21', text: '402ב_1'
                            },
                                {
                                    key: '22', text: '402ב_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 402ב', children: [{
                                key: '61', text: '402ב_1_א'
                            },
                                {
                                    key: '62', text: '402ב_1_ב'
                                },
                                {
                                    key: '63', text: '402ב_1_ג'
                                },
                                {
                                    key: '64', text: '402ב_2_א'
                                },
                                {
                                    key: '65', text: '402ב_2_ב'
                                },
                                {
                                    key: '66', text: '402ב_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela402b()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    solela402cView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402ג',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 402ג ', children: [{
                                key: '21', text: '402ג_1'
                            },
                                {
                                    key: '22', text: '402ג_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 402ג', children: [{
                                key: '61', text: '402ג_1_א'
                            },
                                {
                                    key: '62', text: '402ג_1_ב'
                                },
                                {
                                    key: '63', text: '402ג_1_ג'
                                },
                                {
                                    key: '64', text: '402ג_2_א'
                                },
                                {
                                    key: '65', text: '402ג_2_ב'
                                },
                                {
                                    key: '66', text: '402ג_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela402c()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }
    solela403aView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403א',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 403א ', children: [{
                                key: '21', text: '403א_1'
                            },
                                {
                                    key: '22', text: '403א_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 403א', children: [{
                                key: '61', text: '403א_1_א'
                            },
                                {
                                    key: '62', text: '403א_1_ב'
                                },
                                {
                                    key: '63', text: '403א_1_ג'
                                },
                                {
                                    key: '64', text: '403א_2_א'
                                },
                                {
                                    key: '65', text: '403א_2_ב'
                                },
                                {
                                    key: '66', text: '403א_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela403a()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }
    solela403bView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403ב',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 403ב ', children: [{
                                key: '21', text: '403ב_1'
                            },
                                {
                                    key: '22', text: '403ב_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 403ב', children: [{
                                key: '61', text: '403ב_1_א'
                            },
                                {
                                    key: '62', text: '403ב_1_ב'
                                },
                                {
                                    key: '63', text: '403ב_1_ג'
                                },
                                {
                                    key: '64', text: '403ב_2_א'
                                },
                                {
                                    key: '65', text: '403ב_2_ב'
                                },
                                {
                                    key: '66', text: '403ב_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela403b()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    solela403cView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403ג',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 403ג ', children: [{
                                key: '21', text: '403ג_1'
                            },
                                {
                                    key: '22', text: '403ג_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 403ג', children: [{
                                key: '61', text: '403ג_1_א'
                            },
                                {
                                    key: '62', text: '403ג_1_ב'
                                },
                                {
                                    key: '63', text: '403ג_1_ג'
                                },
                                {
                                    key: '64', text: '403ג_2_א'
                                },
                                {
                                    key: '65', text: '403ג_2_ב'
                                },
                                {
                                    key: '66', text: '403ג_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela403c()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    solela531aView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531א',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 531א ', children: [{
                                key: '21', text: '531א_1'
                            },
                                {
                                    key: '22', text: '531א_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 531א', children: [{
                                key: '61', text: '531א_1_א'
                            },
                                {
                                    key: '62', text: '531א_1_ב'
                                },
                                {
                                    key: '63', text: '531א_1_ג'
                                },
                                {
                                    key: '64', text: '531א_2_א'
                                },
                                {
                                    key: '65', text: '531א_2_ב'
                                },
                                {
                                    key: '66', text: '531א_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela531a()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    solela531bView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531ב',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 531ב ', children: [{
                                key: '21', text: '531ב_1'
                            },
                                {
                                    key: '22', text: '531ב_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 531ב', children: [{
                                key: '61', text: '531ב_1_א'
                            },
                                {
                                    key: '62', text: '531ב_1_ב'
                                },
                                {
                                    key: '63', text: '531ב_1_ג'
                                },
                                {
                                    key: '64', text: '531ב_2_א'
                                },
                                {
                                    key: '65', text: '531ב_2_ב'
                                },
                                {
                                    key: '66', text: '531ב_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela531b()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    solela531cView(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531ג',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' פלגות 531ג ', children: [{
                                key: '21', text: '531ג_1'
                            },
                                {
                                    key: '22', text: '531ג_2'
                                },

                            ]
                        },
                        {
                            key: '60', text: 'צוותים 531ג', children: [{
                                key: '61', text: '531ג_1_א'
                            },
                                {
                                    key: '62', text: '531ג_1_ב'
                                },
                                {
                                    key: '63', text: '531ג_1_ג'
                                },
                                {
                                    key: '64', text: '531ג_2_א'
                                },
                                {
                                    key: '65', text: '531ג_2_ב'
                                },
                                {
                                    key: '66', text: '531ג_2_ג'
                                },

                            ]
                        },


                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForSolela531c()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga55a1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55א_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 55א_1 ', children: [{
                                key: '21', text: '55א_1_א'
                            },
                                {
                                    key: '22', text: '55א_1_ב'
                                },
                                {
                                    key: '23', text: '55א_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga55a1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );

    }
    palga55a2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55א_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 55א_2 ', children: [{
                                key: '21', text: '55א_2_א'
                            },
                                {
                                    key: '22', text: '55א_2_ב'
                                },
                                {
                                    key: '23', text: '55א_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga55a2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga55b1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55ב_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 55ב_1 ', children: [{
                                key: '21', text: '55ב_1_א'
                            },
                                {
                                    key: '22', text: '55ב_1_ב'
                                },
                                {
                                    key: '23', text: '55ב_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga55b1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga55b2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55ב_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 55ב_2 ', children: [{
                                key: '21', text: '55ב_2_א'
                            },
                                {
                                    key: '22', text: '55ב_2_ב'
                                },
                                {
                                    key: '23', text: '55ב_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga55b2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga55c1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55ג_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 55ג_1 ', children: [{
                                key: '21', text: '55ג_1_א'
                            },
                                {
                                    key: '22', text: '55ג_1_ב'
                                },
                                {
                                    key: '23', text: '55ג_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga55c1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }
    palga55c2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '55ג_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 55ג_2 ', children: [{
                                key: '21', text: '55ג_2_א'
                            },
                                {
                                    key: '22', text: '55ג_2_ב'
                                },
                                {
                                    key: '23', text: '55ג_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga55c2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }
    palga402a1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402א_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 402א_1 ', children: [{
                                key: '21', text: '402א_1_א'
                            },
                                {
                                    key: '22', text: '402א_1_ב'
                                },
                                {
                                    key: '23', text: '402א_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga402a1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga402a2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402א_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 402א_2 ', children: [{
                                key: '21', text: '402א_2_א'
                            },
                                {
                                    key: '22', text: '402א_2_ב'
                                },
                                {
                                    key: '23', text: '402א_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga402a2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga402b1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402ב_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 402ב_1 ', children: [{
                                key: '21', text: '402ב_1_א'
                            },
                                {
                                    key: '22', text: '402ב_1_ב'
                                },
                                {
                                    key: '23', text: '402ב_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga402b1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga402b2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402ב_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 402ב_2 ', children: [{
                                key: '21', text: '402ב_2_א'
                            },
                                {
                                    key: '22', text: '402ב_2_ב'
                                },
                                {
                                    key: '23', text: '402ב_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga402b2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga402c1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402ג_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 402ג_1 ', children: [{
                                key: '21', text: '402ג_1_א'
                            },
                                {
                                    key: '22', text: '402ג_1_ב'
                                },
                                {
                                    key: '23', text: '402ג_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga402c1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga402c2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '402ג_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 402ג_2 ', children: [{
                                key: '21', text: '402ג_2_א'
                            },
                                {
                                    key: '22', text: '402ג_2_ב'
                                },
                                {
                                    key: '23', text: '402ג_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga402c2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga403a1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403א_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 403א_1 ', children: [{
                                key: '21', text: '403א_1_א'
                            },
                                {
                                    key: '22', text: '403א_1_ב'
                                },
                                {
                                    key: '23', text: '403א_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga403a1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga403a2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403א_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 403א_2 ', children: [{
                                key: '21', text: '403א_2_א'
                            },
                                {
                                    key: '22', text: '403א_2_ב'
                                },
                                {
                                    key: '23', text: '403א_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga403a2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga403b1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403ב_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 403ב_1 ', children: [{
                                key: '21', text: '403ב_1_א'
                            },
                                {
                                    key: '22', text: '403ב_1_ב'
                                },
                                {
                                    key: '23', text: '403ב_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga403b1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga403b2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403ב_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 403ב_2 ', children: [{
                                key: '21', text: '403ב_2_א'
                            },
                                {
                                    key: '22', text: '403ב_2_ב'
                                },
                                {
                                    key: '23', text: '403ב_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga403b2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga403c1() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403ג_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 403ג_1 ', children: [{
                                key: '21', text: '403ג_1_א'
                            },
                                {
                                    key: '22', text: '403ג_1_ב'
                                },
                                {
                                    key: '23', text: '403ג_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga403c1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga403c2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '403ג_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 403ג_2 ', children: [{
                                key: '21', text: '403ג_2_א'
                            },
                                {
                                    key: '22', text: '403ג_2_ב'
                                },
                                {
                                    key: '23', text: '403ג_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga403c2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga531a1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531א_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 531א_1 ', children: [{
                                key: '21', text: '531א_1_א'
                            },
                                {
                                    key: '22', text: '531א_1_ב'
                                },
                                {
                                    key: '23', text: '531א_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga531a1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga531a2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531א_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 531א_2 ', children: [{
                                key: '21', text: '531א_2_א'
                            },
                                {
                                    key: '22', text: '531א_2_ב'
                                },
                                {
                                    key: '23', text: '531א_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {/*{}*/}
                    {this.chooseTransitAmmoForPalga531a2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga531b1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531ב_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 531ב_1 ', children: [{
                                key: '21', text: '531ב_1_א'
                            },
                                {
                                    key: '22', text: '531ב_1_ב'
                                },
                                {
                                    key: '23', text: '531ב_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {this.chooseTransitAmmoForPalga531b1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga531b2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531ב_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 531ב_2 ', children: [{
                                key: '21', text: '531ב_2_א'
                            },
                                {
                                    key: '22', text: '531ב_2_ב'
                                },
                                {
                                    key: '23', text: '531ב_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>


                    {this.chooseTransitAmmoForPalga531b2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga531c1(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531ג_1',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 531ג_1 ', children: [{
                                key: '21', text: '531ג_1_א'
                            },
                                {
                                    key: '22', text: '531ג_1_ב'
                                },
                                {
                                    key: '23', text: '531ג_1_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {this.chooseTransitAmmoForPalga531c1()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }

    palga531c2(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <PickerCascader  data={[
                        {
                            key: '1', text: '531ג_2',children:[{
                                key: '2', text: 'העברת תחמושת'
                            },
                                {
                                    key: '3', text: 'יצירת מבצע'
                                }

                            ]
                        },


                        {
                            key: '20', text: ' צוותים 531ג_2 ', children: [{
                                key: '21', text: '531ג_2_א'
                            },
                                {
                                    key: '22', text: '531ג_2_ב'
                                },
                                {
                                    key: '23', text: '531ג_2_ג'
                                },

                            ]
                        },

                    ]}
                                     message = {"תבחר מחלקה"}
                                     onValueChange={(departTemp) => this.setState({departTemp}) }>
                        >
                    </PickerCascader>

                    {this.chooseTransitAmmoForPalga531c2()}
                    <TextInput
                        style={styles.input}
                        onChangeText={(נפיץ) => { this.setState({נפיץ}) }}
                        placeholder={'נפיץ'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_ישן) => this.setState({עשן_ישן})}
                        placeholder={'עשן_ישן'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(עשן_חדש) => this.setState({עשן_חדש})}
                        placeholder={'עשן_חדש'}
                        placeholderTextColor="white"

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(תאורה) => this.setState({תאורה})}
                        placeholder={'תאורה'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום137) => this.setState({מרעום137})}
                        placeholder={'מרעום137'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום739) => this.setState({מרעום739})}
                        placeholder={'מרעום739'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(מרעום557) => this.setState({מרעום557})}
                        placeholder={'מרעום557'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M7) => this.setState({M7})}
                        placeholder={'M7'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(M9) => this.setState({M9})}
                        placeholder={'M9'}
                        placeholderTextColor="white"

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(תחל) => this.setState({תחל})}
                        placeholder={'תחל'}
                        placeholderTextColor="white"

                    />
                    {this.showAddTake()}

                    <View style={styles.alternativeLayoutButtonContainer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSetOperation}>
                            <Text style={styles.buttonText}>צור מבצע</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        );
    }




    cevet55a_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55א_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet55a_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55א_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet55a_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55א_1_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet55a_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55א_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet55a_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55א_2_ב")}
                </View>
            </ScrollView>
        );
    }
    cevet55a_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55א_2_ג")}
                </View>
            </ScrollView>
        );
    }
    cevet55b_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ב_1_א")}
                </View>
            </ScrollView>
        );
    }
    cevet55b_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ב_1_ב")}
                </View>
            </ScrollView>
        );
    }
    cevet55b_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ב_1_ג")}
                </View>
            </ScrollView>
        );
    }
    cevet55b_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ב_2_א")}
                </View>
            </ScrollView>
        );
    }
    cevet55b_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ב_2_ב")}
                </View>
            </ScrollView>
        );
    }
    cevet55b_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ב_2_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet55c_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ג_1_א")}
                </View>
            </ScrollView>
        );
    }
    cevet55c_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ג_1_ב")}
                </View>
            </ScrollView>
        );
    }
    cevet55c_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ג_1_ג")}
                </View>
            </ScrollView>
        );
    }
    cevet55c_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ג_2_א")}
                </View>
            </ScrollView>
        );
    }
    cevet55c_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ג_2_ב")}
                </View>
            </ScrollView>
        );
    }
    cevet55c_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("55ג_2_ג")}
                </View>
            </ScrollView>
        );
    }
    cevet402a_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402א_1_א")}
                </View>
            </ScrollView>
        );
    }
    cevet402a_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402א_1_ב")}
                </View>
            </ScrollView>
        );
    }
    cevet402a_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402א_1_ג")}
                </View>
            </ScrollView>
        );
    }
    cevet402a_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402א_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet402a_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402א_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet402a_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402א_2_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet402b_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ב_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet402b_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ב_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet402b_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ב_1_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet402b_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ב_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet402b_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ב_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet402b_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ב_2_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet402c_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ג_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet402c_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ג_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet402c_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ג_1_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet402c_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ג_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet402c_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ג_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet402c_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("402ג_2_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet403a_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403א_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet403a_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {showAmmoFromEged("403א_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet403a_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403א_1_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet403a_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403א_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet403a_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403א_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet403a_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403א_2_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet403b_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ב_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet403b_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ב_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet403b_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ב_1_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet403b_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ב_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet403b_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ב_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet403b_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ב_2_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet403c_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ג_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet403c_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ג_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet403c_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ג_1_ג")}
                </View>
            </ScrollView>
        );
    }
    cevet403c_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ג_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet403c_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ג_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet403c_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("403ג_2_ג")}
                </View>
            </ScrollView>
        );
    }
    cevet531a_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531א_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet531a_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531א_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet531a_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531א_1_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet531a_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531א_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet531a_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531א_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet531a_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531א_2_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet531b_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ב_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet531b_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ב_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet531b_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ב_1_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet531b_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ב_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet531b_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ב_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet531b_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ב_2_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet531c_1_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ג_1_א")}
                </View>
            </ScrollView>
        );
    }

    cevet531c_1_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ג_1_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet531c_1_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ג_1_ג")}
                </View>
            </ScrollView>
        );
    }

    cevet531c_2_a(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ג_2_א")}
                </View>
            </ScrollView>
        );
    }

    cevet531c_2_b(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ג_2_ב")}
                </View>
            </ScrollView>
        );
    }

    cevet531c_2_c(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {this.showAmmoFromEged("531ג_2_ג")}
                </View>
            </ScrollView>
        );
    }
    showAmmoFromEged = (sourceDepartment) =>{

        let query = firebase.database().ref("Storage/"+sourceDepartment).orderByKey();
        query.once("value")
            .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    // key will be "ada" the first time and "alan" the second time
                    let key = childSnapshot.key;
                    // childData will be the actual contents of the child
                    if(key!=="ammo"&&key!=="קרקע"){
                        let childData = childSnapshot.val();
                        let sum1 = childData.נפיץ
                        let sum2 = childData.עשן_ישן
                        let sum3 = childData.עשן_חדש
                        let sum4 = childData.תאורה
                        let sum5 = childData.מרעום137
                        let sum6 = childData.מרעום739
                        let sum7 = childData.מרעום557
                        let sum8 = childData.M7
                        let sum9 = childData.M9
                        let sum10 = childData.תחל
                        if(sum1>0||sum2>0||sum3>0||sum4>0||sum5>0||sum6>0||sum7>0||sum8>0
                            ||sum9>0||sum10>0){
                            Alert.alert(
                                'הודעה חשובה',
                                'יש לך הספקת תחמושת',
                                [
                                    {
                                        text:
                                            "אתה יכול לצאת לירי"
                                    },
                                ],
                            )
                            let operationData = {}
                            firebase.database().ref("Storage/" + sourceDepartment+"/ammo").once("value", function (snapshot) {
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

                                //Write to Database  after reading
                                firebase.database().ref("Storage/"+sourceDepartment+"/ammo").set({
                                    נפיץ: temp1+sum1,
                                    עשן_ישן: temp2+sum2,
                                    עשן_חדש: temp3+sum3,
                                    תאורה: temp4+sum4,
                                    מרעום137: temp5+sum5,
                                    מרעום739: temp6+sum6,
                                    מרעום557: temp7+sum7,
                                    M7: temp8+sum8,
                                    M9: temp9+sum9,
                                    תחל: temp10+sum10,
                                }).then((data) => {
                                    //success callback
                                    console.log('data ', data)
                                }).catch((error) => {
                                    //error callback
                                    console.log('error ', error)
                                })

                                firebase.database().ref("Storage/"+sourceDepartment+"/"+key).set({
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
                                if(sourceDepartment==="55א_1_א"||sourceDepartment==="55א_1_ב" ||sourceDepartment==="55א_1_ג"){
                                    writeDataForUpStorage("55א_1",childData)
                                    writeDataForUpStorage("55א",childData)
                                    writeDataForUpStorage("55/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="55א_2_א"||sourceDepartment==="55א_2_ב" ||sourceDepartment==="55א_2_ג"){
                                    writeDataForUpStorage("55א_2",childData)
                                    writeDataForUpStorage("55א",childData)
                                    writeDataForUpStorage("55/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="55ב_1_א"||sourceDepartment==="55ב_1_ב" ||sourceDepartment==="55ב_1_ג"){
                                    writeDataForUpStorage("55ב_1",childData)
                                    writeDataForUpStorage("55ב",childData)
                                    writeDataForUpStorage("55/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="55ב_2_א"||sourceDepartment==="55ב_2_ב" ||sourceDepartment==="55ב_2_ג"){
                                    writeDataForUpStorage("55ב_2",childData)
                                    writeDataForUpStorage("55ב",childData)
                                    writeDataForUpStorage("55/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="55ג_1_א"||sourceDepartment==="55ג_1_ב" ||sourceDepartment==="55ג_1_ג"){
                                    writeDataForUpStorage("55ג_1",childData)
                                    writeDataForUpStorage("55ג",childData)
                                    writeDataForUpStorage("55/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="55ג_2_א"||sourceDepartment==="55ג_2_ב" ||sourceDepartment==="55ג_2_ג"){
                                    writeDataForUpStorage("55ג_2",childData)
                                    writeDataForUpStorage("55ג",childData)
                                    writeDataForUpStorage("55/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="402א_1_א"||sourceDepartment==="402א_1_ב" ||sourceDepartment==="402א_1_ג"){
                                    writeDataForUpStorage("402א_1",childData)
                                    writeDataForUpStorage("402א",childData)
                                    writeDataForUpStorage("402/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="402א_2_א"||sourceDepartment==="402א_2_ב" ||sourceDepartment==="402א_2_ג"){
                                    writeDataForUpStorage("402א_2",childData)
                                    writeDataForUpStorage("402א",childData)
                                    writeDataForUpStorage("402/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="402ב_1_א"||sourceDepartment==="402ב_1_ב" ||sourceDepartment==="402ב_1_ג"){
                                    writeDataForUpStorage("402ב_1",childData)
                                    writeDataForUpStorage("402ב",childData)
                                    writeDataForUpStorage("402/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="402ב_2_א"||sourceDepartment==="402ב_2_ב" ||sourceDepartment==="402ב_2_ג"){
                                    writeDataForUpStorage("402ב_2",childData)
                                    writeDataForUpStorage("402ב",childData)
                                    writeDataForUpStorage("402/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="402ג_1_א"||sourceDepartment==="402ג_1_ב" ||sourceDepartment==="402ג_1_ג"){
                                    writeDataForUpStorage("402ג_1",childData)
                                    writeDataForUpStorage("402ג",childData)
                                    writeDataForUpStorage("402/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="402ג_2_א"||sourceDepartment==="402ג_2_ב" ||sourceDepartment==="402ג_2_ג"){
                                    writeDataForUpStorage("402ג_2",childData)
                                    writeDataForUpStorage("402ג",childData)
                                    writeDataForUpStorage("402/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="403א_1_א"||sourceDepartment==="403א_1_ב" ||sourceDepartment==="403א_1_ג"){
                                    writeDataForUpStorage("403א_1",childData)
                                    writeDataForUpStorage("403א",childData)
                                    writeDataForUpStorage("403/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="403א_2_א"||sourceDepartment==="403א_2_ב" ||sourceDepartment==="403א_2_ג"){
                                    writeDataForUpStorage("403א_2",childData)
                                    writeDataForUpStorage("403א",childData)
                                    writeDataForUpStorage("403/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="403ב_1_א"||sourceDepartment==="403ב_1_ב" ||sourceDepartment==="403ב_1_ג"){
                                    writeDataForUpStorage("403ב_1",childData)
                                    writeDataForUpStorage("403ב",childData)
                                    writeDataForUpStorage("403/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="403ב_2_א"||sourceDepartment==="403ב_2_ב" ||sourceDepartment==="403ב_2_ג"){
                                    writeDataForUpStorage("403ב_2",childData)
                                    writeDataForUpStorage("403ב",childData)
                                    writeDataForUpStorage("403/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="403ג_1_א"||sourceDepartment==="403ג_1_ב" ||sourceDepartment==="403ג_1_ג"){
                                    writeDataForUpStorage("403ג_1",childData)
                                    writeDataForUpStorage("403ג",childData)
                                    writeDataForUpStorage("403/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="403ג_2_א"||sourceDepartment==="403ג_2_ב" ||sourceDepartment==="403ג_2_ג"){
                                    writeDataForUpStorage("403ג_2",childData)
                                    writeDataForUpStorage("403ג",childData)
                                    writeDataForUpStorage("403/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="531א_1_א"||sourceDepartment==="531א_1_ב" ||sourceDepartment==="531א_1_ג"){
                                    writeDataForUpStorage("531א_1",childData)
                                    writeDataForUpStorage("531א",childData)
                                    writeDataForUpStorage("531/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="531א_2_א"||sourceDepartment==="531א_2_ב" ||sourceDepartment==="531א_2_ג"){
                                    writeDataForUpStorage("531א_2",childData)
                                    writeDataForUpStorage("531א",childData)
                                    writeDataForUpStorage("531/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="531ב_1_א"||sourceDepartment==="531ב_1_ב" ||sourceDepartment==="531ב_1_ג"){
                                    writeDataForUpStorage("531ב_1",childData)
                                    writeDataForUpStorage("531ב",childData)
                                    writeDataForUpStorage("531/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="531ב_2_א"||sourceDepartment==="531ב_2_ב" ||sourceDepartment==="531ב_2_ג"){
                                    writeDataForUpStorage("531ב_2",childData)
                                    writeDataForUpStorage("531ב",childData)
                                    writeDataForUpStorage("531/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="531ג_1_א"||sourceDepartment==="531ג_1_ב" ||sourceDepartment==="531ג_1_ג"){
                                    writeDataForUpStorage("531ג_1",childData)
                                    writeDataForUpStorage("531ג",childData)
                                    writeDataForUpStorage("531/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }else if(sourceDepartment==="531ג_2_א"||sourceDepartment==="531ג_2_ב" ||sourceDepartment==="531ג_2_ג"){
                                    writeDataForUpStorage("531ג_2",childData)
                                    writeDataForUpStorage("531ג",childData)
                                    writeDataForUpStorage("531/ammo",childData)
                                    writeDataForUpStorage("אגד215"+"/ammo",childData)
                                }
                            });



                        }else{
                            console.log("answer is false")
                        }
                    }
                });
            });
        this.movingAmmoReport(sourceDepartment)
    }
    movingAmmoReport=(sourceDepartment)=>{
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        let hours = new Date().getHours(); //Current Hours
        let min = new Date().getMinutes(); //Current Minutes
        let sec = new Date().getSeconds(); //Current Seconds
        let query = firebase.database().ref("Storage/"+sourceDepartment).orderByKey();
        query.once("value")
            .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    // key will be "ada" the first time and "alan" the second time
                    let key = childSnapshot.key;
                    // childData will be the actual contents of the child
                    if(key!=="ammo"&&key!=="קרקע"){
                        let childData = childSnapshot.val();
                        let sum1 = childData.נפיץ
                        let sum2 = childData.עשן_ישן
                        let sum3 = childData.עשן_חדש
                        let sum4 = childData.תאורה
                        let sum5 = childData.מרעום137
                        let sum6 = childData.מרעום739
                        let sum7 = childData.מרעום557
                        let sum8 = childData.M7
                        let sum9 = childData.M9
                        let sum10 = childData.תחל
                        if(sum1>0||sum2>0||sum3>0||sum4>0||sum5>0||sum6>0||sum7>0||sum8>0
                            ||sum9>0||sum10>0){

                            firebase.database().ref("Invoices").push({
                                Time: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
                                Type: "Moving Ammo",
                                צוות: sourceDepartment,
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

                        }else{
                            console.log("answer is false")
                        }
                    }
                });
            });

    }

    render() {
        let user="";
        user =  firebase.auth().currentUser.email;

        if(user === "215a@idf.com"){
            return (
                this.egedView()
            );
        }else if(user ==="55@idf.com"){
            return (
                this.gdud55View()
            );
        }else if(user ==="402@idf.com"){

            return (
                this.gdud402View()
            );
        }else if(user ==="403@idf.com"){
            return (
                this.gdud403View()
            );
        }else if(user ==="531@idf.com"){
            return (
                this.gdud531View()
            );
        }else if(user ==="55a@idf.com"){
            return (
                this.solela55aView()
            );
        }else if(user ==="55b@idf.com"){
            return (
                this.solela55bView()
            );
        }else if(user ==="55c@idf.com"){
            return (
                this.solela55cView()
            );
        }else if(user ==="402a@idf.com"){
            return (
                this.solela402aView()
            );
        }else if(user ==="402b@idf.com"){
            return (
                this.solela402bView()
            );
        }else if(user ==="402c@idf.com"){
            return (
                this.solela402cView()
            );
        }else if(user ==="403a@idf.com"){
            return (
                this.solela403aView()
            );
        }else if(user ==="403b@idf.com"){
            return (
                this.solela403bView()
            );
        }else if(user ==="403c@idf.com"){
            return (
                this.solela403cView()
            );
        }else if(user ==="531a@idf.com"){
            return (
                this.solela531aView()
            );
        }else if(user ==="531b@idf.com"){
            return (
                this.solela531bView()
            );
        }else if(user ==="531c@idf.com"){
            return (
                this.solela531cView()
            );
        }else if(user ==="55a_1@idf.com"){
            return (
                this.palga55a1()
            );
        }else if(user ==="55a_2@idf.com"){
            return (
                this.palga55a2()
            );
        }else if(user ==="55b_1@idf.com"){
            return (
                this.palga55b1()
            );
        }else if(user ==="55b_2@idf.com"){
            return (
                this.palga55b2()
            );
        }else if(user ==="55c_1@idf.com"){
            return (
                this.palga55c1()
            );
        }else if(user ==="55c_2@idf.com"){
            return (
                this.palga55c2()
            );
        }else if(user ==="402a_1@idf.com"){
            return (
                this.palga402a1()
            );
        }else if(user ==="402a_2@idf.com"){
            return (
                this.palga402a2()
            );
        }else if(user ==="402b_1@idf.com"){
            return (
                this.palga402b1()
            );
        }else if(user ==="402b_2@idf.com"){
            return (
                this.palga402b2()
            );
        }else if(user ==="402c_1@idf.com"){
            return (
                this.palga402c1()
            );
        }else if(user ==="402c_2@idf.com"){
            return (
                this.palga402c2()
            );
        }else if(user ==="403a_1@idf.com"){
            return (
                this.palga403a1()
            );
        }else if(user ==="403a_2@idf.com"){
            return (
                this.palga403a2()
            );
        }else if(user ==="403b_1@idf.com"){
            return (
                this.palga403b1()
            );
        }else if(user ==="403b_2@idf.com"){
            return (
                this.palga403b2()
            );
        }else if(user ==="403c_1@idf.com"){
            return (
                this.palga403c1()
            );
        }else if(user ==="403c_2@idf.com"){
            return (
                this.palga403c2()
            );
        }else if(user ==="531a_1@idf.com"){
            return (
                this.palga531a1()
            );
        }else if(user ==="531a_2@idf.com"){
            return (
                this.palga531a2()
            );
        }else if(user ==="531b_1@idf.com"){
            return (
                this.palga531b1()
            );
        }else if(user ==="531b_2@idf.com"){
            return (
                this.palga531b2()
            );
        }else if(user ==="531c_1@idf.com"){
            return (
                this.palga531c1()
            );
        }else if(user ==="531c_2@idf.com"){
            return (
                this.palga531c2()
            );
        }else if(user==="55a_1_a@idf.com"){
            return(
                this.cevet55a_1_a()
            );
        }else if(user==="55a_1_b@idf.com"){
            return(
                this.cevet55a_1_b()
            );
        }else if(user==="55a_1_c@idf.com"){
            return(
                this.cevet55a_1_c()
            );
        }else if(user==="55a_2_a@idf.com"){
            return(
                this.cevet55a_2_a()
            );
        }else if(user==="55a_2_b@idf.com"){
            return(
                this.cevet55a_2_b()
            );
        }else if(user==="55a_2_c@idf.com"){
            return(
                this.cevet55a_2_c()
            );
        }else if(user==="55b_1_a@idf.com"){
            return(
                this.cevet55b_1_a()
            );
        }else if(user==="55b_1_b@idf.com"){
            return(
                this.cevet55b_1_b()
            );
        }else if(user==="55b_1_c@idf.com"){
            return(
                this.cevet55b_1_c()
            );
        }else if(user==="55b_2_a@idf.com"){
            return(
                this.cevet55b_2_a()
            );
        }else if(user==="55b_2_b@idf.com"){
            return(
                this.cevet55b_2_b()
            );
        }
        else if(user==="55b_2_c@idf.com"){
            return(
                this.cevet55b_2_c()
            );
        }else if(user==="55c_1_a@idf.com"){
            return(
                this.cevet55c_1_a()
            );
        }else if(user==="55c_1_b@idf.com"){
            return(
                this.cevet55c_1_b()
            );
        }else if(user==="55c_1_c@idf.com"){
            return(
                this.cevet55c_1_c()
            );
        }else if(user==="55c_2_a@idf.com"){
            return(
                this.cevet55c_2_a()
            );
        }else if(user==="55c_2_b@idf.com"){
            return(
                this.cevet55c_2_b()
            );
        }
        else if(user==="55c_2_c@idf.com"){
            return(
                this.cevet55c_2_c()
            );
        }else if(user==="402a_1_a@idf.com"){
            return(
                this.cevet402a_1_a()
            );
        }else if(user==="402a_1_b@idf.com"){
            return(
                this.cevet402a_1_b()
            );
        }else if(user==="402a_1_c@idf.com"){
            return(
                this.cevet402a_1_c()
            );
        }else if(user==="402a_2_a@idf.com"){
            return(
                this.cevet402a_2_a()
            );
        }else if(user==="402a_2_b@idf.com"){
            return(
                this.cevet402a_2_b()
            );
        }else if(user==="402a_2_c@idf.com"){
            return(
                this.cevet402a_2_c()
            );
        }else if(user==="402b_1_a@idf.com"){
            return(
                this.cevet402b_1_a()
            );
        }else if(user==="402b_1_b@idf.com"){
            return(
                this.cevet402b_1_b()
            );
        }else if(user==="402b_1_c@idf.com"){
            return(
                this.cevet402b_1_c()
            );
        }else if(user==="402b_2_a@idf.com"){
            return(
                this.cevet402b_2_a()
            );
        }else if(user==="402b_2_b@idf.com"){
            return(
                this.cevet402b_2_b()
            );
        }else if(user==="402b_2_c@idf.com"){
            return(
                this.cevet402b_2_c()
            );
        }else if(user==="402c_1_a@idf.com"){
            return(
                this.cevet402c_1_a()
            );
        }else if(user==="402c_1_b@idf.com"){
            return(
                this.cevet402c_1_b()
            );
        }else if(user==="402c_1_c@idf.com"){
            return(
                this.cevet402c_1_c()
            );
        }else if(user==="402c_2_a@idf.com"){
            return(
                this.cevet402c_2_a()
            );
        }else if(user==="402c_2_b@idf.com"){
            return(
                this.cevet402c_2_b()
            );
        }else if(user==="402c_2_c@idf.com"){
            return(
                this.cevet402c_2_c()
            );
        }else if(user==="403a_1_a@idf.com"){
            return(
                this.cevet403a_1_a()
            );
        }else if(user==="403a_1_b@idf.com"){
            return(
                this.cevet403a_1_b()
            );
        }else if(user==="403a_1_c@idf.com"){
            return(
                this.cevet403a_1_c()
            );
        }else if(user==="403a_2_a@idf.com"){
            return(
                this.cevet403a_2_a()
            );
        }else if(user==="403a_2_b@idf.com"){
            return(
                this.cevet403a_2_b()
            );
        }else if(user==="403a_2_c@idf.com"){
            return(
                this.cevet403a_2_c()
            );
        }else if(user==="403b_1_a@idf.com"){
            return(
                this.cevet403b_1_a()
            );
        }else if(user==="403b_1_b@idf.com"){
            return(
                this.cevet403b_1_b()
            );
        }else if(user==="403b_1_c@idf.com"){
            return(
                this.cevet403b_1_c()
            );
        }else if(user==="403b_2_a@idf.com"){
            return(
                this.cevet403b_2_a()
            );
        }else if(user==="403b_2_b@idf.com"){
            return(
                this.cevet403b_2_b()
            );
        }else if(user==="403b_2_c@idf.com"){
            return(
                this.cevet403b_2_c()
            );
        }else if(user==="403c_1_a@idf.com"){
            return(
                this.cevet403c_1_a()
            );
        }else if(user==="403c_1_b@idf.com"){
            return(
                this.cevet403c_1_b()
            );
        }else if(user==="403c_1_c@idf.com"){
            return(
                this.cevet403c_1_c()
            );
        }else if(user==="403c_2_a@idf.com"){
            return(
                this.cevet403c_2_a()
            );
        }else if(user==="403c_2_b@idf.com"){
            return(
                this.cevet403c_2_b()
            );
        }else if(user==="403c_2_c@idf.com"){
            return(
                this.cevet403c_2_c()
            );
        }else if(user==="531a_1_a@idf.com"){
            return(
                this.cevet531a_1_a()
            );
        }else if(user==="531a_1_b@idf.com"){
            return(
                this.cevet531a_1_b()
            );
        }else if(user==="531a_1_c@idf.com"){
            return(
                this.cevet531a_1_c()
            );
        }else if(user==="531a_2_a@idf.com"){
            return(
                this.cevet531a_2_a()
            );
        }else if(user==="531a_2_b@idf.com"){
            return(
                this.cevet531a_2_b()
            );
        }else if(user==="531a_2_c@idf.com"){
            return(
                this.cevet531a_2_c()
            );
        }else if(user==="531b_1_a@idf.com"){
            return(
                this.cevet531b_1_a()
            );
        }else if(user==="531b_1_b@idf.com"){
            return(
                this.cevet531b_1_b()
            );
        }else if(user==="531b_1_c@idf.com"){
            return(
                this.cevet531b_1_c()
            );
        }else if(user==="531b_2_a@idf.com"){
            return(
                this.cevet531b_2_a()
            );
        }else if(user==="531b_2_b@idf.com"){
            return(
                this.cevet531b_2_b()
            );
        }else if(user==="531b_2_c@idf.com"){
            return(
                this.cevet531b_2_c()
            );
        }else if(user==="531c_1_a@idf.com"){
            return(
                this.cevet531c_1_a()
            );
        }else if(user==="531c_1_b@idf.com"){
            return(
                this.cevet531c_1_b()
            );
        }else if(user==="531c_1_c@idf.com"){
            return(
                this.cevet531c_1_c()
            );
        }else if(user==="531c_2_a@idf.com"){
            return(
                this.cevet531c_2_a()
            );
        }else if(user==="531c_2_b@idf.com"){
            return(
                this.cevet531c_2_b()
            );
        }else if(user==="531c_2_c@idf.com"){
            return(
                this.cevet531c_2_c()
            );

        }
        else {
            return(
                <View style={styles.container}>
                    <Text>משתמש זה אין הרשאה ליצור משימות</Text>
                </View>
            );
        }


    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        backgroundColor:'#455a64',
    },
    hebrowText: {
        textAlign:'right',
        height: 40, borderColor: 'gray', borderWidth: 1
    },
    // buttonStyle:{
    //     borderRadius: 15,
    //     height: 30,
    //     raiseLevel: 6,
    //     backgroundColor: "#FAFAFA",
    //     backgroundDarker: "#0e10cb",
    //     backgroundActive: "#e7fcfb",
    //     backgroundPlaceholder: "#b3e5e1",
    //     textColor: "#243798",
    //     backgroundProgress: "#c5ece8",
    //     borderWidth: 2,
    //     borderColor: "#b3e5e1",
    //     activityColor: "#236698"
    // },
    text :{
        textAlign:'center',
        fontWeight: 'bold',
        textShadowColor: 'red',
        fontSize:20,
        // textShadowOffset: { width: 2, height: 2 },
        textShadowRadius : 5,
        color: '#000000',
        fontStyle: 'italic'
    },
    textButton:{
        fontWeight: 'bold',
        color:'#eee6e7',
        fontSize:20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        marginBottom: 20,
        paddingHorizontal: 10,
        textAlign: 'center',
        flex:1,

        justifyContent: 'space-evenly',
        overflow: "hidden",
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
    rowButtons: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});