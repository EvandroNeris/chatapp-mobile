import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput} from 'react-native';
import _ from 'lodash';

import Card from '../../components/Card';
import api from '../../services/api';
import close from '../../assets/close-gray.png';
import plus from '../../assets/plus.png';
import styles from './styles';
import { colors } from '../../styles';

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
      <TouchableOpacity style={styles.blockButton} onPress={handleOpen}>
        <Image source={plus} />
        <Text style={styles.buttonText}>Novo contato</Text>
      </TouchableOpacity>
      <Modal
        transparent={true} 
        visible={showMe} 
        onRequestClose={()=> console.log('Modal has been closed')}>
        <View style={styles.modalBody}>
          <View style={styles.blockHeader}>
            <TouchableOpacity onPress={handleOpen}>
              <Image source={close} />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput style={styles.input} placeholderTextColor="#fff" placeholder="jose@email.com" />
            <TouchableOpacity onPress={handleSave}>
              <Text>Adicionar</Text>
            </TouchableOpacity>
          </View>
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
};


Contact.navigationOptions = () => ({
  headerStyle: {
    backgroundColor: colors.blueDark,
  },
  headerTintColor: colors.white
});
