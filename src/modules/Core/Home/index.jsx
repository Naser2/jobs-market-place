import React from 'react';
import { Navigation } from 'react-native-navigation'
import {View, Text} from 'react-native-tailwind';
import {SafeAreaView, Button} from 'react-native';
import { handleNavigation } from '../../../utils/navigation'

import { PROFILE_SCREEN } from '../Profile'
import { REGISTER_SCREEN } from '../Register'
import { LOGIN_SCREEN } from '../Login'


export const HOME_SCREEN = {
  name: 'app.Home',
  title: 'Home',
};

export const HomeScreen = ({componentId}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Jobs Home Screen</Text>
        <Button onPress={()=>handleNavigation(componentId, REGISTER_SCREEN.name)} title="Register"></Button>
        <Button onPress={()=>handleNavigation(componentId, LOGIN_SCREEN.name)} title="Login"></Button>
        <Button onPress={()=>handleNavigation(componentId, PROFILE_SCREEN.name)} title="Profile"></Button>
      </View>
    </SafeAreaView>
  );
};

HomeScreen.options = () => ({
  topBar: {
    title: {
      text: HOME_SCREEN.title,
    },
  },
});
