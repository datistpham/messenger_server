
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from '../graphql/resolver/index.js'
import { typeDefs } from '../graphql/schema/index.js'
import { handleUser } from '../controller/handleUser.controller.js'
let apolloServer= null
const startServer= async(app) => {
    apolloServer= new ApolloServer({
        typeDefs,
        resolvers,
        context: ()=> ({handleUser})
    })
    await apolloServer.start()
    console.log('Connect apollo server successfully')
    apolloServer.applyMiddleware({app, path: '/graphql'})
}

export default startServer