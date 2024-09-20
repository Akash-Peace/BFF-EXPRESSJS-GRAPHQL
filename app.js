const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { printSchema } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const createError = require('http-errors');
const fs = require('fs');
const crypto = require('crypto');

// Generate a public/private key pair once
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs1', format: 'pem'}
});

const schema = makeExecutableSchema({ typeDefs, resolvers }); // Create schema
const schemaSDL = printSchema(schema); // Print schema to SDL
fs.writeFileSync('schema.graphql', schemaSDL); // Save schema to file

const app = express();

app.use(express.json({limit: '3mb'}));
app.use(express.urlencoded({ extended: false }));

app.get('/getPublicKey', (req, res) => {
  res.send(publicKey);
});

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
  context: {
    privateKey
  }
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;