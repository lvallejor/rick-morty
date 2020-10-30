import Personajes from "./personajes";

class DetallesPersonajes extends Personajes {
  constructor(
    id,
    name,
    status,
    species,
    gender,
    created,
    origin,
    location,
    episode
  ) {
    this.id = id;
    this.species = species;
    this.gender = gender;
    this.created = created;
    this.origin = origin;
    this.location = location;
    this.episode = episode;
    //closures
    let _name = name;
    let _status = status;
    this.getName = () => _name;
    this.getStatus = () => _status;
    this.setStatus = (status) => (this._status = status);
    this.setStatus = (status) => (this._status = status);
  }
// id
  get Id(){
      return this.id;
  }

  set Id(id){
      this.id = id
  }
// species
get Species(){
    return this.species;
}
set Species(species){
    this.species;
}
// gender
get Gender(){
    return this.gender;
}
set Gender(gender){
    this.gender;
}
// created
get Created(){
    return this.created;
}
set Created(created){
    this.created;
}
// origin
get Origin(){
    return this.origin;
}
set Origin(origin){
    this.origin;
}

//location
get Location(){
    return this.location;
}
set Location(location){
    this.location;
}
//Episode
get Episode(){
    return this.episode;
}
set Origin(episode){
    this.episode;
}

// Get y set de los closures
  get Name() {
    return (this._name = name);
  }
  set Name(){
      this._name = name
  }
  get Status() {
    return (this._status = status);
  }
  set Status(){
      this._status = status
  }
}

export default DetallesPersonajes;
