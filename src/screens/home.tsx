import { Box } from "../common-components";
import { useQuery } from '@apollo/client';
import { REQUEST_BOOKS } from "../graphql";
import { Loading, BookCard } from "../components";
import { exampleImgUrl, exampleWords } from "../common-components";

export const HomeScreen = () => {
    const { data, loading } = useQuery(REQUEST_BOOKS)
    console.log(data)

    const Books = () => {
        return (
            <Box wrap='wrap' display='flex' direction='row'>
                {data.books.map((book: any, index: number) => {
                    return <BookCard img_url={exampleImgUrl} author={book.author} comments={['ajajjaja', 'aahahhhaaha']} title={book.title} key={index} about={exampleWords} />
                })}
            </Box>
        )
    }

    return (
        <Box>
            {loading ? <Loading /> :
                <Box>
                    <Books />
                </Box>}
        </Box>
    )
}