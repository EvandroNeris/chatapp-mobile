import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contacts';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerTitle: 'Home'
    }),
  },
  Contact: {
    screen: Contact,
    navigationOptions: () => ({
      headerTitle: 'Contatos'
    })
  }
});

const LoginStack = createStackNavigator({
  Login,
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    LoginStack,
    Home: HomeStack
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
