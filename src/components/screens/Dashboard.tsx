import React, {memo} from 'react';
import Background from '../Background';
import Logo from '../Logo';
import Header from '../Header';
import Paragraph from '../Paragraph';
import Button from '../Button';
import {Navigation} from '../../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
