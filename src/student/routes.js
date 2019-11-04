const express = require('express');
const StudentController = require('./controller');
const StudentDatabase = require('./data_access/database');
const StudentRepository = require('./repository');

const studentRoutes = () => {
  const database = new StudentDatabase();
  const repository = new StudentRepository(database);
  const router = express.Router();
  const controller = StudentController( repository );

  router.route('/')
    .get(controller.getStudents)
    .post(controller.addStudent)

  return router;
}

module.exports = studentRoutes;
