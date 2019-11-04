const Class = require('../model');

module.exports = (repository) => {
  async function execute(){
    const classes = await repository.getAll();
    return new Promise((resolve, reject) => {
      resolve(classes);
    });
  }
  return {execute}
}
