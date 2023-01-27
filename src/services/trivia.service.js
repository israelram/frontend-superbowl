// Servicio de trivia
const Trivia = require('../models/trivia.js');

module.exports = {
  getAll: () => {
    return Trivia.find({});
  },

  getById: (id) => {
    return Trivia.findById(id);
  },

  create: (triviaData) => {
    let trivia = new Trivia(triviaData);

    return trivia.save();
  },

  update: (id, triviaData) => {
    return Trivia.findByIdAndUpdate(id, triviaData, { new: true });
  },

  delete: (id) => {
    return Trivia.findByIdAndRemove(id);
  }
};
