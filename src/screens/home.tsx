import React from "react";
import { Box } from "../common-components";
import { useMutation } from '@apollo/client';
import { REQUEST_LOGIN } from "../graphql";

export const HomeScreen = () => {
    const data = useMutation(REQUEST_LOGIN)
    console.log(data)

    return (
        <Box width='100px' height='100px' background="black">
            <Box></Box>
        </Box>
    )
}