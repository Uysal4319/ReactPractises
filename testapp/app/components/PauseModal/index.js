import React, { Component } from 'react';
import {View, Image, Dimensions, Alert, TouchableOpacity, Text} from 'react-native';
import Modal from "react-native-modal";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class PauseModal extends Component {
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
                    {/*<View style={{ borderRadius: 30 ,justifyContent: 'center', alignItems: 'center', backgroundColor : "green", height : height/10, width: width/5}}>*/}
                    {/*    <TouchableOpacity onPress={this.props.onStart}>*/}
                    {/*        <Text>*/}
                    {/*            START*/}
                    {/*        </Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}


                    {/*<View style={{ borderRadius: 30 ,justifyContent: 'center', alignItems: 'center', backgroundColor : "red", height : height/10, width: width/5}}>*/}
                    {/*    <TouchableOpacity onPress={this.props.onStart}>*/}
                    {/*        <Text>*/}
                    {/*            RESET*/}
                    {/*        </Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}


                    <TouchableOpacity onPress={this.props.onStart}>
                        <Image
                            source={require('../../images/logo/resume.png')} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.props.onStart}>
                        <Image
                            source={require('../../images/logo/menu.png')} />
                    </TouchableOpacity>

                </View>
            </Modal>

        );
    }
}