/**
* Evento.js
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
    descripcion: {
      type: 'string'
    },
    geo: {
      lat: 'float',
      lon: 'float'
    },
    direccion: {
      type: 'string'
    },
    turno: {
      type: 'string'
    },
    faltan: {
      type: 'string'
    },
    tipo: {
      type: 'string',
      enum: ['autorizacion', 'libre']
    },
    usuarios: {
      model: 'usuario'
    }

  }
};

