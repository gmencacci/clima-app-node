
const axios = require('axios');


const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f223bd59e28400b5ed623f017fa6a964`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}