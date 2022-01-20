import React, { useState } from "react";
import { Box, Input, Text } from "../common-components";

export const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};

  return (
    <Box
      width="100vw"
      height="100vh"
      justify="center"
      items="center"
      display="flex"
      position="absolute"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        background="black"
        op={0.6}
      ></Box>
      <Box
        width="300px"
        height="300px"
        display="flex"
        direction="column"
        background='#669DB3FF'
        justify="space-evenly"
        items="center"
        z={1}
      >
        <Text>Email:</Text>
        <Input
          height="20px"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Text>Password: </Text>
        <Input
          height="20px"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Box
          onClick={() => login()}
          width="100px"
          height="30px"
          background="white"
          justify="center"
          items="center"
          display="flex"
        >
          Submit
        </Box>
      </Box>
    </Box>
  );
};
