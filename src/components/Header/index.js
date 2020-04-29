import React from 'react';

import {
  Container,
  Text,
  Overlay,
  SubText,
  Icon,
  BgIcon,
  ContainerText,
} from './styles';

import icon from '~/assets/Imgs/person_outline_24px.png';

export default function Header({bg, isIcon, title, subText}) {
  return (
    <>
      <Container bg={bg}>
        <Overlay />
        <ContainerText>
          <Text>{title}</Text>
          {subText && <SubText>Seja bem vinda!</SubText>}
        </ContainerText>
        {isIcon && (
          <BgIcon>
            <Icon icon={icon} />
          </BgIcon>
        )}
      </Container>
    </>
  );
}
