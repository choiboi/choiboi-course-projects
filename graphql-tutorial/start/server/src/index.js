require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const  resolvers = require('./resolvers');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');
const IsEmail = require('isemail');

const store = createStore();

const server = new ApolloServer({
  /*
   * Context function is called once for every GraphQL operation that
   * clients send to our server. (apollo-server context constructor parameter)
   *
   * 1. Obtain the value of the Authorization header in the incoming request.
   * 2. Decode the value of the Authorization.
   * 3. If the decoded value resembles an email, obtain user information from db
   *    and return an object that includes those details in the user field.
   */
  context: async ({ req }) => {
    const auth = req.headers && req.headers.authorization || '';
    const email = Buffer.from(auth, 'base64').toString('ascii');
    if (!IsEmail.validate(email)) return { user: null };

    const users = await store.users.findOrCreate({ where: { email } });
    const user = users && users[0] || null;
    return { user: { ...user.dataValues }};
  },
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  }),
  engine: {    
    reportSchema: true
  }
});


server.listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
