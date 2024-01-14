import { useEffect } from 'react';

export const useScrollAndResize = (scrollHandler: () => void, resizeHandler: () => void) => {
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', resizeHandler);

        resizeHandler(); 

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resizeHandler);
        };
    }, [scrollHandler, resizeHandler]);
};
