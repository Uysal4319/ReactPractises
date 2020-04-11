import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Draggable } from '../../components';

// Componentlerin denenme ekranı
class ComponentsExample extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello World</Text>
            </View>
        );
    }
}

export default ComponentsExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})