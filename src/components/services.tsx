/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import color from 'color';
import overlay from './overlay';
import {Dimensions} from 'react-native';
import {Promotions} from './promotions';
import {useTheme} from 'react-native-paper';
import {AllServices} from './allServices';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

const initialLayout = {width: Dimensions.get('window').width};

const All = () => <AllServices />;
const Promos = () => <Promotions />;

export const Services = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'all', title: 'Paquetes'},
    {key: 'promotions', title: 'Promociones'},
  ]);

  const theme = useTheme();

  const renderScene = SceneMap({
    all: All,
    promotions: Promos,
  });

  const tabBarColor = theme.dark
    ? (overlay(4, theme.colors.surface) as string)
    : theme.colors.surface;

  const rippleColor = theme.dark
    ? color(tabBarColor).lighten(0.5)
    : color(tabBarColor).darken(0.2);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: theme.colors.primary}}
      style={{backgroundColor: tabBarColor, shadowColor: theme.colors.text}}
      labelStyle={{color: '#FF6600', fontWeight: 'bold'}}
      pressColor={rippleColor}
    />
  );

  return (
    <React.Fragment>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </React.Fragment>
  );
};
