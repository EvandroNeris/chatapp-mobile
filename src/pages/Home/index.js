import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import styles from './styles';

import api from '../../services/api';
import Card from '../../components/Card';
import Header from '../../components/Header';


export default function Home({ navigation }) {
    const [ contacts, setContacts ] = useState([]);
    
    useEffect(() => {
        
        async function handleLoad() {
            const response = await api.get(`/contacts`);
            console.log(response)
            setContacts(_.get(response, 'data'));
        }
        handleLoad();
    }, []);

    async function handleLogout() {
       //await AsyncStorage.removeItem('token');
       navigation.navigate('Contact');
    }

    return (
        <View style={styles.container}>
            { _.map(contacts, (data) => console.log(data)(
                <TouchableOpacity >
                    <Card 
                        name={data.name}
                        email={data.email}
                        avatar={data.avatar}
                     />
                </TouchableOpacity>
            ))}
            <Card 
                name={'Evandro Neris'}
                email={'evandroneris95@hotmail.com'}
                avatar={'https://scontent.fbsb14-1.fna.fbcdn.net/v/t1.0-9/61118166_1244565615701705_273373538814001152_n.jpg?_nc_cat=100&_nc_oc=AQljJLtXswf5Uq2Yy2QPC7JtMleMycYvaCsYGTUZVWBv_JkJ7q5g8ra7lUxTOHmTr9k&_nc_ht=scontent.fbsb14-1.fna&oh=194ce1eb2de0bfd7cf9407b52e41652b&oe=5E11564D'}
                createdAt={Date()}
            />
            <Card 
                name={'Evandro Neris'}
                email={'evandroneris95@hotmail.com'}
                avatar={'https://scontent.fbsb14-1.fna.fbcdn.net/v/t1.0-9/61118166_1244565615701705_273373538814001152_n.jpg?_nc_cat=100&_nc_oc=AQljJLtXswf5Uq2Yy2QPC7JtMleMycYvaCsYGTUZVWBv_JkJ7q5g8ra7lUxTOHmTr9k&_nc_ht=scontent.fbsb14-1.fna&oh=194ce1eb2de0bfd7cf9407b52e41652b&oe=5E11564D'}
                createdAt={Date()}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
};

Home.navigationOptions = () => ({
    header: <Header />
});

