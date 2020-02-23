import React, {Component} from 'react';

import {
    Alert,
    View,
    TextInput, // girdiler için
    Button, // tıklamak için
} from 'react-native';


import {
    serializeKey,
    setSessionTicket,

} from '../../common/index';

import HSLoadingModal from '../../components/HSLoadingModal'
export default class LoginPage extends Component {

    constructor(props) {
        super(props); // super arguman geçmenizi sağlar eğer constructor kullanmak isterseniz kullanmak zorunlu oluyor.

        this.state = { // burası bind da kullandığım değerler
            userName: '',
            userPassword: '',
            isLoading:false,
        };
    }

    // giriş isteği atacağımız ve yükleceğimiz fonksiyon
    goLogin() {
        let name = this.state.userName;
        let pass = this.state.userPassword;
        let present = this;
        this.setState({
            isLoading: true,
        });
        fetch('http://192.168.1.39:8080/services/login/islogin'
            , {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ // değerleri serialize ediyoruz
                    username: name,
                    password: pass,
                    token: 'token',
                }),
            },
        ) // kendi bilgisayarımın ip'si sizinki farklı olabilir
            .then((res) => res.text()) // gelen datayı parse ediyoruz
            .then((res) => {
                // if (res.session_ticket)
                //     setSessionTicket(String(res.session_ticket)); // burada kaydediyoruz

                this.setState({
                    isLoading: false,
                });

                console.debug(res);
                if (res !== '-1' && res !== '') {
                    this.props.navigation.navigate('List');
                } else {
                    Alert.alert('Kullanıcı Doğrulanamadı');
                }
            })
            .catch((error) => {
                Alert.alert('data', 'Sunucuya bağlanırken bir hata oluştu');
            });
    }

    render() {

        // if (this.state.isLoading) {
        //
        //     return (
        //         <View>
        //             <HSLoadingModal display='true'/>
        //         </View>
        //     );
        // }

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 15,
                }}>

                <HSLoadingModal display={this.state.isLoading}/>

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
            </View>
        );
    }
}
