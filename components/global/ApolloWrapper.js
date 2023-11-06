'use client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.API || 'https://cheers.okhub.tech/graphql',
  cache: new InMemoryCache(),
})

export default function ApolloWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
