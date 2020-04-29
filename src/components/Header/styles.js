import styled from 'styled-components/native';

import {ImageBackground, Image} from 'react-native';

export const Container = styled(ImageBackground).attrs((props) => ({
  source: props.bg,
}))`
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContainerText = styled.View`
  padding: 80px;
  z-index: 1;
  text-align: center;
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

export const Text = styled.Text`
  z-index: 1;
  color: #fff;
  font-size: 25px;
  font-weight: bold
  text-transform: uppercase;
`;

export const SubText = styled.Text`
  z-index: 1;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const BgIcon = styled.View`
  background: #f0ce00;
  z-index: 1;
  padding: 25px;
  position: absolute;
  bottom: -50px;
  border-radius: 100px;
`;

export const Icon = styled(Image).attrs((props) => ({
  source: props.icon,
}))`
  width: 50px;
  height: 50px;
  opacity: 0.7;
`;
