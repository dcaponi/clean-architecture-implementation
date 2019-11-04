const Student = require('../model');

module.exports = (repository) => {
  async function execute(firstname, lastname, email){
    return repository.getByEmail(email)
      .then((student) => {
        return new Promise((resolve, reject) => {
          console.log("PARAMS", firstname, lastname, email)
          if(!(firstname && lastname && email)){
            reject(new Error('validation failed'));
            return;
          }
          if(student){
            reject(new Error('Email Exists'));
            return;
          }
          const newStudent = new Student(firstname, lastname, email);
          resolve(newStudent);
        })
        .then(student => {
          return repository.create(student);
        })
        .then((student)=>{
          return Promise.resolve(student);
        })
      })

  }
  return { execute }
}
