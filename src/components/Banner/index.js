import React from 'react';

import {Container, Img, Overlay, ContainerImg} from './styles';

export default function Banner({bg, img}) {
  return (
    <Container bg={bg}>
      <Overlay />
      <ContainerImg>
        <Img img={img} />
      </ContainerImg>
    </Container>
  );
}
