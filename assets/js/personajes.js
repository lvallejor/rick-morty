class Personajes {
  constructor(id) {
    let _id = id;
    this.getIdentifier = () => _id; // Estos son los closures
    this.setIdentifier = (id) => (this._id = id);
  }

  get Identifier() {
    return this._id;
  }

  set Identifier(id) {
    this._id = id;
  }
}

export default Personajes;
