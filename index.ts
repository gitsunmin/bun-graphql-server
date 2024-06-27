import { createSchema, createYoga } from 'graphql-yoga'
import { resolvers } from './src/resolvers'

const yoga = createYoga({
    schema: createSchema({
        typeDefs: await Bun.file('schema.graphql').text(),
        resolvers,
    }),
    healthCheckEndpoint: '/health',
})

const server = Bun.serve({
    fetch: yoga
})

console.info(
    `Server is running on ${new URL(
        yoga.graphqlEndpoint,
        `http://${server.hostname}:${server.port}`
    )}`
)