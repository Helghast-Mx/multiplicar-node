//requires

const fs = require('fs');
const colors = require('colors');

let data = '';


let listarTabla = (base, limite) => {

    console.log('|-------------------------|'.yellow);
    console.log(`tabla del ${base} al ${limite}`.yellow);
    console.log('|-------------------------|'.yellow);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}\n`);
    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) && !Number(limite)) {
            reject(`Error en la creacion de archivo, la base: '${base}' no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-limite-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${ base }-limite-${limite}.txt`.green)
            }
        });

    })
}
module.exports = {
    crearArchivo,
    listarTabla
}