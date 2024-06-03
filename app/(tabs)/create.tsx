import React, { useState } from 'react';
import { StyleSheet, TextInput, FlatList, View, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Task {
  id: string;
  title: string;
}

export default function TabTwoScreen() {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (taskTitle.trim().length === 0) {
      return;
    }
    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now().toString(), title: taskTitle },
    ]);
    setTaskTitle('');
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ThemedText style={styles.header}>Crear Tarea</ThemedText>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Título de la tarea"
          placeholderTextColor="#888"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <Ionicons name="add" size={30} color="white" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ThemedView style={styles.taskItem}>
            <ThemedText style={styles.taskText}>{item.title}</ThemedText>
          </ThemedView>
        )}
        ListEmptyComponent={<ThemedText style={styles.noTasksText}>No hay tareas</ThemedText>}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    marginRight: 8,
    padding: 8,
    color: 'white',
  },
  taskItem: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#333',
    borderRadius: 4,
  },
  taskText: {
    color: 'white',
  },
  noTasksText: {
    color: '#888',
  },
});
