import React from 'react';
import { Modal,Text, View, StyleSheet, TouchableOpacity,Image, Button} from 'react-native';

const PlaceDetail = (props) => {
    let modalContent = null;
    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.buttonText}> {props.selectedPlace.value}</Text>
            </View>
            );

    }

    if (props.showName){

    }
    return (
        <Modal onRequestClose={props.onModalClosed}  visible = {props.selectedPlace !== null} animationType="slide">
            <View style ={styles.modalContainer}>
                {modalContent}
                <View justifyContent = "center" alignItems ="center">
                    {/*<Button danger title = "Delete" color ="red"  onPress={props.onItemDeleted}/>*/}
                    {/*<Button title = "Close" color ="blue"  onPress={props.onModalClosed}/>*/}

                    <TouchableOpacity style = {styles.buttonStyle} onPress={props.onItemDeleted} >

                        <Text style={styles.buttonText}>
                            Delete
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttonStyle} onPress={props.onModalClosed} >

                        <Text style={styles.buttonText}>
                            Close
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </Modal>
    );
    };

const styles = StyleSheet.create({
    modalContainer : {
        margin: 22,
    },
    buttonText: {
        fontWeight :"bold",
        textAlign:"center",
        fontSize:20

    },
    placeImage:{
        width: "100%",
        height:200,
        borderRadius : 30
    },
    buttonStyle:{
        borderRadius: 30,
        backgroundColor:"red",
        marginTop: 30,
        justifyContent: "center",
        alignItems :"center",
        width : "25%",
        height: 50,
    },


});

export default PlaceDetail;

