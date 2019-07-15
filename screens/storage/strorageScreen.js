import React from 'react';

import {  StyleSheet,FlatList, Text,  View} from 'react-native';
import { connect } from 'react-redux';
import { watchStorageData } from '../../redux/app-redux';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { LinearGradient } from 'expo';
let storageName="";

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

  
 class storageScreen extends React.Component {
  
    static navigationOptions = {
        header: null,
      };
      
      constructor(props) {
        super(props);
        this.state ={test:this.props.navigation.state.params.test}
    
        this.props.watchStorageData(this.state.test);
      }
      
    render() {
      
      storageName=this.state.test;
      storageName=storageName.replace('/ammo','');
      
     
        return (

          <View style={styles.container}>
          
          <LinearGradient
          colors={['#3399ff', '#66b3ff', '#cccccc']}
          style={styles.pageStyle}>
          <Text style={styles.title}>{ storageName}</Text>
        </LinearGradient>
        <FlatList  
      data={[{key: [' M7 ',this.props.storageData.M7,['#3d3a3a', '#696262', '#a09595']]}, {key:[' M9 ', this.props.storageData.M9,['#00330d', '#00661a', '#00661a']]},
      {key: [' מרעום 137',this.props.storageData.מרעום137,['#990073', '#e600ac', '#ff4dd2']]}, {key: [' מרעום557',this.props.storageData.מרעום557,['#ff8000', '#ff9933', '#ffbf80']]},
      {key: [' מרעום739',this.props.storageData.מרעום739,['#b3b300', '#ffff66', '#b3b300']]}, {key: [' נפיץ',this.props.storageData.נפיץ,['#9900ff', '#b84dff', '#d699ff']]},
      {key: [' עשן_חדש',this.props.storageData.עשן_חדש,['#4c669f', '#3b5998', '#192f6a']]}, {key: [' עשן_ישן', this.props.storageData.עשן_ישן,['#e62e00', '#ff5c33', '#ff9980']]},
      {key: [' תחל',this.props.storageData.תחל,['#009999', '#00cccc', '#1affff']]},{key: [' תאורה',this.props.storageData.תאורה,['#448AFF', '#9E9E9E', '#FFEB3B', '#FF5722']]}]}
      
      
       renderItem={({item}) => <LinearGradient 
      
      colors={item.key[2]}
      style={styles.item} >
         <Text style={styles.hebrowText} >{item.key[0]+'\n\n'+item.key[1]+'                     '  }</Text>
    </LinearGradient>}
      numColumns={2}
      
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
    item: {
     
      flex:1,
      borderRadius: 5, 
       
        overflow: "hidden",
   
   height: 100,
   margin: 10,
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

const mapStateToProps = (state) => {
  return {
    
    storageData: state.storageData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    watchStorageData: (storageName) => { dispatch(watchStorageData(storageName)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(storageScreen);