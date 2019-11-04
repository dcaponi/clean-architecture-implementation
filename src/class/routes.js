const express = require('express');
const ClassController = require('./controller');
const ClassDatabase = require('./data_access/database');
const ClassRepository = require('./repository');

const classRoutes = () => {
  const database = new ClassDatabase();
  const repository = new ClassRepository(database);
  const router = express.Router();
  const controller = ClassController( repository );

  router.route('/')
    .get(controller.getClasses)
    .post(controller.addClass)

  return router;
}

module.exports = classRoutes;
