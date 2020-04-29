import React from 'react';
import {ScrollView, View} from 'react-native';
import {Container, Title, ContainerConsultas} from './styles';

// Header
import bg from '~/assets/Imgs/Header.png';

// Banner
import imgBanner from '~/assets/Banner/Logo_checkok.png';
import bgBanner from '~/assets/Banner/banner.png';

// Cards
import cheque from '~/assets/Imgs/icon_cheque.png';
import cadastro from '~/assets/Imgs/icon_cadastro1.png';
import veiculo from '~/assets/Imgs/icon_veiculo1.png';
import comportamento from '~/assets/Imgs/icon_comportamento.png';
import lupa from '~/assets/Imgs/lupa.png';

import Header from '~/components/Header';
import Divider from '~/components/Divider';
import Card from '~/components/Card';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';

export default function Logged() {
  return (
    <Container>
      <ScrollView>
        <View>
          <Header subText title="ÁREA DA ALE" bg={bg} isIcon />
        </View>
        <ContainerConsultas>
          <Divider />
          <Title>Consultas</Title>
        </ContainerConsultas>
        <Card icon={cheque} title="Cheques" router="Login" />
        <Card icon={lupa} title="Crédito" router="Credit" />
        <Card icon={comportamento} title="Comportamento" router="Login" />
        <Card icon={cadastro} title="Cadastro" router="Login" />
        <Card icon={veiculo} title="Veículo" router="Login" />
        <Banner bg={bgBanner} img={imgBanner} />
        <Footer />
      </ScrollView>
    </Container>
  );
}
