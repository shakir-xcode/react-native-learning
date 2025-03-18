import {
  View,
  Text,
  SafeAreaView,
  Appearance,
  ColorSchemeName,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeCon";

import { Colors } from "@/constants/Colors";
import { Inter_500Medium, useFonts } from "@expo-google-fonts/inter";

interface TodoItem {
  id: string;
  text: string;
  status: string;
}

const todoScreen = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const data: TodoItem[] = [
    { id: "1", text: "Go for a walk", status: "pending" },
    { id: "2", text: "Read a book", status: "completed" },
    { id: "3", text: "Buy Grocries", status: "pending" },
  ];

  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");

  type ThemeContextType = {
    colorScheme: ColorSchemeName;
    setColorScheme: (scheme: ColorSchemeName) => void;
    theme: typeof Colors.light | typeof Colors.dark;
  };

  // const {colorScheme, setColorScheme, theme } = useContext(ThemeContext);

  const [loaded, error] = useFonts({
    Inter_500Medium,
  });

  if (!loaded && !error) return null;

  const styles = createStyles({
    text: theme.text,
    background: theme.background,
    mode: colorScheme,
  });

  const handleDelete = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  function toggleTodoStatus(id: string): void {
    const newTodos = todos.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            status: todo.status === "pending" ? "completed" : "pending",
          }
        : { ...todo };
    });
    setTodos(newTodos);
  }

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;

    const newTodo: TodoItem = {
      id: (todos.length + 1).toString(),
      text: input,
      status: "pending",
    };
    setTodos((pre) => [...pre, newTodo]);
    setInput("");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            placeholder="Add a new todo"
            placeholderTextColor="gray"
            onChangeText={handleChange}
          />
          <Button
            title="Add"
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>

        <View style={styles.todoContainer}>
          {todos.map((todo) => (
            <Pressable key={todo.id} onPress={() => toggleTodoStatus(todo.id)}>
              <View style={styles.todoItem}>
                <Text
                  style={[
                    styles.todoText,
                    {
                      color:
                        todo.status === "completed" ? "#b0b0b0" : theme.text,
                      textDecorationLine:
                        todo.status === "completed" ? "line-through" : "none",
                    },
                  ]}
                >
                  {todo.text}
                </Text>
                <Button title="Del" onPress={() => handleDelete(todo.id)} />
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default todoScreen;

function createStyles(data: {
  text: string;
  background: string;
  mode: ColorSchemeName;
}) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: data.background,
    },
    innerContainer: {
      padding: 20,
    },

    inputContainer: {
      justifyContent: "center",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
    },

    input: {
      backgroundColor: "transparent",
      paddingHorizontal: 15,
      padding: 9,
      width: "80%",
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 8,
      fontWeight: 600,
      fontSize: 18,
      color: data.text,
      fontFamily: "Inter_500Medium",
    },

    todoContainer: {
      flexDirection: "column",
      gap: 12,
      justifyContent: "center",
      marginTop: 20,
    },

    todoItem: {
      borderBottomWidth: 1,
      borderColor: "#fff",
      paddingHorizontal: 16,
      paddingVertical: 10,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },

    todoText: {
      fontSize: 18,
      fontWeight: 600,
      fontFamily: "Inter_500Medium",
    },
    underlined: {
      textDecorationLine: "line-through",
    },
  });
}
