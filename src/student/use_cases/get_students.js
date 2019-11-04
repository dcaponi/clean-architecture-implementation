const Student = require('../model');

module.exports = (repository) => {
  async function execute(){
    const students = await repository.getAll();
    return new Promise((resolve, reject) => {
      resolve(students);
    });
  }
  return {execute}
}
