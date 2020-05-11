import React from 'react';
import {View, Text} from 'react-native-tailwind';
import {SafeAreaView, Button} from 'react-native';
import { handleNavigation } from '../../../utils/navigation'

import { HOME_SCREEN } from '../Home'



export const LOGIN_SCREEN = {
  name: 'app.Login',
  title: 'Login',
};

export const LoginScreen = ({componentId}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
        <Button onPress={()=>handleNavigation(componentId, HOME_SCREEN.name)} title="Go Home">Go Home</Button>
      </View>
    </SafeAreaView>
  );
};

LoginScreen.options = () => ({
  topBar: {
    title: {
      text: LOGIN_SCREEN.title,
    },
  },
});
