import { Box, NativeBaseProvider, extendTheme } from "native-base";
import React, { useEffect, useState } from "react";
import Container from "./src/navigations/Container";
import SplashScreen from "./src/screens/SplashScreen";
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
export default function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  };

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <NativeBaseProvider theme={theme}>{show ? <Container /> : <SplashScreen />}</NativeBaseProvider>
  );
}
//
