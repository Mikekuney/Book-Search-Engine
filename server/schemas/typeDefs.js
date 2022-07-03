const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        forSales: String
        title: String
        link: String
    }
    input SavedBookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        forSales: String
        title: String
        link: String
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: SavedBookInput): User
        removeBook(bookId: ID!): User
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }   
`;

module.exports = typeDefs;