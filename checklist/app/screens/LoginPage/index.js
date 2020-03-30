import React, {PureComponent} from 'react';

import {
    Alert,
    View,
    TextInput, // girdiler için
    Button, StyleSheet, Dimensions, // tıklamak için
} from 'react-native';

import { connect } from 'react-redux';

import {HSSignUpModal, HSIndicatorModal, HSButton} from '../../components';
import {colors} from '../../config/constants';
import OneSignal from 'react-native-onesignal';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

@connect(({ app, router }) => ({ app, router }))
export default class LoginPage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: '',
            isLoading:false,
            modalVisible:false,
        };

        const token = this.props.app;
        this.onCancel = this.onCancel.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        OneSignal.addEventListener('ids', this.onIds);
    }


    onIds(device) {


        console.log('Device info ===>> ', device);

        this.props.dispatch({type: 'app/updateState', payload: {userid: device.userid.toString()}});
    }


    async goLogin() {
        let name = this.state.userName;
        let pass = this.state.userPassword;
        let present = this;


        this.setState({
            isLoading: true,
        });

        try {
            let response = await fetch('https://spring-eu.herokuapp.com/authenticate'
                , {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: name,
                        password: pass,
                    }),
                }
            );

            let responseJson = await response.json();

            if (responseJson.token !== null && responseJson.token !== undefined) {
                console.debug("token == > "+ responseJson.token);
                this.props.dispatch({type: 'app/updateState', payload: {token: responseJson.token.toString()}});
                this.props.navigation.navigate('List');
            } else {

                Alert.alert('Kullanıcı Doğrulanamadı');

                this.setState({
                    isLoading: false,
                });

                return;
            }


            this.setState({
                isLoading: false,
            });



        } catch (error) {
            console.error(error);

            alert('Internetiniz açık olmalı. Açık olduğundan emin olun tekrar girin');
        }

        // fetch('http://192.168.1.33:8080/authenticate'
        //     , {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ // değerleri serialize ediyoruz
        //             username: name,
        //             password: pass,
        //         }),
        //     }
        // )
        //     .then((res) => res.json()) // gelen datayı parse ediyoruz
        //     .then((res) => {
        //
        //         this.setState({
        //             isLoading: false,
        //         });
        //
        //         this.props.dispatch({type: 'app/updateState', payload: {token: res.token}});
        //
        //         console.debug("token " + res);
        //
        //         if (res !== '-1' && res !== '') {
        //             this.props.navigation.navigate('List');
        //         } else {
        //             Alert.alert('Kullanıcı Doğrulanamadı');
        //         }
        //     })
        //     .catch((error) => {
        //         Alert.alert('data', 'Sunucuya bağlanırken bir hata oluştu');
        //     });
    }


    onAddUser(){
        this.setState({
            modalVisible: true,
        });
    }

    onCancel(){
        this.setState({
            modalVisible: false,
        });
    }



    render() {

        if (this.state.isLoading) {
            return (
                // <View style={{flex: 1, padding: 20}}>
                //     <ActivityIndicator/>
                // </View>

                <HSIndicatorModal display= {this.state.isLoading} />
            );
        }

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 15,
                }}>


                <View>
                    <TextInput
                        placeholder="Kullanıcı adı"
                        value={this.state.userName}
                        onChangeText={(value) => this.setState({userName: value})}/>
                </View>
                <View>
                    <TextInput
                        placeholder="Şifre"
                        value={this.state.userPassword}
                        onChangeText={(value) => this.setState({userPassword: value})}/>
                </View>
                <View
                    style={{
                        height: 50,
                    }}>
                    <Button
                        title="Giriş" // butonun yazısı
                        color="#4285f4" // arkaplan rengi
                        onPress={this.goLogin.bind(this)} /* butona tıklandığında tetiklenecek fonksiyon*/ />
                </View>

                <HSButton
                    title="Sign-up"
                    width={'50%'}
                    height={'10%'}
                    alignItems={'center'}
                    alignContent={'center'}
                    justfyContent={'center'}
                    backgroundColor={colors.uglyBlue}
                    style={styles.button}
                    onPress={this.onAddUser}
                />

                <HSSignUpModal display={this.state.modalVisible}  onCancel = {this.onCancel} />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    text: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    list: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: height * 9 / 10,
    },
    sendButtonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
