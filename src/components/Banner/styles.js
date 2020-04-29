import styled from 'styled-components/native';

import {ImageBackground, Image} from 'react-native';

export const Container = styled(ImageBackground).attrs((props) => ({
  source: props.bg,
}))`
  justify-content: center;
  align-items: center;
  flex: auto;
`;

export const Overlay = styled.View`
  z-index: 1;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 92, 169, 0.6);
`;

export const Img = styled(Image).attrs((props) => ({
  source: props.img,
}))`
  z-index: 1;
  width: 320px;
  height: 70px;
`;

export const ContainerImg = styled.View`
  z-index: 1;
  padding: 20px;
`;
