import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavitageGoBack() {
    goBack();
  }

  return(
    <View style={styles.container}>
      <ImageBackground 
        source={giveClassesBgImage} 
        resizeMode='contain'
        style={styles.content}
      >

      <Text style={styles.title}>Quer ser um Proffy?</Text>
      <Text style={styles.description}>Para começar, você precisa de cadastrar como professor na nossa plataforma web.</Text>
      </ImageBackground>

      <RectButton onPress={handleNavitageGoBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;