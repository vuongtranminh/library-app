import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';
import './image.scss'
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.logo, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    const classes = cx({
        [className]: className,
    })

    return (
        <img
            className={classes}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    )
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image