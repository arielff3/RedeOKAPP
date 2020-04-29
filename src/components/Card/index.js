import React, {useState} from 'react';
import {View, TouchableHighlight} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

import arrow from '~/assets/Imgs/arrow.png';
import {Container, Icon, Title, ViewIcon, Arrow} from './styles';

export default function Card({icon, title, router}) {
  const navigation = useNavigation();
  const [focus, setFocus] = useState('#fff');

  const focusColor = () => {
    setFocus('#F0CE00');
  };
  return (
    <TouchableHighlight
      activeOpacity={1.0}
      underlayColor="rgba(255,255,255,0)"
      onPress={() => navigation.navigate(`${router}`)}
      onShowUnderlay={focusColor}
      onHideUnderlay={() => setFocus('#fff')}>
      <Container bg={focus}>
        <ViewIcon>
          <Icon icon={icon} />
          <Title>{title}</Title>
        </ViewIcon>
        <View>
          <Arrow arrow={arrow} />
        </View>
      </Container>
    </TouchableHighlight>
  );
}

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  router: PropTypes.string.isRequired,
};
