import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../config/constants';


class HSTextInput extends Component {
    render() {
        const { placeholder, autoFocus, onChangeText, value, height, width } = this.props;
        return (
            <TextInput
                underlineColorAndroid='transparent'
                style={[{ height: height, width: width }, styles.textInput]}
                placeholder={placeholder}
                placeholderTextColor={colors.grayInfo}
                autoFocus={autoFocus}
                onChangeText={onChangeText}
                value={value}
                placeholderStyle={styles.placeholderStyle}
                placeholderTextColor={colors.textInputPlaceholderGray}
            />
        );
    }
}


export default HSTextInput;


const styles = StyleSheet.create({
    textInput: {
        borderColor: colors.grayInfo,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'left',
        fontSize: 20,
        padding: 5
    }
})



HSTextInput.PropTypes = {
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}
