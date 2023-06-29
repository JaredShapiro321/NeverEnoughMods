'use strict'
const ModrinthService = require('../services/ModrinthService.js');
const BASE_URL = "https://modrinth.com/mod/";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    var params = { facets:[["project_type:mod"]], index: "updated", limit: 100, offset: 0};
  
    const totalMods = await ModrinthService.totalMods();
    console.log(totalMods);


    //console.log(modrinthMods);
    const mods = [];

    for (var j = 0; j < totalMods / params.limit; j++) {
      params.offset = j * params.limit;
      const modrinthMods = await ModrinthService.getMods(params);

      for (var i = 0; i < modrinthMods.hits.length; i++) {
        const mod = modrinthMods.hits[i];
        const name = mod.title;
        const url = new URL(mod.slug, BASE_URL).href;

        const newMod = {
          name: name,
          url: url,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        mods.push(newMod); 
        console.log(name, url);
      }
    }

    return queryInterface.bulkInsert('Mods', mods);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Mods', null, {});
  }
};