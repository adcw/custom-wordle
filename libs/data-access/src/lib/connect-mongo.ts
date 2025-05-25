import { MongoClient } from 'mongodb';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const uri = process.env.MONGODB_URI ?? '';
const options = {};

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

export const getClientPromise = (): Promise<MongoClient> => {
  if (process.env.NODE_ENV === 'development') {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client
        .connect()
        .then((connectedClient) => {
          console.log('✅ Connected to MongoDB');
          return connectedClient;
        });
    }

    return globalWithMongo._mongoClientPromise;
  }

  if (!clientPromise) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect().then((connectedClient) => {
      console.log('✅ Connected to MongoDB');
      return connectedClient;
    });
  }

  return clientPromise;
};
