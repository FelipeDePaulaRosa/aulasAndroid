import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado lado='20' cor='#7fffd4'/>
            <Quadrado lado='30' cor='#ff801a'/>
            <Quadrado lado='40' cor='#50d1f6'/>
            <Quadrado lado='50' cor='#dd22c1'/>
            <Quadrado lado='60' cor='#8312ed'/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV1:{
        flexDirection: 'row',
        flexGrow:1,
        backgroundColor:'black',
        width: '80%',
        marginTop: '60%',
        marginBottom: '60%',
        paddingHorizontal: 15,
        justifyContent: "space-around"
    }
})