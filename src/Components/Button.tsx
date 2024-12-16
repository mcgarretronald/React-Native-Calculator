import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
    value: string
    width: number
    backgroundColor?: string
}

const Button = ({ value, width, backgroundColor = '#ffff' }: Props) => {
    return (
        <View>
            <TouchableOpacity style={[styles.button, { width: width, backgroundColor: backgroundColor }]}>
                <Text style={{ textAlign: 'center', color: '#38B9FF', fontSize: 30 }}>{value}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

