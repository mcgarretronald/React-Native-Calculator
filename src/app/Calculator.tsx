import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Link } from 'expo-router'
import Button from '../Components/Button'
const Calculator = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputbox}></View>
            <View style={styles.buttonscontainer}>
                <View style={styles.buttonblock}>
                    <Button value='Ac' width={80} />
                    <Button value='Del' width={80} />
                    <Button value='/' width={80} />
                    <Button value='*' width={80} backgroundColor='#ADE2FF' />
                </View>
                {/* second row */}
                <View style={styles.buttonblock}>
                    <Button value='7' width={80} />
                    <Button value='8' width={80} />
                    <Button value='9' width={80} />
                    <Button value='-' width={80} backgroundColor='#ADE2FF' />
                </View>
                {/* third row */}
                <View style={styles.buttonblock}>
                    <Button value='4' width={80} />
                    <Button value='5' width={80} />
                    <Button value='6' width={80} />
                    <Button value='+' width={80} backgroundColor='#ADE2FF'/>
                </View>
                {/* 4th row */}
                <View style={styles.buttonblock}>
                    <Button value='1' width={80} />
                    <Button value='2' width={80} />
                    <Button value='3' width={80} />
                    <Button value='.' width={80}  backgroundColor='#ADE2FF'/>
                </View>
                {/* 5 th row */}
                <View style={styles.buttonblock}>
                    <Button value='0' width={290} />
                    <Button value='=' width={80} backgroundColor='#ADE2FF' />
                </View>
            </View>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F8FB',
        height:'100%',
    },
    inputbox: {
        borderWidth: 2,
        borderColor: 'grey',
        height: '40%'
    },
    buttonscontainer: {
        borderWidth: 1,
        padding: 10,
        gap: 10,
    },
    buttonblock: {
        borderWidth: 2,
        borderColor: 'green',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10
    }
})