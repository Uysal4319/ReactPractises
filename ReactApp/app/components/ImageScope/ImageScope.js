import React from 'react';
import { Modal,Text, View, StyleSheet, TouchableOpacity,Image, Button} from 'react-native';

const ImageScope = (props) => {
    let modalContent = null;
    if(props.selectedImage){
        modalContent = (
            <View>
                <Image source={props.selectedImage.image} style={styles.placeImage}/>
            </View>
            );

    }
    return (
        <Modal onRequestClose={props.onModalClosed}  visible = {props.selectedImage !== null} animationType="slide">
            <View style ={styles.modalContainer}>
                {modalContent}
            </View>

            {/*<View>*/}
            {/*    <Button title = "Close" style = {styles.buttonStyle} onPress={props.onModalClosed}/>*/}
            {/*</View>*/}
            <View justifyContent="center"
                  alignItems = "center">

                <TouchableOpacity style = {styles.buttonStyle} onPress={props.onModalClosed} >

                    <Text style={styles.placeName}>
                        Close
                    </Text>

                </TouchableOpacity>

            </View>


        </Modal>
    );
    };

const styles = StyleSheet.create({
    modalContainer : {
        justifyContent: "space-between",
    },
    placeName: {
        fontWeight :"bold",
        textAlign:"center",
        fontSize:20

    },
    placeImage:{
        width: "100%",
        height:400,
    },
    buttonStyle:{
        borderRadius: 30,
        backgroundColor:"red",
        marginTop: 30,
        justifyContent: "center",
        alignItems :"center",
        width : "25%",
        height: 50,

    }
});

export default ImageScope;