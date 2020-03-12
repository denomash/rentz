export default {
  Query: {
    getApplication: async (parent, { email }, { models }) => {
      return models.Application.findOne({ where: { email } });
    },
    getAllApplications: async (parent, args, { models }) => {
      return models.Application.findAll();
    }
  },

  Mutation: {
    submitApplication: async (
      root,
      { name, email, phoneNumber, address, zipCode },
      { models }
    ) => {
      try {
        return models.Application.create({
          name,
          email,
          phoneNumber,
          address,
          zipCode
        });
      } catch (error) {
        return error;
      }
    }
  }
};
