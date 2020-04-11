/* 
Konuların içerisinde bulunan içeriklerin her biri.
(Sarı, Kırmızı)
*/
import React, { Component } from 'react';
import {TouchableOpacity, View, Dimensions, Text, Linking, StyleSheet,} from 'react-native';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class  extends Component {
    _handlePress = () => {
        console.log("Link clicked for " + this.props.href);
        Linking.openURL(this.props.href);
        this.props.onPress && this.props.onPress();
    };

    render() {
        return (
            <View justifyContent="center"
                  alignItems="center">

                <TouchableOpacity onPress={this._handlePress}>
                    <Text style={styles.email}>
                        {this.props.title}
                    </Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    email: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        textShadowRadius: 30,
        textShadowColor: "yellow"

    }
});