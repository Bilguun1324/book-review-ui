import React, { useState } from "react";
import { Box, Input, colors, Text } from "../common-components";

export const RegisterBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = () => {};

  return (
    <Box
      width="100vw"
      height="100vh"
      justify="center"
      items="center"
      display="flex"
      position="absolute"
    //   top='0px'
    //   right='0px'
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        color="black"
        op={0.6}
      ></Box>
      <Box
        width="300px"
        height="300px"
        display="flex"
        direction="column"
        color={colors.mainColor}
        justify="space-evenly"
        items="center"
        z={1}
      >
        <Text>First name: </Text>
        <Input
          height="20px"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Text>Last name: </Text>
        <Input
          height="20px"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Text>Email:</Text>
        <Input
          height="20px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text>Password: </Text>
        <Input
          height="20px"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box
          onClick={() => register()}
          width="100px"
          height="30px"
          color="white"
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
