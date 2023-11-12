import { useState, useEffect } from 'react';
import { Vortex } from 'react-loader-spinner';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { fetchServiceMovies } from 'API';
import { ContainerLoader } from '../components/ContainerLoader/ContainerLoader.styled';

     const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchTrendingMovies() {
            try {
                setIsLoading(true);
                setError(false);
                const movies = await fetchServiceMovies();
                setTrendingMovies(movies.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTrendingMovies();
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            <MoviesList movies={trendingMovies} />

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
            {error && (
                 <div>
    <span>Oops! Something went wrong while fetching movies.</span>
    <span>Please try again later or reload the page.</span>
  </div>
            )}
        </main>
    ); 

        };

export default Home;

