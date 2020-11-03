class Personajes {
  constructor(id) {
    let _id = id;
    this.getId = () => _id; // Estos son los closures
    this.setId = (newId) => (_id = newId);
  }

  get Id() {
    return this.get_id();
  }

  set Id(newId) {
    this.setId = newId;
  }
}

export default Personajes;
