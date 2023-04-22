const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // データソースからユーザーを取得するロジック
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
