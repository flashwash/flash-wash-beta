import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import {useColorScheme} from 'react-native-appearance';

import {RootNavigator} from '../navigation/rootNavigator';
import {PreferencesContext} from './context/preferencesContext';

export const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );

  function toggleTheme() {
    // eslint-disable-next-line no-shadow
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={
          theme === 'light'
            ? {
                ...DefaultTheme,
                colors: {...DefaultTheme.colors, primary: '#1ba1f2'},
              }
            : {
                ...DarkTheme,
                colors: {...DarkTheme.colors, primary: '#1ba1f2'},
              }
        }>
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};
