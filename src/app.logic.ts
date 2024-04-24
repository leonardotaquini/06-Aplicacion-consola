import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

let outputMessage = '';
const { b:base, s:showTable, l:limit } = yarg;



const headMessage = `
-------------------------------------
Tabla del ${ base }
-------------------------------------
`;


for( let i = 0; i <= limit; i++ ){
    outputMessage += `${ base } x ${ i } = ${ base * i } \n`
}

outputMessage = headMessage + outputMessage;

if( showTable ){
    console.log( outputMessage );
}

const outputPath = `outputs`;
fs.mkdirSync( outputPath, { recursive: true } );
fs.writeFileSync( `outputs/tabla-${ base }.txt`, outputMessage );
