import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Vortex } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import { fetchServiceMovieCredits } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import {
  ActorImage,
  CastContainer,
  ActorName,
  ActorCharacter,
} from './Cast.styled';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const defaultImg =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
    useEffect(() => {
    if (!movieId) return;

    async function fetchMovieCredits() {
      try {
        setIsLoading(true);
        setError(false);
        const creditsById = await fetchServiceMovieCredits(movieId);
        toast.success('Movies found successfully!');
        const limitedCredits = creditsById.cast.slice(0, 16);
        setMovieCredits(limitedCredits);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieCredits();
  }, [movieId]);

    return (
    <CastContainer>
      <ul>
        {movieCredits.map(actor => (
          <li key={actor.cast_id}>
            <ActorImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              width={150}
            />
            <ActorName>{actor.name}</ActorName>
            <ActorCharacter>Character: {actor.character}</ActorCharacter>
          </li>
        ))}
           </ul>     
                {isLoading && (
                <ContainerLoader>
                    <Vortex
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    />
                </ContainerLoader>
            )}
  
            {error && <span>Whoops... Error! Please, reload this page!</span>}
      <Toaster position="top-right" />
   </CastContainer>
  );
};

export default Cast;
                
