import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../config/constants';


const HSScoreItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstTeamNameView}>
                <Text style={{ fontSize: 18 }}>A takımı</Text>
            </View>
            <View style={styles.teamScoresView}>
                <Text style={{ fontSize: 18 }}>24</Text>
                <View style={{ width: 0, height: '90%', borderClolor: 'black', borderWidth: 1 }} />
                <Text style={{ fontSize: 18 }}>23</Text>
            </View>
            <View style={styles.secondTeamNameView}>
                <Text style={{ alignSelf: 'flex-end', fontSize: 18 }}>B takımı</Text>
            </View>
        </View>
    );
}



export default HSScoreItem;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '10%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        margin: '2%',
        paddingHorizontal: '1%',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: colors.pastelYellow
    },
    firstTeamNameView: {
        flex: 1,
        justifyContent: 'center',
    },
    teamScoresView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    secondTeamNameView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})