import React from 'react';
import { StyleSheet,TouchableOpacity,Text,ImageBackground } from 'react-native';

import * as firebase from 'firebase';

export default class ProfileScreen extends React.Component {
  state = {
    image: null,
  };

  render() {
    let place=""
    place = firebase.auth().currentUser.email.replace("@idf.com","")
    place = place.replace('a',' א');
    place = place.replace('a',' א');
    place = place.replace('b',' ב');
    place = place.replace('b',' ב');
    place = place.replace('c',' ג');
    place = place.replace('c',' ג');
    
    return (

               <ImageBackground style={styles.logo} source={require('./../images/ShowImage.png')}>
               <Text style={styles.title}>{'  שלום\n'+place}</Text>

               <Text style={styles.baseText}>{'\nאגד 215 הוא ראשון אגדי הארטילריה בצבא ההגנה לישראל.\n'}</Text>
               <Text style={styles.baseText}>{'ככזה, הוביל האגד את כל תהליכי בנין הכוח המרכזיים של חיל התותחנים, היווה מודל לחיקוי והביא את ניסיונו העשיר לידי ביטוי בכל משימה. האגד פעל בכל מלחמה ומבצע שידעה מדינת ישראל - הגן על גבולותיה תוך הפעלת אש מדויקת ועוצמתית והיה חלק מרכזי בהכרעת האויב.\n\n'}</Text>
               <TouchableOpacity style={styles.buttonContainer} onPress={this.SignoutPress}>
                                    <Text style={styles.buttonText}>יציאה</Text>
                                </TouchableOpacity>
               
                </ImageBackground>
         
               
    );
  }
  SignoutPress =() => {
    firebase.auth().signOut();

}

}
const styles = StyleSheet.create({
  container:{
      flex:1,
      padding:20,
      backgroundColor:'#455a64',
  },
logo: {
      width:"100%",
  height:"100%",
},
logoContianer: {
      flex:1,
      alignItems: 'center',

  justifyContent: 'center',
},
baseText: {
  backgroundColor: 'transparent',
  fontSize: 15,
  fontWeight: 'bold',
  color: '#000000',
  textAlign: 'right',
},

title:{
  color:'#5C4033',
  marginTop: 30,
 
  fontSize: 40,
    fontWeight: 'bold',
  textAlign: 'center',
 
},  buttonContainer: {
  width:150,
  backgroundColor:'#1c313a',
  borderRadius: 25,
  marginVertical: 10,
  paddingVertical: 13,
  position: 'absolute',
  bottom:0,
  right:0

},

buttonText: {
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight:'700'
},





});