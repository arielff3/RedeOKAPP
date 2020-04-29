import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.bg};
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  margin-bottom: 15px;
  flex: auto;
`;

export const ViewIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Image).attrs((props) => ({
  source: props.icon,
}))`
  width: 70px;
  height: 70px;
`;

export const Arrow = styled(Image).attrs((props) => ({
  source: props.arrow,
}))`
  width: 12px;
  height: 12px;
`;

export const Title = styled.Text`
  margin-left: 20px;
  font-size: 19px;
  font-weight: bold;
  color: #183883;
`;
