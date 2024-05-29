let modelsInstance = null;

const initModels = require('../models/init-models').initModels;
const sequelize = require('./sequelize.js');


const initialize = () => {
    if (!modelsInstance) {
        const models = initModels(sequelize);
        modelsInstance = models;
    }
    return modelsInstance;
};

module.exports = initialize;