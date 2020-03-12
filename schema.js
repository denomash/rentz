export default `
    type File {
        filename: String!
        mimetype: String!
        encoding: String!
    }

    type Application {
        id: Int!
        name: String!
        email: String!
        phoneNumber: String!
        address: String!
        zipCode: String!
        file: File!
    }

    type Query { 
        getApplication(email: String!): Application!
        getAllApplications: [Application!]!
     }


    type Mutation {
        submitApplication(name: String!, email: String!, phoneNumber: String!, address: String!, zipCode: String!): Application!
    }
`;
