import { Center, Image, Spinner, VStack } from "native-base";
import React from "react";

const SplashScreen = () => {
  return (
    <Center flex={1} bg="danger.300">
      <VStack>
        <Image mb="300" source={require("../../assets/icon/Logo.png")} alt="logo"></Image>
        <Spinner size="lg" />
      </VStack>
    </Center>
  );
};
export default SplashScreen;
