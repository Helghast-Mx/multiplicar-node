// //requires

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`archivo creado: ${archivo}`))
            .catch((e) => console.log(e));
        break;

    default:

        console.log('Comando no reconocido');


}





// let base = 'absd';

// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]



// let data = '';


// for (let i = 1; i <= 10; i++) {

//     let resultado = base * i;
//     data += `${base} * ${i} = ${resultado}\n`;
// }



// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`tabla-${ base }.txt`);
// });