import {Navigation} from 'react-native-navigation';
import {registerScreens} from './routes';
import {HOME_SCREEN} from './modules/Core/Home';
import { faHome } from '@fortawesome/free-solid-svg-icons'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
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
                    id: 'HOME_SCREEN',
                    name: HOME_SCREEN.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: faHome,
                },
              },
            },
          },
          // {
          //   stack: {
          //     id: 'PROFILE_TAB',
          //     children: [
          //       {
          //         component: {
          //           id: 'PROFILE_SCREEN',
          //           name: 'ProfileScreen',
          //         },
          //       },
          //     ],
          //     options: {
          //       bottomTab: {
          //         icon: require('./profile.png'),
          //       },
          //     },
          //   },
          // },
        ],
      },
    },
  });
});
