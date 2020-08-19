import React, { useState } from 'react'
import { Text, Button, View, StyleSheet} from 'react-native'
import estilo from './Estilo'

//useState => framework verifica quando acontece alguma mudanca
export default props => {
    const [numero, setNumero] = useState(props.inicial)
    let Inumero = props.inicial

    function mult(){
        setNumero(numero * 2)
    }
    
     function res(){
        setNumero((numero - numero) + props.inicial)
    }
    return(
        <React.Fragment>
                <View style={styles.view1}>
                    <Text style={styles.text}>Valor Inicial: {Inumero}</Text>
                </View>
                <View style={styles.view2}>
                    <Button title="Reiniciar" onPress={res} />
                    <Button title="Multiplicar" onPress={mult} />
                    <Text style={styles.text}>Total: {numero}</Text>
                    {/* <Button title="Decremento" onPress={dec} /> */}
                </View>
            </React.Fragment>
     );
    }

const styles = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        flexGrow: 1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: '#5f9ea0',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    view2: {
        flexDirection: 'row',
        flexGrow: 1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: 'darkslateblue',//cor de fundo
        justifyContent: 'space-around', // centraliza o eixo y
        alignItems: 'center', // centraliza o eixo x
    },
    text: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold'
    }
})
    /* export default function Contador(props) {
        let numero = props.inicial //criacao de variavel
    
        function inc() {
           return numero *= 2
        }
        function dec() {
            numero--
            console.warn(numero)
        }
    
        return (
            <React.Fragment>
                <View style={styles.view1}>
                    <Text>Valor: {numero}</Text>
                </View>
                <View style={styles.view2}>
                    <Button title="Multipliquei" onPress={inc} />
                    <Text>Valor: {numero}</Text>
                    <Button title="Decremento" onPress={dec} />
                </View>
            </React.Fragment>
        );
    }
     */
    
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