import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Main,
} from './components/screens';

const isAuthorized: boolean = false;

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Main,
  },
  {
    initialRouteName: !isAuthorized ? 'HomeScreen' : 'Main',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
