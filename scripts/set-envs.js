const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config()
//console.log(process.env) // remove this after you've confirmed it is working
const targetPath='./src/environments/environments.ts';

const envFileContent = `
export const environment = {
  mapbox_key: "${ process.env['MAPBOX_KEY'] }",
  otra: "PROPIEDAD",
};
`;
mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPath,envFileContent)