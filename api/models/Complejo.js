/**
* Complejo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    geo: {
      lat: 'float',
      lon: 'float'
    },
    direccion: {
      type: 'string',
      required: true
    },
    nombre: {
      type: 'string',
      required: true
    },
    descripcion: {
      type: 'string'
    },
    dueno: {
      model: 'usuario'
    }

  }
};

