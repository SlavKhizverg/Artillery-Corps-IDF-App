import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//
// Initial State...
//

const initialState = {
    personData: { },
    storageData:{ },
    operationData:{ },
    startFireData:{ },
    finishFire:{ },
    moovingAmmo:{ },
};

//
// Reducer...
//

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "setStorageData":
            return { ...state, storageData: action.value };
        
        case "setOperationData":
            return {...state, operationData: action.value};

        case "setStartFireData":
            return {...state, startFireData: action.value};

        case "setFinishFire":
            return {...state, finishFire: action.value};

        case "setMoovingAmmo":
            return {...state, moovingAmmo: action.value};

        default:
            return state;
    }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators...
//

const setFavoriteAnimal = (favoriteAnimal) => {
    return {
        type: "setFavoriteAnimal",
        value: favoriteAnimal,
    };
}

const setPersonData = (personData) => {
    return {
        type: "setPersonData",
        value: personData
    };
}
const setStorageData = (storageData) => {
    return {
        type: "setStorageData",
        value: storageData
    }
}


const setOperationData = (operationData) =>{
    return {
        type: "setOperationData",
        value: operationData
    }
}
const setStartFireData = (startFireData) =>{
    return {
        type: "setStartFireData",
        value: startFireData
    }
}

const setFinishFire = (finishFire) =>{
    return {
        type: "setFinishFire",
        value: finishFire
    }
}

const setMoovingAmmo = (moovingAmmo) =>{
    return {
        type: "setMoovingAmmo",
        value: moovingAmmo
    }
}

const watchPersonData = () => {
    return function(dispatch) {

        firebase.database().ref("person").on("value", function(snapshot) {
            var personData = snapshot.val();
            dispatch(setPersonData(personData));
        }, function(error) { });
    };
}

const watchStorageData = (storage) => {
    return function(dispatch) {
        firebase.database().ref("Storage/"+ storage).on("value", function(snapshot) {
            var storageData = snapshot.val();
            dispatch(setStorageData(storageData));
        }, function(error) { });
    };
}


const watchOperationData = () =>{
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
    return function(dispatch) {
        firebase.database().ref("Operation/"+place).on("value", function(snapshot) {
            var operationData = snapshot.val();
            dispatch(setOperationData(operationData));
        }, function(error) { });
    };
}

const watchInvoiceStartFireAmmo = () =>{
    return function(dispatch) {
        firebase.database().ref("Invoices/startfire").on("value", function(snapshot) {
            var startFireData = snapshot.val();
            dispatch(setStartFireData(startFireData));
        }, function(error) { });
    };
}

const watchInvoiceFinishFireAmmo = () =>{
    return function(dispatch) {
        firebase.database().ref("Invoices/finishfire").on("value", function(snapshot) {
            var finishFire = snapshot.val();
            dispatch(setFinishFire(finishFire));
        }, function(error) { });
    };
}

const watchInvoiceMoovingireAmmo = () =>{
    return function(dispatch) {
        firebase.database().ref("Invoices/finishfire").on("value", function(snapshot) {
            var moovingAmmo = snapshot.val();
            dispatch(setMoovingAmmo(moovingAmmo));
        }, function(error) { });
    };
}



export { setFavoriteAnimal, setPersonData,setStorageData,watchStorageData,watchOperationData,setOperationData,watchInvoiceStartFireAmmo,setStartFireData,watchInvoiceFinishFireAmmo,watchInvoiceMoovingireAmmo};