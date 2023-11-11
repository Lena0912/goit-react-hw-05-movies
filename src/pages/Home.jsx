import { useState, useEffect } from 'react';
import { Vortex } from 'react-loader-spinner';
import { MoviesList } from '../components/MovieList/MovieList';
import { fetchServiceMovies } from '../API';
import { ContainerLoader } from '../components/ContainerLoader/ContainerLoader';

    


const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
        try {
            setIsLoading(true);
            setError(false);
            const movies = await fetchServiceMovies();
            setTrendingMovies(movies.results);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };
    fetchMovies();    
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
        {error && <span>Whoops... Error! Please, reload this page!</span>}
    </main>
            );
        };

export default Home;


