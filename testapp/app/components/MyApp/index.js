import React from 'react';
import {
    Animated,
    AppRegistry,
    Easing,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

class MyApp extends React.Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);

        this.state = {
            sliderPosition: new Animated.Value(0)
        }
    }

    onPress(){
        Animated.timing(this.state.sliderPosition, {
            toValue: 10.5,
            duration: 100,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>Animate It</Text>
                </TouchableOpacity>

                <View style = {styles.sliderContainer}>
                    <Animated.View style = {[styles.slider, {marginLeft:this.state.sliderPosition}]}>
                    </Animated.View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    sliderContainer: {
        position: 'absolute',
        top: 138,
        left: 0,
        right: 0,
        height: 5,
        backgroundColor: '#E15668',
        shadowRadius: 1,
        shadowOpacity: 0.5,
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 2},
        opacity: 0.9
    },

    slider: {
        marginTop: 0,
        backgroundColor: '#FCC31B',
        width: 120,
        height: 5,
    }
});

export default MyApp;