import React from 'react'

const Menu = ({joueur}) => (
    <div id = "menu" className="col-md-3">
        <h3> Bienvenue {joueur.pseudo} </h3>
        <p> Nombre de point : {joueur.points} </p>
      </div>
)

export default Menu