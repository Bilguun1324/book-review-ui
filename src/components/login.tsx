import { useState } from "react";
import { Box, Input, Text } from "../common-components";
import { REQUEST_LOGIN } from '../graphql'
import { useMutation } from '@apollo/client';

type LoginBoxType = {
  setClicked: Function;
}

export const LoginBox: React.FC<LoginBoxType> = ({ setClicked }) => {
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
      top={0}
      right={0}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        background="black"
        op={0.6}
        onClick={() => setClicked(false)}
      ></Box>
      <Box
        width="300px"
        height="300px"
        display="flex"
        direction="column"
        background='#6CD6FC'
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
