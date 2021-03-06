/**
 * Tablas de multiplicar con nodejs
 * Por: Claudio Altamiranda
 */

// app.js
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, mostrarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        mostrarArchivo(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.blue }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido!');

}