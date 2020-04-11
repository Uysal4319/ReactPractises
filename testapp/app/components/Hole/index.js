// ./src/components/hole.js
import React, { Component } from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
// create a component
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
class Hole extends Component {

    render() {
        const { hole } = this.props;
        return (
            <View style={styles.container}>
               <Text>
                   {this.props.cardId}
               </Text>
            </View>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: width /3.5,
        height: height/6,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: "black",

    }
});
//make this component available to the appr
export default Hole;