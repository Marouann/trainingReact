import React from 'react'
import ListBoules from './listBoules'

const Jeu = ({boules, addBB, addBR}) => (
    <div id ="game" className="col-md-6">
        <h2 className="text-center"> Aligne trois boules d'une même couleur pour marquer des points </h2>
        <div className="row">
            <div className="col-md-3">
            <button type="button" className="boutonBleu btn btn-success" onClick={addBB}>Ajouter boule Bleu</button>
            </div><div className="col-md-3 mx-auto">
            <button type="button" className="boutonRouge btn btn-success" onClick={addBR}>Ajouter boule Rouge</button>
            </div>
        </div>
          <ListBoules boules={boules}/>
    </div>
)

export default Jeu