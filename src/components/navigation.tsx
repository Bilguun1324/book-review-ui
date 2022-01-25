import { useState } from "react"
import { Box, Text } from "../common-components"
import { LoginBox, RegisterBox } from "."

export const Navigation = () => {
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)

    return (
        <Box width='100vw' height='60px' position='block' top={0} background='#6CD6FC'  display="flex" direction='row' justify='space-between' items='center'>
            <Box m={10}  display="flex" direction='row' justify='space-between' items='center' width='100%'>
                <Text color='#190B0D' fw={600} fs='24px'>Booklogy</Text>
                <Box display="flex" direction="row" width='200px' justify="space-around">
                    <Text onClick={() => setSignIn(true)}> Sign In </Text>
                    <Text onClick={() => setSignUp(true)}> Sign Up </Text>
                    {signIn && <LoginBox setClicked={setSignIn}/>}
                    {signUp && <RegisterBox setClicked={setSignUp}/>}
                </Box>
            </Box>
        </Box>
    )
}