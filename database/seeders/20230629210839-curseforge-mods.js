'use strict'
const CurseforgeService = require('../services/CurseforgeService.js');
const BASE_URL = "https://www.curseforge.com/minecraft/mc-mods/";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    var params = { gameId: 432, classId: 6, index: 0, pageSize: 10, sortOrder: 'desc', sortField: 3};
  
    const totalMods = await CurseforgeService.totalMods(params);

    const mods = [];

    for (var j = 0; j < 1/*totalMods / params.pageSize*/; j++) {
      params.index = j * params.pageSize;

      const curseforgeMods = await CurseforgeService.getMods(params);

      for (var i = 0; i < curseforgeMods.data.length; i++) {
        const mod = curseforgeMods.data[i];
        const name = mod.name;
        const url = new URL(mod.slug, BASE_URL).href;

        const newMod = {
          name: name,
          url: url,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        mods.push(newMod); 
      }
    }

    return queryInterface.bulkInsert('Mods', mods);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Mods', null, {});
  }
};
