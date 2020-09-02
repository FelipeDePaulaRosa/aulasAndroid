import React from 'react'
import {Text} from 'react-native'

export default function Comp (props){
    return(
        <Text>Recebo um valor por parametro: {props.valor} </Text> 
    );
}