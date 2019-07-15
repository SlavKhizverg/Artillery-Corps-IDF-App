import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform,TouchableOpacity } from 'react-native';
import {
    Text, TextInput, TouchableHighlight, View, ScrollView,
    StyleSheet, FlatList, TouchableWithoutFeedback
} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import Dialog, { DialogContent } from 'react-native-popup-dialog';



export default class PickerCascader extends Component {
    constructor(props) {
        super(props);
        let transformData = [];

        this.createSearchData(transformData, this.props.data, '', '');

        this.state = {
            visible: false,
            selecteditems: [],
            originalData: this.props.data,
            data: this.props.data,
            history: [],
            selecteditem: { text: '' },
            searchString: '',
            searchData: transformData,
            filterData: []
        };

    }

    createSearchData(searchData, data, key, text) {
        let index = 0;
        for (index = 0; index < data.length; index++) {
            let d = data[index];
            if (d.children !== undefined)
                this.createSearchData(searchData, d.children, key + d.key + '~', text + d.text + ' | ');
            else {
                let k = key + d.key;
                let t = text + d.text;
                searchData.push({ key: k, text: t })
            }
        }
    }


    pressParentItem(item) {
        let lastHistory = this.state.history;

        let pIndex = this.findIndexByKey(lastHistory, item.key);

        let pItem = lastHistory[pIndex];

        lastHistory.length = pIndex;

        this.setState({
            selecteditems: pItem.selecteditems,
            data: pItem.data,
            history: lastHistory
        });


    }

    findIndexByKey(data, key) {
        let index = 0;
        for (index = 0; index < data.length; index++) {
            if (data[index].key == key) {
                return index;
            }
        }

    }



    pressSearchItem(item) {
        let si = { text: '', key: '' };
        si.text = item.text;
        si.key = item.key;
        this.setState({
            visible: false,
            selecteditem: si
        });
        if (this.props.onValueChange != null) {
            this.props.onValueChange(si);
        }
    }

    pressItem(item) {
        if (item.children === undefined) {
            let index = 0;
            let t = '', k = '';

            for (index = 0; index < this.state.selecteditems.length; index++) {
                t = t + this.state.selecteditems[index].text + ' | ';
                k = k + this.state.selecteditems[index].key + '~';
            }
            let si = { text: '', key: '' };
            si.text = t + item.text;
            si.key = k + item.key;

            this.setState({
                visible: false,
                selecteditem: si
            });
            if (this.props.onValueChange != null) {
                this.props.onValueChange(si);
            }
            return;
        }

        var lastselectedItems = this.state.selecteditems;
        var childData = [];
        var lastHistory = this.state.history;
        var h = { selecteditems: this.state.selecteditems.slice(), key: item.key, data: this.state.data };

        childData = item.children;
        lastselectedItems.push(item);
        lastHistory.push(h);

        this.setState({
            selecteditems: lastselectedItems,
            data: childData,
            history: lastHistory
        });

    }

    showPicker() {

        this.setState({
            visible: true,
            selecteditems: [],
            originalData: this.props.data,
            data: this.props.data,
            history: [],
            searchString: '',
            filterData: []


        });
    }

    onSearch(searchString) {
        let sd = this.state.searchData;
        sd = sd.filter((arr) => { return arr.text.toLowerCase().includes(searchString.toLowerCase()); });

        this.setState({
            searchString: searchString,
            filterData: sd
        })

    }


    renderSeparator = () => {
        return (
            <View
                style={{
                    paddingLeft: 3,
                    paddingRight: 3
                }}
            >

            </View>
        )
    }

    renderItem = ({ item, index }) => (
        <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight onPress={() => this.pressParentItem(item)}>
                <View>
                    <Text>
                        {item.text}
                    </Text>
                </View>
            </TouchableHighlight>
            {(index !== this.state.selecteditems.length - 1) && this.renderSeparator()}

        </View>
    )



    render() {
        return (
            <View >
                <TouchableOpacity   onPress={() => this.showPicker()}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={styles.text}>
                            {this.state.selecteditem.text==""?<Text style={styles.title}
                            > {this.props.message}</Text>:this.state.selecteditem.text}
                        </Text>
                    </View>
                    {/*<Text style={styles.text}*/}
                    {/*> Choose Department </Text>*/}
                </TouchableOpacity>
                <Dialog
                    height={0.8}
                    width={0.75}
                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}
                    onHardwareBackPress={() => {
                        this.setState({ visible: false });
                    }}
                >

                    <DialogContent>
                        <View>
                            <View style={styles.searchSection}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="search"
                                    onChangeText={(searchString) => { this.onSearch(searchString) }}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>

                        {this.state.searchString !== '' &&
                        <View>
                            <FlatList
                                data={this.state.filterData}
                                renderItem={({ item }) => (
                                    <View>
                                        <TouchableWithoutFeedback onPress={() => this.pressSearchItem(item)}>
                                            <ScrollView horizontal={true}>
                                                <Text style={styles.item}>{item.text}</Text>
                                            </ScrollView>
                                        </TouchableWithoutFeedback>
                                    </View>
                                )
                                }
                            />

                        </View>
                        }

                        {this.state.searchString === '' &&
                        <View>
                            <View style={{ height: Platform.OS === 'android' ? '87%' : '92%' }}>
                                <FlatList
                                    data={this.state.data}
                                    renderItem={({ item }) => (
                                        <View>
                                            <TouchableHighlight onPress={() => this.pressItem(item)}>
                                                <ScrollView horizontal={true}>
                                                    <Text style={styles.item}>{item.text}  {(item.children !== undefined) } </Text>
                                                </ScrollView>
                                            </TouchableHighlight>
                                        </View>
                                    )
                                    }
                                />
                            </View>

                            <ScrollView horizontal={true}>
                                <FlatList
                                    data={this.state.selecteditems}
                                    horizontal={true}
                                    renderItem={this.renderItem}
                                    listkey={(item, index) => item.key}
                                />

                            </ScrollView>

                        </View>}


                    </DialogContent>

                </Dialog>
            </View>
        );
    }
}


PickerCascader.propTypes = {
    data: PropTypes.array,
    onValueChange: PropTypes.func
}

PickerCascader.defaultProps = {
    data: [],
    onValueChange: () => { }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    title:{
        color:'#fff',
        marginTop: 30,

        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee6e7',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    // buttonStyle:{
    //     borderRadius: 25,
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
    //     activityColor: "#249844"
    // },
    text :{
        textAlign:'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textShadowColor: 'red',
        // textShadowOffset: { width: 2, height: 2 },
        textShadowRadius : 5,
        color: '#000000',
        fontStyle: 'italic'
    },
})