import React, {Component} from 'react';
import {StyleSheet, View,SafeAreaView} from 'react-native';
import {Hole, HSDraggable} from '../../components';
import Sound from 'react-native-sound';
import i18N from '../../languages/index';
import initialCard from '../../documents/default/index';

// Componentlerin denenme ekranı
class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: initialCard[0],
            listRange: null,
            mainCoordinad: {},

        };
        this.cardList = [];
        this.handleCardCh = this.handleCardCh.bind(this);
        this.suffeledCards = [];
        this.cardListReferer = [];
    }


    componentDidMount() {
       this.cardAssing();
    }

    cardAssing() {
        const { cardListReferer }  = this.props.navigation.state.params;
        for (let i = 0; i < cardListReferer.length; i++) {
            this.cardList[i] = cardListReferer[i];
        }
        this.shuffle(this.cardList)
        this.setState({card : this.cardList[Math.floor(Math.random() * this.cardList.length)] ,listRange : this.cardList.length})
    }
    handleLayout = e => {
        const coordinate = e.nativeEvent.layout;
        this.setState({mainCoordinad : coordinate,});
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
        if (this.state.listRange !== 1) {
            let currentIndex = this.cardList.indexOf(this.state.card);
            let removedCard = this.cardList[currentIndex];
            this.cardList.splice(currentIndex, 1);
            this.cardList.push(removedCard);
            let range = this.state.listRange - 1;
            let kart = this.cardList[Math.floor(Math.random() * range)];
            this.renderList();
            this.giveSound(kart);
            this.setState({card: kart, listRange: range});

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


   /*
    render() {

        return (

            <View style={styles.container}>

                <View onLayout = {this.handleLayout}>
                    <Hole mainCoordinad = {this.state.mainCoordinad} cardId = {this.state.card.id} />
                </View>

                <View style={styles.cardContainer}>
                    {

                        this.cardList.map((cart) => {
                            return <View>
                                <HSDraggable card={cart} cardId={this.state.card.id}
                                             handleCardChanged={this.handleCardCh}
                                             mainCoordinad = {this.state.mainCoordinad}/>
                            </View>

                        })
                    }
                </View>

            </View>
        );
    }
    */

   renderList(){
       return this.cardList.map((cart ) => {
           return <View>
               <HSDraggable card={cart} cardId={this.state.card.id}
                            handleCardChanged={this.handleCardCh}
                            mainCoordinad = {this.state.mainCoordinad}/>
           </View>

       })
   }

   render(){
       return (

           <View style={styles.container}>

               <View onLayout = {this.handleLayout}>
                   <Hole mainCoordinad = {this.state.mainCoordinad} cardId = {this.state.card.id} />
               </View>

               <View style={styles.cardContainer}>
                   {
                  this.renderList()
                   }
               </View>

           </View>
       );
   }
}
export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    draggable: {
        backgroundColor: 'black',
        width: '2%',
        height: '2%'
    },
})
