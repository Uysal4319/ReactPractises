import  React from 'react'
import {StyleSheet,FlatList, View, ScrollView} from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
    return (
        <FlatList style = {styles.listContainer}
        data={props.places}
        renderItem={(info) => (

            <ListItem
                      placeName={info.item.value}
                      placeImage={info.item.image}
                      onItemPressed ={() =>props.onItemSelected(info.item.key)}/>
        )}/>


    );

};

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
export  default  placeList;