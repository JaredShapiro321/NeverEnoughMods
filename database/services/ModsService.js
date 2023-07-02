const CurseForgeService = require('../services/CurseForgeService');
const ModrinthService = require('../services/ModrinthService');

async function mergeModData() {
  const curseForgeService = new CurseForgeService();
  const modrinthService = new ModrinthService();

  const curseForgeMods = await curseForgeService.getMods();
  const modrinthMods = await modrinthService.getMods();

  // Perform merging logic here
  const mergedData = [...curseForgeMods, ...modrinthMods];

  return mergedData;
}

module.exports = {
    mergeModData
}