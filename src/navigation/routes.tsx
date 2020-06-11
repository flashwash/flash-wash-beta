import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './authStack';
import {AuthContext} from './authProvider';
import Loading from '../components/loading';
import {Main} from '../components/Main';

export const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  // eslint-disable-next-line no-shadow
  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? <Main /> : <AuthStack />}
    </NavigationContainer>
  );
};
