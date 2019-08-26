import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal} from 'react-native';
import Card from '../../components/Card';
import api from '../../services/api';
import { TextInput } from 'react-native-gesture-handler';

export default function Contact() {
    const [contacts, setContacts] = useState([]);
    const [showMe, setShowMe] = useState(false);

    useEffect(() => {
        async function handleLoad() {
            const response = await api.get('/contacts');

            setContacts(response.data);
        }
        handleLoad();
    }, []);

    function handleOpen() {
        setShowMe(!showMe);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOpen}>
                <Text>Add</Text>
            </TouchableOpacity>
            <Modal visible={showMe} onRequestClose={()=> console.log('teste')}>
                <TouchableOpacity onPress={handleOpen}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <View>
                    <TextInput placeholder="jose@email.com" />
                </View>
            </Modal>
            <ScrollView>
            {
                _.map(contacts, (data) => (
                    <Card 
                        name={data.name}
                        email={data.email}
                        avatar={data.avatar}
                    />
                ))
            }
            </ScrollView>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
