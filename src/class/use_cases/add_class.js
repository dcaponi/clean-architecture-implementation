const Class = require('../model');

module.exports = (repository) => {
  async function execute(name, level){
    return repository.getByName(name)
      .then((klass) => {
        return new Promise((resolve, reject) => {
          if(!(name && level)){
            reject(new Error('validation failed'));
            return;
          }
          if(klass){
            reject(new Error('Class Exists'));
            return;
          }
          const newClass = new Class(name, level);
          resolve(newClass);
        })
        .then(klass => {
          return repository.create(klass);
        })
        .then((klass)=>{
          return Promise.resolve(klass);
        })
      })

  }
  return { execute }
}
