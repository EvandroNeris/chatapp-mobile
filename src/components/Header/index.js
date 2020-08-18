import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import icon from '../../assets/menu.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>ChatApp</Text>
      </View>
      <TouchableOpacity>
        <Image source={icon} />
      </TouchableOpacity>
    </View>
  );
}
