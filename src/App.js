import {Navigation} from 'react-native-navigation';
import {registerScreens} from './routes';
import {HOME_SCREEN} from './modules/Core/Home';
import Ionicons from 'react-native-vector-icons/Ionicons'

async function prepareIcons() {

  const icons = await Promise.all([
      Ionicons.getImageSource('md-home', 25),
      Ionicons.getImageSource('md-market', 25),
      Ionicons.getImageSource('md-construct', 25),
      Ionicons.getImageSource('md-menu', 25),
  ]);

  console.log('Later')

  const [ homeIcon, marketIcon, thirdBottomTabIcon, burger ] = icons;
  return { homeIcon, marketIcon, thirdBottomTabIcon, burger };
}

registerScreens();


Navigation.events().registerAppLaunchedListener(async () => {
const { homeIcon } = await prepareIcons()

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
          // {
          //   stack: {
          //     id: 'MARKET_TAB',
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
