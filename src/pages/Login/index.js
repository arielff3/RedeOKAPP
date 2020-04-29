import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import logo from '~/assets/Imgs/logo2.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function Login({navigation}) {
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {};

  return (
    <Container>
      <Image source={logo} style={{width: 220, height: 100}} />
      <Form>
        <FormInput
          icon="person"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email, CPF, Usuário ou Código Cliente"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton
          loading={false}
          onPress={() => navigation.navigate('Logged')}>
          Acessar
        </SubmitButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('Forgot')}>
        <SignLinkText>Esqueceu a senha? Clique aqui.</SignLinkText>
      </SignLink>
    </Container>
  );
}
