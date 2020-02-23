import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, Text, Dimensions, ActivityIndicator, ScrollView, FlatList} from 'react-native';
import ListItem from '../../components/ListItem';
import articles from '../../documents/articles/index';
import BackgroundTimer from "react-native-background-timer";

import {
    isLogin
} from '../../common/index';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource:null,
        };
        this._interval = null;
        this.checkList= null;
    }

    async isLoginControl() {
        let present = this;
        isLogin().then((res) => {
            if (res)
                present.props.navigator.push({ // yaptıysa main
                    id: 'Main',
                    name: 'Main'
                });
            else
                present.props.navigator.push({ // yapmadıysa login
                    id: 'Login',
                    name: 'Login'
                });

        })
    }

 fetchTime() {
     return fetch('http://192.168.1.39:8080/services/currenttime')
         .then((response) => response.text())
         .then((responseText) => {

             console.debug(responseText);
             this.setState({
                 dataSource: responseText,
             }, function(){

             });

         })
         .catch((error) =>{
             console.error(error);
         });

 }

 fetchCheckList(){
     return fetch('http://192.168.1.39:8080/services/checklist/getTheList')
         .then((response) => response.json())
         .then((responseJson) => {

          this.checkList = responseJson;

          this.setState({
              isLoading: false,
          })

             console.debug(responseJson);

         })
         .catch((error) =>{
             console.error(error);
         });

 }
 componentWillMount(){
        this.fetchCheckList();
 }


    componentDidMount() {
        if (Platform.OS == "ios") {
            BackgroundTimer.start();
        }
        this._interval = BackgroundTimer.setInterval(() => {

            this.fetchTime()
        }, 500);
    }


    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.text}>
                        <Text>
                            {
                                this.state.dataSource
                            }
                        </Text>
                    </View>

                    <View style={styles.list}>
                        <FlatList
                            data={this.checkList}
                            renderItem={({item}) => <ListItem article={item}/>}
                            keyExtractor={item => item.id}
                        />

                        {/*<FlatList*/}
                        {/*    data={this.state.dataSource}*/}
                        {/*    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}*/}
                        {/*    keyExtractor={({id}, index) => id}*/}
                        {/*/>*/}
                    </View>

                    <View style={styles.button}>
                        <Text>
                            TAMAM
                        </Text>
                    </View>

                </SafeAreaView>


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
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    list: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height : height*9/10,
    },
});
