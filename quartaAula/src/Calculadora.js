import React,{useState} from 'react'
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native'

export default function Calculadora(props) {
    const [numero1, setNome] = useState(0)
    const [numero2, setSobrenome] = useState(0)

    function somar (){
        const num3 = parseFloat(numero1)+parseFloat(numero2)
        Alert.alert("Resultado: " + num3)
    }

    function subtrair (){
        const num3 = parseInt(numero1)-parseInt(numero2)
        Alert.alert("Resultado: " + num3)
    }

    function multiplicar (){
        const num3 = parseInt(numero1)*parseInt(numero2)
        Alert.alert("Resultado: " + num3)
    }

    function dividir (){
        if (parseInt(numero2) === 0){
            Alert.alert("Dividendo nulo!")
        }
        else{
            const num3 = parseInt(numero1)/parseInt(numero2)
            Alert.alert("Resultado: " + num3)
        }
    }

    return (
        <View>
            <Text style={styles.text}> Informe os seguintes dados:</Text>
            <TextInput
                placeholder="Digite o primeiro numero"
                value={numero1}
                onChangeText={numero1 => setNome(numero1)}
            />
            <TextInput
                placeholder="Digite o segundo numero"
                value={numero2}
                onChangeText={numero2 => setSobrenome(numero2)}
            />
            <Button title="Somar" onPress={somar}/>
            <Button title="Subtrair" onPress={subtrair}/>
            <Button title="Multiplicar" onPress={multiplicar}/>
            <Button title="Dividir" onPress={dividir}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'blue',
        fontWeight:'bold'
    }
})