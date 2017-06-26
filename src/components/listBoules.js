import React from 'react'
import Boule from './boule'

const ListBoules = ({boules}) => (
    <div id="boules">
        <div className="mx-auto bouleNext"></div>
        {boules.map( (couleur) => <Boule couleur={couleur} />)}
    </div>
)

export default ListBoules