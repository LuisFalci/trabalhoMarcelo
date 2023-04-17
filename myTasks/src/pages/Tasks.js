import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Tasks() {
    // Aqui você pode colocar o código para buscar as tarefas do seu banco de dados

    let tasks = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Minhas Tarefas</Text>
            </View>

            {/* Barra de buscas */}
            <View style={styles.searchBar}>
                <View style={styles.searchIconContainer}>
                    <Ionicons name="search" size={30} color="#000000" />
                </View>
                <Text style={styles.searchText}>Buscar tarefas</Text>
                <View style={styles.filterIconContainer}>
                    <Ionicons name="funnel" size={30} color="#000000" />
                </View>
            </View>

            {/* Containers de tarefa */}
            {
                tasks.map((task, index) => {
                    return (
                        <View style={styles.taskContainer} key={index}>
                            <Text>{task}</Text>
                            <View style={styles.buttonsContainer}>
                                <Ionicons name="close-circle" size={50} color="#FF0000" />
                                <Ionicons name="checkmark-circle" size={50} color="#30BB3D" />
                            </View>
                        </View>
                    );
                })
            }

            <View style={styles.iconContainer}>
                <Ionicons name="add-circle" size={70} color="#1C6B3C" />
            </View>
        </View>
    );
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
    buttonsContainer: {
        flexDirection: "row-reverse",
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 40,
        marginTop: 25,
        marginBottom: 20,
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    searchIconContainer: {
        marginRight: 10,
    },
    searchText: {
        flex: 1,
        fontSize: 16,
    },
    filterIconContainer: {
        marginLeft: 10,
    },
    iconContainer: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
});
