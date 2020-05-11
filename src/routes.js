import { registerScreen, setRoot } from './utils/navigation'
import { HomeScreen, HOME_SCREEN } from './modules/Core/Home'

import {
  ProfileScreen,
  PROFILE_SCREEN,
} from './modules/Core/Profile'

import {
    LoginScreen,
    LOGIN_SCREEN,
  } from './modules/Core/Login'

import {
  RegisterScreen,
  REGISTER_SCREEN,
} from './modules/Core/Register'

// import { SignInScreen, SIGN_IN_SCREEN } from './modules/Core/screens/SignIn'

export const registerScreens = () => {
  registerScreen(HOME_SCREEN.name, HomeScreen)
  registerScreen(PROFILE_SCREEN.name, ProfileScreen)
  registerScreen(LOGIN_SCREEN.name, LoginScreen)
  registerScreen(REGISTER_SCREEN.name, RegisterScreen)
}

// export const goToAuthScreen = () =>
//   setRoot('stack', 'SignIn', [
//     {
//       component: {
//         name: SIGN_IN_SCREEN.name,
//       },
//     },
//   ])

// export const goToHomeScreen = () =>
//   setRoot('bottomTabs', 'App', [
//     {
//       stack: {
//         children: [
//           {
//             component: {
//               name: HOME_SCREEN.name,
//               options: {
//                 bottomTab: {
//                   fontSize: 14,
//                   text: 'Home',
//                 //   icon: require('./static/images/home.png'),
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//   ])