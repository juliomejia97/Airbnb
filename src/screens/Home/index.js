//Render something in our component
import React from 'react';
//Import all the components that we need
import {View, ImageBackground, Text, Pressable, ScrollView} from 'react-native';
//Importing styles
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going men?</Text>
        </Pressable>
        <ImageBackground
          source={require('../../../assests/images/wallpaper.jpg')}
          style={styles.image}>
          <Text style={styles.title}>Go Near</Text>

          <Pressable
            style={styles.button}
            onPress={() => console.warn('Explore Btn clicked')}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
