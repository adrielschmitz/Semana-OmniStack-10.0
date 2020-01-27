import React, { useState, useEffect } from 'react';

const DevForm = ({ onSubmit }) => {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const resetGithubUsernameTechs = () => {
    setTechs('');
    setGithubUsername('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit(
      {
        github_username,
        techs,
        latitude,
        longitude
      }
    );

    resetGithubUsernameTechs();
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => console.log(err),
      { timeout: 30000 }
    );
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          name="github_username"
          id="github_username"
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          value={techs}
          onChange={e => setTechs(e.target.value)}
          name="techs"
          id="techs"
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            onChange={e => setLatitude(e.target.value)}
            type="number"
            name="latitude"
            id="latitude"
            value={latitude} required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            onChange={e => setLongitude(e.target.value)}
            type="number"
            name="longitude"
            id="longitude"
            value={longitude} required
          />
        </div>
      </div>

      <button type="submit"> Salvar </button>
    </form>
  )
}

export default DevForm;