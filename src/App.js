import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import AppContainer from './routes';
import Login from './pages/Login';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    async function handleAccess() {
      const tokenAcess = await AsyncStorage.getItem('token');
      if (!_.isEmpty(tokenAcess)) {
        await setIsSignedIn(true);
      }
    }
    handleAccess();
  }, []);
  
  if (isSignedIn) {
    return <AppContainer />
  } else {
    return <Login />
  }
}

