import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Card({name, email, avatar, createdAt}) {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Image style={styles.avatar} source={{ uri: avatar }} />
            </View>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.blockCreated}>
                <Text style={styles.textCreated}>{createdAt}</Text>
            </View>
        </TouchableOpacity>
    )
}

