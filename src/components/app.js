import React from 'react'
import Header from './header.js'
import Jeu from './jeu.js'
import Menu from './menu.js'
import ListJoueurs from './listJoueurs'

const App = ({store}) => (
    <div className="container">
        <Header />
        <div className="row">
        <Menu joueur={store.getState().current_player} />
        <Jeu boules={store.getState().boules}
        addBB={() => store.dispatch({type: 'ADD_BOULE', couleur: 'bleu'})}
        addBR={() => store.dispatch({type: 'ADD_BOULE', couleur: 'rouge'})} />
        <ListJoueurs joueurs={store.getState().joueurs} />
        </div>
    </div>
)

export default App