// Button.tsx
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface Props {
    value: string;
    width: number;
    backgroundColor?: string;
    onPress: () => void;
}

const Button: React.FC<Props> = ({ value, width, backgroundColor, onPress }) => {
    return (
        <View style={{ width }}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: backgroundColor || '#DDDDDD' }]}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 24,
        color: 'black',
    },
});

export default Button;
