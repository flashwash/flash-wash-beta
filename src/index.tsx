import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Main,
} from './components/screens';

const isAuthorized: boolean = false;

const Router = createStackNavigator(
  {
    WelcomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Main,
  },
  {
    initialRouteName: !isAuthorized ? 'WelcomeScreen' : 'Main',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
