import React,{useState} from 'react'
import {Text, Button, View} from 'react-native'
import estilo from './Estilo'

export default function Contador (props) {
    let numero = props.inicial //criacao de variavel

    function inc(){
        numero++
        console.warn(numero)
    }
    function dec(){
        numero--
        console.warn(numero)
    }

    return(
        <View>
            <Text style={estilo.textHeader}>Valor: {numero}</Text>
            <Button title="Incremento" onPress={inc}/>
            <Button title="Decremento" onPress={dec}/>
        </View>
    );
}

//useState => framework verifica quando acontece alguma mudanca
// export default props => {
//     const [numero, setNumero] = useState(props.inicial)
    
//     function inc(){
//        setNumero(numero + 1)
//     }

//     function dec(){
//         setNumero(numero - 1)
//     }
//     return(
//         <View>
//             <Text style={estilo.textHeader}>Valor inicial: {numero}</Text>
//             <Button title="Incremento" onPress={inc}/>
//             <Button title="Decremento" onPress={dec}/>
//         </View>
//     );
// }

// export default ({inicial = 0, passo = 1 }) => {
//     const [numero, setNumero] = useState(inicial)
//     function inc(){
//        setNumero(numero + passo)
//     }
//     function dec(){
//         setNumero(numero - passo)
//     }
//     return(
//         <View>
//             <Text style={estilo.textHeader}>Valor inicial: {numero}</Text>
//             <Button title="+" onPress={inc}/>
//             <Button title="-" onPress={dec}/>
//         </View>
//     );
// }