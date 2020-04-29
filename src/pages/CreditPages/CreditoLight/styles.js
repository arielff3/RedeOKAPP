import styled from 'styled-components/native';
import Input from '~/components/InputForm';
import Button from '~/components/Button';
import {Picker} from '@react-native-community/picker';

export const Container = styled.SafeAreaView`
  background: #f0f0f0;
  flex: 1;
`;

export const P = styled.Text`
  font-size: 13px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Select = styled(Picker)`
  height: 70px;
  border: 2px solid #000;
  width: 100%;
  color: #344953;
  justify-content: center;
`;

export const FormInput = styled(Input)`
  margin: auto;
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
`;

export const ContainerConsultas = styled.View`
  padding: 30px;
  padding-top: 30px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 10px;
`;
