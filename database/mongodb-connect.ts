import { MongoClient, Db } from 'mongodb'

/**
 * Singleton object keeping the database connection
 */
export let db: Db; 

/**
 * Connects to a MongoDB database and return the DB connection object 
 * @param url 
 */
export const mongodbConnect = (async (url: string): Promise<Db> => {
    const client = await MongoClient.connect(url)
    db = client.db('test');
    return db;
});

