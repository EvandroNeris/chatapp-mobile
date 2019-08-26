import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import styles from './styles';

import api from '../../services/api';

export default function Login({ navigation }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ token, setToken ] = useState('');

    async function handleSave() {
        const data = {
            email,
            password
        }
        const response = await api.post('/users/auth', data);
        const tokenAcess = _.get(response, 'data.token');
        console.log(tokenAcess);
        await AsyncStorage.setItem('token', tokenAcess.toString());
        navigation.navigate('Home');
        setToken(tokenAcess);
    }
    return (
        <View style={styles.container}> 
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Chat.App</Text>
            </View>
            <View style={styles.inputBlock}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="E-Mail" 
                    value={email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={setEmail}/>
                <TextInput
                    secureTextEntry={true}
                 s   style={styles.input}
                    placeholderTextColor="#fff"
                    placeholder="Senha" 
                    value={password}
                    onChangeText={setPassword}/>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
