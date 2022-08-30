import React from 'react';
import { createRoot } from 'react-dom/client';
import { RickAndMorthy } from './RickAndMorthy';

import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <RickAndMorthy/> 
)
