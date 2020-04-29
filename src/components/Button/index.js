import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';

export default function Button({children, loading, ...rest}) {
  return (
    <Container bg={rest.bg ? rest.bg : '#3b9eff'} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text color={rest.color ? rest.color : '#fff'}>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
