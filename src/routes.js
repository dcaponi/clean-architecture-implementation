const express = require('express');

const studentRoutes = require('./student/routes');
const classRoutes = require('./class/routes');

const Routes = (dependencies) => {
  const router = express.Router();
  router.use('/students', studentRoutes(dependencies));
  router.use('/classes', classRoutes(dependencies));
  return router;
}

module.exports = Routes;
