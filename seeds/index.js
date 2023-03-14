const sequelize = require('../config/connection');
const seedClass = require('./classData');
const seedCharacter = require('./characterData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedClass();

    await seedCharacter();

    process.exit(0);
};

seedAll();
