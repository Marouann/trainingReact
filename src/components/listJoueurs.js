import React from 'react'

const Joueur = ({joueur}) => (
    <div className="joueur col-md-9">
        {joueur.points} pts : {joueur.pseudo}
      </div>
)

const ListJoueurs = ({joueurs}) => (
    <div id="joueurs" className="col-md-3">
        <h3> Joueurs connectés</h3>
        <ul>
            {joueurs.map((joueur) => (<li><div className="row itemJoeur"><Joueur joueur={joueur} /><div className="bouleVert col-md-3"></div></div></li>))} 
        </ul>
    </div>
)

export default ListJoueurs