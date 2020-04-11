import React, { Component } from 'react';
import {View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import images from '../../assets/images';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class HSPauseModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Modal
                animationIn={'zoomInDown'}
                animationOut={'tada'}
                isVisible={this.props.display}
                onRequestClose={() => {

                }}>
                <View style={{ justifyContent: 'space-around', alignItems: 'flex-end', flex: 1, flexDirection :"row" }}>

                    <TouchableOpacity onPress={this.props.onStart}>
                        <Image
                            source={images.resumeIcon} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.props.onMenu}>
                        <Image
                            source={images.menuIcon} />
                    </TouchableOpacity>
                </View>
            </Modal>

        );
    }
}