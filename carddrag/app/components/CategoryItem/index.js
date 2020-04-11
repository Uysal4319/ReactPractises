import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, Image } from 'react-native';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image
                    resizeMode={'stretch'}
                    style={{ height: height / 4.3, width: width / 2.5, margin: 10 }}
                    source={this.props.selectedBackground}
                />
            </TouchableOpacity>
        );
    }
}
