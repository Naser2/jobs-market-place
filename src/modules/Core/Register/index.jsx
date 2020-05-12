import React from 'react';
import {View, Text} from 'react-native-tailwind';
import {SafeAreaView, Button} from 'react-native';
import { handleNavigation } from '../../../utils/navigation'

import { HOME_SCREEN } from '../Home'



export const REGISTER_SCREEN = {
  name: 'app.Register',
  title: 'Register',
};

export const RegisterScreen = ({componentId}) => {
    
  return (
    <SafeAreaView>
      <View>
        <Text>Register Screen</Text>
        <Button onPress={()=>handleNavigation(componentId, HOME_SCREEN.name)} title="Go Home">Go Home</Button>
      </View>
    </SafeAreaView>
  );
};

RegisterScreen.options = () => ({
  topBar: {
    title: {
      text: REGISTER_SCREEN.title,
    },
  },
});
