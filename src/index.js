import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/primeiro'
import ComParametro from './components/comParametro'
import Comfilhos from './components/comFilhos'
import Card from './components/Layout/Card'
ReactDOM.render (
    <div>
        <Card titulo="Primeiro Componente"><Primeiro></Primeiro>
        </Card> 
        <Card titulo="Conteúdo X">
        </Card> 
        {/* <Comfilhos>
            <ul>
                <li>James</li>
                <li>Cleber</li>
                <li>Hélio</li>
                <li>Mirella</li>
                <li>Anderson</li>
            </ul>
        </Comfilhos> */}
    {/* <Primeiro />
    <ComParametro titulo="Este é o título" subtitulo="Este é o subtítulo" />
    <ComParametro titulo="Opa" subtitulo="Epa" /> */}
    </div>,
    document.getElementById('root')
)