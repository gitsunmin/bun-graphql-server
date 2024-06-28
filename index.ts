import { createSchema, createYoga } from 'graphql-yoga'
import { resolvers } from './src/resolvers'
import { Constants } from './src/constants'

const yoga = createYoga({
    schema: createSchema({
        typeDefs: await Bun.file(Constants.System.SCHEMA_PATH).text(),
        resolvers,
    }),
    healthCheckEndpoint: '/health',
})

const server = Bun.serve({
    port: Constants.System.PORT,
    fetch: yoga
})

console.info(
    `Server is running on ${new URL(
        yoga.graphqlEndpoint,
        `http://${server.hostname}:${server.port}`
    )}`
)