/**
 * Reducer pour gérer le state de la page À propos
 * Structure identique au listingsReducer pour la cohérence
 * 
 * @param {Object} state - L'état actuel
 * @param {Object} action - L'action à exécuter
 * @returns {Object} Le nouvel état
 */
function aboutReducer(state, action) {
    switch (action.type) {
        // Début du chargement
        case "fetching":
            return { 
                status: "fetching", 
                data: null, 
                error: null 
            }
        
        // Données reçues avec succès
        case "done":
            return { 
                status: "done", 
                data: action.payload, 
                error: null 
            }
        
        // Gestion des erreurs
        case "fail":
            return { 
                status: "fail", 
                data: null, 
                error: action.error 
            }
        
        default:
            throw new Error(`Action inconnue : ${action.type}`)
    }
}

export default aboutReducer;