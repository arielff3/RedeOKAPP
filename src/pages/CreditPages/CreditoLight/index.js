import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CheckBox} from 'react-native-elements';

import {
  Container,
  Title,
  ContainerConsultas,
  Form,
  FormInput,
  SubmitButton,
  Select,
  P,
} from './styles';

// Header
import bg from '~/assets/Imgs/backgroundTwo.png';

// Banner
import imgBanner from '~/assets/Banner/Logo_checkok.png';
import bgBanner from '~/assets/Banner/banner.png';

import Header from '~/components/Header';
import Divider from '~/components/Divider';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import Return from '~/components/Return';

export default function CreditoLight() {
  const navigate = useNavigation();
  const [language, setLanguage] = useState('');
  const [scoringPf, setPf] = useState(false);
  const [scoringPj, setPj] = useState(false);
  return (
    <Container>
      <ScrollView>
        <View>
          <Header bg={bg} title="OK CRÉDITO LIGHT" />
        </View>
        <ContainerConsultas>
          <Return onPress={() => navigate.goBack()} />
          <Divider />
          <Title>OK CRÉDITO LIGHT</Title>
        </ContainerConsultas>
        <Form>
          <FormInput
            icon="person"
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            title="Número do CPF ou CNPJ: "
          />
          <Select
            selectedValue={language}
            onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
            <Select.Item label="Selecione seu Estado" value="" />
            <Select.Item value="AC" label="Acre" />
            <Select.Item value="AL" label="Alagoas" />
            <Select.Item value="AP" label="Amapá" />
            <Select.Item value="AM" label="Amazonas" />
            <Select.Item value="BA" label="Bahia" />
            <Select.Item value="CE" label="Ceará" />
            <Select.Item value="DF" label="Distrito Federal " />
            <Select.Item value="ES" label="Espirito Santo " />
            <Select.Item value="GO" label="Goiás" />
            <Select.Item value="MA" label="Maranhão" />
            <Select.Item value="MS" label="Mato Grosso do Sul" />
            <Select.Item value="MT" label="Mato Grosso " />
            <Select.Item value="MG" label="Minas Gerais " />
            <Select.Item value="PA" label="Pará" />
            <Select.Item value="PB" label="Paraíba" />
            <Select.Item value="PR" label="Paraná" />
            <Select.Item value="PE" label="Pernambuco" />
            <Select.Item value="PI" label="Piauí" />
            <Select.Item value="RJ" label="Rio de Janeiro" />
            <Select.Item value="RN" label="Rio Grande do Norte" />
            <Select.Item value="RS" label="Rio Grande do Sul" />
            <Select.Item value="RO" label="Rondônia" />
            <Select.Item value="RR" label="Roraima" />
            <Select.Item value="SC" label="Santa Catarina" />
            <Select.Item value="SP" label="São Paulo" />
            <Select.Item value="SE" label="Sergipe" />
            <Select.Item value="TO" label="Tocantins" />
          </Select>
          <P>Informações Adicionais Faturadas se selecionadas:</P>
          <CheckBox
            title="Scoring PF"
            checked={scoringPf}
            onPress={() => (scoringPf ? setPf(false) : setPf(true))}
          />
          <CheckBox
            title="Scoring PJ"
            checked={scoringPj}
            onPress={() => (scoringPj ? setPj(false) : setPj(true))}
          />
          <SubmitButton
            loading={false}
            onPress={() => navigate.navigate('Logged')}>
            Consultar
          </SubmitButton>
        </Form>
        <Banner bg={bgBanner} img={imgBanner} />
        <Footer />
      </ScrollView>
    </Container>
  );
}
