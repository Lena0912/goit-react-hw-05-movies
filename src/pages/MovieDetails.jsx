import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Vortex } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineArrowBack } from 'react-icons/md';
import { fetchServiceMovieDetails } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import { DetailsOneMovie } from 'components/DetailsOneMovie/DetailsOneMovie';
import { InfoListItem, AdditionalInfo, DescWrapper, BackLink,} from 'components/MovieDetails.styled';



const MovieDetails = () => {
    const [movieDetails, setMoviesDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        if (!movieId) return;

        async function fetchMovieDetails() {
            try {
                setIsLoading(true);
                setError(false);
                const movieById = await fetchServiceMovieDetails(movieId);
                toast.success('Movies found seccessfully!');
                setMoviesDetails(movieById);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMovieDetails();
    }, [movieId]);

    return (
        <main>
            <BackLink to={backLinkLocationRef.current}>
                {' '}
                <MdOutlineArrowBack />
                Go back
            </BackLink>
            <DetailsOneMovie data={movieDetails} />
            <DescWrapper>
                <AdditionalInfo>Additional Information</AdditionalInfo>
                <ul>
                    <InfoListItem>
                        <BackLink to='cast'>Cast</BackLink>
                    </InfoListItem>
                    <InfoListItem>
                        <BackLink to='reviews'>Reviews</BackLink>
                    </InfoListItem>
                </ul>
            </DescWrapper>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
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
            <Toaster position='top-right' />
        </main>
    );
};

export default MovieDetails;