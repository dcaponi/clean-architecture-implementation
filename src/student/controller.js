const GetStudents = require('./use_cases/get_students');
const AddStudent = require('./use_cases/add_student');

module.exports = (repository) => {
  const getStudents = (req, res, next) => {
    const getStudentsCase = GetStudents(repository);
    getStudentsCase.execute()
      .then(
        result => { res.json(result) },
        err => { next(err) }
      );
  }

  const addStudent = (req, res, next) => {
    const addStudentCase = AddStudent(repository);
    const { firstname, lastname, email } = req.body;
    addStudentCase.execute(firstname, lastname, email)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      );
  }

  return {
    getStudents,
    addStudent
  }
}
