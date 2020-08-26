import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Alert, Button } from 'react-native'

export default props => {
    const [x, setX] = useState('')
    const [y, setY] = useState('')
    const [operacao, setOperacao] = useState('')
    let num1 = parseInt(x)
    let num2 = parseInt(y)

    function Soma() {
        setOperacao(num1 + num2)
    }

    function Subtracao() {
        setOperacao(num1 - num2)
    }

    function Divisao() {
        num2 == 0 ? setOperacao("Divisão por Zero não existe") : setOperacao(num1 / num2)
    }

    function Multiplicacao() {
        setOperacao(num1 * num2)
    }

    return (
        <View>
            <Text style={styles.text}>Informe os Números e a Operacao a ser realizada</Text>
            <TextInput
                placeholder="Digite o valor de X"
                value={x}
                onChangeText={x => setX(x)}
            />
            <TextInput
                placeholder="Digite o valor de Y"
                value={y}
                onChangeText={y => setY(y)}
            />
            <View style={styles.button}>
                <Button color="green" title="Soma" onPress={(Soma)} />
                <Button color="red" title="Subtracao" onPress={(Subtracao)} />
                <Button color="blue" title="Multiplicacao" onPress={(Multiplicacao)} />
                <Button color="gray" title="Divisao" onPress={(Divisao)} />
            </View>
            <Text>Resposta: {operacao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'column',
        width: '50%'
    }
})


