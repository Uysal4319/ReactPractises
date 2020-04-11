import React, {Component} from 'react';
import {Animated, Dimensions, Platform, StyleSheet, Text} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import PropTypes from 'prop-types';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class HSTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            second: this.props.limit,
            shadow: 0,
        };
        this._interval = null;
        this._animatedValue = new Animated.Value(0);
        this.startAnimeted = this.startAnimeted.bind(this);
    }

    componentDidMount() {
        if (Platform.OS == "ios") {
            BackgroundTimer.start();
        }
        this._interval = BackgroundTimer.setInterval(() => {
            this.setState({
                second: this.state.second - 1,
                shadow: this.state.shadow + 100 / this.props.limit,
            })
        }, 1000);

    }

   startAnimeted() {
       Animated.timing(this._animatedValue, {
           toValue: Math.floor(width * (3 / 4) - 2),
           duration: (this.state.second * 1000)
       }).start()
   }
    componentDidUpdate() {
        if (this.state.second === 0) {
            this.setState({second: this.props.limit, shadow: 0});
                BackgroundTimer.clearInterval(this._interval);
                this.props.onFinish();
                this.onRefresh();
        }
    }

    onPause(){
        Animated.timing(
            this._animatedValue
        ).stop();
        BackgroundTimer.clearInterval(this._interval);
        this._interval = null;
    }

    onStart(){
        this.startAnimeted();

        if (this._interval === null) {
            if (Platform.OS == "ios") {
                BackgroundTimer.start();
            }

            this._interval = BackgroundTimer.setInterval(() => {
                this.setState({
                    second: this.state.second - 1,
                    shadow: this.state.shadow + 100 / this.props.limit,
                })
            }, 1000);
        }

    };

    onRefresh() {
        this.setState({second: this.props.limit, shadow: 0})
        this._animatedValue = new Animated.Value(0);
    };

    render() {
        return (
            <View >
                <View style={styles.scoresIcon}>

                    <View  marginLeft = "2%" width = "40%" >
                        <Text style={styles.scoreText}  >{this.props.leftText}</Text>
                    </View>

                    <View  >
                        <Text style={styles.secondText}>{this.state.second}</Text>
                    </View>

                    <View  alignItems= 'flex-end'  width = "40%" marginRight = '2%'  >
                        <Text style={styles.scoreText}>{this.props.rightText}</Text>
                    </View>

                </View>

                <View style={styles.progressBarShell}>
                    <Animated.View style={styles.progressBarCore} width={this._animatedValue} />
                </View>
            </View>
        );
    }
}

export default HSTimer;

HSTimer.PropTypes = {
    limit: PropTypes.number.isRequired,
    onFinish: PropTypes.func.isRequired,
    leftText: PropTypes.string.isRequired,
    rightText: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scoresIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    scoreText: {
        fontSize: 20,
        color: "white",
    },
    secondText: {
        fontSize: 35,
        color: "white",
    },
    progressBarShell: {
        marginLeft: width * (1 / 8),
        marginRight: width * (1 / 8),
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        height: 20,
        width: width * (3 / 4),
        backgroundColor: "white",
    },
    progressBarCore: {
        flex: 1,
        marginRight: width * (1 / 8),
        backgroundColor: "#66d8ea",
        borderRadius: 10,
        position : "relative"
    },
});

