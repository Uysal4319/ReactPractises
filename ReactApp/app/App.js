import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {PlaceInput,PlaceDetail,PlaceList,placeImage,ImageScope } from './components'


export default class App extends Component {
    state = {
        places: [],
        selectedPlace :null,
        selectedImage:null,
        showName:null
    };


    placeAddedHandler = placeName => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat({key: Math.floor(Math.random() * 100) + 1,
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
                selectedPlace:null,
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;
                })
            }
        })
    }

    modalClosedHandler =() =>{
        this.setState({
            selectedPlace :null,
            selectedImage : null
        })
    }

    longPressedHandler =key =>{
        this.setState(prevState => {
            return {
                showName : prevState.places.find( place =>{
                    return place.key === key;
                    }
                )
            }

        });
        alert(this.state.showName.value + " Long Pressed");
    }

    imageSelectedHandler = key => {
        this.setState(prevState => {
            return {
                selectedImage : prevState.places.find( place =>{
                        return place.key === key;
                    }
                )
            }
        });

    }

    render() {

        return (
            <View style={styles.container}>
                <ImageScope selectedImage ={this.state.selectedImage}
                            onModalClosed = {this.modalClosedHandler}/>


                <PlaceDetail selectedPlace={this.state.selectedPlace}
                             onItemDeleted =  {this.placeDeletedHandler}
                             onModalClosed = {this.modalClosedHandler}/>

                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>

                <PlaceList places={this.state.places}
                           onItemSelected ={this.placeSelectedHandler}
                           onLongPressed = {this.longPressedHandler}
                           onImageScoped = {this.imageSelectedHandler}/>


            </View>

        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop :23
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

