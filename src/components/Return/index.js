import React from 'react';
import {Image, TouchableHighlight} from 'react-native';

import arrow from '~/assets/Imgs/arrow2.png';

import {Container} from './styles';

export default function Return({onPress}) {
  return (
    <Container onPress={onPress}>
      <Image source={arrow} />
    </Container>
  );
}
