import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NotFound = () => {
    const navigate = useNavigate();
    const [secondRemaining, setSecondRemaining] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondRemaining(prevState => prevState - 1);
        }, 1000);

        const countdownTimer = setTimeout(() => {
            clearInterval(timer);
            navigate('/');
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(countdownTimer);
        };
    }, [navigate]);

    return (
        <main style={{ textAlign: 'center' }}>
            <b style={{ fontSize: 64 }}>404</b>
            <p>Sorry, we couldn't find that page :( </p>
            <p>
                You will return to the Home page after {secondRemaining}{' '}
                {secondRemaining === 1 ? 'second' : 'seconds'}
            </p>
        </main>
    );       
};
export default NotFound;