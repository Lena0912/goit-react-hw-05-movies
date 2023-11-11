import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Vortex } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { fetchServiceMovieReviews } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import {
  ReviewsContainer,
  NoReviewsMessage,
  AuthorName,
  ReviewContent,
} from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
    const { movieId } = useParams();
    
    useEffect(() => {
    if (!movieId) return;

    async function fetchMovieReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const reviewsById = await fetchServiceMovieReviews(movieId);
        toast.success('Movies found successfully!');
        if (reviewsById.results && reviewsById.results.length > 0) {
          setMovieReviews(reviewsById.results);
        } else {
          setMovieReviews([]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieReviews();
    }, [movieId]);
    
    return (
    <ReviewsContainer>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <AuthorName>{review.author}</AuthorName>
              <ReviewContent>{review.content}</ReviewContent>
            </li>
          ))
        ) : (
          <NoReviewsMessage>
            We don't have any reviews for this movie.
          </NoReviewsMessage>
        )}
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

        </ReviewsContainer>
  );
};

export default Reviews;