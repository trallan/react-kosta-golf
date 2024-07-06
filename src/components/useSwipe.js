import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useSwipe = () => {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const minSwipeDistance = 110; // Adjust for sensitivity

    useEffect(() => {
        const onTouchStart = (e) => {
            setTouchEnd(null); // Reset touch end
            setTouchStart(e.targetTouches[0].clientX);
        };

        const onTouchMove = (e) => {
            setTouchEnd(e.targetTouches[0].clientX);
        };

        const onTouchEnd = () => {
            if (!touchStart || !touchEnd) return;
            const distance = touchStart - touchEnd;
            const isLeftSwipe = distance > minSwipeDistance;
            const isRightSwipe = distance < -minSwipeDistance;

            const applyTransition = (direction, className) => {
                const currentPage = document.querySelector(`.${className}`);
                if (currentPage) {
                    currentPage.classList.add(`${className}-exit${direction}`);
                    currentPage.classList.add(`${className}-exit-active${direction}`);
                    currentPage.addEventListener('transitionend', () => {
                        currentPage.classList.remove(`${className}-exit${direction}`);
                        currentPage.classList.remove(`${className}-exit-active${direction}`);
                    }, { once: true });
                }
            };

            if (isLeftSwipe) {
                if (location.pathname === '/') {
                    applyTransition('', 'home-content');
                    navigate('/members');
                } else if (location.pathname === '/members') {
                    applyTransition('', 'members-content');
                    navigate('/scoreboard');
                }
            } else if (isRightSwipe) {
                if (location.pathname === '/scoreboard') {
                    applyTransition('-back', 'scoreboard-content');
                    navigate('/members');
                } else if (location.pathname === '/members') {
                    applyTransition('-back', 'members-content');
                    navigate('/');
                }
            }
        };

        window.addEventListener('touchstart', onTouchStart);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);

        return () => {
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [touchStart, touchEnd, location, navigate]);

    return null;
};

export default useSwipe;
