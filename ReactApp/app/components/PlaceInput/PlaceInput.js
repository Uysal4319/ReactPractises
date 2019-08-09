import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

class PlaceInput extends Component {
   state = {
            placeName : ""
        };
    componentDidMount() {

    }

    placeNameChangedHandler = val => {
        this.setState({
            placeName : val
        });
    };

    placeSubmitHandler =()=>{
        if(this.state.placeName.trim() === ""){
            return;
        }

    this.props.onPlaceAdded(this.state.placeName);

    };



    render(){
        return (
            <View style={styles.inputContainer}>

                <TextInput
                    style = {{width:300}}
                    placeholder ="isim giriniz"
                    onChangeText={(placeName) => this.setState({placeName})}
                />

                <Button title={"Add"}
                        style = {styles.placeButton}
                        onPress={() => this.placeSubmitHandler()}/>



                {/*<View style={styles.clickAbleContainer}>*/}

                {/*    <TouchableHighlight*/}
                {/*        underlayColor ="red"*/}
                {/*        style = {styles.submitButton}*/}
                {/*        onPress={this.placeNameChangedHandler}>*/}
                {/*        <Text>alert</Text>*/}
                {/*    </TouchableHighlight>*/}

                {/*    <Button title={"Add"}*/}
                {/*            style = {styles.placeButton}*/}
                {/*            onPress={this.placeAddedHandler}/>*/}
                {/*</View>*/}


            </View>
        )

    }
}
const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding:10,
        marginBottom : 5,
        backgroundColor: "#eee"
    },
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    submitButton: {
        width : "50%",
        backgroundColor :"blue",
        borderColor:"black",
        borderWidth: 1
    },
    clickAbleContainer: {
        width : "100%",
        flexDirection:"row",

    },
    placeButton: {
        width : "25%"
    },
    inputContainer: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default PlaceInput;

