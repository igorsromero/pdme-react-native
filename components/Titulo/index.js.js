import React from 'react';
import { Text, View } from 'react-native';
import styles from "./style";

function Titulo() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Comparação entre gasolina e álcool.</Text>
        </View>
    );
}

export default Titulo;