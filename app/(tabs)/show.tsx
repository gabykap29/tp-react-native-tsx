import React, { useState } from 'react';
import { Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Task {
  id: string;
  title: string;
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Tarea 1' },
    { id: '2', title: 'Tarea 2' },
    // Añadir más tareas según sea necesario
  ]);

  const handlePressTask = (task: Task) => {
    navigation.navigate('EditTask', { task });
  };

  return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.header}>Tareas Creadas</ThemedText>
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePressTask(item)}>
              <ThemedView style={styles.taskItem}>
                <ThemedText style={styles.taskText}>{item.title}</ThemedText>
              </ThemedView>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<ThemedText style={styles.noTasksText}>No hay tareas creadas</ThemedText>}
        />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', // Fondo negro
  },
  header: {
    fontSize: 24,
    color: 'white', // Texto blanco
    marginBottom: 16,
  },
  taskItem: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#333', // Fondo de las tareas
    borderRadius: 4,
  },
  taskText: {
    color: 'white', // Color del texto de las tareas
  },
  noTasksText: {
    color: '#888', // Color del texto cuando no hay tareas
    textAlign: 'center',
    marginTop: 20,
  },
  reactLogo: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
});
