import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';


export interface Character {
  name: string;
  image: string;
  url: string;
  status: string;
  species: string;
  id: number;
  location: {
    name: string;
  };
}

interface CharacterListProps {
  className: string;

}

const CharacterList: React.FC<CharacterListProps> = ({ className }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const initialRender = useRef<boolean>(true);

  const fetchCharacters = async (page: number) => {

      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      setCharacters((prev) => [...prev, ...response.data.results]);
      if (!response.data.info.next) setHasMore(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    if (!initialRender.current) {
      fetchCharacters(page);
    } else {
      initialRender.current = false;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, page]);

  return (
    <div className={`grid m-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5`}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
