class Character {
    _id;
    _name;
    _specie;
    _type;
    _origin;
    _image;
    _url;
    _created;
    _status;
    _gender;
    _residencies = [];
    _actedIn = [];

    constructor(id, name, specie, type, origin, image, url, created, status, gender, residencies = [], actedIn=[]) {
        this._id = id;
        this._name = name;
        this._specie = specie;
        this._type = type;
        this._origin = origin;
        this._image = image;
        this._url = url;
        this._created = created;
        this._status = status;
        this._gender = gender;
        this._residencies = residencies;
        this._actedIn = actedIn;
    }

    // TODO: Create getters

    get name() {
        return this._name;
    }
}

class Location {
    // TODO: Create attributes, don't forget about aggregation's relationships

    // TODO: Create controller

    // TODO: Create getters
}


class Episode {
    // TODO: Create attributes, don't forget about aggregation's relationships

    // TODO: Create controller

    // TODO: Create getters
}