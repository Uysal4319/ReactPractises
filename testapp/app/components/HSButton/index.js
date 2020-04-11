import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../config/constants';

export const HSButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, height, width, backgroundColor } = props;

    return (
        <TouchableOpacity onPress={onPress}
            style={[{ height: height, width: width, backgroundColor: backgroundColor }, styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};


export default HSButton;

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.lightGreen,
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
});


HSButton.PropTypes = {
    title: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string.isRequired
}
