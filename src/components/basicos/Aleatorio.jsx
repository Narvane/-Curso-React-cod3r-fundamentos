import React from 'react';

export default params =>
    <div>
        <h1>Numero aleatrio</h1>
        <p>Sorteando numero aleatório entre { params.min } e { params.max } : { parseInt(Math.random() * (params.max - params.min)) + params.min }</p>
    </div>