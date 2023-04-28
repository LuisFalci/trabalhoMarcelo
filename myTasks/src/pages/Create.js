import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  Button,
  ScrollView
} from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";


import actions from "../services/sqlite/Task";

export default function Create({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [duration, setDuration] = useState(null);
  const [tasks, setTasks] = useState();

  getTasks();

  function createTask() {
    actions.create({ title: title, description: description, duration: '2022-03-28' })
      .then((id) => console.log(`Nova tarefa criada com o ID ${id}`))
      .catch((error) => console.error(`Erro ao criar nova tarefa: ${error}`));
  }
  function getTasks() {
    actions.all()
      .then((response) => setTasks(response))
      .catch((error) => console.error(`Erro ao criar nova tarefa: ${error}`));
  }

  function deleteTask(id) {
    actions.remove(id)
      .then((response) => setTasks(response))
      .catch((error) => console.error(`Erro ao criar nova tarefa: ${error}`));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Criar Tarefa</Text>

      <TextInput
        placeholder="Titulo"
        placeholderTextColor="#F0F0F0"
        style={styles.input}
        keyboardType="numeric"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Descrição"
        placeholderTextColor="#F0F0F0"
        style={styles.input}
        keyboardType="numeric"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={createTask}>
        <Text style={styles.buttonText}>Criar task</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <View>
          {
            tasks && tasks.length > 0 ?
              tasks.map((task) => {
                return (
                  <View style={styles.taskContainer} key={task.id}>
                    <Text>{task.title}</Text>
                    <View style={styles.buttonsContainer}>
                      <Ionicons
                        name="close-circle"
                        size={50}
                        color="#FF0000"
                        onPress={() => deleteTask(task.id)}
                      />
                      <Ionicons name="checkmark-circle" size={50} color="#30BB3D" />
                    </View>
                  </View>
                );
              }) : null
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    backgroundColor: "#1C6B3C",
    width: "100%",
    height: "11%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff"
  },
  taskContainer: {
    backgroundColor: "#F6FAFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#000",
  },
  input: {
    width: "90%",
    height: 60,
    backgroundColor: "#101026",
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 22,
    color: "#FFF",
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
  },
  filterIconContainer: {
    marginLeft: 10,
  },
  iconContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#101026",
    fontWeight: "bold",
  },
  dataText: {
    fontSize: 22,
    color: "#FFF",
    width: "20%",
  },
  dataView: {
    width: "90%",
    flexDirection: "row",
  },
  dataButton: {
    height: 60,
    left: "10%",
    width: "70%",
    marginRight: "10%",
    backgroundColor: "#101026",
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 22,
    color: "#FFF",
    marginBottom: 10,
  }
});