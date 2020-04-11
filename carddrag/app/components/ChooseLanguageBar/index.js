import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default class ChooseLanguageBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        const {selectedLanguage,isPress} = this.props;
        return (
            <TouchableOpacity style={{ padding: 10 }} onPress={this.props.onPress}>
                    <Image
                        style={{ width: 64, height: 64,opacity: isPress ? 1 : 0.3 }}
                        source={selectedLanguage}
                    />



            </TouchableOpacity>

        );
    }
}

