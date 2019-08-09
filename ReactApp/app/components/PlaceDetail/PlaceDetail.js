import React from 'react';
import { Modal,Text, View, StyleSheet, TouchableOpacity,Image, Button} from 'react-native';

const PlaceDetail = (props) => {
    let modalContent = null;
    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}> {props.selectedPlace.value}</Text>
            </View>
            );

    }
    return (
        <Modal onRequestClose={props.onModalClosed}  visible = {props.selectedPlace !== null} animationType="slide">
            <View style ={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title = "Delete" color ="red" onPress={props.onItemDeleted}/>
                    <Button title = "Close" color ="blue" onPress={props.onModalClosed}/>
                </View>

            </View>

        </Modal>
    );
    };

const styles = StyleSheet.create({
    modalContainer : {
        margin: 22
    },
    placeName: {
        fontWeight :"bold",
        textAlign:"center",
        fontSize:20

    },
    placeImage:{
        width: "100%",
        height:200,
    }
});

export default PlaceDetail;

