import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Box, Button, FlatList, HStack, Input, ScrollView, Text, VStack } from "native-base";
import { API } from "../config/api";
import { Keyboard, LogBox } from "react-native";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [form, setForm] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    HandlerTodo();
  }, []);

  const HandleSubmit = async () => {
    try {
      const data = {
        do: form,
      };
      console.log(data);
      await API.post("/do", data);
      setForm("");
      Keyboard.dismiss();
      HandlerTodo();
    } catch (error) {
      console.log(error);
    }
  };
  const HandlerTodo = async () => {
    try {
      setReload(true);
      const data = await API.get("/dos");
      setTodo(data.data.datas);
      setReload(false);
    } catch (error) {
      console.log(error);
    }
  };
  const HandlerDelete = async (id) => {
    try {
      await API.delete(`/do/${id}`);
      HandlerTodo();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <VStack px="6" pb="5" flex={1} bg="danger.300">
      <Box px="5" pt="5" bg="white" flex={1} my="8" borderRadius="lg">
        <VStack>
          <FlatList
            data={todo}
            renderItem={({ item, i }) => (
              <Box
                shadow={"9"}
                key={i}
                borderRadius="lg"
                mb="10"
                h="20"
                bg="danger.300"
                pt="2"
                px="3"
              >
                <HStack justifyContent="space-between">
                  <Text color="white" fontSize="20" bold>
                    {item.do}
                  </Text>
                  <Button onPress={() => HandlerDelete(item.id)} bg="white">
                    <MaterialIcons name="delete-outline" size={24} color="black" />
                  </Button>
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id.toString()}
            refreshing={reload}
            onRefresh={HandlerTodo}
          />
        </VStack>
      </Box>
      <HStack>
        <Input
          fontSize="20"
          bg="white"
          width="75%"
          h="70"
          mr="2"
          variant="unstyled"
          placeholder="Type here.."
          value={form}
          onChangeText={(v) => setForm(v)}
        />
        <Button
          onPress={() => HandleSubmit()}
          borderRadius="lg"
          h="70"
          width="23%"
          bg="primary.50"
          justifyContent="center"
        >
          <Ionicons name="send" size={30} color="black" />
        </Button>
      </HStack>
    </VStack>
  );
};

export default Todo;
