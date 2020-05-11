import { Navigation } from 'react-native-navigation'

export const registerScreen = (screenName, component) =>
  Navigation.registerComponent(screenName, () => component)

export const setRoot = (type, id, children) => Navigation.setRoot({
  root: {
    [type]: {
      id,
      children,
    },
  },
})

export const handleNavigation = (componentId, name) =>
Navigation.push(componentId, {
  component: {
    name,
  },
})