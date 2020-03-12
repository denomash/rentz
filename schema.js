export default `
    type Application {
        id: Int!
        name: String!
        email: String!
        phoneNumber: String!
        address: String!
        zipCode: String!
    }

    type Query { 
        getApplication(email: String!): Application!
        getAllApplications: [Application!]!
     }


    type Mutation {
        submitApplication(name: String!, email: String!, phoneNumber: String!, address: String!, zipCode: String!): Application!
    }
`;
