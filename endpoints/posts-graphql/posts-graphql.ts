
import { UserInputError } from 'apollo-server-express';
import { db } from '../../database/mongodb-connect';
import { ObjectId } from 'mongodb';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const postsTypeDefs = `

  # This "Post" type can be used in other type declarations.
  type Post {
    _id: String
    title: String
  }


  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    posts(_id: String!): [Post]
  }

`;

export const postsQueryResolver = async (_: any, { _id }: any) => {
    const Posts = db.collection('posts');
    try {
        let post = await Posts.find({ "_id": new ObjectId(_id) })
        let data = await post.toArray();
    
        return data;
    } catch (error) {
        throw new UserInputError(error);
    }
}

