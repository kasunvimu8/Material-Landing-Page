import React, {useLayoutEffect, useState} from 'react';

export const useWindowPosition = (id) => {
    let [showAnimation, setShowAnimation] = useState(false);

    const scrollHandle = () => {
        const offSetHeight = window.document.getElementById(id).offsetHeight;
        const pageYOffSet = window.pageYOffset;

        if (pageYOffSet > offSetHeight * 0.6) {
            setShowAnimation(true);
        } else {
            setShowAnimation(false);
        }
    }
    
    useLayoutEffect(()=> {
        window.addEventListener('scroll', scrollHandle);

        return () => {
            window.removeEventListener('scroll', scrollHandle);
        }
    }, [])

    return showAnimation;
}
