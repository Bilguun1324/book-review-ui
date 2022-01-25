import { useState } from "react";
import { Box, Input, Text, Image } from "../common-components";

type BookCardType = {
    img_url: string;
    author: string;
    comments: any;
    title: string;
    about: string;
}

export const BookCard: React.FC<BookCardType> = (params) => {
    const { img_url, author, comments, title, about } = params;
    const [clicked, setClicked] = useState(false)

    const Info = () => {
        return (
            <Box width='180px' height='100%'>
                <Box mr={10} height='100%' display="flex" direction='column' justify='space-around'>
                    <Text fs='24px' fw='bold'>{title}</Text>
                    <Text>{about}</Text>
                    <Text fw={600}>{author}</Text>
                </Box>
            </Box>
        )
    }

    return (
        <Box width={clicked ? '400px' : '200px'} height='300px' background='#F0F6F7FF' m={10} display="flex" justify="space-between" items='center' onClick={() => setClicked(!clicked)} cursor='pointer'>
            <Image src={img_url} width='200px' height='100%' />
            {clicked && <Info/>}
        </Box>
    )
};
