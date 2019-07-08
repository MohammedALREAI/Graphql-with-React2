const express  =require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require('mongoose');
const cros = require('cors');
const schema = require('./Schema/Schema');
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

//create connection with database application mlab  

// mongoose.connect('mongodb://graphql:1512345aa@ds347917.mlab.com:47917/graphql');
// mongoose.connection.once("open", () => {
//     console.log("the connection is done");

// })
// mongoose.connection.once("error", () => {
//     console.log("some error")
// }
// )
// mongoose.connection.once()
app.use(cros())
// mongodb://graphql:1512345aa@ds347917.mlab.com:47917/graphql
mongoose.connect('mongodb://graphql:1512345aa@ds347917.mlab.com:47917/graphql').then(() =>
    console.log('conneted to database')
).catch(() => console.log('conneted to fields')
);
app.listen(4000, () => {
    console.log("the server start runiing");
})

