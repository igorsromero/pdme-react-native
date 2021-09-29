import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const FormDeCombustivel = ({ enviar }) => {

    const [valorAlcool, setValorAlcool] = useState("");
    const [valorGasolina, setValorGasolina] = useState("");
    const [consumoAlcool, setConsumoAlcool] = useState("");
    const [consumoGasolina, setConsumoGasolina] = useState("");

    function calculaMelhor() {
        enviar({ valorAlcool, valorGasolina, consumoAlcool, consumoGasolina });
        setValorAlcool("");
        setValorGasolina("");
        setConsumoAlcool("");
        setConsumoGasolina("");
    }

    return (
        <>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={styles.input}
                    placeholder="Valor do Álcool"
                    keyboardType="numeric"
                    value={valorAlcool}
                    onChange={(event) => {
                        setValorAlcool(event.nativeEvent.text)
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Valor da Gasolina"
                    keyboardType="numeric"
                    value={valorGasolina}
                    onChange={(event) => {
                        setValorGasolina(event.nativeEvent.text)
                    }}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={styles.input}
                    placeholder="Consumo com Álcool"
                    keyboardType="numeric"
                    value={consumoAlcool}
                    onChange={(event) => {
                        setConsumoAlcool(event.nativeEvent.text)
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Consumo com Gasolina"
                    keyboardType="numeric"
                    value={consumoGasolina}
                    onChange={(event) => {
                        setConsumoGasolina(event.nativeEvent.text)
                    }}
                />
            </View>
            <View style={{ width: '98%' }}>
                <Button onPress={calculaMelhor} style={styles.button} title="CALCULAR" ></Button>
            </View>
        </>
    );

};



const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        flex: 1,
        alignSelf: "stretch",
        width: 100
    }
});

export default FormDeCombustivel;