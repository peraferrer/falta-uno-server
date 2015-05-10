/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    apellido: {
      type: 'string',
      required: true
    },
    emial: {
      type: 'string',
      required: true
    },
    clave: {
      type: 'string',
      required: true
    },
    telefono: {
      type: 'string'
    },
    geo: {
      lat: 'float',
      lon: 'float'
    },
    complejo: {
      model: 'complejo'
    }

  }
};

