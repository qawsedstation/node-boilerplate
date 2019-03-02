import express from 'express';
import bodyParser from 'body-parser';
import users from './endpoints/users/users';
import { mongodbConnect } from './database/mongodb-connect';
import { ApolloServer, gql } from 'apollo-server-express';
import { postsTypeDefs, postsQueryResolver } from './endpoints/posts-graphql/posts-graphql';

const app = express();
const MongoDBUrl: string = 'mongodb://localhost:27017';

const port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Restfull API Endpoints
app.get('/', users);

//GraphQL
const typeDefs = gql`
 ${postsTypeDefs}
`

const resolvers = {
    Query: {
        posts: postsQueryResolver,
    },
};

mongodbConnect(MongoDBUrl).then((db) => {
    console.log('connected to mongodb database:',db.databaseName);
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });
    app.listen(port, () => console.log(`expess server and graphql are running http://localhost:${port} and localhost:${port}/graphql`))
})

export default app;
