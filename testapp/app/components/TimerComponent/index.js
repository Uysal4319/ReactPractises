import React from 'react';
import {View, Text, Button, Platform,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';
import BackgroundTimer from "react-native-background-timer";
type TimerProps = {};
type TimerState = {};
class TimerComponent extends React.PureComponent<TimerProps, TimerState> {
    static defaultProps: any;
    constructor(props: TimerProps) {
        super(props);
        this.state = {
            second: this.props.limit,
        }
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {

        if(this.state.second === 0){
            this.onPause();
        }

    }

    _interval: any;
    onStart = () => {
        if (Platform.OS =="ios") {
            BackgroundTimer.start();
        }

        this._interval = BackgroundTimer.setInterval(() => {
            this.setState({
                second: this.state.second - 1,
            })
        }, 1000);
    }
    onPause = () => {
        BackgroundTimer.clearInterval(this._interval);
    }
    onReset = () => {
        this.setState({
            second: 0,
        });
        BackgroundTimer.clearInterval(this._interval);
    }
    renderStartButton = () => {
        return (
            <Button
                title="Start"
                onPress={this.onStart}
            />
        )
    }
    renderPauseButton = () => {
        return (
            <Button
                title="Pause"
                onPress={this.onPause}
            />
        )
    }
    renderResetButton = () => {
        return (
            <Button
                title="Reset"
                onPress={this.onReset}
            />
        )
    }
    renderContent = (): ReactElement<any> => {
        return (
            <View style={styles.container}>
                <Text style={styles.secondText}>{this.state.second}</Text>
                <View style={styles.buttonWrapper}>
                    {this.renderStartButton()}
                    {this.renderPauseButton()}
                    {this.renderResetButton()}
                </View>
            </View>
        );
    }
    render() {
        const content = this.renderContent();
        return content;
    }
}
TimerComponent.propTypes = {};
TimerComponent.defaultProps = {};
export default TimerComponent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    secondText: {
        fontSize: 25,
    }
});