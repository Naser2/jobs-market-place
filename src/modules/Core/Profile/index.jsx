import React from 'react';
import {View, Text} from 'react-native-tailwind';
import {SafeAreaView, Button} from 'react-native';
import { handleNavigation } from '../../../utils/navigation'

import { HOME_SCREEN } from '../Home'



export const PROFILE_SCREEN = {
  name: 'app.Profile',
  title: 'Profile',
};

export const ProfileScreen = ({componentId}) => {
    
  return (
    <SafeAreaView>
      <View>
        <Text>Profile Screen</Text>
        <Button onPress={()=>handleNavigation(componentId, HOME_SCREEN.name)} title="Go Home">Go Home</Button>
      </View>
    </SafeAreaView>
  );
};

ProfileScreen.options = () => ({
  topBar: {
    title: {
      text: PROFILE_SCREEN.title,
    },
  },
});
