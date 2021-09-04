import React from 'react'
import './Preloader.css'

const Preloader = ({isLoaderOpen}) => {

    const className = `${isLoaderOpen ? 'preloader' : 'preloader_invisible'}`;

    return (
        <div className={className}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader;
