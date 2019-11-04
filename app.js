const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./src/routes');
const Database = require('./src/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const healthRoutes = express.Router();

healthRoutes.route('/')
  .get((req, res) => {
    let db = dependencies.database.connected ? "up" : "down";
    res.json({
      status: {
        application: "up",
        database: db
      }
    })
  })

app.use('/', Routes());

new Database(process.env.DATABASE_CONNECTION)
  .then(() => {
    app.use('/health', healthRoutes);
    app.listen(port, () => {
      console.log(`Listening on ${port}. Health Check at http://localhost:${port}/health`);
    });
});
