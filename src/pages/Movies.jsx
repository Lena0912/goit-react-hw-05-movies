import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import { fetchServiceSearchMovie } from 'API';

const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const searchValue = searchParams.get('query') || '';
    
    useEffect(() => {
        if (searchValue === '') {
            return;
        }
        async function fetchMovieBySearchValue() {
            try {
              setIsLoading(true);
        setError(false);
        const searchMovie = await fetchServiceSearchMovie(searchValue);
        if (searchMovie.results.length > 0) {
          toast.success('Movies found successfully!');
          setSearchMovies(searchMovie.results);
        } else {
          toast.error(
            'Ooops...Nothing found. Update the search value, please!'
          );
          setSearchMovies([]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieBySearchValue();
    }, [searchValue]);
    
    const updateSearchParams = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
    };

    return (

    <main>
      <SearchForm onSubmit={updateSearchParams} />
      {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}
   

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
    </main>
  );
};

export default Movies;
        





