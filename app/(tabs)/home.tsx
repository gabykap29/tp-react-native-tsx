import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Paragraph, Text } from 'react-native-paper';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/background.jpg')}
          style={styles.reactLogo}
        />
      }>
      <Card style={styles.container}>
        <Card.Content style={styles.titleContainer}>
          <Title style={styles.titleText}>¡Bienvenido!</Title>
          <HelloWave />
        </Card.Content>
        <Card style={styles.stepContainer}>
          <Card.Content>
            <Title style={styles.subtitleText}>Crear una tarea</Title>
            <Paragraph style={styles.stepText}>
              Presiona en <Text style={styles.boldText}>{"Crear Tarea"}</Text> para crear una tarea nueva.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.stepContainer}>
          <Card.Content>
            <Title style={styles.subtitleText}>Ver Tareas</Title>
            <Paragraph style={styles.stepText}>
              Presiona en <Text style={styles.boldText}>{"Tareas"}</Text> para ver las tareas creadas.
            </Paragraph>
          </Card.Content>
        </Card>
      </Card>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,

  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  titleText: {
    fontSize: 32,
    color: '#000000',
    marginRight: 8,
  },
  stepContainer: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  subtitleText: {
    fontSize: 24,
    color: '#ECF0F1',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    color: '#BDC3C7',
  },
  boldText: {
    fontWeight: 'bold',
  },
  reactLogo: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
});
