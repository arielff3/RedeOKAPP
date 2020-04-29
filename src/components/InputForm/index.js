import React, {forwardRef} from 'react';
// import {View} from 'react-native';
import PropTypes from 'prop-types';

import {Container, TInput, Title} from './styles';

function Input({style, title, ...rest}, ref) {
  return (
    <>
      <Title>{title}</Title>
      <Container style={style}>
        <TInput {...rest} ref={ref} />
      </Container>
    </>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};

export default forwardRef(Input);
