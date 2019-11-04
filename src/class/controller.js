const GetClasses = require('./use_cases/get_classes');
const AddClass = require('./use_cases/add_class');

module.exports = (repository) => {
  const getClasses = (req, res, next) => {
    const getClassesCase = GetClasses(repository);
    getClassesCase.execute()
      .then(
        result => {
          console.log("RESULT", result)
          res.json(result)
        },
        err => { next(err) }
      );
  }

  const addClass = (req, res, next) => {
    const addClassCase = AddClass(repository);
    const { name, level } = req.body;
    addClassCase.execute(name, level)
      .then(
        result => { res.json(result) },
        err => { next(err) }
      );
  }

  return {
    getClasses,
    addClass
  }
}
