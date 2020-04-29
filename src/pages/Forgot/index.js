import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import logo from '~/assets/Imgs/logo2.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Text,
} from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {};

  return (
    <Container>
      <Image source={logo} style={styles.img} />
      <Text>
        Informe seu e-mail ou usuário e enviaremos instruções para você criar
        sua nova senha.
      </Text>
      <Form>
        <FormInput
          icon="person"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email ou Usuário "
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
        />
        <SubmitButton loading={false} onPress={handleSubmit}>
          Acessar
        </SubmitButton>
      </Form>
      <SignLink onPress={() => navigation.navigate('Login')}>
        <SignLinkText>Lembrou ? Faça login!</SignLinkText>
      </SignLink>
    </Container>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 220,
    height: 100,
  },
});
