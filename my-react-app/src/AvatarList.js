// AvatarList.js
import React, { useState, useEffect } from 'react';
import adorableAvatars from 'adorable-avatars';

const AvatarList = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        // Faz a solicitação à API Adorable Avatars
        const newAvatars = Array.from({ length: 5 }, () => adorableAvatars.generate());
        setAvatars(newAvatars);
      } catch (error) {
        console.error('Erro ao buscar avatares da API:', error);
      }
    };

    fetchAvatars();
  }, []);

  return (
    <div>
      <h1>Lista de Avatares</h1>
      <ul>
        {avatars.map((avatar, index) => (
          <li key={index}>
            <img src={avatar} alt={`Avatar ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvatarList;
