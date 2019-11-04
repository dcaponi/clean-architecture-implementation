module.exports = class ClassRepository {

  constructor(database){
    this.database = database;
  }

  create(klass){
    return new Promise((resolve, reject) => {
      this.database(klass).save();
      resolve(klass);
    });
  }

  getByName(name){
    return new Promise((resolve, reject) => {
      this.database.find({name: name}).then(klass =>{
        resolve(klass[0]);
      })
    })
  }

  getAll(){
    return new Promise((resolve, reject) => {
      let classes = this.database.find();
      resolve(classes);
    });
  }
}
