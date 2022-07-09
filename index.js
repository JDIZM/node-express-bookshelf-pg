const express = require('express');
const app = express();
const port = 1337

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const routes = require('./routes/routes');
const router = new express.Router();

// use new router with version path and route handlers
app.use('/v1', router);

// call the routes, pass router object
routes(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})