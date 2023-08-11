import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import './ViewCreator.css'

import ContentCreator from '../../components/ContentCreator/ContentCreator';

const ViewCreator = () => {
    const location = useLocation();
    const { id, name, url, description, image } = location.state;

    return (
        <ContentCreator id={id} name={name} url={url} description={description} image={image} />
    );
}

export default ViewCreator;