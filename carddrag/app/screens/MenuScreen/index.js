import React, { Component } from 'react';
import { View, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import i18N from '../../languages/index';
import ChooseLanguageBar from '../../components/ChooseLanguageBar';
import Languages from '../../documents/languages'
import MainScreen from '../../documents/mainScreen'
import CategoryItem from '../../components/CategoryItem'
import SplashScreen from 'react-native-splash-screen';
import numberCardList from '../../documents/numbers';
import animalsCardList from '../../documents/animals';
import colorCardList from '../../documents/colors';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default class MenuScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: 'tr',
            value: 1
        }

    }

    componentDidMount() {
        SplashScreen.hide();
    }


    changeLanguage(key) {
        switch (key) {
            case 1:
                i18N.changeLanguage('tr');
                this.setState({ language: i18N.language, });
                break;
            case 2:
                i18N.changeLanguage('en');
                this.setState({ language: i18N.language, });
                break;

        }
    }

    getCategoriesByList(categoryList) {
        let returnCategory = 'main';
        if (categoryList === colorCardList) {
            returnCategory = 'colors';
        } else if (categoryList === animalsCardList) {
            returnCategory = 'animals';
        }
        return returnCategory;
    }

    changeScreen(cardList) {
            this.props.navigation.navigate('Game', { cardListReferer: cardList});
    }

    render() {
        const imageUrl = i18N.language + '_uri';
        const { language } = this.state;
        console.log(language, 'sdfsdafs');
        return (
            <View>
                <ImageBackground
                    source={require('../../images/backgrounds/mainScreenBackground.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <SafeAreaView>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Help')}
                                style={{ padding: 10 }}>
                                <Image
                                    style={{ height: height / 18, width: width / 8 }}
                                    source={require('../../images/mainScreenImages/helpScreenImage.png')} />
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <ChooseLanguageBar selectedLanguage={Languages.turkish.uri} isPress={language == 'tr'}
                                                   onPress={() => this.changeLanguage(1)} />
                                <ChooseLanguageBar selectedLanguage={Languages.english.uri} isPress={language == 'en'}
                                                   onPress={() => this.changeLanguage(2)} />
                            </View>
                        </View>


                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            paddingTop: height / 3.5
                        }}>
                            <CategoryItem selectedBackground={MainScreen.colorCards[imageUrl]}
                                          onPress={() => this.changeScreen(colorCardList)} />
                            <CategoryItem selectedBackground={MainScreen.numberCards[imageUrl]}
                                          onPress={() => this.changeScreen(numberCardList)} />
                            <CategoryItem selectedBackground={MainScreen.animalCards[imageUrl]}
                                          onPress={() => this.changeScreen(animalsCardList)} />
                        </View>

                    </SafeAreaView>
                </ImageBackground>

            </View>
        );
    }
}
