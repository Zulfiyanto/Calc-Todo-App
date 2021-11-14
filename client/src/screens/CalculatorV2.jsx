import { Box, Center, View, VStack, Heading, Stack, Button, Flex, Input } from "native-base";
import React, { useState } from "react";

export const CalculatorV2 = () => {
  const [result, setResult] = useState("");

  const handlerButton = (number) => {
    setResult(result + number);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setResult("");
  };
  return (
    <Center flex={1} bg="danger.300">
      <View flex={1} w={["90%", "80%"]}>
        <VStack space="5" mt="4">
          <Heading mt="5" color="white">
            Display
          </Heading>

          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Box
              onTouchStart={reset}
              alignItems="flex-end"
              justifyContent="center"
              borderRadius="lg"
              h="20"
              w={["full", "80%", "100"]}
              bg="primary.50"
              _text={{
                color: "black",
                fontWeight: "bold",
                fontSize: "50",
              }}
              px="2"
            >
              {result}
            </Box>
          </Stack>
          <Flex direction="row" justifyContent="space-between">
            {/* First Row */}
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("1")}
            >
              1
            </Button>
            <Button
              size={["77", "50"]}
              height="100"
              bg="danger.500"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("2")}
            >
              2
            </Button>
            <Button
              size={["77", "50"]}
              height="100"
              bg="danger.900"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("-")}
            >
              -
            </Button>
            <Button
              size={["77", "50"]}
              height="100"
              bg="danger.900"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("+")}
            >
              +
            </Button>
            {/* Second Row */}
          </Flex>
          <Flex direction="row" justifyContent="space-between">
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("3")}
            >
              3
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("4")}
            >
              4
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.900"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("/")}
            >
              /
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.900"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("*")}
            >
              *
            </Button>
          </Flex>
          <Flex direction="row" justifyContent="space-between">
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("5")}
            >
              5
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("6")}
            >
              6
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.900"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("%")}
            >
              %
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.900"
              rounded="lg"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={calculate}
            >
              =
            </Button>
          </Flex>
          <Flex direction="row" justifyContent="space-between">
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("7")}
            >
              7
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("8")}
            >
              8
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("9")}
            >
              9
            </Button>
            <Button
              size={["77", "40"]}
              bg="danger.500"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "bold",
                fontSize: "50",
              }}
              shadow={"3"}
              onPress={() => handlerButton("0")}
            >
              0
            </Button>
          </Flex>
        </VStack>
      </View>
    </Center>
  );
};
