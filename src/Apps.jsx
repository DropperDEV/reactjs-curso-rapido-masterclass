import React from 'react'
import Primeiro from './components/primeiro'
import ComParametro from './components/comParametro'
import Comfilhos from './components/comFilhos'
import Card from './components/Layout/Card'

export default (props) => (
  <div>
    <Card titulo="Primeiro Componente">
      <Primeiro></Primeiro>
    </Card>
    <Card titulo="Conteúdo X"></Card>
    {/*  */}
    {/* <Primeiro />
<ComParametro titulo="Este é o título" subtitulo="Este é o subtítulo" />
<ComParametro titulo="Opa" subtitulo="Epa" /> */}
  </div>
);