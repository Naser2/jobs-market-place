import {Navigation} from 'react-native-navigation';
import {registerScreens} from './routes';
import {HOME_SCREEN} from './modules/Core/Home';
import {PROFILE_SCREEN} from './modules/Core/Profile';
import {REGISTER_SCREEN} from './modules/Core/Register';
import {LOGIN_SCREEN} from './modules/Core/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {Provider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

async function prepareIcons() {
  const icons = await Promise.all([
    Ionicons.getImageSource('md-home', 25),
    MaterialCommunityIcons.getImageSource('store', 25),
    Ionicons.getImageSource('md-notifications', 25),
    Ionicons.getImageSource('md-settings', 25),
  ]);

  const [homeIcon, marketIcon, notificationsIcon, settingsIcon] = icons;
  return {homeIcon, marketIcon, notificationsIcon, settingsIcon};
}

registerScreens(Provider, store);

Navigation.events().registerAppLaunchedListener(async () => {
  const {
    homeIcon,
    marketIcon,
    notificationsIcon,
    settingsIcon,
  } = await prepareIcons();

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: HOME_SCREEN.name,
            },
          },
        ],
      },
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    name: HOME_SCREEN.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: homeIcon,
                },
              },
            },
          },
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    name: HOME_SCREEN.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: marketIcon,
                },
              },
            },
          },
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    name: HOME_SCREEN.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: notificationsIcon,
                },
              },
            },
          },
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    name: PROFILE_SCREEN.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: settingsIcon,
                },
              },
            },
          },
        ],
      },
    },
  });
});
