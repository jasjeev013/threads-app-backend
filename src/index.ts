import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import createApolloGraphqlServer from './graphql';


async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 5000;

    app.use(express.json());

    // Create Graphql Server
    
    app.get('/', (req, res) => {
        res.json({ message: "Server is up & running" });
    })

    app.use('/graphql', expressMiddleware( await createApolloGraphqlServer()))

    app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
}

init();