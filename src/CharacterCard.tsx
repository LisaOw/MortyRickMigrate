import React from 'react';
import { Character } from './CharacterList';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-newGray md:h-48 overflow-hidden rounded-lg shadow-md md:flex">
      <img className="w-full md:w-48" src={character.image} alt={character.name} />
      <div className="flex flex-col px-3 space-y-2 py-3">
        <a href="#" className="block font-bold text-xl 2xl:text-2xl text-white hover:text-orange-500">
          {character.name}
        </a>
        <div className="flex text-white sm:text-xl md:text-base xl:text-lg ">
            {character.status} - {character.species}
        </div>
        <div className="text-gray-400 text-sm">
          <span>Last known location: </span>
          <a href="#" className="block text-white hover:text-orange-500">
            {character.location.name}
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          <span>First seen in: </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
