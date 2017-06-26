import { combineReducers } from 'redux'

function ajouterFile(l,couleur){
    var res = [];
    res[0]=couleur;
    var point=0;
    for(var i=1;i<l.length;i++){
        res[i]=l[i-1];
    }
    if (res[0]===res[1] && res[1]===res[2]){
        res[0]="gris"
        res[1]="gris"
        res[2]="gris"
        point=1;
    }
    return {list: res, point: point}
}

function ajouterPointJoueur(joueur,pt){
    return {id: joueur.id, pseudo: joueur.pseudo,points: joueur.points + pt}
}

function ajouterPointJoueurs(joueurs,id,pt){
    var res=[]
    for(var i=0;i<joueurs.length;i++){
        res[i]=joueurs[i]
        if(joueurs[i].id===id){
            res[i].points += pt
        }
    }
    return res
}

const initialState = {
    current_player: {id: 0, pseudo: "Joueur1", points: 0},
    boules: ["gris","gris","gris","gris","gris","gris","gris","gris"],
    joueurs: [{id: 0, pseudo: "Joueur1", points: 0},{id: 1, pseudo: "Joueur2", points: 0}]
}

const boules = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_BOULE':
            var res = ajouterFile(state.boules,action.couleur)
            var l = res.list
            var pt = res.point
            return{
                current_player: ajouterPointJoueur(state.current_player, pt),
                boules: l,
                joueurs: ajouterPointJoueurs(state.joueurs,state.current_player.id,pt)
            }
        default:
            return state
    }
}


export default boules