import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ""
    };

    componentDidMount() {

    }

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);

        this.state.placeName = "";

    };


    render() {
        return (
            <View style={styles.inputContainer}>

                <TextInput
                    value={this.state.placeName}
                    style={styles.inputStyle}
                    placeholder="isim giriniz"
                    onChangeText={(placeName) => this.setState({placeName})}
                />

                <Button title={"Add Item"}
                        style={styles.placeButton}
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
    inputStyle: {
        width: "100%",
        marginBottom: 20,
        backgroundColor: "#ECE4E3",
        borderRadius: 20,
        borderWidth: 1,
        fontSize: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    submitButton: {
        width: "50%",
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1
    },
    clickAbleContainer: {
        width: "100%",
        flexDirection: "row",

    },
    placeButton: {
        borderRadius: 30,
        backgroundColor: "red",
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
        height: 50,
    },
    inputContainer: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    }
});

export default PlaceInput;

