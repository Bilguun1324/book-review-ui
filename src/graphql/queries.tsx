import { gql } from "@apollo/client"

export const REQUEST_LOGIN = gql`
mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
    email,
    password
    }
}
` 

export const REQUEST_BOOKS = gql`
query {
    books {
      title,
      author,
      comment
    }
}
`