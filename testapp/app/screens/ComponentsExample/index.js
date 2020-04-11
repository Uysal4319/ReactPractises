import React, {Component} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {screen, colors} from '../../config/constants';
import {HSTextInput, HSButton, Draggable, HSDraggable, MyApp, Hole,TimerComponent,HSTimer} from '../../components';
import colorCardList from "../../documents/colors";
import Sound from 'react-native-sound';
import i18N from '../../languages/index';

// Componentlerin denenme ekranı
class ComponentsExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: colorCardList[0],
            listRange: colorCardList.length,
            mainCoordinad: {},

        };
        this.cardList = [];
        this.handleCardCh = this.handleCardCh.bind(this);
        this.suffeledCards = [];
    }

    componentDidMount() {
        for (var i = 0; i < colorCardList.length; i++) {
            this.cardList[i] = colorCardList[i];
        }
        // {this.giveSound(this.state.card)}
    }

    handleLayout = e => {
        const coordinad = e.nativeEvent.layout;
        this.setState({mainCoordinad : coordinad,});
    };

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    handleCardCh() {
        if (this.cardList.length !== 1) {
            let currentIndex = this.cardList.indexOf(this.state.card)
            this.cardList.splice(currentIndex, 1)
            let kart = this.cardList[Math.floor(Math.random() * this.cardList.length)];
            let range = this.state.listRange - 1;
            this.setState({card: kart, listRange: range})
            // this.giveSound(kart)
        } else {
            alert("kartlar bitti")
        }
    }

    giveSound(selectedCard) {
        var voicePath = i18N.language + '_' + selectedCard.soundPath;
        var sound = new Sound(voicePath, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            setTimeout(() => {
                this.playSound(sound);
            }, 1000);
        });
    }

    playSound(sound) {
        sound.play((success) => {
            if (success) {
                console.log('successfully finished playing');
                sound.release();
            } else {
                console.log('playback failed due to audio decoding errors');
                sound.release();
            }
        });
    }


    onFinish() {
        alert("bitti");
    }

    render() {

        return (

            <View style={styles.container}>
                {/*<HSTextInput width={screen.width / 4 * 3} placeholder='Deneme' />*/}
                {/*<HSButton title='Hello'*/}
                {/*    height={screen.height / 20} width={screen.width / 4 * 3} backgroundColor={colors.lightGreen} />*/}

                <View onLayout = {this.handleLayout}>
                    <Hole mainCoordinad = {this.state.mainCoordinad} cardId = {this.state.card.id} />
                </View>


                <View style={styles.cardContainer}>
                    {
                        colorCardList.map((cart, i) => {
                            return <HSDraggable card={cart} cardId={this.state.card.id}
                                                handleCardChanged={this.handleCardCh}
                                                mainCoordinad = {this.state.mainCoordinad}/>
                        })
                    }
                </View>

                {/*<TimerComponent limit = '30'/>*/}

                {/*<Ball card = {colorCardList[1]} cardId={this.state.card.id} handleCardChanged={this.handleCardCh}/>*/}
                {/*<Ball card = {colorCardList[0]} cardId={this.state.card.id} handleCardChanged={this.handleCardCh}/>*/}


                {/*<Draggable/>*/}

                {/*<MyApp/>*/}

                {/*<HSTimer limit = '60' onFinish={this.onFinish}/>*/}

            </View>
        );
    }
}

export default ComponentsExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
})