import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import io from 'socket.io-client';

export default function Chat({ navigation }) {
    const [message, setMessage] = useState([]);
    const id = navigation.getParam('user');
        
    useEffect(() => {
        
        async function handleLoad() {
            const response = await api.get(`/chats/${id}`);

            message(response.data);
        }
        handleLoad();
    }, [id]);

    useEffect(() => {
        const socket = io('', {
            query: { user: id }
        });

        socket.on('send', message => {
            console.log(message);
            setMessage(message);
        })

    }, [message])
    async function handleSave() {
        const response = await api.post('/chats', message);
        console.log(response);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            {
                _.map(message, (data) => (
                    <Text>{data.message}</Text>
                ))
            }
            </ScrollView>
           <View>
                <Input 
                    placeholder="Digite..." 
                    value={message} 
                    onChangeText={setMessage}/>
                <TouchableOpacity onPress={}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
