import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import { createStore } from 'redux'
import boules from './reducers/boules'

const initialState = {
    current_player: {id: 0, pseudo: "Joueur1", points: 0},
    boules: ["gris","gris","gris","gris","gris","gris","gris","gris"],
    joueurs: [{id: 0, pseudo: "Joueur1", points: 0},{id: 1, pseudo: "Joueur2", points: 0}]
}


var store = createStore(boules,initialState)


const render = () => ReactDOM.render(<App store={store}/>, document.getElementById('root'))

render()
store.subscribe(render)