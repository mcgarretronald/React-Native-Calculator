// Calculator.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Components/Button';

const Calculator = () => {
    const [input, setInput] = useState<string>(''); // state for input
    const [output, setOutput] = useState<string>(''); // state for output

    const handleButtonPress = (value: string): void => {
        setInput((prevInput) => prevInput + value);
    };

    const handleCalculate = (): void => {
        try {
            setOutput(eval(input).toString());
        } catch (error) {
            setOutput('Error');
        }
    };

    const handleClear = (): void => {
        setInput('');
        setOutput('');
    };

    const handleDelete = (): void => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputbox}>
                <Text style={styles.input}>{input}</Text>
                <Text style={styles.output}>{output}</Text>
            </View>
            <View style={styles.buttonscontainer}>
                <View style={styles.buttonblock}>
                    <Button value="Ac" width={80} onPress={handleClear} />
                    <Button value="Del" width={80} onPress={handleDelete} />
                    <Button value="/" width={80} onPress={() => handleButtonPress('/')} />
                    <Button value="*" width={80} backgroundColor="#ADE2FF" onPress={() => handleButtonPress('*')} />
                </View>
                <View style={styles.buttonblock}>
                    <Button value="7" width={80} onPress={() => handleButtonPress('7')} />
                    <Button value="8" width={80} onPress={() => handleButtonPress('8')} />
                    <Button value="9" width={80} onPress={() => handleButtonPress('9')} />
                    <Button value="-" width={80} backgroundColor="#ADE2FF" onPress={() => handleButtonPress('-')} />
                </View>
                <View style={styles.buttonblock}>
                    <Button value="4" width={80} onPress={() => handleButtonPress('4')} />
                    <Button value="5" width={80} onPress={() => handleButtonPress('5')} />
                    <Button value="6" width={80} onPress={() => handleButtonPress('6')} />
                    <Button value="+" width={80} backgroundColor="#ADE2FF" onPress={() => handleButtonPress('+')} />
                </View>
                <View style={styles.buttonblock}>
                    <Button value="1" width={80} onPress={() => handleButtonPress('1')} />
                    <Button value="2" width={80} onPress={() => handleButtonPress('2')} />
                    <Button value="3" width={80} onPress={() => handleButtonPress('3')} />
                    <Button value="." width={80} backgroundColor="#ADE2FF" onPress={() => handleButtonPress('.')} />
                </View>
                <View style={styles.buttonblock}>
                    <Button value="0" width={290} onPress={() => handleButtonPress('0')} />
                    <Button value="=" width={80} backgroundColor="#ADE2FF" onPress={handleCalculate} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F8FB',
        height: '100%',
    },
    inputbox: {
        borderWidth: 2,
        borderColor: 'grey',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10,
    },
    input: {
        fontSize: 30,
        color: 'black',
    },
    output: {
        fontSize: 30,
        color: 'black',
    },
    buttonscontainer: {
        borderWidth: 1,
        padding: 10,
        gap: 10,
    },
    buttonblock: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10,
    },
});

export default Calculator;
