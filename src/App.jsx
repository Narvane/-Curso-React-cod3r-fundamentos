import React from 'react';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';


export default _ =>
    <div className="app">

        <div className="cards">

        <Card titulo="#05 - Componentes com filho" color="#9FE2BF">
            <Familia sobrenome="Andrade">
                <FamiliaMembro nome="Gustavo"/>
                <FamiliaMembro nome="Alex"/>
                <FamiliaMembro nome="Narvane"/>
            </Familia>
        </Card>

        <Card titulo="#04 - Desafio aleatorio" color="#DFFF00">
            <Aleatorio min={1} max={10}/>
        </Card>
        
        <Card titulo="#03 - Fragmento" color="#FFBF00">
            <Fragmento/>
        </Card>

        <Card titulo="#02 - Título" color="#40E0D0">
            <ComParametro titulo="Titulo" subTitulo="Subtitulo" />
        </Card>
        
        <Card titulo="#01 - Primeiro" color="#DE3163">
            <Primeiro></Primeiro>
        </Card>

        </div>
    </div>