import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import api from '../../services/api';

export default function Register({ navigation }) {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ token, setToken ] = useState('');

    async function handleSave() {
        const data = {
            name,
            email,
            phone,
            password
        }
        const response = await api.post('/users', data);
        const tokenAcess = _.get(response, 'data.token');
        await AsyncStorage.setItem('token', tokenAcess.toString());
        navigation.navigate('Home');
        setToken(tokenAcess);
    }

    return (
        <View style={styles.container}> 
            <Text>Cadastrar</Text>
            <View>
                <TextInput 
                    placeholder="Digite seu email..." 
                    value={name}
                    onChangeText={setName}/>
                <TextInput 
                    placeholder="Digite seu email..." 
                    value={email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={setEmail}/>
                <TextInput 
                    placeholder="Digite seu email..." 
                    value={phone}
                    onChangeText={setPhone}/>
                <TextInput 
                    placeholder="Digite sua senha..." 
                    value={password}
                    onChangeText={setPassword}/>
                <TouchableOpacity onPress={handleSave}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    }
})