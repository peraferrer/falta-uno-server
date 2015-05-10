/**
* Turno.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    tipo: {
      type: 'string',
      enum: ['tierra-11', 'tierra-7', 'cemento-7']
    },
    complejo: {
      model: 'usuario'
    },
    dia: {
      type: 'datetime',
      required: true
    }

  }
};

