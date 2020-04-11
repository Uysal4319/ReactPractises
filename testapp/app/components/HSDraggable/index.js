import React, {Component} from "react";
import {View, Text, StyleSheet, PanResponder, Animated, } from "react-native";
import { HSTextInput, HSButton,Draggable,MyApp,ScreenItem } from '../';
import colorCardList from '../../documents/colors';

// create a component
class HSDraggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            opacity : new Animated.Value(1),
            firstCard: this.props.card,
        };
    }

    componentWillMount() {
        this._animatedValueX = 0;
        this._animatedValueY = 0;
        this.state.pan.x.addListener(value => (this._animatedValueX = value.value));
        this.state.pan.y.addListener(value => (this._animatedValueY = value.value));
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,

            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({
                    x: this._animatedValueX,
                    y: this._animatedValueY
                });
                this.state.pan.setValue({x: 0, y: 0});
            },
            // onPanResponderMove: this.handleResponderMove,
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropArea(gesture) && this.state.firstCard.id === this.props.cardId) {
                    Animated.timing(
                        // Animate value over time
                        this.state.opacity, // The value to drive
                        {
                            toValue: 0, // Animate to final value of 1
                            duration : 500,
                        },
                    ).start();
                    this.handleCardChange();
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0  },
                        friction: 3
                    }).start();
                }
            }
        })
    }

    handleCardChange = (evt, gestureState) => {
        this.props.handleCardChanged();
    };

    isDropArea(gesture) {
        return ((gesture.moveY > this.props.mainCoordinad.y) &&
                (gesture.moveY < this.props.mainCoordinad.y+ this.props.mainCoordinad.height) &&
                (gesture.moveX > this.props.mainCoordinad.x) &&
                (gesture.moveX < this.props.mainCoordinad.x+ this.props.mainCoordinad.width)

        );
    }
    render() {
        const animatedStyle = {
            transform: this.state.pan.getTranslateTransform()
        };
        return (
            <Animated.View
                opacity = {this.state.opacity}
                style={animatedStyle}
                {...this.panResponder.panHandlers}
            >
                <ScreenItem card={this.state.firstCard}/>

            </Animated.View>
        );
    }
}

export default HSDraggable;

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
});