import { create } from 'domain';
import { Request, Response } from "express-serve-static-core";
import { ObjectId } from "bson";
import { db } from "../../database/mongodb-connect";

/**
 * Endpoint URL: /
 * @param req 
 * @param res 
 */
const users = async (req: Request, res: Response) => {
    const Posts = db.collection('posts');

    let newPost = await Posts.insertOne( { title: "canvas"} );
    console.log(newPost.insertedId,newPost.result);

    let post = await Posts.find({ "_id": new ObjectId("5c79f29974ae3bf724019c20") })
    let data = await post.toArray();
    res.json(data);
};

export default users;