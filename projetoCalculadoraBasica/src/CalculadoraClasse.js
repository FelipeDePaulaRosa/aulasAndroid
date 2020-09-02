import React, { Component } from 'react'
import { StyleSheet, Text, Button, TextInput, View } from 'react-native'

export default class Calculadora extends Component {
    state = {
        numero1: '',
        numero2: '',
        resultado: 'nada calculado'
    }

    alterarValor1(num) {
        this.setState({ numero1: parseInt(num) })
    }
    alterarValor2(num) {
        this.setState({ numero2: parseInt(num) })
    }

    Somar(num1, num2) {
        this.setState({ resultado: num1 + num2 })
    }
    Subtrair(num1, num2) {
        this.setState({ resultado: num1 - num2 })
    }
    Dividir(num1, num2) {
        num2 != 0 ? this.setState({ resultado: num1 / num2 }) : this.setState({ resultado: 'Impossivel Dividir por 0' })
    }

    Multiplicar(num1, num2) {
        this.setState({ resultado: num1 * num2 })
    }


    render() {
        return (
            <>

                <TextInput style={styles.text}
                    placeholder="Primeiro Valor"
                    value={this.state.numero1}
                    onChangeText={(num) => this.alterarValor1(num)}
                />
                <TextInput style={styles.text}
                    placeholder="Segundo Valor"
                    value={this.state.numero2}
                    onChangeText={(num) => this.alterarValor2(num)}
                />

                <View style={styles.button}>
                    <Button
                        color="green" title="Somar" onPress={() => this.Somar(this.state.numero1, this.state.numero2)}
                    />

                    <Button
                        color="red" title="Subtrair" onPress={() => this.Subtrair(this.state.numero1, this.state.numero2)}
                    />

                    <Button
                        color="gray" title="Dividir" onPress={() => this.Dividir(this.state.numero1, this.state.numero2)}
                    />

                    <Button
                        color="blue" title="Multiplicar" onPress={() => this.Multiplicar(this.state.numero1, this.state.numero2)}
                    />
                </View>

                <Text style={styles.text}>Resultado: {this.state.resultado}</Text>

            </>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    button: {
        justifyContent: 'center',
        width: '50%'
    }
})