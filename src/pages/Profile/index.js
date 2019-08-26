import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Profile() {

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
