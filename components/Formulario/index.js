import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./style.js";

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
            <View style={styles.formContext}>
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
                <TouchableOpacity style={styles.buttonCalculator}
                    onPress={() => {
                        calculaMelhor()
                    }}>
                    <Text style={styles.textButtonCalculator}>CALCULAR</Text>
                </TouchableOpacity>
            </View>
        </>
    );

};

export default FormDeCombustivel;