import React, {Component} from 'react';
import {View, Text, Button, Platform, StyleSheet, TouchableOpacity, Dimensions, Image,ImageBackground} from 'react-native';
import BackgroundTimer from "react-native-background-timer";
import PropTypes from 'prop-types';
import {HSButton,PauseModal} from '../';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class HSTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            second: this.props.limit,
            shadow:0,
            modalVisible:false
        }
        this._interval = null;
    }

    componentDidMount(): void {
        this._interval = BackgroundTimer.setInterval(() => {
            this.setState({
                second: this.state.second - 1,
                shadow:this.state.shadow + 100/this.props.limit,
            })
        }, 1000);
    }

    componentDidUpdate() {

        if (this.state.second === 0) {
            this.onPause();
            this.setState({second: this.props.limit,shadow:0})
            this.props.onFinish();
        }
    }

    onPause = () => {
        BackgroundTimer.clearInterval(this._interval);
        this._interval =null;
        this.setState({modalVisible:true})
    }


    onStart = () => {
        if (Platform.OS == "ios") {
            BackgroundTimer.start();
        }

        if(this._interval === null){
            this._interval = BackgroundTimer.setInterval(() => {
                this.setState({
                    second: this.state.second - 1,
                    shadow:this.state.shadow + 100/this.props.limit,
                })
            }, 1000);
        }
        this.setState({modalVisible:false})
    }; 

    render() {
        return (
            <ImageBackground
                source={require('../../images/backgrounds/background.jpg')}
                style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <View style={{ flexDirection :"row" ,justifyContent: "space-between"}}>
                    <View>
                        <TouchableOpacity onPress={this.onPause}>
                            <Image
                                source={require('../../images/logo/pause.png')} />
                        </TouchableOpacity>

                    </View>

                    <View>

                            <Image
                                source={require('../../images/logo/harbitabu.png')} />

                    </View>

                </View>
                <View style={styles.buttonWrapper}>

                    <Text style={styles.secondText}>{this.state.second}</Text>



                    <PauseModal display={this.state.modalVisible} onStart = {this.onStart} />
                </View>

                <View style={{marginLeft :width*(1/8), justifyContent: "center", borderColor:"black", borderWidth : 1, borderRadius: 20 ,height:20 , width: width*(3/4), backgroundColor :"white"}} >
                    <View style={{ flex: 1, backgroundColor:"#66d8ea", width: this.state.shadow+"%", borderWidth : 1, borderRadius: 20 }}/>
                </View>
            </View>
            </ImageBackground>

        );
    }
}

export default HSTimer;

HSTimer.PropTypes = {
    limit: PropTypes.number.isRequired,
    onFinish: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",

    },
    buttonWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems :"center"

    },
    secondText: {
        fontSize: 30,
        backgroundColor: 'blue',
        color: "white",
    }
});

