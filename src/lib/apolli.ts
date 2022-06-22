import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
 uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oish4p0b3s01xs8s2iewo8/master',
 cache: new InMemoryCache()
})