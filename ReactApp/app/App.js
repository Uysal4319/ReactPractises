import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {PlaceInput,PlaceDetail,PlaceList,placeImage } from './components'

export default class App extends Component {
    state = {
        places: [],
        selectedPlace :null
    };


    placeAddedHandler = placeName => {

        this.setState(prevState => {
            return {
                places: prevState.places.concat({key: Math.random(),
                                                 value: placeName ,
                                                 image: {
                                                    uri : "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg"
                                                 }
                })
            };
        });
    };

    placeSelectedHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find( place =>{
                        return place.key === key;
                }
                )
            }
        });

    }

    placeDeletedHandler = key => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;
                })
            }
        })
    }

    modalClosedHandler =() =>{
        this.setState({
            selectedPlace :null
        })
    }

    render() {

        return (
            <View style={styles.container}>

                <PlaceDetail selectedPlace={this.state.selectedPlace}
                             onItemDeleted = {this.placeDeletedHandler}
                             onModalClosed = {this.modalClosedHandler}/>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>


            </View>

        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    submitButton: {
        width: "50%",
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1
    },
    clickAbleContainer: {
        width: "100%",
        flexDirection: "row",
    },
    placeButton: {
        width: "50%"
    },
    inputContainer: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listContainer: {
        width: "100%",
    }
});

