const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    // Buscar todos os devs num raio de 10km
    // Filtrar por tecnologias
    const techs_array = parseStringArray(techs);
    console.log(techs_array)

    const devs = await Dev.find({
      techs: {
        $in: techs_array,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000000,
        },
      },
    })

    console.log(devs)
    return response.json({ devs })
  }
}