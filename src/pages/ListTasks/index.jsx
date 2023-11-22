import React, { useState, useEffect } from "react";
import { Alert, Text } from "react-native";
import {
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ref, onValue } from "firebase/database";
import { db } from "../../services/api";

import {
  Container,
  Header,
  MarginHeader,
  Title,
  Link,
  LinkText,
} from "./styles";
import TasksList from "../../components/Card";

export default function ListTasks() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      onValue(ref(db, "/tasks"), (querySnapShot) => {
        const tasksFormat = [];
        querySnapShot.forEach((child) => {
          tasksFormat.push({
            id: child.key,
            ...child.val(),
          });
        });
        setTasks(tasksFormat);
        setLoading(false);
      });
    } catch (error) {
      Alert.alert("Error fetching data:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTasks([]);
    loadTasks();
  };

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <MarginHeader>
          <Title>Lista de tarefas</Title>

          <Link onPress={() => navigation.navigate("CreateTask")}>
            <LinkText>Nova Tarefa</LinkText>
          </Link>
        </MarginHeader>
      </Header>

      {tasks.length > 0 && (
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <TasksList data={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </Container>
  );
}
