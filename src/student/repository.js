module.exports = class StudentRepository {

  constructor(database){
    this.database = database;
  }

  create(student){
    return new Promise((resolve, reject) => {
      this.database(student).save();
      resolve(student);
    });
  }

  getByEmail(email){
    return new Promise((resolve, reject) => {
      this.database.find({email: email}).then(student => {
        resolve(student[0]);
      })
    });
  }

  getAll(){
    return new Promise((resolve, reject) => {
      let students = this.database.find();
      resolve(students);
    });
  }
}
