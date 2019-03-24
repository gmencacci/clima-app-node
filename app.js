const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;



// clima.getClima(argv.direccion)
//     .then(console.log)
//     .catch(console.log);
//argv.direccion



const getInfo = async(dir) => {
    try {
        let coordenadas = await lugar.getLugarLatLng(dir);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${coordenadas.direccion} es de ${temp}`;

    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${dir}`);
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)