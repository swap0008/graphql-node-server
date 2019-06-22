const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        detail(id: ID!): Detail
        details: Details
    },
    type Mutation {
        updateDetail(id: ID!, name: String, age: Int): Detail,
        addDetail(id: ID!, name: String!, age: Int!): Detail
    },
    type Detail {
        id: ID
        name: String
        age: Int
    },
    type Details {
        students(last: Int!): Edges
    },
    type PageInfo {
        """When paginating forwards, are there more items?"""
        hasNextPage: Boolean!
      
        """When paginating backwards, are there more items?"""
        hasPreviousPage: Boolean!
        """When paginating backwards, the cursor to continue."""
        startCursor: String
        """When paginating forwards, the cursor to continue."""
        endCursor: String
    },
    type Edges {
        pageInfo: PageInfo!
        edges: [Node]
    },
    type Node {
        node: Detail,
        cursor: String
    }
`);

module.exports = schema;