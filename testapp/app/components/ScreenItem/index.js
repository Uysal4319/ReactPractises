/* 
Konuların içerisinde bulunan içeriklerin her biri.
(Sarı, Kırmızı)
*/
import React, { Component } from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ScreenItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
                <Image
                    resizeMode={'stretch'}
                    source={this.props.card.backgroundPath}
                    style={{
                        height: height / 6  , width: width / 4, margin: 10, borderRadius: 10,
                        borderColor: 'black',
                    }}
                />
        );
    }
}