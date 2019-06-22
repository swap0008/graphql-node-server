const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const express_graphql = require('express-graphql');
const schema = require('./graphql/schema');
const root = require('./graphql/resolvers');


//Connect to database
const uri = `mongodb+srv://swap0008:test1234@studentdatabasecluster0-xaaf4.mongodb.net/students`;
mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(`Error: ${err}`));

//Express App
const app = express();
app.use(cors());
app.use('/graphql', express_graphql({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log(`Server running on port 4000...`));