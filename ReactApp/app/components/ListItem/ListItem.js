import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';

const listItem = (props) => (


    <View >

        <TouchableOpacity onPress ={props.onItemLongPressed}
                          onLongPress = {props.onItemPressed} style={styles.listItem}>
            <View>
                <TouchableOpacity onPress ={props.onImageScopePressed}  >

                    <Image source={props.placeImage} style={styles.placeImage}/>

                </TouchableOpacity>

            </View>

          <Text>{props.placeName}</Text>

        </TouchableOpacity>
    </View>

);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom  : 5,
        padding:10,
        backgroundColor: "#eee",
        flexDirection:"row",
        alignItems:"center",
        borderRadius: 30
    },
    placeImage:{
        marginRight: 8,
        height:30,
        width: 30,
        borderRadius : 20
    }
});

export default listItem;

