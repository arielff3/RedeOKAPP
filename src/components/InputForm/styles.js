import styled from 'styled-components/native';

export const Container = styled.View`
  border: 2px solid #e5e5e5;
  border-radius: 100px;
  padding: 7px 18px;
  width: 100%;
  background: transparent;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #183883;
  padding-left: 15px;
  padding-bottom: 10px;
  font-weight: bold;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #183883;
  font-weight: bold;
`;
