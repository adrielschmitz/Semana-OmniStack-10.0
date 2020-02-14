const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringArray');
const { findConnections, sendMessage } = require('../websocket')

module.exports = {
  async index(_request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
      const { name = login, avatar_url, bio } = api_response.data;

      const techs_array = parseStringArray(techs);

      // console.log(api_response.data)

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techs_array,
        location
      })

      // Filtrar as connections 
      const send_socket_message_to = findConnections(
        { latitude, longitude },
        techs_array
      );

      sendMessage(send_socket_message_to, 'new_dev', dev);
    }
    return response.json(dev);
  }
};