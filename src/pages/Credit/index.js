import React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Title, ContainerConsultas} from './styles';

// Header
import bg from '~/assets/Imgs/backgroundTwo.png';

// Banner
import imgBanner from '~/assets/Banner/Logo_checkok.png';
import bgBanner from '~/assets/Banner/banner.png';

// Cards
import lupa from '~/assets/Imgs/lupa.png';

import Header from '~/components/Header';
import Divider from '~/components/Divider';
import Card from '~/components/Card';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import Return from '~/components/Return';

export default function Credit() {
  const navigate = useNavigation();
  return (
    <Container>
      <ScrollView>
        <View>
          <Header bg={bg} title="Crédito" />
        </View>
        <ContainerConsultas>
          <Return onPress={() => navigate.goBack()} />
          <Divider />
          <Title>Crédito</Title>
        </ContainerConsultas>
        <Card icon={lupa} title="Ok Empresarial Top" router="Login" />
        <Card icon={lupa} title="Ok Pessoal Top" router="Login" />
        <Card icon={lupa} title="Ok Mix Top" router="Login" />
        <Card icon={lupa} title="Ok Crédito Top" router="Login" />
        <Card icon={lupa} title="Ok Crédito Light" router="CreditoLight" />
        <Card icon={lupa} title="Ok BC" router="Login" />
        <Banner bg={bgBanner} img={imgBanner} />
        <Footer />
      </ScrollView>
    </Container>
  );
}
