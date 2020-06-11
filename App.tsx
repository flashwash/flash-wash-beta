import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-native-paper';
import {theme} from './src/assets/theme';
import App from './src/navigation';

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <>
      <Provider theme={theme}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </Provider>
    </>
  );
};
